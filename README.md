# Amsaveni Traders — Website

A modern, 3D-accented, single-page website for **Amsaveni Traders**, an agricultural
commission shop in Virudhunagar, Tamil Nadu. Built with plain HTML/CSS/JS plus
Three.js (hero 3D grain field), GSAP + ScrollTrigger (scroll reveals), and
Swiper.js (featured product carousel).

## Project structure

```
amsaveni-traders/
├── index.html            All page sections: Home, About, Founder, Products,
│                          Services, Gallery, Contact, Footer
├── css/
│   └── style.css          Full design system (tokens, layout, responsive rules)
├── js/
│   └── script.js          Product/service/gallery data + rendering, nav behaviour,
│                          3D hero (Three.js), scroll reveals (GSAP), Swiper init,
│                          lightbox, contact form → WhatsApp handoff
├── assets/
│   └── images/
│       └── owner.jpg      Founder / proprietor photo
└── README.md
```

## Running locally

Browsers block some features (like the map iframe and module-style fetches) when
opening `index.html` directly via `file://`, and the CDN libraries need an
internet connection. The simplest reliable way to preview it:

```bash
cd amsaveni-traders
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use the VS Code "Live Server" extension, or any static file server.

## Deploying

This is a fully static site — no build step, no backend. You can drag-and-drop
the whole `amsaveni-traders` folder into any static host:

- **Netlify / Vercel** — drag the folder onto the dashboard, or connect a Git repo.
- **GitHub Pages** — push this folder to a repo and enable Pages on the `main` branch.
- **Any shared hosting (cPanel, etc.)** — upload the folder contents to `public_html`.

Just make sure the folder structure (`css/`, `js/`, `assets/images/`) stays intact,
since `index.html` references those relative paths.

## Editing content

- **Products** — edit the `PRODUCTS` array near the top of `js/script.js`
  (name, category, colour, description). Cards, filters, and the carousel are
  all generated automatically from this array.
- **Services** — edit the `SERVICES` array in the same file.
- **Gallery** — edit the `GALLERY` array (each entry is a small illustrated SVG
  scene generated in code, so there are no external image dependencies).
- **Contact details / phone number** — search `js/script.js` and `index.html`
  for `919942138145` and replace with the correct WhatsApp/phone number
  everywhere it appears (nav button, floating WhatsApp button, contact section,
  footer, and the form's WhatsApp handoff link).
- **Founder photo** — replace `assets/images/owner.jpg` with a new image of the
  same filename, or update the `src` in the Founder section of `index.html`.

## Swapping in real product/gallery photography

Product and gallery visuals are currently custom SVG illustrations in the
brand's forest-green/gold palette (built this way to avoid using
unlicensed stock photography). To use real photos instead:

1. Drop your images into `assets/images/products/` or `assets/images/gallery/`.
2. In `js/script.js`, replace the `iconFor(...)` call inside `buildProducts()`
   (or the inline `<svg>` markup in `buildGallery()`) with an `<img src="...">`
   tag pointing at your file.

## Notes on structure

This is delivered as a single scrolling page with anchor navigation (Home,
About, Products, Services, Gallery, Contact all link to sections within
`index.html`) rather than six separate HTML files. This is the standard,
faster-loading approach for a business site of this size. If you'd prefer true
multi-page navigation (separate `.html` files per section, sharing the same
header/footer/assets), that's a straightforward follow-up — just ask.
