# The Ebook Publisher (Next.js)

Converted from the PHP site. Every `.php` page is now a route:

| Old | New |
| --- | --- |
| `index.php` | `/` |
| `about-us.php` | `/about-us` |
| `book-writing.php` ... | `/book-writing` ... |

Old `.php` links redirect to the new ones (see `next.config.mjs`).

## Run

```bash
npm install
cp .env.example .env.local   # fill in the SMTP settings
npm run dev
```

## Where things are

- `app/layout.jsx`: `<head>`, stylesheets, header, footer, "Get Started" popup, scripts.
- `app/<page>/page.jsx`: one file per page.
- `components/Header.jsx`, `components/Footer.jsx`, `components/QuoteModal.jsx`: shared parts.
- `components/sections/*.jsx`: sections used on many pages (testimonials, FAQs, CTA, portfolio, counters, process...).
- `components/LegacyScripts.jsx`: loads the original jQuery / GSAP / slick / lozad scripts, in the same order as before.
- `public/assets/js/init.js`: the inline scripts from the old footer (lazy images, phone field, banner shuffle).
- `public/assets/css/theme.css`: **the colour theme** (#248196, #152339, white). Change colours here.
- `app/api/lead/route.js`: every form posts here (was `inc/mail.php`). It emails the lead and opens `/thankyou`.
- `lib/site.js`: phone, email, address.
- `lib/bodyClasses.js`: the `<body class>` of each page (was the switch in `header.php`).
