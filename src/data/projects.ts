// Real project galleries. Images live in /public/images/projects/<slug>/ as <name>-800.webp and <name>-1600.webp.
export type ProjectPhoto = { src: string; alt: string };
export type Project = { slug: string; title: string; summary: string; photos: ProjectPhoto[] };

const roof = (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/covered-deck-roof/${name}`, alt });

const p = (dir: string) => (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/${dir}/${name}`, alt });
const oak = p('saratoga-springs-french-white-oak');
const mt = p('new-home-covered-deck');
const awb = p('all-woman-build');
const poh = p('parade-of-homes-tiger-wood');

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
];
