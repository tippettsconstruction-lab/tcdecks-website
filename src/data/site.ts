// Single source of truth for business details used across pages and schema.
export const business = {
  name: 'TC Decks',
  legalName: 'Tippetts Construction',
  owner: 'Levi Tippetts',
  founded: 2005,
  phone: '801-472-8939',
  phoneHref: 'tel:+18014728939',
  email: 'tippettsconstruction@gmail.com',
  license: '5899795-5501',
  url: 'https://www.tcdecksutah.com',
  city: 'Saratoga Springs',
  region: 'UT',
  hours: 'Mon–Sat, 7am–8pm',
  hoursSchema: ['Mo-Sa 07:00-20:00'],
  rating: { value: 4.9, count: 34 },
  social: {
    instagram: 'https://www.instagram.com/tcdecks/',
    youtube: 'https://www.youtube.com/@TCDecksUtah',
    google: 'https://maps.app.goo.gl/1W1stqWWx51keaLo8',
    facebook: 'https://www.facebook.com/p/Tippetts-Construction-inc-100057218539784/',
  },
  // One plain, quotable description of the business. Search engines and AI assistants
  // lift sentences like this verbatim, so keep it factual and in sync with the GBP description.
  summary:
    'TC Decks (Tippetts Construction) is a family-owned deck builder based in Saratoga Springs, Utah, founded by Levi Tippetts in 2005. It designs and builds custom composite decks, covered decks, pergolas, porches and railings, and full deck tear-out and rebuilds, across Utah County and Salt Lake County.',
  credentials: [
    'TimberTech Platinum Pro',
    'Trex Pro Installer',
    'Deckorators Pro Installer',
    'Fortress Building Products Pro Installer',
    'Owens Corning OC Lumber Pro Build Team',
  ],
  memberships: ['North American Deck and Railing Association (NADRA)', 'National Association of Home Builders (NAHB)'],
  specialties: [
    'Composite deck installation',
    'PVC decking',
    'TimberTech decks',
    'Trex decks',
    'Steel deck framing',
    'Second-story decks',
    'Covered decks',
    'Pergolas',
    'Deck railing',
    'Deck tear-out and rebuild',
    'Under-deck drainage',
    'Deck lighting',
  ],
};

export const yearsInBusiness = new Date().getFullYear() - business.founded;

export const services = [
  {
    slug: 'custom-deck-design-construction',
    name: 'Custom Decks',
    short: 'Designed around your home, built to last through Utah winters.',
  },
  {
    slug: 'composite-decks',
    name: 'Composite Decks',
    short: 'TimberTech PVC and composite, installed to manufacturer spec so the warranty holds.',
  },
  {
    slug: 'pergolas',
    name: 'Pergolas & Covered Patios',
    short: 'Shade that makes your deck usable through July and August.',
  },
  {
    slug: 'porches-railings',
    name: 'Porches & Railings',
    short: 'Front porches, stairs, and aluminum, cable or vinyl railing.',
  },
  {
    slug: 'deck-replacement',
    name: 'Deck Tear-Out & Rebuild',
    short: 'Full tear-out of a worn deck and a new one built from the footings up.',
  },
];

export type City = {
  slug: string;
  name: string;
  intro: string;
  notes: string[];
  county?: 'Utah County' | 'Salt Lake County';
};

