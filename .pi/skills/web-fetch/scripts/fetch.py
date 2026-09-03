#!/usr/bin/env python3
"""
Fetch a web page and extract readable text using only Python built-ins.
No external dependencies required.
"""
import sys
import urllib.request
import urllib.error
import urllib.parse
from html.parser import HTMLParser
import argparse


class TextExtractor(HTMLParser):
    def __init__(self):
        super().__init__()
        self.text_parts = []
        self.skip_tags = {"script", "style", "nav", "footer", "aside", "header"}
        self.skip_depth = 0
        self.last_was_text = False

    def handle_starttag(self, tag, attrs):
        if tag in self.skip_tags:
            self.skip_depth += 1
        elif tag in ("br", "p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "tr", "td", "th"):
            self.text_parts.append("\n")
            self.last_was_text = False
        elif tag in ("a",):
            attrs_dict = dict(attrs)
            if "href" in attrs_dict:
                self.text_parts.append(f" [{attrs_dict['href']}] ")

    def handle_endtag(self, tag):
        if tag in self.skip_tags:
            self.skip_depth -= 1
        elif tag in ("p", "div", "h1", "h2", "h3", "h4", "h5", "h6", "li", "tr", "td", "th"):
            self.text_parts.append("\n")
            self.last_was_text = False

    def handle_data(self, data):
        if self.skip_depth > 0:
            return
        text = data.strip()
        if text:
            if self.last_was_text:
                self.text_parts.append(" ")
            self.text_parts.append(text)
            self.last_was_text = True

    def get_text(self):
        text = "".join(self.text_parts)
        # Collapse multiple newlines
        lines = text.split("\n")
        cleaned = []
        prev_blank = False
        for line in lines:
            stripped = line.strip()
            if stripped:
                cleaned.append(stripped)
                prev_blank = False
            elif not prev_blank:
                cleaned.append("")
                prev_blank = True
        return "\n".join(cleaned)


def fetch_text(url, timeout=30):
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        html = response.read().decode(charset, errors="replace")

    extractor = TextExtractor()
    extractor.feed(html)
    return extractor.get_text(), response.geturl()


def main():
    parser = argparse.ArgumentParser(description="Fetch a web page and extract text")
    parser.add_argument("url", help="URL to fetch")
    parser.add_argument("--save", "-s", help="Save output to file")
    parser.add_argument("--timeout", "-t", type=int, default=30, help="Request timeout in seconds")
    args = parser.parse_args()

    try:
        text, final_url = fetch_text(args.url, args.timeout)
        output = f"# Source: {final_url}\n\n{text}\n"
        if args.save:
            with open(args.save, "w", encoding="utf-8") as f:
                f.write(output)
            print(f"Saved to: {args.save}")
        else:
            print(output)
    except urllib.error.HTTPError as e:
        print(f"HTTP Error {e.code}: {e.reason}", file=sys.stderr)
        sys.exit(1)
    except urllib.error.URLError as e:
        print(f"URL Error: {e.reason}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"Error: {e}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
