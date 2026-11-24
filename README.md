# solidbinary.com

Website for **SolidBinary** — *Build Intelligent. Build Solid.*
Built with Jekyll and hosted on GitHub Pages at https://solidbinary.com.

## Edit common things

| What | Where |
|---|---|
| Email, booking link, Formspree form, LinkedIn | `_config.yml` (top section) |
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

## Turn on the contact form

1. Create a free form at https://formspree.io using the email that should receive inquiries.
2. Copy the form ID (the part after `https://formspree.io/f/`).
3. Put it in `_config.yml` as `formspree_id: "abcdwxyz"`.

## Preview locally (optional)

```bash
bundle install
bundle exec jekyll serve
# open http://localhost:4000
```
