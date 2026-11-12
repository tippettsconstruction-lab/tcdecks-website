// TC Decks YouTube videos embedded on the site. Each one also gets VideoObject schema
// so Google can show it in video results for the page it sits on.
export type Video = { id: string; title: string; description: string; uploadDate: string; duration: string };

export const videos = {
  lehiRebuild: {
    id: '2F_BW8iHOyM',
    title: 'Lehi, Utah Deck Tear-Down & Rebuild | TimberTech Composite + Fortress Rails',
    description: 'TC Decks takes a Lehi, Utah backyard from tear-down to a finished 19 x 12 ft elevated deck with TimberTech Dark Cocoa decking, hidden fasteners, Fortress FE26 Black Sand railing and post and stair lighting.',
    uploadDate: '2026-10-07T13:20:12-07:00',
    duration: 'PT15M32S',
  },
  saratogaSprings: {
    id: 'eKv_sumhPUY',
    title: 'Custom Deck Builder in Utah | TC Decks, Saratoga Springs, UT',
    description: 'TC Decks is a deck builder based in Saratoga Springs, Utah, designing and building custom composite decks, elevated decks, stairs and railing for homeowners across Utah County and the Salt Lake City area.',
    uploadDate: '2026-10-07T13:47:53-07:00',
    duration: 'PT1M41S',
  },
  lehiRebuildShort: {
    id: 'Hl7jtWDu5r8',
    title: 'Lehi, Utah Deck Rebuild in 45 Seconds | TimberTech Dark Cocoa + Fortress Rails',
    description: 'A full Lehi, Utah deck rebuild in under a minute: a 19 x 12 ft elevated deck with TimberTech Dark Cocoa composite decking and hidden fasteners, Fortress FE26 Black Sand railing, and LED stair and post lights.',
    uploadDate: '2026-10-07T13:58:08-07:00',
    duration: 'PT46S',
  },
  utahCountyTour: {
    id: 'sdK-1Z81bpA',
    title: 'Composite Deck Builds Around Utah County | TC Decks Project Tour',
    description: 'A tour of composite decks, patios and pergolas TC Decks has built across Utah County and Salt Lake County with Trex, TimberTech and Deckorators decking.',
    uploadDate: '2023-04-14T11:57:10-07:00',
    duration: 'PT1M10S',
  },
} satisfies Record<string, Video>;

// City pages that have a local project video.
export const cityVideos: Record<string, Video> = {
  lehi: videos.lehiRebuild,
  'saratoga-springs': videos.saratogaSprings,
};
