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
  },
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
    slug: 'deck-repair',
    name: 'Deck Repair & Rebuild',
    short: 'Snow damage, rotted framing, and full tear-out and replace.',
  },
];

export type City = {
  slug: string;
  name: string;
  intro: string;
  notes: string[];
};

// Local notes are deliberately factual and specific; add real projects per city as photos arrive.
export const cities: City[] = [
  {
    slug: 'saratoga-springs',
    name: 'Saratoga Springs',
    intro:
      'Saratoga Springs is home base for TC Decks. We know the neighborhoods, the city permit process, and how hot an unshaded west-facing backyard gets in July, so we design for that from the start.',
    notes: [
      'Many newer homes have walk-out basements, which means second-story decks with stairs to the yard.',
      'Hot west-facing backyards are common; lighter composite colors and a pergola keep the surface comfortable.',
      'We handle the Saratoga Springs building permit and inspections for you.',
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
      'We pull the Lehi City permit and schedule the inspections.',
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
      'We handle the American Fork permit process.',
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
    slug: 'orem',
    name: 'Orem',
    intro:
      'Orem has many established homes with original wood decks, and replacing them with low-maintenance composite is one of our most common projects.',
    notes: [
      'Tear-out and rebuild on existing footings when they pass inspection, which can save cost.',
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
