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

## Deploy under the Urbtye website

Recommended URL:
`https://www.urbyte.com.au/keelo`

Upload this folder as the `/keelo` route/directory in the existing Urbtye web project. If the main website is React/Next/Vite rather than static HTML, port the section markup/CSS into that project instead of iframe embedding it.

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

### Important parent-site changes

To help Google discover KEELO as part of Urbtye and potentially surface it as a sitelink, add a normal crawlable link from the Urbtye homepage or primary navigation to `/keelo`. A ready-to-paste example is included in `URBTYE-HOMEPAGE-KEELO-BUTTON.html`.

`robots.txt` must be deployed at `https://www.urbyte.com.au/robots.txt` to control the whole site. Merge its sitemap directive into the existing root robots file rather than relying on `/keelo/robots.txt`.

Likewise, merge the KEELO URL into the main root sitemap served at `https://www.urbyte.com.au/sitemap.xml`. Google chooses sitelinks algorithmically, so markup cannot force a KEELO sitelink; clear internal navigation, indexing, canonical URLs and sitemap inclusion make it easier for Google to understand the relationship.
