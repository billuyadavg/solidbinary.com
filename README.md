# solidbinary.com

Website for **SolidBinary** — *Build Intelligent. Build Solid.*
Built with Jekyll and hosted on GitHub Pages at https://solidbinary.com.

## Edit common things

| What | Where |
|---|---|
| Booking link, contact form endpoint, LinkedIn | `_config.yml` (top section) |
| Navigation menu | `_data/navigation.yml` |
| Services (one file each) | `_services/*.md` |
| Process steps | `_data/process.yml` |
| Industries | `_data/industries.yml` |
| Pages | `index.html`, `about.html`, `services.html`, `solutions.html`, `industries.html`, `our-approach.html`, `contact.html` |
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
Google Sheet "SolidBinary Website Inquiries". Each submission adds a row to the `Inquiries`
tab and emails the Google account owner (reply goes straight to the sender).
The web app URL is `form_endpoint` in `_config.yml`. If you change the script, use
Deploy → Manage deployments → Edit → New version so the URL stays the same.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```
