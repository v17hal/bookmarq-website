# BookmarQ — Website

A standalone marketing + legal site for BookmarQ. Plain HTML/CSS/JS — no build
step, no dependencies. Fonts load from Google Fonts CDN.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Animated landing page (hero, features, reward tiers, how-it-works, CTA) |
| `privacy.html` | Privacy Policy (**required** by Google Play) |
| `terms.html` | Terms of Service |
| `delete-account.html` | Account/data deletion route (**required** by Google Play) |
| `support.html` | Contact & support |
| `styles.css` | Shared brand styles (navy/saffron/green/gold, Lobster Two title font) |
| `main.js` | Scroll-reveal animations + hero particles + book parallax |
| `assets/` | Logo image |

## Preview locally
Just open `index.html` in a browser (double-click). Everything works offline
except the web fonts (which need internet).

## ⚠️ Before you publish — fill these placeholders
Search all `.html` files for `[INSERT ...]` and replace:
- `[INSERT DATE]` — the effective date of the policy/terms
- `[INSERT YOUR CONTACT EMAIL]` — a monitored support/privacy email
- `[INSERT JURISDICTION]` — governing law region in `terms.html` (e.g. India)

Have the Privacy Policy and Terms reviewed for your jurisdiction — these drafts
are a starting point, not legal advice.

## Deploy (pick one — all free)
- **GitHub Pages:** push this folder to a repo → Settings → Pages → deploy from
  the folder. You get a public URL.
- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop this folder.
- **Firebase Hosting:** `firebase init hosting` (public dir = this folder) →
  `firebase deploy --only hosting`.

Once live, add these URLs in the Google Play Console:
- **Privacy policy URL** → your `.../privacy.html`
- **App content → Data deletion** → your `.../delete-account.html`

## Notes
- The hero uses a pure CSS/SVG 3D-style animated book scene (no external art).
  If you later have real 3D character renders, drop them into `assets/` and I can
  wire them into the hero.
- The "Download for Android" buttons link to `#` — point them at your Play Store
  listing once it's live.
