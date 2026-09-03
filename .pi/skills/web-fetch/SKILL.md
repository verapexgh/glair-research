---
name: web-fetch
description: >
  Fetch, render, and extract clean article text from any URL using Playwright
  headless browser. Renders JavaScript, waits for page load, extracts main
  content with headings. Use when the user provides URLs and wants content
  extracted, summarized, or incorporated into documents. This skill does NOT
  search the web or discover URLs — it only fetches URLs the user explicitly
  provides.
---

# Web Fetch Skill

## What This Can Do
- **Render JavaScript-heavy pages** using Playwright headless Chromium
- **Wait for page load** (`networkidle` strategy) so dynamic content appears
- **Extract main article content** automatically (tries `article`, `main`, `.content`, etc.)
- **Preserve heading structure** (h1, h2, h3) for easy skimming
- **Strip noise** — removes nav, footer, ads, scripts, styles, sidebars
- **Save to markdown** for incorporation into reports and dashboards

## What This Still Cannot Do
- ❌ Search Google, Bing, or any search engine
- ❌ Discover or guess URLs (you must provide them)
- ❌ Access paywalled content that requires login
- ❌ Click buttons, fill forms, or navigate after initial load
- ❌ Bypass Cloudflare or aggressive bot protection on some sites

## Requirements
- Node.js (already installed)
- Playwright + Chromium (already installed in this skill directory)
- No API keys needed for basic fetching

## The Main Tool: Playwright Fetch

```bash
cd /home/keith/Projects/GLAIR/.pi/skills/web-fetch
node scripts/fetch-playwright.js "https://URL-HERE" [/path/to/save.md]
```

Without save path: prints clean markdown to stdout.  
With save path: saves to file, prints confirmation.

## Fallback: Simple Python Fetch (no JS rendering)

For static pages where you don't need JS:

```bash
python3 scripts/fetch.py "https://URL-HERE" --save /path/to/file.md
```

## Fallback: Raw Chromium (no Playwright)

If Playwright has issues:

```bash
node scripts/fetch-chromium.js "https://URL-HERE" /path/to/file.md
```

## Workflow for Research

1. **You find an article/blog post/spec page** while browsing
2. **Paste the URL** into the chat
3. **I fetch it** with `fetch-playwright.js`
4. **I read the content** and extract relevant claims
5. **I update** the appropriate project file and/or dashboard
6. **I push** the update to the GitHub Pages site

## Example Output Format

```markdown
# Page Title

**Source:** https://example.com/article
**Word count:** ~1,247

## Headings

- Overview
- Key Findings
  - Sub-finding A
  - Sub-finding B
- Conclusion

## Content

[Clean article text with nav/ads stripped...]
```

## Rate Limits & Politeness

This tool is designed for occasional research use (a few URLs per session).  
Do not use it to scrape hundreds of pages — that would be rude to site operators and might get the IP blocked.
