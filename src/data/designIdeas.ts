// Design Ideas section, adapted from TC Decks' customer Design & Selection Guide.
// Add photos by setting `image` on a feature (path under /public/images/design-ideas/).

export type Feature = { name: string; text: string; image?: string };
export type IdeaPage = {
  slug: string;
  name: string;
  title: string;
  description: string;
  intro: string;
  cover?: string;
  gallery?: string[];
  features: Feature[];
  note?: string;
};

export const ideaPages: IdeaPage[] = [
  {
    slug: 'decking-colors',
    cover: '/images/ideas/blue-gray-composite-deck-sunset',
    gallery: ["/images/ideas/blue-gray-composite-deck-sunset", "/images/ideas/composite-deck-pergola-beam", "/images/ideas/gray-composite-deck-black-railing", "/images/ideas/light-gray-deck-cable-railing", "/images/ideas/two-tone-deck-mountain-view", "/images/ideas/natural-wood-deck-railing", "/images/ideas/hardwood-deck-stairs-lights"],
    name: 'Decking & Colors',
    title: 'TimberTech Decking Colors & Lines | Good, Better, Best | TC Decks',
    description: 'Compare TimberTech decking lines from Prime+ to Legacy and Vintage. See colors and textures, and how TC Decks helps Utah homeowners choose the right board.',
    intro: 'We recommend TimberTech for most of our decks. Its capped PVC boards stay cooler, resist fading and staining, and are fully encapsulated so moisture can’t get in. The lines are grouped good, better and best, so there’s a great-looking option for every budget.',
    features: [
      { name: 'Good: Prime+, Premier, Terrain, Terrain+', text: 'Solid colors and simple wood-grain looks at the most budget-friendly price. A great fit for rentals, ground-level decks and anyone who wants low maintenance without the premium price.' },
      { name: 'Better: Harvest, Harvest+, Landmark, Reserve', text: 'Richer, multi-tonal color and more realistic wood grain. Reserve and Landmark have the hand-scraped and reclaimed-wood look many homeowners love.' },
      { name: 'Best: Legacy, Vintage', text: 'TimberTech’s top lines, with the most natural-looking color variation, the coolest surface temperatures and the longest warranties.' },
      { name: 'Color & texture guide', text: 'Seeing boards in person makes the decision easy. We bring samples so you can compare colors against your siding, trim and roof in real daylight.' },
    ],
  },
  {
    slug: 'design-details',
    cover: '/images/ideas/two-tone-deck-wrapped-stairs-lights',
    gallery: ["/images/ideas/two-tone-deck-border-railing", "/images/ideas/two-tone-entry-steps-lights", "/images/ideas/wide-cascading-composite-stairs", "/images/ideas/wrap-around-stairs-riser-lights", "/images/ideas/built-in-deck-bench"],
    name: 'Design Details',
    title: 'Deck Design Details: Picture Frame, Inlays, Two-Tone & Curved Decks | TC Decks',
    description: 'Deck design ideas that add character: picture-frame borders, breaker boards, two-tone colors, mixed-width boards, inlays, curved boards and cascading stairs.',
    intro: 'Small details are what make a deck look custom instead of cookie-cutter. Here are the upgrades we use most, from what comes standard on every TC Decks build to the eye-catching extras.',
    features: [
      { name: 'What comes standard', text: 'Every TC Decks build includes quality decking, clean finished edges and installation to manufacturer spec. The options below are where you can add character. Ask us exactly what’s included in your quote.' },
      { name: 'Picture-frame borders', image: '/images/ideas/picture-frame-border-composite-deck', text: 'A border of boards around the edge hides the cut ends and gives the deck a finished, framed look.' },
      { name: 'Breaker boards', image: '/images/ideas/breaker-board-composite-deck', text: 'A perpendicular board that breaks up long runs, eliminates butt joints and adds a clean line through the deck.' },
      { name: 'Two-tone color', image: '/images/ideas/two-tone-deck-wrapped-stairs-lights', text: 'A contrasting border, breaker or stair nosing color adds depth and ties the deck to your home’s trim.' },
      { name: 'Hidden fasteners', text: 'TimberTech Cortex plugs and hidden clip systems keep the surface smooth and screw-free.' },
      { name: 'Mixed-width layouts', text: 'Combining board widths creates a modern, high-end look that reads like interior flooring.' },
      { name: 'Inlays & patterns', image: '/images/ideas/hardwood-parquet-deck-pattern', text: 'Herringbone, diagonal, and custom inlays like medallions turn the deck surface into a feature.' },
      { name: 'Curved boards', text: 'Heat-bent boards follow curved edges and steps for a softer, flowing shape.' },
      { name: 'Cascading stairs', image: '/images/ideas/cascading-wrap-around-deck-stairs', text: 'Wide, wrapping stairs that step down from the deck double as extra seating and make a dramatic entrance to the yard.' },
    ],
  },
  {
    slug: 'railings',
    cover: '/images/ideas/gray-composite-deck-mountain-view-railing',
    gallery: ["/images/ideas/gray-composite-deck-mountain-view-railing", "/images/ideas/white-and-black-deck-railing-corner", "/images/ideas/white-vinyl-railing-wide-stairs", "/images/ideas/white-railing-front-deck", "/images/ideas/deck-bench-black-railing"],
    name: 'Railings',
    title: 'Deck Railing Ideas: Aluminum, Glass, Cable & Privacy | TC Decks',
    description: 'Deck railing options from TC Decks: Fortress FE26 aluminum in Black Sand, frameless glass, cable, horizontal rod, Wild Hog mesh, privacy railing, drink rails and gates.',
    intro: 'Railing is one of the most visible parts of a deck. Our go-to is Fortress FE26 aluminum in Black Sand, a sleek, strong, low-maintenance rail that suits almost any home. When you want something different, these are the options we install.',
    features: [
      { name: 'Our go-to: Fortress FE26 in Black Sand', image: '/images/ideas/black-aluminum-deck-railing', text: 'Powder-coated aluminum with slim balusters and a textured black finish. Strong, rust-resistant and never needs painting.' },
      { name: 'Drink rail', text: 'A wide top cap on the railing gives you a place to set drinks and plates, and turns the edge of the deck into a bar-height counter.' },
      { name: 'Gates', image: '/images/ideas/deck-railing-gate', text: 'Matching gates at the top of stairs keep kids and pets safe and give you easy yard access.' },
      { name: 'Frameless glass', image: '/images/ideas/glass-panel-deck-railing-stairs', text: 'Glass panels with minimal hardware for completely open views of the mountains or lake.' },
      { name: 'Privacy railing', image: '/images/ideas/privacy-railing-second-story-deck', text: 'Taller, solid or slatted privacy panels block sightlines from neighbors without building a wall.' },
      { name: 'TimberTech HideAway privacy screens', image: '/images/projects/highland-english-walnut-hideaway/timbertech-hideaway-privacy-screen-sunset', text: 'Black aluminum panels with a cut geometric pattern. They block the view from next door but still let light and breeze through, like this Highland hot tub deck.' },
      { name: 'Wild Hog mesh panels', image: '/images/ideas/pergola-deck-mesh-railing-panels', text: 'Welded mesh inserts with an industrial, modern look that stay see-through.' },
      { name: 'Horizontal rod rail', image: '/images/ideas/horizontal-rod-deck-railing', text: 'Clean horizontal lines that feel modern and keep views open.' },
      { name: 'Cable rail', image: '/images/ideas/cable-railing-composite-deck', text: 'Stainless cables are nearly invisible from a distance, a favorite for decks with a view.' },
    ],
  },
  {
    slug: 'roofs-shade',
    cover: '/images/ideas/gable-roof-covered-deck-stone-columns',
    gallery: ["/images/ideas/gable-roof-covered-deck-stone-columns", "/images/ideas/gable-roof-entry-deck-wide-stairs", "/images/ideas/covered-two-story-deck-white-columns", "/images/ideas/covered-deck-patio-below", "/images/ideas/cedar-pergola-composite-deck", "/images/ideas/second-story-pergola-deck", "/images/ideas/stained-pergola-deck-black-railing", "/images/ideas/garden-trellis-arbor"],
    name: 'Roofs & Shade',
    title: 'Covered Deck, Pergola & Louvered Roof Ideas in Utah | TC Decks',
    description: 'Ways to shade your Utah deck: wood-framed roofs, open timber roofs, polycarbonate panels, louvered roof systems, pergolas, shade sails and aluminum patio covers.',
    intro: 'Utah sun can make an uncovered deck too hot to use on summer afternoons. A roof or shade structure turns it into an outdoor room. Here are the options we build, from full roofs to simple shade.',
    features: [
      { name: 'Solid wood-framed roof', image: '/images/projects/covered-deck-roof/covered-deck-roof-framing-1', text: 'A shingled or metal roof that matches the house, with full protection from sun, rain and snow.' },
      { name: 'Open-soffit timber roof', image: '/images/ideas/cedar-soffit-gable-roof-deck', text: 'Exposed beams and rafters for a warm, lodge-style look with full coverage.' },
      { name: 'Timber roof with polycarbonate panels', text: 'Clear or tinted panels let in light but block rain and UV, so the space stays bright.' },
      { name: 'Louvered roof systems', text: 'Motorized aluminum louvers open for sun or close for shade and rain at the push of a button.' },
      { name: 'Pergolas', image: '/images/ideas/pergola-deck-view', text: 'Open beams and rafters give filtered shade and a defined outdoor living space.' },
      { name: 'Shade sails & awnings', text: 'Tensioned fabric sails and retractable awnings are an affordable way to add shade where you need it.' },
      { name: 'Aluminum patio covers', text: 'Low-maintenance insulated or lattice aluminum covers that won’t rot or need painting.' },
      { name: 'Pre-built kits', text: 'For budget-conscious projects, we can assemble and anchor quality pre-built pergola and gazebo kits.' },
    ],
  },
  {
    slug: 'lighting',
    cover: '/images/ideas/covered-deck-lighting-night',
    gallery: ["/images/ideas/covered-deck-lighting-night", "/images/ideas/wrap-around-stairs-lights-dusk", "/images/ideas/hot-tub-deck-step-lights"],
    name: 'Lighting',
    title: 'Deck Lighting Ideas: Post Caps, Stair, Recessed & String Lights | TC Decks',
    description: 'Low-voltage deck lighting ideas from TC Decks: post cap lights, stair riser lights, recessed in-deck lights, under-rail accents, bistro lights, fiber optic and color options.',
    intro: 'Good lighting makes a deck safer at night and lets you use it long after sunset. We install low-voltage LED systems that sip power and last for years.',
    features: [
      { name: 'Stair riser lights', image: '/images/ideas/deck-stair-riser-lights', text: 'Small lights set into each stair riser so every step is visible after dark.' },
      { name: 'Post cap lights', text: 'Lights built into the railing post caps cast a soft glow across the deck.' },
      { name: 'Recessed in-deck lights', image: '/images/ideas/recessed-deck-lights', text: 'Flush lights set into the deck boards mark edges and walkways.' },
      { name: 'Under-rail accent lighting', image: '/images/ideas/under-rail-accent-light', text: 'Hidden strips under the top rail wash the deck surface with light without glare.' },
      { name: 'Bistro & string lights', text: 'Overhead string lights on a pergola or posts set a relaxed, party-ready mood.' },
      { name: 'Fiber optic lighting', image: '/images/ideas/fiber-optic-under-deck-lights', text: 'Pinpoints of light set into the deck or stairs for a starry, high-end effect.' },
      { name: 'Color options', text: 'Choose soft white, warm white or full-color RGBW, plus trim finishes to match your railing.' },
    ],
  },
  {
    slug: 'add-ons',
    cover: '/images/ideas/hot-tub-surround-deck-lights',
    gallery: ["/images/ideas/hot-tub-deck-steps", "/images/ideas/aerial-deck-with-slide", "/images/ideas/under-deck-storage-shed", "/images/ideas/built-in-deck-bench"],
    name: 'Add-Ons & Custom Features',
    title: 'Deck Add-Ons: Outdoor Kitchens, Hot Tubs, Fire Pits & Storage | TC Decks',
    description: 'Custom deck features from TC Decks: under-deck drainage, storage, hot tub and cold plunge decks, outdoor kitchens, privacy walls, planters, fire pits and beam wraps.',
    intro: 'These are the extras that make a deck yours. Most can be added during the build or planned in for later.',
    features: [
      { name: 'Under-deck drainage (Trex RainEscape)', image: '/images/ideas/under-deck-drainage-patio', text: 'A drainage system under a second-story deck keeps the space below dry, so it can become a patio or storage area.' },
      { name: 'Under-deck storage', image: '/images/ideas/under-deck-storage-doors', text: 'Enclose the space under a raised deck for bikes, tools and seasonal gear.' },
      { name: 'Hot tubs & pools', image: '/images/ideas/hot-tub-surround-deck-lights', text: 'Reinforced framing and a flush or partially recessed surround make a hot tub look built in.' },
      { name: 'Cold plunge & sauna', text: 'We plan the structure, access and electrical so wellness features fit cleanly into the deck.' },
      { name: 'Outdoor kitchens & tiki bars', text: 'Grill stations, counters and bar seating designed into the layout.' },
      { name: 'Furniture packages', text: 'Outdoor furniture sized for your layout so the space works from day one.' },
      { name: 'Waterfall benches', image: '/images/projects/sundance-cabin-english-walnut/timbertech-waterfall-bench-english-walnut-lights', text: 'Deck boards that curve down over the front of a built-in bench in one continuous piece, like this Sundance cabin sauna deck.' },
      { name: 'Privacy walls', image: '/images/ideas/privacy-wall-deck-lights', text: 'Slatted or solid walls screen neighbors and block wind.' },
      { name: 'Planter boxes', text: 'Built-in planters soften the deck and can double as a barrier.' },
      { name: 'Post & beam wrap (Diamond Kote)', image: '/images/ideas/wrapped-deck-columns', text: 'Pre-finished wraps give posts and beams a clean, low-maintenance finish.' },
      { name: 'Finished soffits', image: '/images/ideas/finished-under-deck-ceiling', text: 'A finished ceiling under the deck (like TimberTech DrySpace) hides framing and creates a covered patio below.' },
      { name: 'Slides & play features', image: '/images/ideas/deck-with-playground-slide', text: 'A slide off the deck or room for a play set turns the backyard into the kids’ favorite spot.' },
      { name: 'Fire pits', text: 'A fire feature with proper clearances for cool Utah evenings.' },
    ],
  },
  {
    slug: 'built-to-last',
    cover: '/images/ideas/steel-frame-second-story-deck',
    gallery: ["/images/ideas/steel-frame-second-story-deck", "/images/ideas/large-second-story-composite-deck"],
    name: 'Built to Last',
    title: 'How We Build Decks That Last: Steel Framing, Ground Screws & PVC | TC Decks',
    description: 'What goes into a TC Decks build: PVC decking, Fortress steel framing, G-Tape joist protection, American Ground Screw footings and code-compliant construction for Utah weather.',
    intro: 'The parts you don’t see decide how long a deck lasts. Here is what goes under and into a TC Decks build, and why.',
    features: [
      { name: 'PVC decking over composite', text: 'Fully capped PVC boards absorb almost no water, so they hold up to Utah freeze-thaw cycles and stay cooler in the sun.' },
      { name: 'Steel framing (Fortress Evolution)', image: '/images/ideas/steel-frame-deck-stairs', text: 'Steel joists and beams won’t rot, warp or twist, and give a perfectly flat deck surface for decades.' },
      { name: 'Joist protection (G-Tape)', text: 'On wood-framed decks, flashing tape on top of every joist keeps water out of screw holes and slows rot.' },
      { name: 'Stainless & coated fasteners', text: 'Corrosion-resistant screws and connectors rated for treated lumber and outdoor exposure.' },
      { name: 'Ground screw footings', text: 'American Ground Screw footings install fast with no concrete cure time and hold firm in Utah soils.' },
      { name: 'Ventilation & drainage', text: 'Proper airflow under the deck and water management at the house keep moisture from causing damage.' },
      { name: 'Code-compliant and load-ready', text: 'Every deck is designed and inspected to local code, with framing sized for snow loads, hot tubs and roofs.' },
    ],
    note: 'Ask us which of these fit your project and budget. Not every deck needs steel framing, but every deck gets built right.',
  },
];
