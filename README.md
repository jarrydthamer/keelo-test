# KEELO site — v2

Included:
- exact supplied KEELO hero artwork
- six interactive system tiles with detailed subsections
- OWNER corrected to `URBTYE`
- scrolling KEELO ticker
- operational-impact statistic tiles
- KEELO contact form addressed to jarryd@urbyte.com.au
- link back to https://www.urbyte.com.au/
- Acknowledgement of Country
- Terms & Conditions and Privacy pages
- SEO metadata, Open Graph, Twitter card, JSON-LD, robots.txt and sitemap.xml

## Deploy the Keelo site

Recommended URL:
`https://keelo.urbyte.com.au/`

Deploy this repository as the Keelo subdomain at `https://keelo.urbyte.com.au/`.

Do not duplicate the primary Keelo entity surface under `/keelo/` on the Urbyte root domain. Before changing Keelo positioning, SEO, metadata or structured data, read `docs/KEELO-CANONICAL.md`.

Important: the four impact figures are deliberately labelled in the page copy as illustrative. Replace them with verified benchmark/client figures before presenting them as measured claims.

- Industry Applications layer directly under ticker:
  ESG & Sustainability, Evidence & Compliance, Infrastructure & Assets,
  Energy & Utilities, Public Sector, Executive Governance
- Each industry tile includes capabilities, gain and practical benefit
- Cross-industry benefit strip: continuity, provability, control, repeatability, interoperability


## Corrected hero build
- Uses the corrected user-supplied hero image exactly as `keelo-hero.png`.
- No generated/replacement artwork.
- Existing v3 ticker, industry applications, impact, contact and footer are preserved.
- Hero hotspots remain interactive.
- Hero tile borders use a restrained persistent white pulse.
- Full-page vertical scrolling is explicitly preserved.


## Mobile + SEO patch

This package now includes phone-specific overrides in `styles.css` so the 16:9 KEELO system map scales to the device width instead of being cropped to a desktop-sized viewport. Modal, forms, application cards, impact cards, footer and touch targets are also adjusted for small screens.

SEO metadata in `index.html` includes an improved title, crawl directives, Open Graph/Twitter image alt text, and JSON-LD for `Organization`, `WebSite`, `WebPage`, `SoftwareApplication` and breadcrumbs.

### Cross-property discovery
Urbyte links to https://keelo.urbyte.com.au/ and its proofs.html page. KƎƎLO remains an independent Executive Operating System at that subdomain. Its own robots.txt and sitemap.xml describe its own routes. Do not introduce a duplicate /keelo entity surface on Urbyte.

## Canonical positioning and public evidence
Read docs/KEELO-CANONICAL.md before editing. The system-map homepage stays at /. Controlled Proofs & Public Submissions is at /proofs.html. docs/EVIDENCE-REGISTER.md records SHA-256 checksums for the 13 supplied public/redacted PDFs. Historical specifications and companion summaries are not extra completed runs.

No merge or production deployment is authorised by the alignment pull request.
