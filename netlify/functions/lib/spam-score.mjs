// Scores an estimate-form submission for spam. Nothing is dropped: a high score only
// changes the email subject to "[Likely spam]" so Gmail can file it away from the inbox.
// Most spam on this form is typed by people selling something (SEO, websites, domains,
// drafting) or the "what email can I send my plans to?" phishing scam, so content
// matters more than bot checks.

const STRONG = [
  /\bseo\b/i,
  /search engine/i,
  /\bdomain( name)?\b/i,
  /backlinks?/i,
  /web ?design/i,
  /(new|free|redesign(ed)?) (preview of a )?(new )?website/i,
  /free preview/i,
  /google (ranking|maps ranking|first page)|first page of google|rank(ing)? higher/i,
  /per click|\bppc\b|google ads/i,
  /marketing|lead generation|more leads|booked jobs/i,
  /drafting|draftsman|permit drawings|3d renders?:/i,
  /\b(my|our) (services|team can|agency|company offers)\b/i,
  /virtual assistant|outsourc|bookkeeping|answering service/i,
  /reply ["“]?(stop|interested|yes)["”]?/i,
  /\bunsubscribe\b/i,
  /(best|right|correct) email( address)? (to|where)/i,
  /email address to send/i,
  /send (you )?(the |my )?(documents|plans|specifications|bid documents)/i,
];

// Weak signals only: real homeowners say "website" or "pricing" too, so those are left out.
const MEDIUM = [
  /highly recommended/i,
  /\bdocuments?\b/i,
  /specifications/i,
  /https?:\/\//i,
];

const text = (v) => (typeof v === 'string' ? v : v && typeof v === 'object' && v.url ? v.url : '').trim();

function phoneIssue(raw) {
  const digits = raw.replace(/\D/g, '');
  if (!digits) return 'no phone number';
  const us = digits.length === 11 && digits.startsWith('1') ? digits.slice(1) : digits;
  if (us.length !== 10) return `phone is not a US number (${raw})`;
  // US area codes and exchanges never start with 0 or 1; 555-01xx numbers are reserved for fiction.
  if (/^[01]/.test(us) || /^...[01]/.test(us) || /^...55501\d\d$/.test(us)) return `fake phone number (${raw})`;
  return null;
}

/** @param {Record<string, unknown>} data Netlify form submission data */
export function scoreSubmission(data) {
  const reasons = [];
  let score = 0;
  const add = (n, why) => { score += n; reasons.push(`+${n} ${why}`); };

  const message = [data.message, data.dimensions, data.height, data.steps, data.material].map(text).join('\n');

  const phone = phoneIssue(text(data.phone));
  if (phone) add(2, phone);

  const seconds = text(data.form_seconds);
  if (!seconds) add(2, 'sent without the page script (likely a bot posting directly)');
  else if (Number(seconds) < 5) add(2, `form filled in ${seconds} s`);

  for (const re of STRONG) if (re.test(message)) add(2, `sales/scam wording (${re.source})`);
  for (const re of MEDIUM) if (re.test(message)) add(1, `wording (${re.source})`);

  const junk = ['dimensions', 'height', 'steps', 'material'].filter((k) => /^[a-z]{1,2}$/i.test(text(data[k])));
  if (junk.length >= 2) add(1, 'junk letters in size/height/stairs fields');

  return { score, likelySpam: score >= 3, reasons };
}