// Local notes are deliberately factual and specific; add real projects per city as photos arrive.
export const cities: City[] = [
  {
    slug: 'saratoga-springs',
    name: 'Saratoga Springs',
    intro:
      'Saratoga Springs is home base for TC Decks. We know the neighborhoods and how hot an unshaded west-facing backyard gets in July, so we design for that from the start.',
    notes: [
      'Many newer homes have walk-out basements, which means second-story decks with stairs to the yard.',
      'Hot west-facing backyards are common; lighter composite colors and a pergola keep the surface comfortable.',
    ],
  },
  {
    slug: 'lehi',
    name: 'Lehi',
    intro:
      'From older homes near Main Street to new builds around Traverse Mountain, Lehi decks range from simple ground-level patios to tall decks on sloped lots.',
    notes: [
      'Hillside lots around Traverse Mountain often need taller posts and engineered footings.',
      'Older Lehi decks are frequently ready for a tear-out and composite rebuild.',
    ],
  },
  {
    slug: 'eagle-mountain',
    name: 'Eagle Mountain',
    intro:
      'Eagle Mountain yards are wide open, windy, and see strong sun, so material choice and solid footings matter more here than almost anywhere in Utah County.',
    notes: [
      'Ground screws can speed up footings in Eagle Mountain soil and avoid waiting on concrete.',
      'Wind exposure makes railing choice and pergola anchoring important.',
      'Large lots leave room for multi-level decks and outdoor kitchens.',
    ],
  },
  {
    slug: 'american-fork',
    name: 'American Fork',
    intro:
      'American Fork has a mix of established neighborhoods and new construction, so we build everything from replacement decks on 1990s homes to brand-new composite decks.',
    notes: [
      'Many older decks here are pressure-treated wood that has reached the end of its life.',
      'Covered decks are popular for views toward the mountains.',
    ],
  },
  {
    slug: 'pleasant-grove',
    name: 'Pleasant Grove',
    intro:
      'Pleasant Grove homes along the bench have great views of Timpanogos, and a well-placed deck makes the most of them.',
    notes: [
      'Bench lots often slope, which suits raised decks with under-deck storage or a dry patio using Trex RainEscape.',
      'Cable and glass-style railings keep mountain views open.',
    ],
  },
  {
    slug: 'lindon',
    name: 'Lindon',
    county: 'Utah County',
    intro:
      'Lindon sits on the bench between Pleasant Grove and Orem, and many backyards here look straight out over Utah Valley.',
    notes: [
      'Larger Lindon lots have room for wide, low decks with angled stairs and built-in lighting.',
      'Composite decking and railing hold up to the sun and the winters without staining.',
    ],
  },
  {
    slug: 'highland',
    name: 'Highland',
    intro:
      'Highland homes tend to have larger lots and bigger outdoor projects: multi-level decks, outdoor kitchens and full covered entertaining spaces.',
    notes: [
      'Multi-level decks connect upper living areas with patios and pools.',
      'Premium composite and PVC lines are a common choice for larger Highland builds.',
    ],
  },
  {
    slug: 'alpine',
    name: 'Alpine',
    intro:
      'Alpine decks see heavy snow loads and big temperature swings, so we size framing and footings for real mountain-bench winters.',
    notes: [
      'Snow load and drainage drive design choices here.',
      'Built-in seating and covered sections extend the season.',
    ],
  },
  {
    slug: 'cedar-hills',
    name: 'Cedar Hills',
    county: 'Utah County',
    intro:
      'Cedar Hills sits high on the bench below the mountains, so many backyards slope toward the valley and look out over Utah Lake.',
    notes: [
      'Sloped lots suit raised decks with stairs down to the yard and room for storage or a dry patio underneath.',
      'Higher elevation means more snow, so framing and footings are sized for real bench winters.',
    ],
  },
  {
    slug: 'orem',
    name: 'Orem',
    intro:
      'Orem has many established homes with original wood decks, and replacing them with low-maintenance composite is one of our most common projects.',
    notes: [
      'Full tear-out and rebuild with new footings, framing and composite decking.',
      'Front porch upgrades are popular on older Orem homes.',
    ],
  },
  {
    slug: 'provo',
    name: 'Provo',
    intro:
      'In Provo we remodel and replace decks on everything from rentals near campus to family homes on the east bench.',
    notes: [
      'Durable composite is a good fit for rentals that need low maintenance.',
      'We have completed Provo deck remodels with Trex Pebble Grey decking and white vinyl railing.',
    ],
  },
  {
    slug: 'vineyard',
    name: 'Vineyard',
    intro:
      'Vineyard’s newer homes often have smaller yards, so we focus on smart layouts that make the most of every square foot.',
    notes: [
      'Compact decks with built-in benches and planters.',
      'Pergolas add privacy between closely spaced homes.',
    ],
  },
  {
    slug: 'santaquin',
    name: 'Santaquin',
    intro:
      'Santaquin has roomy lots and plenty of sun at the south end of Utah County, a good fit for wide decks with a pergola for shade.',
    notes: [
      'Ranch-style homes often get a low deck off the back door, sometimes with a second level stepping down to the yard.',
      'A natural wood pergola takes the edge off the afternoon sun.',
    ],
  },
  {
    slug: 'spanish-fork',
    name: 'Spanish Fork',
    county: 'Utah County',
    intro:
      'Spanish Fork has grown fast, with new neighborhoods alongside established homes, so we build both brand-new composite decks and full tear-outs of aging wood decks.',
    notes: [
      'Newer homes with walk-out basements often need second-story decks with stairs to the yard.',
      'Canyon winds make solid footings, railing choice and pergola anchoring important.',
    ],
  },
  {
    slug: 'springville',
    name: 'Springville',
    county: 'Utah County',
    intro:
      'Springville mixes older homes near downtown with newer builds on the east bench, and many backyards have big views of the mountains.',
    notes: [
      'Older wood decks are often ready for a full rebuild with composite decking and aluminum railing.',
      'Covered decks and pergolas make west-facing yards comfortable on summer afternoons.',
    ],
  },
  {
    slug: 'mapleton',
    name: 'Mapleton',
    county: 'Utah County',
    intro:
      'Mapleton has larger lots right up against the mountains, with room for wide decks, outdoor kitchens and covered entertaining spaces.',
    notes: [
      'Big lots leave room for multi-level decks and freestanding pavilions.',
      'Cable and glass-style railings keep the mountain views open.',
    ],
  },
  {
    slug: 'payson',
    name: 'Payson',
    county: 'Utah County',
    intro:
      'Payson homes range from established neighborhoods to new subdivisions on the edge of town, with roomy yards and plenty of afternoon sun.',
    notes: [
      'Low decks off the back door with a step-down second level are a common layout.',
      'A pergola or covered section takes the edge off the summer sun.',
    ],
  },
  {
    slug: 'sundance',
    name: 'Sundance',
    intro:
      'Cabins around Sundance and Provo Canyon deal with deep snow, steep wooded lots and short building seasons, so decks here have to be built for real mountain conditions.',
    notes: [
      'Framing and footings are sized for heavy snow loads on steep, rocky ground.',
      'Sauna and hot tub decks with privacy screens are popular for mountain cabins.',
    ],
  },
  {
    slug: 'draper',
    name: 'Draper',
    county: 'Salt Lake County',
    intro:
      'Draper backyards range from flat lots in the valley to steep hillside homes with big views, so we build everything from low two-tone decks to tall decks with long stair runs.',
    notes: [
      'Hillside lots often need taller posts, engineered footings and cable or glass railing to keep the view.',
      'Built-in benches and planters along the rail line add seating without crowding the deck.',
    ],
  },
  {
    slug: 'sandy',
    name: 'Sandy',
    county: 'Salt Lake County',
    intro:
      'Many Sandy homes were built in the 1970s through 1990s, and a lot of those original wood decks are ready to be replaced with low-maintenance composite.',
    notes: [
      'Tear-out and rebuild projects are common, often reusing the footprint with new framing and composite decking.',
      'East-side lots near the foothills get great mountain views worth designing around.',
    ],
  },
  {
    slug: 'south-jordan',
    name: 'South Jordan',
    county: 'Salt Lake County',
    intro:
      'South Jordan has a mix of established neighborhoods and newer communities with smaller yards, so smart layout matters as much as materials.',
    notes: [
      'On smaller lots, a covered deck or pergola adds usable outdoor space without giving up the yard.',
      'Some neighborhoods have HOA design rules; we plan colors and railing to fit them.',
    ],
  },
  {
    slug: 'west-jordan',
    name: 'West Jordan',
    county: 'Salt Lake County',
    intro:
      'From older homes on the east side to new construction on the west side, West Jordan projects include deck replacements, new composite decks and covered patios.',
    notes: [
      'Older wood decks are often ready for a composite rebuild with modern aluminum railing.',
      'Newer homes with walk-out basements need second-story decks with stairs to the yard.',
    ],
  },
  {
    slug: 'herriman',
    name: 'Herriman',
    county: 'Salt Lake County',
    intro:
      'Herriman is full of newer homes, many with walk-out basements and open yards that catch strong afternoon sun and wind.',
    notes: [
      'Second-story decks with covered patios underneath are a popular way to use both levels.',
      'A covered roof or pergola makes a west-facing deck usable on summer afternoons.',
    ],
  },
  {
    slug: 'riverton',
    name: 'Riverton',
    county: 'Salt Lake County',
    intro:
      'Riverton has established family neighborhoods with good-sized backyards, a great fit for larger decks, hot tub decks and covered seating areas.',
    notes: [
      'Hot tub decks need framing sized for the extra weight; we plan for it from the start.',
      'Replacing an aging wood deck with composite cuts out yearly staining for good.',
    ],
  },
  {
    slug: 'bluffdale',
    name: 'Bluffdale',
    county: 'Salt Lake County',
    intro:
      'Bluffdale has some of the largest lots in the valley, with room for big multi-level decks, outdoor kitchens and timber pavilions.',
    notes: [
      'Large, open lots leave room for multi-level decks and freestanding pavilions.',
      'Wind exposure makes footings, railing choice and roof anchoring important.',
    ],
  },
];

// Real Google reviews. Replace with names/initials once the owner confirms permission.
export const reviews = [
  {
    text: 'Levi is very professional in his work. Very detailed in his quality of work. Communication is very fast.',
    author: 'Google review',
  },
  {
    text: 'Levi was fantastic to work with. He was patient and responsive as we figured out how we wanted to rebuild our deck.',
    author: 'Google review',
  },
  {
    text: 'Levi was amazing. Very patient in dealing with our uncertainty and variations in our other work being done in our yard.',
    author: 'Google review',
  },
];

export const brands = ['TimberTech (our top pick)', 'Fortress railing & steel framing', 'Trex', 'Deckorators', 'Fiberon'];
