# AppForge Labs — appforgelabs.ca

Marketing landing page for **AppForge Labs** and its first app, **BoardGameSelector**.
It's a plain static site (HTML + CSS + vanilla JS) with no build step and no dependencies.

```
index.html        Single-page site (English text is the default markup)
styles.css        Styles; light/dark follow the visitor's OS setting
i18n.js           EN/FR translations, language toggle, scroll animations
404.html          Branded "page not found"
assets/           Logo, app icon, social preview image, screenshots (assets/screens/*.webp)
CNAME             Custom domain for GitHub Pages (appforgelabs.ca)
.nojekyll         Tells GitHub Pages to serve files as-is
robots.txt, sitemap.xml
```

## Preview locally

```sh
python3 -m http.server 8080
# open http://localhost:8080   (add ?lang=fr to force French)
```

## Editing content

- **Text**: every visible string is in `i18n.js` under `TRANSLATIONS.en` and `TRANSLATIONS.fr`.
  Update both languages. The English text in `index.html` is only the no-JS fallback,
  so keep it in sync too.
- **Screenshots**: replace files in `assets/screens/` (720×1600 WebP). To capture from the
  Android emulator: `adb exec-out screencap -p > shot.png`, then
  `cwebp -q 82 -resize 720 1600 shot.png -o assets/screens/name.webp`.
- **Adding a new app**: copy the BoardGameSelector `<article class="app-card">` in the
  `#apps` section, add its texts to both languages in `i18n.js`, and drop its icon in `assets/`.
- **When BoardGameSelector launches**: change the `.store-badge` `<span>` in the CTA band
  into a link to `https://play.google.com/store/apps/details?id=com.boardgameselector`,
  and change the `apps.soon` / `cta.*` texts.

---

## Publishing on appforgelabs.ca (GitHub Pages + GoDaddy DNS)

GoDaddy keeps the domain, and **GitHub Pages** hosts the site for free with automatic HTTPS.
You only change DNS records at GoDaddy, so you don't need a GoDaddy hosting plan.

### Step 1 — Put the site on GitHub

1. On GitHub, create a new repository, for example `appforgelabs-website`.
   Make it **Public** (free GitHub accounts can only use Pages on public repos).
   Don't add a README; this folder already has one.
2. Push this folder:
   ```sh
   cd ~/Documents/Projects/appforgelabs-website
   git add -A
   git commit -m "Initial AppForge Labs landing page"
   git branch -M main
   git remote add origin git@github.com:<your-github-username>/appforgelabs-website.git
   git push -u origin main
   ```

### Step 2 — Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. **Source**: "Deploy from a branch". **Branch**: `main`, folder `/ (root)`, then **Save**.
3. **Custom domain**: type `appforgelabs.ca` and **Save**. This is already in the `CNAME` file.
   GitHub will show a DNS warning until Step 3 is done. That's expected.

### Step 3 — Point the domain at GitHub (GoDaddy)

1. Sign in at <https://dcc.godaddy.com> → **Domain Portfolio** → click **appforgelabs.ca**
   → **DNS** tab.
2. **Remove the parked page / forwarding**:
   - If a **Forwarding** section shows a forward for the domain, delete it.
   - In **DNS Records**, delete the existing **A** record(s) for name `@` (often value
     "Parked" or "WebsiteBuilder Site").
   - If GoDaddy says the domain is connected to *Website Builder / Airo*, disconnect it first
     (Domain settings → "Connected to" → Disconnect).
3. **Add four A records** (Add New Record → Type `A`, Name `@`, TTL 1 hour):

   | Type | Name | Value |
   |---|---|---|
   | A | @ | `185.199.108.153` |
   | A | @ | `185.199.109.153` |
   | A | @ | `185.199.110.153` |
   | A | @ | `185.199.111.153` |

4. *(Optional, for IPv6)* Add four **AAAA** records, Name `@`:
   `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
5. **Edit the `www` CNAME** (it usually exists and points to `@`). Change its value to
   `<your-github-username>.github.io` (no `https://`, no repo name).
6. Save. Leave all other records alone (for example MX, `_domainconnect`, and TXT).

### Step 4 — Wait, verify, enable HTTPS

1. DNS usually updates within 10–60 minutes (up to 48 h). Check it:
   ```sh
   dig appforgelabs.ca +short        # should list the four 185.199.x.153 addresses
   dig www.appforgelabs.ca +short    # should show <username>.github.io
   ```
2. Back in **Settings → Pages**, the custom-domain check turns green. Once the certificate is
   issued (can take up to ~1 h), tick **Enforce HTTPS**.
3. Visit <https://appforgelabs.ca> and <https://www.appforgelabs.ca>. Both should show the site.

### Step 5 (recommended) — Verify the domain with GitHub

This stops anyone else from claiming your domain on GitHub Pages.
GitHub → your profile **Settings → Pages → Add a domain** → `appforgelabs.ca`. GitHub gives you
a **TXT** record. Add it in GoDaddy DNS exactly as shown, then click **Verify**.

### Updating the site later

Edit files, then `git commit` and `git push`. GitHub Pages redeploys in about a minute.

### Alternative: GoDaddy Web Hosting (cPanel)

If you'd rather pay for GoDaddy hosting: buy a **Web Hosting (cPanel)** plan, open
**cPanel → File Manager → `public_html`**, and upload everything in this folder
(including `assets/`). You don't need the `CNAME` / `.nojekyll` files there.
GoDaddy points the domain to that hosting automatically, and you can enable the free SSL
certificate in cPanel. Note that GoDaddy *Website Builder / Airo* plans **can't** host these files.
