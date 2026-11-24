# SolidBinary — Website Design Document

**Site:** https://solidbinary.com
**Repository:** github.com/billuyadavg/solidbinary.com
**Tagline:** Build Intelligent. Build Solid.
**Last updated:** 24 November 2026

---

## 1. Purpose

SolidBinary.com is the public website for SolidBinary, an AI-first technology consulting and product engineering company. The site's single business goal is to **turn visitors into qualified project inquiries** from startups, SMEs and enterprises in India and international markets.

Every page should answer, in order:

1. **Who we are:** an AI-first technology consulting and product engineering company.
2. **What we do:** build software products, implement Agentic AI and automate business operations.
3. **Who we serve:** startups, SMEs and enterprises.
4. **How we work:** consulting, engineering, implementation and ongoing partnership.
5. **Why us:** we build and implement complete solutions, not just recommendations.
6. **What to do next:** submit a project inquiry or book a call.

## 2. Audience and positioning

| Segment | What they need from the site |
|---|---|
| Startups and founders | Confidence we can take an idea to MVP and a scalable product |
| Small and medium businesses | Practical automation and AI that reduce manual work |
| Enterprises | Evidence of engineering depth, integration and security thinking |

**Positioning:** a premium, engineering-led, AI-first partner. We present as a global technology company, not a generic IT services shop.

**Primary differentiator:** Agentic AI, with product engineering kept equally prominent.

## 3. Brand voice and messaging

**Voice:** clear, confident, intelligent. Business outcomes before technology. No hype, and no invented results.

| Placement | Message |
|---|---|
| Main tagline | Build Intelligent. Build Solid. |
| Homepage headline | We Build Intelligence Into Your Business. |
| Supporting message | AI-powered products, intelligent workflows, and custom software engineered for growth. |
| About statement | Your Partner in AI and Product Engineering. |
| Sales message | From Business Challenges to Intelligent Solutions. |
| Primary CTA | Discuss Your Project / Let's Build Something Intelligent. |

**Honesty rules:**
- Never publish invented clients, testimonials or statistics.
- Industries are framed as sectors we are *equipped to serve*, not past clients.
- Case studies are added only for real, permitted projects. Demos are labelled as demos.

## 4. Visual design system

### 4.1 Direction

A dark, premium technology aesthetic: navy backgrounds, restrained electric-blue and cyan accents, large confident type, generous spacing, subtle motion. No neon overload, 3D clutter, robot imagery or stock photos.

### 4.2 Color tokens

Defined as CSS custom properties in `assets/css/style.css` (`:root`).

| Token | Value | Use |
|---|---|---|
| `--navy-900` | `#070C18` | Footer background |
| `--navy-800` | `#0B1220` | Page background, form inputs |
| `--navy-700` | `#101A2E` | Alternate section background |
| `--navy-600` | `#14243D` | Cards, panels |
| `--line` | `#22324F` | Borders, dividers |
| `--blue` | `#3978F6` | Primary buttons, emphasis |
| `--cyan` | `#42C8E8` | Accent, links, eyebrow labels |
| `--logo-square` | `#60A5FA` | Logo: square "i" dot in *solid* |
| `--logo-ring` | `#FB923C` | Logo: ring "i" dot in *binary* |
| `--white` | `#F7F9FC` | Headings, high-emphasis text |
| `--text` | `#D7DEEA` | Body text |
| `--muted` | `#A3AFC2` | Secondary text |

Body and muted text are chosen to meet WCAG AA contrast (4.5:1) on navy backgrounds.

### 4.3 Typography

| Role | Font | Weights |
|---|---|---|
| Headings, buttons, logo wordmark | **Manrope** | 500–800 |
| Body, UI | **Inter** | 400–600 |

Both load from Google Fonts. Type scale is fluid with `clamp()`:

| Element | Size |
|---|---|
| H1 (home hero) | `clamp(2.3rem, 5.2vw, 4.2rem)`, weight 800 |
| H1 (inner pages) | `clamp(2rem, 4.4vw, 3.4rem)` |
| H2 | `clamp(1.6rem, 3vw, 2.4rem)`, weight 800 |
| H3 | `1.2rem`, weight 700 |
| Lead paragraph | `clamp(1.08rem, 1.6vw, 1.3rem)` |
| Body | `17px` (16px on mobile), line-height 1.65 |
| Eyebrow label | `0.8rem`, uppercase, letter-spacing 0.14em, cyan |

