# Arcana Key Games — website

Landing page for **False Prophecy**. Static site built with Astro.

Everything you'll want to change lives in **`src/config/site.ts`**. You should
not need to open a `.astro` file to change words, links, or images.

---

## Run it locally

Requires Node 18+.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Deploy (free)

1. Push this folder to a GitHub repo.
2. Cloudflare Pages → Create project → connect the repo.
3. Build command `npm run build`, output directory `dist`.
4. Done. Every push to `main` redeploys.

You'll be live at `something.pages.dev` until you add a domain. When you buy
`arcanakeygames.com`, add it in the Pages project's Custom Domains tab, then
update `site:` in `astro.config.mjs` so canonical URLs and the social card
point at the real address.

---

## Filling things in

### Media slots

Every image/video frame is the same `MediaSlot` component. An unfilled slot
renders a gold placeholder frame — deliberate-looking, not broken. Fill one by
dropping a file in `public/media/` and pointing `site.ts` at it:

```ts
media: { type: "image", src: "/media/battle.webp", alt: "Describe the image." }
```

For moving footage use a **muted looping video**, not a GIF — same effect, about
a tenth of the file size:

```ts
media: { type: "video", src: "/media/terrain.mp4", poster: "/media/terrain.jpg" }
```

Convert with ffmpeg:

```bash
ffmpeg -i clip.mov -vf scale=1280:-2 -an -c:v libx264 -crf 26 -movflags +faststart clip.mp4
```

Slots stay at a fixed aspect ratio, so swapping media never shifts the layout.

### Pillars

`site.pillars` — two to four entries, three is the sweet spot. Each has a
heading, body text, and a media slot. They alternate sides automatically.

### The videos section

Set `youtubeChannelId` (YouTube Studio → Settings → Channel → Advanced; starts
with `UC…`) and the newest upload embeds itself at build time. Leave it `null`
and the whole section is omitted. If the fetch fails during a deploy, the
section is skipped rather than breaking the build.

To keep it fresh without pushing, add a Cloudflare Pages scheduled deploy.

### Email signup

Pick a provider (Buttondown or MailerLite both have usable free tiers), then
paste the form's action URL into `emailFormAction`. Until then the band renders
with the field disabled and an honest note. Nothing else needs changing.

### Steam

When the Steam page goes live, set `steamUrl`. A "Wishlist on Steam" button
appears under Kon's greeting in the hero; until then the hero has no buttons
and the calls to action live in the top bar and the signup band.
Change `statusBadge` to `"Demo available"` when that's true.

### Links and nav

Anything left `null` in `site.links` simply isn't rendered — the site never
points at a page that doesn't exist. Same for `site.nav`: add entries as you
build `/videos`, `/press`, and `/about`.

---

### Theme (light / dark)

The site ships both. With no explicit choice it follows the visitor's
operating system; the nav toggle overrides that and remembers the choice in
`localStorage`. An inline script in `Base.astro` applies the saved theme
before first paint, so dark-mode visitors never get a white flash.

Both palettes live at the top of `src/styles/global.css` as CSS variables —
change a colour once there and it propagates everywhere. Two tokens are
deliberately theme-aware and worth knowing about:

- `--gold-accent` is "gold that must contrast with the page" — dark gold on
  porcelain, light gold on ink. Use it for links and text, never `--gold`.
- `--mud` is darkened in light mode to clear WCAG AA for small text;
  `--mud-pigment` keeps the original tone for the title gradient, which is
  large display type.

If you add a page, use the variables and it themes itself.

## Design notes

The palette comes from the game's own `HUDConstants` — porcelain
`#faf6f0`, gold `#d4b038`, and the title screen's mud pigment `#948267` used
for muted text. Type is Merriweather, the same face as the in-game title, with
Merriweather Sans for UI. The game's title wordmark decays ink → mud across the
word; the site's `.game-title` does the same in daylight.

`public/media/arcana-key-banner.webp` is the studio banner — it's for the
`/about` page header and YouTube channel art, not the landing page.

## Still to build

- `/videos` — index plus a page per video (markdown-driven)
- `/press` — fact sheet, downloadable logo/screenshot pack, contact
- `/about` — you, Arcana Key, the banner
