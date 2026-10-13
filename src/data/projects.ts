// Real project galleries. Images live in /public/images/projects/<slug>/ as <name>-800.webp and <name>-1600.webp.
export type ProjectPhoto = { src: string; alt: string };
export type Project = { slug: string; title: string; summary: string; link?: { href: string; label: string }; photos: ProjectPhoto[] };

const roof = (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/covered-deck-roof/${name}`, alt });

const p = (dir: string) => (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/${dir}/${name}`, alt });
const oak = p('saratoga-springs-french-white-oak');
const mt = p('new-home-covered-deck');
const awb = p('all-woman-build');
const poh = p('parade-of-homes-tiger-wood');
const slide = p('deck-with-slide');
const diag = p('diagonal-gray-deck');
const porch = p('back-porch-storage');
const more = p('more-builds');
const brown = p('saratoga-springs-brownstone-covered');
const cocoa = p('saratoga-springs-dark-cocoa');
const hl = p('highland-english-walnut-hideaway');
const pecan = p('highland-legacy-pecan-covered');
const draper = p('draper-brownstone-slate-gray');
const sundance = p('sundance-cabin-english-walnut');
const santaquin = p('santaquin-pecan-pergola');
const pg = p('pleasant-grove-trex-slide');
const lindon = p('lindon-trex-pebble-grey');
const sandy = p('sandy-weathered-teak');
const pgf = p('pleasant-grove-foothills-french-white-oak');
const em = p('eagle-mountain-second-story');
const ems = p('eagle-mountain-deck-slide');
const lehi = p('lehi-covered-deck-fireplace');
const af = p('american-fork-second-story-lit-stairs');
const lam = p('lehi-american-fork-decks');
const sj = p('south-jordan-fiber-optic-privacy');
const provo = p('provo-decks');