Headings use tight letter-spacing (`-0.02em`).

### 4.4 Layout and spacing

- Container max width **1200px**, 24px side padding; a narrow variant at 820px for reading pages.
- Section padding **88px** vertical on desktop, 64px on mobile.
- Grids: 2 and 3 columns with a 20px gap; split layouts at 5:6 columns.
- Radius: **16px** cards, **10px** small elements, **24px** CTA band, pill buttons.

### 4.5 Logo

**Chosen logo: K · Dot Wordmark (typography only).**

- Lowercase **solidbinary** set in Manrope: "solid" at weight 800 and "binary" at weight 500, letter-spacing −0.035em.
- The idea is in the two "i" dots: the dot in *solid* is a **solid square** (blue `#60A5FA`) and the dot in *binary* is a **ring**, a binary "0" (orange `#FB923C`).
- On dark backgrounds the letters are `#F7F9FC`. On light backgrounds use ink `#101828` with blue `#2563EB` and orange `#F97316` dots.
- Built in HTML/CSS (`_includes/logo.html`, `.wordmark` styles in `style.css`) using dotless "ı" characters with positioned dots. Screen readers get "SolidBinary" via `.sr-only` text.
- **App icon / favicon:** a blue square next to an orange ring on a navy tile (`assets/img/favicon.svg`).
- Minimum size: about 18px font size, so the dots stay distinct.
- The other concepts remain on the SolidBinary Logo design board for reference.

### 4.6 Components

| Component | Description |
|---|---|
| Header | Sticky, translucent navy with blur; nav links plus a "Discuss Your Project" primary button; hamburger menu below 960px |
| Hero | Large headline, lead text, two CTAs, focus pills, faint grid background with a cyan glow |
| Page hero | Eyebrow, H1 and lead with a soft blue radial gradient |
| Buttons | `btn-primary` (solid blue), `btn-ghost` (outline), 48px minimum height, pill shape |
| Card / card-link | Navy panel with border; links lift 3px on hover |
| Service card | Icon tile, index number ("01"), title and summary |
| Check list | Custom cyan check marks; a large variant for outcome lists |
| Steps / process | Numbered process blocks (6 steps) |
| Solution table | Challenge → solution table, horizontally scrollable on small screens |
| CTA band | Gradient panel with heading, text and actions; on every page |
| Inquiry form | Two-column grid, labelled inputs with a cyan focus ring, honeypot spam field, inline thank-you state |
| Footer | Brand, services, company and contact columns; legal links |

Icons are inline stroke SVGs (`_includes/icon.html`), 24px, using `currentColor`.

### 4.7 Motion

- Cards, service rows, process steps and CTA bands fade and rise into view on scroll (IntersectionObserver).
- Hover lifts on cards and buttons (150–180ms).
- All motion is disabled under `prefers-reduced-motion`.

## 5. Information architecture

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Positioning, services overview, outcomes, audiences, process, why us, latest insights |
| About | `/about/` | Who we are, mission, vision, beliefs |
| Services | `/services/` | All 7 services with capabilities |
| Service detail ×7 | `/services/<name>/` | One page per service: description, capabilities, related services |
| Solutions | `/solutions/` | Business challenge → solution table and categories |
| Industries | `/industries/` | 8 sectors we can serve |
| Our Approach | `/our-approach/` | 6-step process and engagement models (`#engagement`) |
| Insights | `/insights/` | Blog index; posts at `/insights/YYYY/MM/title/` |
| Contact | `/contact/` | Inquiry form, booking link, what happens next |
| Privacy / Terms | `/privacy/`, `/terms/` | Legal summaries |
| 404 | `/404.html` | Not-found page |

**Services (in order):** Agentic AI & Intelligent Systems · Custom Software Development · SaaS & Product Engineering · Business Process Automation · AI Consulting & Strategy · Cloud & Technology Engineering · Dedicated Development Teams.

**Navigation:** Home, About, Services, Solutions, Industries, Our Approach, Insights, Contact, plus a "Discuss Your Project" button.

## 6. Conversion design

- **Primary CTA everywhere:** "Discuss Your Project" → `/contact/`.
- **Secondary CTA:** "Book a call" → Google Calendar booking page (shown only when `booking_url` is set).
- Service pages link to the contact page with `?service=<name>`, which preselects the service in the form.
- Every page ends with a CTA band.

## 7. Technical architecture

