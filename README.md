# solidbinary.com

Website for **SolidBinary** — *Build Intelligent. Build Solid.*
Built with Jekyll and hosted on GitHub Pages at https://solidbinary.com.

## Edit common things

| What | Where |
|---|---|
| Booking link, contact form endpoint, LinkedIn | `_config.yml` (top section) |
| Assessment starting price | `assessment_price` in `_config.yml` (empty = "Fixed price, agreed after the free call") |
| Analytics (Plausible or GA4) | `analytics` in `_config.yml`; events: `book_call_click`, `inquiry_submitted`, `inquiry_failed` |
| Navigation menu | `_data/navigation.yml` |
| Services (one file each; `stage` = find, build, run or engineering) | `_services/*.md` |
| Process steps | `_data/process.yml` |
| Where we've worked (experience) | `_data/industries.yml` |
| Pages | `index.html`, `about.html`, `services.html`, `solutions.html` (Use cases), `industries.html` (Where we've worked), `our-approach.html` (How we work), `contact.html` |
| Social share image | `assets/img/og-default.png` (1200×630) |
| Colors and fonts | `assets/css/style.css` (`:root` variables) |
| Logo (text wordmark for now) | `_includes/logo.html`, `assets/img/favicon.svg` |

## Add a blog post

Create `_posts/YYYY-MM-DD-title.md`:

```markdown
---
title: Your Post Title
description: One-sentence summary shown on cards and in search results.
---
Your content in Markdown…
```

Commit and push; GitHub Pages rebuilds automatically in about a minute.

## Contact form

The form posts to a Google Apps Script web app ("SolidBinary Contact Form") bound to the
Google Sheet "SolidBinary Website Inquiries". The site reads the script's JSON reply
(`{"ok": true}`), so keep `doPost` returning JSON via `ContentService`, or the form will show an error.
The form also sends a new `source` field ("How did you hear about us?"); add a column for it in the script if you want it saved. Each submission adds a row to the `Inquiries`
tab and emails the Google account owner (reply goes straight to the sender).
The web app URL is `form_endpoint` in `_config.yml`. If you change the script, use
Deploy → Manage deployments → Edit → New version so the URL stays the same.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```
