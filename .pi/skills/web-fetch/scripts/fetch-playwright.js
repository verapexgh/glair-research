#!/usr/bin/env node
/**
 * Fetch and extract clean article text from any URL using Playwright.
 * Renders JavaScript, waits for page load, extracts main content.
 */
const { chromium } = require("playwright");
const fs = require("fs");

const url = process.argv[2];
const savePath = process.argv[3];

if (!url) {
  console.error("Usage: node fetch-playwright.js <url> [save-path]");
  process.exit(1);
}

async function fetchPage(targetUrl) {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  try {
    await page.goto(targetUrl, { waitUntil: "networkidle", timeout: 30000 });

    // Try to extract main article content first
    const result = await page.evaluate(() => {
      // Helper: get readable text from an element
      function getText(el) {
        if (!el) return "";
        // Clone to avoid modifying DOM
        const clone = el.cloneNode(true);
        // Remove script/style/nav/footer/aside/header/noscript tags
        const removeTags = ["script", "style", "nav", "footer", "aside", "header", "noscript", "iframe", "svg", "form", "button"];
        removeTags.forEach(tag => {
          clone.querySelectorAll(tag).forEach(n => n.remove());
        });
        // Get text
        let text = clone.innerText || "";
        // Clean up whitespace
        return text
          .replace(/\n[ \t]*\n[ \t]*\n+/g, "\n\n")
          .replace(/[ \t]+/g, " ")
          .trim();
      }

      const title = document.title || "";
      const canonical = document.querySelector('link[rel="canonical"]')?.href || location.href;

      // Try to find the main content area
      let contentEl = null;
      const candidates = [
        "article",
        "[role='main']",
        "main",
        ".post-content",
        ".entry-content",
        ".article-content",
        ".content",
        "#content",
        ".prose",
        ".markdown-body",
      ];
      for (const sel of candidates) {
        const el = document.querySelector(sel);
        if (el && el.innerText.length > 500) {
          contentEl = el;
          break;
        }
      }

      // If no good candidate, use body but try to exclude obvious non-content
      if (!contentEl) {
        contentEl = document.body;
      }

      // Extract all headings for structure
      const headings = [];
      document.querySelectorAll("h1, h2, h3").forEach(h => {
        const text = h.innerText.trim();
        if (text && text.length < 200) {
          headings.push({ level: parseInt(h.tagName[1]), text });
        }
      });

      return {
        title,
        url: canonical,
        text: getText(contentEl),
        headings,
        wordCount: (getText(contentEl).match(/\S+/g) || []).length,
      };
    });

    await browser.close();
    return result;

  } catch (err) {
    await browser.close();
    throw err;
  }
}

fetchPage(url)
  .then(result => {
    let output = `# ${result.title}\n\n`;
    output += `**Source:** ${result.url}\n`;
    output += `**Word count:** ~${result.wordCount}\n\n`;

    if (result.headings.length > 0) {
      output += `## Headings\n\n`;
      result.headings.forEach(h => {
        const prefix = "  ".repeat(h.level - 1);
        output += `${prefix}- ${h.text}\n`;
      });
      output += `\n`;
    }

    output += `## Content\n\n${result.text}\n`;

    if (savePath) {
      fs.writeFileSync(savePath, output, "utf8");
      console.log(`Saved to: ${savePath}`);
    } else {
      console.log(output);
    }
  })
  .catch(err => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  });