| Layer | Choice |
|---|---|
| Generator | Jekyll (GitHub Pages native build) |
| Hosting | GitHub Pages, custom domain, HTTPS enforced |
| DNS | GoDaddy: 4 A records for `@` → `185.199.108–111.153`, CNAME `www` → `billuyadavg.github.io` |
| Plugins | `jekyll-seo-tag`, `jekyll-sitemap`, `jekyll-feed` |
| JavaScript | One small vanilla file (`assets/js/main.js`): mobile menu, service preselect, form submit, scroll reveal |
| Cache busting | CSS/JS URLs carry `?v=<build timestamp>` |

### 7.1 Content model

| Content | Location |
|---|---|
| Site settings (booking link, form endpoint, LinkedIn) | `_config.yml` |
| Navigation | `_data/navigation.yml` |
| Process steps | `_data/process.yml` |
| Industries | `_data/industries.yml` |
| Services (collection) | `_services/*.md`: front matter `title`, `short_title`, `order`, `icon`, `summary`, `description`, `capabilities` |
| Blog posts | `_posts/YYYY-MM-DD-slug.md`: `title`, `description` |
| Layouts | `_layouts/default.html`, `page.html`, `service.html`, `post.html` |
| Partials | `_includes/header.html`, `footer.html`, `cta.html`, `logo.html`, `icon.html` |

### 7.2 Integrations

**Contact form → Google Sheet + email**

```
Visitor submits form on /contact/
        │  fetch POST (no-cors, form-encoded)
        ▼
Google Apps Script web app ("SolidBinary Contact Form", runs as owner)
        ├─► appends row to "SolidBinary Website Inquiries" › Inquiries tab
        └─► emails the owner's Gmail (reply-to = visitor)
```

- Columns: Timestamp, Name, Email, Company, Country, Service, Budget, Timeline, Message, Page.
- Protection: a honeypot field (`_gotcha`), required-field check, a lock against concurrent writes, and formula-injection escaping.
- Limit: about 100 notification emails per day (Google quota); rows are always saved even if email fails.
- Endpoint: `form_endpoint` in `_config.yml`. Update the script via **Deploy → Manage deployments → Edit → New version** to keep the same URL.

**Booking:** Google Calendar appointment schedule "SolidBinary Business Discussion": 30 min, weekdays 9:00–17:00 IST, Google Meet, busy times blocked. URL: `booking_url` in `_config.yml`.

The site shows no public email address by design.

## 8. SEO

- Unique title and meta description per page via front matter and `jekyll-seo-tag`; Open Graph tags included.
- Organization JSON-LD in the default layout.
- `sitemap.xml`, `robots.txt` and an RSS feed at `/insights/feed.xml`.
- Each service has its own keyword-targeted page (e.g. "Agentic AI development services", "custom software development company").
- Homepage title: *SolidBinary | Agentic AI, Software Development & Automation*.

## 9. Accessibility

- Skip-to-content link; semantic landmarks (`header`, `nav`, `main`, `footer`).
- Visible `:focus-visible` outline in cyan.
- Touch targets ≥ 44px; real `<button>`, `<a>` and labelled form controls.
- Decorative SVGs are `aria-hidden`; the menu toggle exposes `aria-expanded` and `aria-label`.
- Form status uses `role="status"` / `aria-live`.
- Text contrast meets WCAG AA; reduced-motion respected.

## 10. Responsive behaviour

| Breakpoint | Changes |
|---|---|
| ≤ 1080px | Process steps 3 per row; footer 2 columns |
| ≤ 960px | Hamburger menu; split layouts stack; 3-column grids become 2 |
| ≤ 640px | Single-column grids and form; full-width CTA buttons; reduced section padding |

## 11. Editing workflow

1. Edit files on GitHub or locally (`bundle exec jekyll serve` to preview).
2. Commit to `main`; GitHub Pages rebuilds in about a minute.
3. New blog post: add `_posts/YYYY-MM-DD-title.md` with `title` and `description`.
4. New service: add `_services/<name>.md` with the front matter fields above and an `order`.

## 12. Open items

| Item | Status |
|---|---|
| Projects & Capabilities page | Add once real demos or client projects can be shown |
| Remaining starter articles | 1 of 12 planned articles published |
| Company LinkedIn | Add URL to `linkedin_url` in `_config.yml` |
| Analytics | Add Google Analytics 4 / Search Console if wanted |
| Legal review | Privacy and Terms are general summaries; review for your jurisdiction |
| Domain auto-renew | Turn on in GoDaddy |
