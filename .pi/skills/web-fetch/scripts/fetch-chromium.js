#!/usr/bin/env node
/**
 * Fetch a JS-rendered page using Chromium headless.
 * Requires chromium on PATH and Node.js.
 */
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const url = process.argv[2];
const savePath = process.argv[3];

if (!url) {
  console.error("Usage: node fetch-chromium.js <url> [save-path]");
  process.exit(1);
}

const chromium = process.env.CHROMIUM_BINARY || "chromium";

// Create a temp file for the output
const tmpFile = path.join(require("os").tmpdir(), `fetch-${Date.now()}.txt`);

// Build a data URL with our extraction script
const extractScript = `
  new Promise((resolve) => {
    function getText(node) {
      if (node.nodeType === Node.TEXT_NODE) return node.textContent.trim();
      if (node.nodeType !== Node.ELEMENT_NODE) return "";
      const tag = node.tagName.toLowerCase();
      if (["script","style","nav","footer","aside","header","noscript"].includes(tag)) return "";
      return Array.from(node.childNodes).map(getText).filter(t => t).join(" ");
    }
    const title = document.title || "";
    const text = getText(document.body);
    resolve({title, text, url: location.href});
  })
`;

const dataUrl = `data:text/html,<!DOCTYPE html><script>
  (async () => {
    try {
      const response = await fetch(${JSON.stringify(url)}, {headers: {"User-Agent":"Mozilla/5.0"}});
      const html = await response.text();
      document.open();
      document.write(html);
      document.close();
      // Wait a bit for any JS to run
      await new Promise(r => setTimeout(r, 3000));
      const result = await (${extractScript});
      const blob = new Blob([JSON.stringify(result, null, 2)], {type: "application/json"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "result.json";
      a.click();
    } catch(e) {
      const blob = new Blob([JSON.stringify({error: e.message}, null, 2)], {type: "application/json"});
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "result.json";
      a.click();
    }
  })();
</script>`;

// Actually, a simpler approach: use chromium with --dump-dom or --print-to-pdf
// Let's use --headless=new with --dump-dom for HTML, then extract text

const child = spawn(chromium, [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--disable-dev-shm-usage",
  "--disable-setuid-sandbox",
  "--disable-features=IsolateOrigins,site-per-process",
  "--disable-web-security",
  "--dump-dom",
  url,
], {
  timeout: 60000,
});

let html = "";
child.stdout.on("data", (data) => {
  html += data.toString();
});

let stderr = "";
child.stderr.on("data", (data) => {
  stderr += data.toString();
});

child.on("close", (code) => {
  if (code !== 0 && !html) {
    console.error("Chromium failed:", stderr.slice(0, 500));
    process.exit(1);
  }

  // Simple HTML-to-text extraction
  const text = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\n\s*\n+/g, "\n\n")
    .trim();

  const output = `# Source: ${url}\n\n${text}\n`;

  if (savePath) {
    fs.writeFileSync(savePath, output, "utf8");
    console.log(`Saved to: ${savePath}`);
  } else {
    console.log(output);
  }
});
