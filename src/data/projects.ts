// Real project galleries. Images live in /public/images/projects/<slug>/ as <name>-800.webp and <name>-1600.webp.
export type ProjectPhoto = { src: string; alt: string };
export type Project = { slug: string; title: string; summary: string; photos: ProjectPhoto[] };

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

export const projects: Project[] = [
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
