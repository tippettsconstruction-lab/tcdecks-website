// Real project galleries. Images live in /public/images/projects/<slug>/ as <name>-800.webp and <name>-1600.webp.
export type ProjectPhoto = { src: string; alt: string };
export type Project = { slug: string; title: string; summary: string; photos: ProjectPhoto[] };

const roof = (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/covered-deck-roof/${name}`, alt });

const p = (dir: string) => (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/${dir}/${name}`, alt });
const oak = p('saratoga-springs-french-white-oak');
const mt = p('new-home-covered-deck');

export const projects: Project[] = [
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