export const projects: Project[] = [
  {
    slug: 'pleasant-grove-trex-slide',
    title: 'Pleasant Grove: Trex deck with a twisty slide, featured on the cover of Deck Specialist magazine',
    summary: 'This Pleasant Grove deck made the cover of Deck Specialist magazine. It is a large second-story Trex deck with a two-tone picture-frame border, white posts with black balusters, a long stair run and a twisty tube slide straight down to the lawn. The covered patio underneath holds the hot tub.',
    link: { href: 'https://issuu.com/building-products/docs/deckspecialist_fall_2021_for_issuu', label: 'Read the Fall 2021 issue of Deck Specialist' },
    photos: [
      pg('pleasant-grove-trex-deck-twisty-tube-slide', 'Second-story Trex deck with a green twisty tube slide in Pleasant Grove, Utah'),
      pg('two-tone-trex-deck-sunset-dining', 'Two-tone Trex deck with a dining table and white and black railing at sunset'),
      pg('trex-deck-lounge-area-hanging-chair', 'Trex deck lounge area with a hanging chair along the house'),
      pg('trex-deck-boards-white-posts-black-balusters', 'Close-up of Trex deck boards with a contrasting border and white railing posts'),
    ],
  },
  {
    slug: 'provo-decks',
    title: 'Provo: rooftop deck with geometric white railing, plus more Provo builds',
    summary: 'A rooftop deck on a Provo pool house with composite decking and custom white railing in a geometric pattern, overlooking Utah Valley. Below are two more Provo decks: a dark composite deck with white posts and a mountain view, and a long composite stair with step lights.',
    photos: [
      provo('provo-pool-house-rooftop-deck-geometric-white-railing', 'Rooftop deck with geometric white railing on a pool house in Provo, Utah'),
      provo('rooftop-composite-deck-utah-valley-view', 'Rooftop composite deck overlooking Utah Valley'),
      provo('dark-composite-deck-stairs-mountain-view-provo', 'Dark composite deck and stairs with white railing and a mountain view in Provo'),
      provo('composite-deck-stairs-white-posts-step-lights', 'Composite deck stairs with white posts, black balusters and step lights'),
    ],
  },
  {
    slug: 'south-jordan-fiber-optic-privacy',
    title: 'South Jordan: covered deck with black privacy railing and turquoise lighting',
    summary: 'A covered second-story deck with black privacy railing panels, turquoise accent lights on the posts and stairs, and fiber optic lights set into the underside, so the patio and hot tub below glow at night like a starry sky.',
    photos: [
      sj('privacy-railing-turquoise-accent-lights', 'Covered second-story deck with black privacy railing and turquoise stair lights in South Jordan, Utah'),
      sj('south-jordan-covered-deck-privacy-railing-turquoise-lights', 'Covered deck with black privacy panels and turquoise post lights'),
      sj('covered-deck-black-privacy-panels-post-lights', 'Black privacy railing panels and post lights on a covered deck'),
      sj('south-jordan-deck-fiber-optic-lights-privacy-railing', 'Second-story deck with black privacy railing and blue fiber optic lights underneath in South Jordan, Utah'),
      sj('second-story-deck-black-privacy-railing', 'Second-story deck with black privacy railing panels over a hot tub patio'),
    ],
  },
  {
    slug: 'american-fork-second-story-lit-stairs',
    title: 'American Fork: second-story deck with lit stairs and mountain views',
    summary: 'A tall second-story composite deck with black aluminum railing, a long straight stair with lights in every riser, and a lounge area that looks out at the mountains. The patio underneath gets shade all afternoon.',
    photos: [
      af('american-fork-second-story-deck-black-railing', 'Second-story composite deck with black railing and stairs in American Fork, Utah'),
      af('deck-sectional-mountain-view-dusk', 'Outdoor sectional on a composite deck with a mountain view at dusk'),
      af('lit-deck-stairs-black-railing', 'Deck stairs with riser lights and black aluminum railing'),
      af('second-story-deck-patio-below-stairs', 'Second-story deck with a patio below and a long stair'),
      af('riser-lights-stairs-from-above', 'Lit deck stairs seen from the top'),
      af('deck-lounge-sunset-railing', 'Deck lounge area at sunset'),
      af('deck-stair-lights-night', 'Deck stair lights at night'),
      af('composite-deck-stairs-daylight', 'Composite deck stairs with black railing in daylight'),
    ],
  },
  {
    slug: 'lehi-covered-deck-fireplace',
    title: 'Lehi: covered deck with an outdoor fireplace',
    summary: 'A light gray composite deck under a full roof, with a stone outdoor fireplace, a contrasting border, cable and black aluminum railing, and stairs down to a landscaped yard.',
    photos: [
      lehi('lehi-covered-composite-deck-stone-fireplace', 'Covered composite deck with a stone fireplace and stairs in Lehi, Utah'),
      lehi('covered-deck-outdoor-fireplace-view', 'Outdoor fireplace on a covered composite deck'),
      lehi('covered-deck-fireplace-light-gray-boards', 'Light gray composite deck boards under a covered roof'),
      lehi('second-story-covered-deck-stairs', 'Second-story covered deck and stairs'),
      lehi('composite-deck-walkway-cable-railing', 'Composite deck walkway with railing above a landscaped yard'),
      lehi('deck-grill-area-landscaped-yard', 'Grill area on a covered deck'),
    ],
  },
  {
    slug: 'lehi-american-fork-decks',
    title: 'More decks in Lehi and American Fork',
    summary: 'A few more of our builds around Lehi and American Fork: a second-story deck with a tube slide and built-in bench, a large deck with white and black railing, lit stairs, and composite entry steps.',
    photos: [
      lam('second-story-deck-green-tube-slide', 'Second-story deck with a green tube slide'),
      lam('built-in-composite-deck-bench', 'Built-in composite bench on a deck'),
      lam('large-composite-deck-white-black-railing', 'Large composite deck with white posts and black balusters'),
      lam('second-story-deck-white-railing-stairs', 'Second-story deck with white railing and stairs'),
      lam('long-deck-stairs-white-railing', 'Long deck stairs with white railing'),
      lam('raised-deck-black-railing-dusk', 'Raised deck with black railing at dusk'),
      lam('deck-stair-riser-lights', 'Composite deck stairs with riser lights'),
      lam('second-story-deck-new-build', 'New second-story deck on a new home'),
      lam('gray-composite-entry-stairs-white-railing', 'Gray composite entry stairs with white railing'),
    ],
  },
  {
    slug: 'eagle-mountain-second-story',
    title: 'Eagle Mountain: second-story deck with valley views',
    summary: 'A second-story composite deck across the back of an Eagle Mountain home, with black aluminum railing, a long side stair and room for a full dining set looking out over the valley and mountains. The patio underneath stays shaded.',
    photos: [
      em('eagle-mountain-second-story-composite-deck', 'Second-story composite deck with black railing in Eagle Mountain, Utah'),
      em('deck-dining-mountain-view-eagle-mountain', 'Dining set on a composite deck with a mountain view in Eagle Mountain'),
      em('second-story-deck-patio-below', 'Second-story deck with a shaded patio below'),
      em('deck-black-aluminum-railing-valley-view', 'Black aluminum deck railing overlooking the valley'),
      em('composite-deck-dining-area-railing', 'Composite deck dining area along black railing'),
      em('deck-stairs-black-railing-side', 'Side stairs with black railing down from a second-story deck'),
    ],
  },
  {
    slug: 'eagle-mountain-deck-slide',
    title: 'Eagle Mountain: family deck with a slide',
    summary: 'A raised composite deck with black aluminum railing, stairs to the yard and a slide straight down to the lawn for the kids.',
    photos: [
      ems('eagle-mountain-deck-with-slide', 'Raised composite deck with stairs and a green slide in Eagle Mountain, Utah'),
      ems('deck-stairs-green-slide', 'Deck stairs and a green slide down to the lawn'),
      ems('raised-composite-deck-black-railing', 'Raised composite deck with black aluminum railing'),
      ems('composite-deck-black-railing-corner', 'Corner of a composite deck with black railing'),
    ],
  },
  {
    slug: 'pleasant-grove-foothills-french-white-oak',
    title: 'Pleasant Grove foothills: TimberTech French White Oak with illuminated IG glass railing',
    summary: 'A covered second-story deck in the Pleasant Grove foothills, built with TimberTech French White Oak and a picture-frame border. IG frameless glass railing keeps the mountain and valley views wide open, and its illuminated top edge glows at night. Lit stairs lead down to the patio under the deck.',
    photos: [
      pgf('illuminated-glass-railing-utah-valley-city-lights', 'Illuminated IG glass railing at dusk overlooking the lights of Utah Valley from the Pleasant Grove foothills'),
      pgf('pleasant-grove-foothills-covered-deck-ig-glass-railing', 'Covered TimberTech French White Oak deck with IG frameless glass railing in the Pleasant Grove foothills'),
      pgf('lit-glass-railing-stairs-sunset-view', 'Glowing glass railing and black stair railing at sunset'),
      pgf('blue-lit-glass-railing-edge-stairs', 'Blue-lit edge of an IG glass railing above lit deck stairs'),
      pgf('covered-deck-illuminated-glass-railing-night', 'Covered deck with illuminated glass railing at night'),
      pgf('illuminated-ig-glass-railing-blue-led', 'IG illuminated glass railing glowing blue along the top edge at night'),
      pgf('lit-glass-railing-covered-deck-dusk', 'Illuminated frameless glass railing on a covered deck at dusk'),
      pgf('timbertech-french-white-oak-covered-deck-hanging-chair', 'TimberTech French White Oak covered deck with a hanging chair and rocking chair'),
      pgf('french-white-oak-deck-valley-view', 'French White Oak deck with glass railing looking out over Utah Valley'),
      pgf('second-story-covered-deck-glass-railing', 'Second-story covered deck with glass railing and dark posts'),
      pgf('covered-deck-frameless-glass-railing-sunset', 'Covered deck with frameless glass railing at sunset'),
      pgf('frameless-glass-railing-covered-deck-corner', 'Corner of a covered deck with frameless glass panels'),
      pgf('covered-deck-over-patio-dark-posts', 'Covered second-story deck over a concrete patio'),
      pgf('under-deck-patio-stairs-mountain-view', 'Patio under the deck with stairs and a mountain view'),
      pgf('ig-glass-railing-spigots-french-white-oak', 'IG glass railing spigots on TimberTech French White Oak decking'),
      pgf('french-white-oak-picture-frame-border-detail', 'Picture-frame border detail in TimberTech French White Oak'),
      pgf('lit-deck-stairs-at-dusk', 'Deck stairs with riser lights at dusk'),
      pgf('deck-stair-riser-lights-night', 'Deck stair riser lights at night'),
      pgf('covered-deck-side-view-glass-railing', 'Side view of a covered second-story deck with glass railing'),
      pgf('covered-deck-glass-railing-high-angle', 'High-angle view of a covered deck with frameless glass railing'),
      pgf('aerial-covered-deck-pleasant-grove-foothills', 'Aerial view of a covered deck in the Pleasant Grove foothills'),
      pgf('aerial-covered-deck-metal-roof', 'Aerial view of a covered deck with a metal roof'),
      pgf('aerial-covered-deck-stairs-patio', 'Aerial view of a covered deck, stairs and patio'),
      pgf('aerial-deck-stairs-backyard', 'Aerial view of deck stairs down to the backyard'),
    ],
  },
  {
    slug: 'sandy-weathered-teak',
    title: 'Sandy: covered second-story deck in TimberTech Weathered Teak',
    summary: 'A long second-story deck in TimberTech Weathered Teak, tucked under the roofline with white posts, a matching fascia and black aluminum railing. A switchback stair with lights in every riser leads down to the patio and the backyard, so the deck works at night as well as during the day.',
    photos: [
      sandy('sandy-timbertech-weathered-teak-covered-second-story-deck', 'Covered second-story TimberTech Weathered Teak deck with black railing in Sandy, Utah'),
      sandy('weathered-teak-deck-above-landscaped-backyard', 'Weathered Teak deck above a terraced backyard in Sandy'),
      sandy('lit-composite-deck-stairs-black-railing', 'Composite deck stairs with riser lights and black aluminum railing'),
      sandy('deck-stairs-riser-lights-down-to-fire-pit', 'Lit deck stairs leading down to a backyard fire pit patio'),
      sandy('covered-deck-weathered-teak-seating', 'Seating area on a covered TimberTech Weathered Teak deck'),
      sandy('weathered-teak-deck-walkway-black-railing', 'Weathered Teak deck walkway along a brick house with black railing'),
      sandy('weathered-teak-deck-dining-sunset', 'Dining table on a Weathered Teak deck at sunset'),
      sandy('stair-landing-black-aluminum-railing', 'Deck stair landing with black aluminum railing'),
      sandy('aerial-second-story-deck-backyard', 'Aerial view of a second-story deck and backyard in Sandy'),
      sandy('deck-and-stairs-at-night', 'Deck and lit stairs at night'),
      sandy('deck-stairs-beside-backyard-stream', 'Composite deck stairs beside a backyard stream at sunset'),
    ],
  },
  {
    slug: 'lindon-trex-pebble-grey',
    title: 'Lindon: Trex Pebble Grey deck with white accents and lighting',
    summary: 'A low, wide Trex deck in Pebble Grey with white fascia and risers, Trex composite railing with white posts and black balusters, and warm lights on the stairs and under the rail. The angled stairs step down to the patio, and the deck looks out over Utah Valley.',
    photos: [
      lindon('lindon-trex-pebble-grey-deck-stair-lights', 'Trex Pebble Grey deck with white fascia and lit stairs in Lindon, Utah'),
      lindon('trex-pebble-grey-deck-valley-view-dusk', 'Trex Pebble Grey deck at dusk looking out over Utah Valley'),
      lindon('trex-composite-railing-post-lights', 'Trex composite railing with white posts, black balusters and under-rail lights'),
      lindon('trex-pebble-grey-deck-white-railing-posts', 'Trex deck with white railing posts wrapping the back of a Lindon home'),
    ],
  },
  {
    slug: 'all-woman-build',
    title: 'Saratoga Springs Parade of Homes: an All Woman Build',
    summary: 'Levi’s wife and daughters built this deck themselves for a home featured in the Utah Valley Parade of Homes, as an All Woman Build. It wraps the back of the house under a covered porch, with wide steps down to the yard.',
    photos: [
      awb('all-woman-build-parade-of-homes-deck-saratoga-springs', 'Finished covered back deck with wide steps on a Parade of Homes house in Saratoga Springs'),
      awb('levi-tippetts-wife-daughters-all-woman-build', 'Levi Tippetts’ wife and daughters on the deck they built for the Utah Valley Parade of Homes'),
      awb('covered-back-deck-wide-steps', 'Covered back deck with picture-framed wide steps to the lawn'),
      awb('finished-deck-under-covered-porch', 'Long run of finished deck boards under a covered porch'),
      awb('all-woman-build-installing-deck-boards', 'Women installing deck boards during the All Woman Build'),
      awb('women-building-deck-power-tools', 'Building the deck with power tools during the All Woman Build'),
      awb('deck-steps-to-yard-new-home', 'Wide deck steps down to the yard on a new home'),
      awb('deck-boards-finished-oil-sheen', 'Finished deck boards and posts on the covered back deck'),
    ],
  },
  {
    slug: 'parade-of-homes-tiger-wood',
    title: 'Parade of Homes deck in TimberTech Tiger Wood',
    summary: 'A Parade of Homes deck that spans the back of the house in TimberTech Tiger Wood with custom fabricated railing, a long stair run to the yard and a covered patio underneath, all looking out over Utah Lake.',
    photos: [
      poh('tiger-wood-deck-lounge-utah-lake-mountains', 'Lounge seating on a TimberTech Tiger Wood deck with Utah Lake and snowcapped mountains beyond'),
      poh('tiger-wood-deck-fortress-rail-lake-view', 'Low view across Tiger Wood deck boards to black metal railing and Utah Lake'),
      poh('parade-of-homes-timbertech-tiger-wood-deck-saratoga-springs', 'Parade of Homes deck in TimberTech Tiger Wood across the back of a Utah home'),
      poh('aerial-tiger-wood-deck-landscaped-yard', 'Aerial view of a Tiger Wood deck with stairs down to a landscaped yard and fire pit'),
      poh('tiger-wood-deck-utah-lake-view-seating', 'Outdoor seating on a TimberTech Tiger Wood deck overlooking Utah Lake'),
      poh('second-story-tiger-wood-deck-custom-railing', 'Second-story Tiger Wood deck with custom fabricated black railing and lake views'),
      poh('two-story-deck-covered-patio-below', 'Large second-story deck with a covered patio below'),
      poh('elevated-deck-stairs-custom-fabricated-rail', 'Elevated composite deck and stairs with custom fabricated railing from above'),
      poh('tiger-wood-deck-stairs-black-railing', 'Long composite stair run with black metal railing down to the yard'),
      poh('covered-patio-under-deck-stairs', 'Covered patio under a second-story deck with stairs to the yard'),
      poh('timbertech-tiger-wood-boards-closeup', 'Close-up of TimberTech Tiger Wood deck boards and black railing'),
    ],
  },
  {
    slug: 'santaquin-pecan-pergola',
    title: 'Santaquin: TimberTech Pecan with a natural wood pergola',
    summary: 'A two-level deck in TimberTech Pecan in Santaquin. The upper level sits under a rough-sawn natural wood pergola with wood-framed hog wire railing, and a step leads down to a wide lower deck with a curved cutout around the window well.',
    photos: [
      santaquin('santaquin-timbertech-pecan-deck-cedar-pergola', 'Two-level TimberTech Pecan deck with a natural wood pergola in Santaquin, Utah'),
      santaquin('natural-wood-pergola-hog-wire-railing-timbertech', 'Natural wood pergola over a TimberTech Pecan deck with hog wire railing'),
      santaquin('cedar-pergola-composite-deck-wire-panel-railing', 'Rough-sawn wood pergola and wire panel railing on a composite deck'),
      santaquin('two-level-timbertech-pecan-deck-pergola', 'Upper deck with pergola stepping down to a wide lower TimberTech Pecan deck'),
      santaquin('pergola-shade-pecan-deck-window-well-cutout', 'Pergola shade on a Pecan deck with a cutout around the window well'),
      santaquin('low-timbertech-deck-curved-window-well', 'Low TimberTech deck with a curved cutout around a basement window well'),
    ],
  },
  {
    slug: 'sundance-cabin-english-walnut',
    title: 'Sundance: cabin sauna deck in TimberTech English Walnut',
    summary: 'A mountain cabin deck in Sundance built to hold a barrel sauna and a hot tub, in TimberTech English Walnut. The standout is a built-in waterfall bench, where the boards curve down over the edge in one continuous piece. Black privacy screens close off the side, and recessed lights in the deck and bench glow against the snow.',
    photos: [
      sundance('sundance-cabin-timbertech-english-walnut-hideaway-sauna-deck', 'TimberTech English Walnut sauna deck with black privacy screens and a waterfall bench at a Sundance, Utah cabin'),
      sundance('timbertech-waterfall-bench-english-walnut-lights', 'Built-in waterfall bench in TimberTech English Walnut with recessed lights'),
      sundance('waterfall-bench-sauna-deck-snow', 'Waterfall bench on a snowy sauna deck with recessed lights'),
      sundance('sauna-deck-privacy-screen-waterfall-bench', 'Sauna deck with privacy screens and a curved built-in bench in the mountains'),
      sundance('english-walnut-sauna-deck-bench-black-posts', 'English Walnut sauna deck with a built-in bench and black posts'),
      sundance('barrel-sauna-deck-a-frame-cabin-winter', 'Barrel sauna on a new deck beside an A-frame cabin in winter'),
      sundance('mountain-cabin-sauna-deck-snowy-trees', 'Mountain cabin and sauna deck among snowy trees at dusk'),
      sundance('a-frame-cabin-lit-path-sauna-deck', 'Lit path from an A-frame cabin up to the sauna deck'),
      sundance('sauna-and-hot-tub-deck-waterfall-bench-mountains', 'Sauna and hot tub deck with a waterfall bench on a wooded mountain lot'),
      sundance('hillside-sauna-hot-tub-deck-stone-steps', 'Hillside sauna and hot tub deck above lit stone steps'),
      sundance('hot-tub-deck-privacy-screen-mountain-cabin', 'Hot tub deck with privacy screens and a curved bench at a mountain cabin'),
      sundance('black-privacy-screen-recessed-deck-lights-snow', 'Black privacy screen panels above recessed deck lights in the snow'),
    ],
  },
  {
    slug: 'draper-brownstone-slate-gray',
    title: 'Draper: TimberTech Slate Gray and Brownstone with a built-in bench',
    summary: 'A raised two-tone deck in Draper with TimberTech Slate Gray field boards and a Brownstone picture-frame border, stairs and fascia. Black aluminum cable railing keeps the mountain view open, and a Brownstone bench is built right into the rail line.',
    photos: [
      draper('draper-timbertech-brownstone-slate-gray-deck-built-in-bench', 'Two-tone TimberTech deck with a built-in bench and black cable railing in Draper, Utah'),
      draper('two-tone-timbertech-deck-cable-railing-mountain-view', 'TimberTech Slate Gray deck with a Brownstone border and cable railing below the mountains'),
      draper('built-in-deck-bench-black-posts', 'Built-in Brownstone deck bench on black posts along the railing'),
      draper('slate-gray-deck-brownstone-picture-frame-cable-rail', 'Slate Gray deck boards with a Brownstone picture frame and black cable railing'),
      draper('brownstone-deck-stairs-cable-railing', 'TimberTech Brownstone stairs with black aluminum cable stair railing'),
    ],
  },
  {
    slug: 'highland-legacy-pecan-covered',
    title: 'Highland: covered deck in TimberTech Legacy Pecan',
    summary: 'A covered deck on a new Highland home in TimberTech Legacy in Pecan. A vaulted gable roof sits on rough-sawn cedar beams and stone columns, with recessed lights in the ceiling, black metal railing and a wide run of steps down to the yard. The mountains are framed by the open side.',
    photos: [
      pecan('highland-covered-deck-timbertech-legacy-pecan-gable-roof', 'Covered deck with a gable roof, cedar beams and stone columns on a Highland, Utah home'),
      pecan('timbertech-legacy-pecan-covered-deck-wide-steps', 'Wide TimberTech Legacy Pecan steps leading up to a covered deck with black railing'),
      pecan('covered-deck-vaulted-ceiling-stone-columns', 'Vaulted ceiling with recessed lights over a TimberTech Legacy Pecan deck'),
      pecan('legacy-pecan-deck-mountain-view-black-railing', 'TimberTech Legacy Pecan deck with black railing and a view of the mountains'),
      pecan('timbertech-legacy-pecan-deck-boards-low-angle', 'Low view across TimberTech Legacy Pecan deck boards toward sliding doors'),
      pecan('timbertech-legacy-pecan-board-texture-closeup', 'Close-up of TimberTech Legacy Pecan board texture'),
    ],
  },
  {
    slug: 'highland-english-walnut-hideaway',
    title: 'Highland: TimberTech Vintage English Walnut with HideAway privacy screens',
    summary: 'A backyard retreat in Highland built around two hot tubs. The decking is TimberTech Vintage Collection in English Walnut, under a rough-sawn timber-frame pavilion with a metal roof. Black TimberTech HideAway privacy screens close in the sides, and recessed lights run along every step and the boulder edge, where the boards are scribed to fit the rocks.',
    photos: [
      hl('highland-timbertech-vintage-english-walnut-timber-pavilion', 'Timber-frame pavilion over a TimberTech Vintage English Walnut hot tub deck in Highland, Utah'),
      hl('timber-frame-pavilion-hot-tub-deck-step-lights', 'Timber pavilion and two hot tub decks with lit stairs at dusk'),
      hl('lit-composite-stairs-hideaway-privacy-screen', 'Lit English Walnut stairs leading up to a HideAway privacy screen'),
      hl('timbertech-hideaway-privacy-screen-sunset', 'TimberTech HideAway privacy screen panels against a sunset'),
      hl('timber-pavilion-metal-roof-hot-tub-deck', 'Rough-sawn timber pavilion with a metal roof over a hot tub deck with step lights'),
      hl('black-hideaway-privacy-panels-timber-posts', 'Black HideAway privacy panels between rough-sawn timber posts with deck lights'),
      hl('hideaway-privacy-screen-wall-deck-lights', 'Wall of HideAway privacy screens lit by recessed deck lights'),
      hl('english-walnut-deck-boulders-mountain-view', 'English Walnut deck scribed around boulders with a mountain view'),
      hl('recessed-deck-lights-along-boulders', 'Recessed deck lights along a boulder edge at dusk'),
      hl('timber-truss-pavilion-mountain-view', 'Timber truss pavilion framing a view of the mountains'),
    ],
  },
  {
    slug: 'saratoga-springs-dark-cocoa',
    title: 'Saratoga Springs: TimberTech Dark Cocoa and Coconut Husk with Fortress railing',
    summary: 'A two-level deck in TimberTech Coconut Husk with a Dark Cocoa picture-frame border and stair accents, black Fortress railing, and a covered corner with a metal roof, string lights and a porch swing. Wide stairs lead down to the yard and fire pit.',
    photos: [
      cocoa('aerial-timbertech-dark-cocoa-coconut-husk-deck-saratoga-springs', 'Aerial view of a two-level TimberTech deck in Coconut Husk and Dark Cocoa in Saratoga Springs, Utah'),
      cocoa('two-level-timbertech-deck-covered-swing-fire-pit', 'Two-level TimberTech deck with a covered swing area above a backyard fire pit'),
      cocoa('covered-deck-porch-swing-metal-roof-lights', 'Covered deck corner with a metal roof, string lights and a porch swing'),
      cocoa('timbertech-dark-cocoa-stairs-black-railing', 'TimberTech Dark Cocoa stairs with black Fortress railing down to the yard'),
      cocoa('two-level-deck-steps-coconut-husk-dark-cocoa', 'Steps between two deck levels in Coconut Husk with Dark Cocoa nosing'),
      cocoa('raised-timbertech-deck-rear-view', 'Raised two-level TimberTech deck across the back of a Saratoga Springs home'),
      cocoa('coconut-husk-decking-dark-cocoa-picture-frame', 'Coconut Husk decking with a Dark Cocoa picture-frame border and black Fortress railing'),
      cocoa('two-tone-timbertech-step-detail', 'Close-up of two-tone TimberTech steps in Dark Cocoa and Coconut Husk'),
    ],
  },
  {
    slug: 'saratoga-springs-brownstone-covered',
    title: 'Saratoga Springs: covered deck in TimberTech Brownstone',
    summary: 'A raised deck in TimberTech Brownstone under a new shingled roof tied into the house, with white wrapped columns, under-rail lighting and stairs down to the patio. Utah Lake sits just beyond the rooftops.',
    photos: [
      brown('saratoga-springs-covered-deck-timbertech-brownstone-lighting', 'Drone view at dusk of a covered TimberTech Brownstone deck with white columns and under-rail lights in Saratoga Springs, Utah'),
    ],
  },
  {
    slug: 'saratoga-springs-french-white-oak',
    title: 'Saratoga Springs: TimberTech French White Oak & American Walnut',
    summary: 'A wide, low deck off the back slider in TimberTech French White Oak with an American Walnut picture-frame border and stair nosing, white risers, and recessed riser lights on every step.',
    photos: [
      oak('timbertech-french-white-oak-american-walnut-steps', 'Two-tone TimberTech deck in French White Oak and American Walnut with white risers and step lights in Saratoga Springs'),
      oak('two-tone-timbertech-stairs-riser-lights', 'Close-up of mitered American Walnut stair nosing with recessed riser lights'),
    ],
  },
  {
    slug: 'new-home-covered-deck',
    title: 'Montana: covered deck in American Walnut with Fortress railing',
    summary: 'A new-construction build we did for a friend in Montana: a full-length second-story deck under a timber-framed roof, in TimberTech American Walnut with a breaker board, Fortress steel railing, switchback stairs and a covered patio below.',
    photos: [
      mt('covered-second-story-deck-new-home-2', 'Covered second-story deck with timber posts and black railing on a new home at sunset'),
      mt('covered-second-story-deck-new-home-1', 'Timber-framed roof over a second-story deck with a covered patio underneath'),
      mt('american-walnut-covered-deck-fortress-railing', 'Covered deck in TimberTech American Walnut with a breaker board and black Fortress steel railing overlooking pine trees'),
      mt('timbertech-american-walnut-deck-fortress-steel-rail', 'Long run of black Fortress steel railing along a covered TimberTech American Walnut deck'),
      mt('fortress-railing-composite-stairs-landing', 'Composite stairs and landing with two-tone treads and black Fortress steel railing'),
      mt('covered-deck-stairs-new-home', 'Switchback stairs with black aluminum railing leading to a covered second-story deck'),
    ],
  },
  {
    slug: 'covered-deck-roof',
    title: 'Covered deck with a shingled roof',
    summary: 'A second-story deck covered with a new wood-framed roof tied into the house and finished with shingles to match. We designed it in 3D first so the homeowners could see the roof line, stairs and railing before we started.',
    photos: [
      roof('3d-rendering-covered-deck-4', '3D rendering of a covered second-story deck with stairs and white railing'),
      roof('3d-rendering-covered-deck-2', '3D design of a covered deck roof attached to the house'),
      roof('covered-deck-roof-framing-1', 'TC Decks crew framing a new roof over a second-story deck'),
      roof('covered-deck-roof-framing-side', 'Side view of deck roof rafters and support beams during framing'),
      roof('covered-deck-roof-framed', 'Finished deck roof framing with the TC Decks trailer in the driveway'),
      roof('deck-roof-shingle-install-3', 'Crew installing shingles on the new deck roof with mountain views'),
    ],
  },
  {
    slug: 'deck-with-slide',
    title: 'Second-story deck with a spiral slide',
    summary: 'A tall composite deck with white posts, dark balusters and a covered patio underneath for the hot tub. The kids got a tube slide straight down to the lawn, and solar step lights line the long stair run.',
    photos: [
      slide('two-story-composite-deck-white-posts-slide', 'Second-story composite deck with white posts and black balusters over a covered patio'),
      slide('deck-spiral-tube-slide-mountain-view', 'Green spiral tube slide from a second-story deck to the lawn'),
      slide('composite-stairs-solar-step-lights', 'Composite deck stairs with solar step lights and white posts'),
      slide('elevated-deck-tube-slide-covered-patio', 'Elevated deck with a tube slide and a covered patio underneath'),
      slide('composite-deck-stairs-white-posts', 'Long composite stair run with white posts and dark balusters'),
    ],
  },
  {
    slug: 'diagonal-gray-deck',
    title: 'Gray composite deck with diagonal boards',
    summary: 'Two connected sections laid on the diagonal with a picture-frame border, black metal railing and wide steps down to the yard. The diagonal pattern needs closer joist spacing, which we plan for in the framing.',
    photos: [
      diag('aerial-diagonal-gray-composite-deck', 'Aerial view of a gray composite deck with diagonal boards, picture frame border and black railing'),
      diag('diagonal-decking-picture-frame-black-railing', 'Golden retriever sitting on a diagonal gray composite deck by the stairs'),
    ],
  },
  {
    slug: 'back-porch-storage',
    title: 'Back porch with built-in storage',
    summary: 'A raised back porch with two-tone composite stairs and white vinyl railing. We skirted the base and built cabinet doors with a diagonal pattern so the space underneath works as storage.',
    photos: [
      porch('back-porch-white-vinyl-railing-storage', 'Raised back porch with white vinyl railing and dark composite stairs'),
      porch('porch-stairs-under-deck-storage-doors', 'Composite porch stairs beside under-deck storage doors'),
      porch('under-deck-storage-cabinet-doors', 'Under-deck storage cabinet doors with a diagonal board pattern'),
    ],
  },
  {
    slug: 'more-builds',
    title: 'More recent work',
    summary: 'A few more decks, covers and pergolas from around Utah.',
    photos: [
      more('two-level-gray-deck-stairs-black-railing', 'Upper deck with stairs down to a lower composite platform and black railing'),
      more('covered-deck-white-columns-black-railing', 'Covered second-story deck with white columns and black railing'),
      more('rustic-wood-pergola-arbor', 'Rustic stained wood pergola arbor beside a house'),
    ],
  },
];
