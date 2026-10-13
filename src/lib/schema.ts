import { business } from '../data/site';

export type Faq = { q: string; a: string };

export const faqSchema = (faqs: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: new URL(it.path, business.url).href,
  })),
});

export const serviceSchema = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name,
  description,
  url: new URL(path, business.url).href,
  provider: { '@id': `${business.url}/#business` },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Utah County, UT' },
    { '@type': 'AdministrativeArea', name: 'Salt Lake County, UT' },
  ],
});
