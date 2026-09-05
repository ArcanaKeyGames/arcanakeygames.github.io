// ============================================================
// site.ts — the whole site's content lives in this one file.
// Editing the site = editing this file. You should never need
// to touch the .astro files to change words, links, or media.
// ============================================================

// A media slot accepts an image OR a looping video (muted, autoplay —
// use .mp4/.webm, never .gif: same look, ~10x smaller).
// Set `media: null` to show the styled placeholder frame instead.
// Add `credit: "Name"` to any slot to print a byline under the frame.
export type Media =
  | { type: "image"; src: string; alt: string; credit?: string }
  | { type: "video"; src: string; poster?: string; credit?: string }
  | null;

export interface PartyMember {
  name: string; // "<Seer> and <Fae>" — doubles as the tab button label
  media: Media;
}

export interface Pillar {
  eyebrow: string; // the game's own category — Action, Characters, Plot, Setting
  heading: string;
  body: string;
  media: Media;
  placeholderLabel: string;
}

export const site = {
  // ---- Identity -------------------------------------------------
  studioName: "Arcana Key Games",
  gameName: "False Prophecy",

  // The one-line pitch. The most-read sentence on the site.
  pitch:
    "A tactical, turn-based RPG set in a vibrant, high fantasy world on the brink of their prophesied apocalypse.",

  // Honest state badge shown under the title. Later: "DEMO AVAILABLE".
  statusBadge: "In development",

  // ---- Hero -----------------------------------------------------
  hero: {
    media: {
      type: "image",
      src: "/media/kon-harmony.webp",
      alt: "Kon, a smiling bard with bongos at his hip, waves in a sunlit meadow while Harmony, a great silver-and-gold bird, spreads her wings above him.",
      credit: "Gjergji Zhuka",
    } as Media,

    // Kon's greeting — the character-to-reader welcome.
    greeting:
      "Hello there, friend. The name's Kon, and the fine feathered lady above me is my Fae, Harmony. The road ahead is still long and winding, but if you'd like, the two of us could keep you company. Maybe play you a song? You look like you'd like a song.",

    // Optional line under the greeting. Kon names himself in the text, so
    // repeating it here would be redundant — left empty, and hidden when
    // empty. A place and date would work well if you want one, e.g.
    // "Enday, the 100th — somewhere west of the road".
    greetingAttribution: "",
  },

  // ---- Calls to action ------------------------------------------
  // Get Updates, Watch Videos and Support Us live in the top bar and the
  // signup band. The hero itself shows no buttons until steamUrl is set,
  // then a single "Wishlist on Steam" button appears under Kon's greeting.
  steamUrl: null as string | null,

  // ---- Pillars ---------------------------------------------------
  // Four, matching the game's own categories. `media: null` renders the
  // gold placeholder frame with the label — the page looks intentional
  // while slots wait for footage.
  pillars: [
    {
      eyebrow: "Action",
      heading: "Modern Tactical Turn-Based Combat",
      body: "Battles are fought in the open world, where positioning matters as much as stats and dice. Elevation, weather, and the ground itself each have a strategic role to play.",
      media: null,
      placeholderLabel: "Action footage pending",
    },
    {
      eyebrow: "Characters",
      heading: "Meaningful Relationship Management",
      body: "Your companions have wants, thoughts, and lives beyond your own. Decisions you make will have consequences. We all need to learn that we can't make everybody happy.",
      media: null,
      placeholderLabel: "Character footage pending",
    },
    {
      eyebrow: "Plot",
      heading: "Persona-Like Calendar Progression",
      body: "Seven years are all we have left. Experience the Tale of the Fated King, one day at a time, one season to the next. The future waits for no one, yet the past can always be replayed.",
      media: null,
      placeholderLabel: "Plot footage pending",
    },
    {
      eyebrow: "Setting",
      heading: "Dynamic Ecological Systems",
      body: "Rain, mist, snow, frost, and droughts arrive on schedule, altering the land and the local ecosystems. Enemies are not an endless horde, but finite beings. Killing is a choice.",
      media: null,
      placeholderLabel: "Setting footage pending",
    },
  ] as Pillar[],

  // ---- Party -----------------------------------------------------
  // The flip-tab gallery: a Seer and their Fae per entry, all of them
  // companions on Kon's road. Not a full cast list and not the leads —
  // a few examples of what a Seer/Fae pairing looks like in this world.
  // Each entry's `name` doubles as its tab button, and `media` is the
  // same shape as every other slot, so the artist credit rides along
  // with the art. Add or remove an entry and the tabs follow.
  partyHeading: "Seers and Fae",
  // Three slots down the section, each hidden when empty. **Bold** and
  // *italic* work in all of them.
  //
  //   heading -> intro -> tabs -> subtext -> art -> outro
  //
  // Sits under the heading, above the tabs: what a See'er is.
  partyIntro:
    "Hand-picked by Fate Herself, See'ers bear the Sight, allowing them to manifest their guardian fae into living incarnations of concepts. In exchange for incredible magics, they **must** serve and protect Tairn until the bitter End.",
  // Sits between the tabs and the art, labelling who these people are.
  partySubtext: "Some of Kon's Companions",
  // The last line before the mailing list.
  partyOutro: "The war for our world's soul nears. You can't hide away forever.",
  party: [
    {
      name: "Lafer and Vigor",
      media: {
        type: "image",
        src: "/media/lafer-vigor.webp",
        alt: "Lafer, a woman in red plate armor, flexes one arm beside Vigor, a towering armored giant whose body glows with molten cracks of orange fire, in a sunlit meadow.",
        credit: "Gjergji Zhuka",
      } as Media,
    },
    {
      name: "Wilm and Rugged",
      media: {
        type: "image",
        src: "/media/wilm-rugged.webp",
        alt: "Wilm, a red-haired warrior in stone-grey armor, rests an enormous greatsword point-down in the grass beside Rugged, a tall pale figure carrying a matching blade across one shoulder.",
        credit: "Gjergji Zhuka",
      } as Media,
    },
    {
      name: "Topek and Excel",
      media: {
        type: "image",
        src: "/media/topek-excel.webp",
        alt: "Topek, a blond fighter, stands barefoot at the edge of a cliff above the clouds, raising a lightning-tipped spear while Excel, living lightning, coils in bright arcs around his arms and body.",
        credit: "Gjergji Zhuka",
      } as Media,
    },
  ] as PartyMember[],

  // ---- Videos ----------------------------------------------------
  // Set your YouTube channel ID (starts with "UC…", found in YouTube
  // Studio → Settings → Channel → Advanced) and the site embeds your
  // latest upload at build time. Leave null to hide the section.
  youtubeChannelId: null as string | null,
  youtubeChannelUrl: null as string | null, // e.g. "https://www.youtube.com/@ArcanaKeyGames"

  // ---- Email signup ----------------------------------------------
  // Paste the form action URL from Buttondown or MailerLite when you
  // pick a provider. Until then the band renders with the field
  // disabled and a "coming soon" note — the slot exists, unpowered.
  //   Buttondown: https://buttondown.com/api/emails/embed-subscribe/YOUR_NAME
  emailFormAction: null as string | null,
  emailHeading: "Follow the making of False Prophecy",
  emailSubtext: "Occasional updates when there's something worth showing. No spam. Unsubscribe anytime.",

  // ---- Links -----------------------------------------------------
  // null links are simply not rendered — nothing on the site points
  // at a place that doesn't exist yet.
  links: {
    youtube: "https://www.youtube.com/@ArcanaKeyGames" as string | null,
    kofi: "https://ko-fi.com/arcanakeygames" as string | null,
    itch: null as string | null,
    contactEmail: null as string | null, // e.g. "hello@arcanakeygames.com"
  },

  // ---- Nav -------------------------------------------------------
  // Pages appear here as they're built. Landing page ships alone.
  nav: [] as { label: string; href: string }[],
  // When /videos, /press, /about exist:
  // nav: [
  //   { label: "Videos", href: "/videos" },
  //   { label: "Press", href: "/press" },
  //   { label: "About", href: "/about" },
  // ],

  // ---- Meta ------------------------------------------------------
  description:
    "False Prophecy is a tactical, turn-based RPG set in a vibrant, high fantasy world on the brink of their prophesied apocalypse. In development at Arcana Key Games.",
  ogImage: "/media/og-card.jpg",
};
