// Generates public/_redirects (Netlify / Cloudflare Pages format).
// Old blog posts that haven't been migrated 301 to the most relevant new page.
// Rerun after adding posts to src/content/blog: `node scripts/build-redirects.mjs`.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

const kept = new Set(readdirSync('src/content/blog').map((f) => f.replace(/\.md$/, '')));
const slugs = readFileSync('scripts/old-blog-slugs.txt', 'utf8').split('\n').filter(Boolean);

// First matching rule wins; order from most to least specific.
const rules = [
  [/cost|saving-money|value/, '/how-much-does-a-deck-cost-in-utah'],
  [/ground-screw|footing|foundation/, '/blog/rethinking-deck-foundations-ground-screws-the-modern-alternative-to-concrete-footings'],
  [/spiced-rum|lava-rock|havana-gold|pebble-grey-decking-trex-signature|custom-deck-build-in-lehi|drainage-systems-installed/, '/project-showcase'],
  [/alpine/, '/service-areas/alpine'],
  [/highland/, '/service-areas/highland'],
  [/lehi/, '/service-areas/lehi'],
  [/eagle-mountain/, '/service-areas/eagle-mountain'],
  [/pleasant-grove/, '/service-areas/pleasant-grove'],
  [/provo/, '/service-areas/provo'],
  [/pergola|trellis|shade|covered/, '/pergolas'],
  [/porch|railing|fortress|stairs/, '/porches-railings'],
  [/repair|rebuild|replace|snow|renovation|revamping|winter|safety|maintain|looking-great/, '/deck-replacement'],
  [/wood-vs-composite|composite-decking-vs-wood|materials-last|material-last|decking-materials|ipe|hardwood/, '/blog/wood-vs-composite-performance-in-utahs-weather'],
  [/composite|trex|timber-tech|timbertech|deckorators|azek|pvc|color/, '/composite-decks'],
  [/builder|contractor|licensed|professional|celebrating|20-years|why-tc-decks|what-to-expect/, '/about'],
  [/.*/, '/custom-deck-design-construction'],
];

const lines = [
  '# Old site pages',
  '/home/highland  /service-areas/highland  301',
  '/home/orem  /service-areas/orem  301',
  '/photo-gallery  /project-showcase  301',
  '/accessibility-statement  /privacy  301',
  '/cookie-policy  /privacy  301',
  '/about-us  /about  301',
  '/owens-corning  /oc-lumber  301',
  '/deck-repair  /deck-replacement  301',
  '/design-ideas/decking-colors  /design-ideas/composite-decking  301',
  '/blog/category/*  /blog  301',
  '',
  '# Old blog posts (not migrated) -> closest new page',
];
for (const slug of slugs) {
  if (kept.has(slug)) continue;
  const target = rules.find(([re]) => re.test(slug))[1];
  lines.push(`/blog/${slug}  ${target}  301`);
}
writeFileSync('public/_redirects', lines.join('\n') + '\n');
console.log(`${lines.length} lines written`);
