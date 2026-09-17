# Loza Optique V9 — technical cleanup

Implemented in this test build:

- UTF-8 metadata fix and stronger page-specific SEO metadata.
- Canonical URLs, Open Graph/Twitter metadata and favicon declarations.
- `sitemap.xml` and `robots.txt` via Next metadata routes.
- Schema.org `Optician` + `LocalBusiness` structured data.
- Legacy `/products/<slug>/` pages now route visitors to `/produits/<slug>/` and declare the new canonical instead of returning 404 for known products.
- `public/_redirects` included for hosts that support redirect files. GitHub Pages does not apply this file; use a Cloudflare Redirect Rule for a true HTTP 301 if needed.
- Homepage claim changed from “Sélection multimarque” to “Sélection choisie” because the current visible catalogue is Persol-only.
- Appointment form now prepares a WhatsApp message, with phone and email fallbacks. No API key or external form backend is required.
- Try-on privacy copy expanded to explain local camera processing, screenshot behavior and third-party runtime/model delivery.
- Try-on iframe `postMessage` target restricted to same origin.
- Large navigation logo and oversized accessory images recompressed for the static export.
- Image elements use async decoding and high fetch priority for eager images.

## Deployment note

For the strongest cleanup of Google's old `/products/*` URLs, create an HTTP 301 redirect at the edge (Cloudflare) from:

`https://lozaoptique.com/products/*` → `https://lozaoptique.com/produits/$1`

Then submit the generated sitemap in Google Search Console and request recrawling of important pages.

## V9.1 — feedback fixes

- Restored the clean footer layout without the added contact strip.
- Header and footer Loza logos link directly to the home page.
- Added a clearly clickable hero CTA: `Try-on Demo · Exclusif au Maroc`, linked to `/essayage#demo`.
- Friday is rejected immediately in the appointment date field; the selected Friday is cleared and a clear message is shown.
- Appointment/contact wording simplified to remove clutter and make the WhatsApp action explicit.
- Try-on demo status copy aligned with the hero CTA.

