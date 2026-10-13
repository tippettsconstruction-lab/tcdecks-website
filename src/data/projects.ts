// Real project galleries. Images live in /public/images/projects/<slug>/ as <name>-800.webp and <name>-1600.webp.
export type ProjectPhoto = { src: string; alt: string };
export type Project = { slug: string; title: string; summary: string; photos: ProjectPhoto[] };

const roof = (name: string, alt: string): ProjectPhoto => ({ src: `/images/projects/covered-deck-roof/${name}`, alt });

export const projects: Project[] = [
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
