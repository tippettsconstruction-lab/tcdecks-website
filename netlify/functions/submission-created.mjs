// Runs on every verified Netlify Forms submission (Netlify calls functions with this
// name automatically). It emails the estimate request from the business Gmail account
// with a clear subject, and tags likely spam with "[Likely spam]" so a Gmail filter
// can keep it out of the inbox. Nothing is deleted: every submission is still in
// Netlify > Forms and still gets an email.
//
// Needs two environment variables in Netlify (scope: Functions):
//   GMAIL_USER          the Gmail address that sends and receives these emails
//   GMAIL_APP_PASSWORD  a Google app password for that account
// Optional: NOTIFY_TO (defaults to GMAIL_USER).
// Until they are set this function does nothing, and Netlify's own form
// notification emails keep working as before.
import nodemailer from 'nodemailer';
import { scoreSubmission } from './lib/spam-score.mjs';

const LABELS = {
  name: 'Name',
  phone: 'Phone',
  email: 'Email',
  city: 'City',
  project: 'Project',
  dimensions: 'Approximate size',
  height: 'Height off the ground',
  steps: 'Stairs / steps',
  material: 'Material or color',
  message: 'Description',
  design: 'Deck Planner design',
  design_image: 'Deck Planner drawing',
  photo1: 'Photo 1',
  photo2: 'Photo 2',
  photo3: 'Photo 3',
};

const value = (v) => (typeof v === 'string' ? v : v && typeof v === 'object' && v.url ? v.url : '').trim();

export const handler = async (event) => {
  const { payload } = JSON.parse(event.body || '{}');
  if (payload?.form_name !== 'estimate') return { statusCode: 200, body: 'ignored' };

  const data = payload.data ?? {};
  const { score, likelySpam, reasons } = scoreSubmission(data);
  console.log(`estimate ${payload.id}: spam score ${score}`, reasons);

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) {
    console.log('GMAIL_USER / GMAIL_APP_PASSWORD not set; leaving email to Netlify notifications.');
    return { statusCode: 200, body: 'no mail credentials' };
  }

  const name = value(data.name) || 'Unknown';
  const city = value(data.city);
  const subject = `${likelySpam ? '[Likely spam] ' : ''}Estimate request: ${name}${city ? `, ${city}` : ''}`;

  const lines = Object.entries(LABELS)
    .map(([key, label]) => [label, value(data[key])])
    .filter(([, v]) => v)
    .map(([label, v]) => (v.includes('\n') ? `${label}:\n${v}` : `${label}: ${v}`));

  const body = [
    ...lines,
    '',
    `Sent from: ${payload.data?.referrer || 'tcdecksutah.com'}`,
    `Spam score: ${score}${likelySpam ? ' (likely spam)' : ''}`,
    ...reasons.map((r) => `  ${r}`),
    '',
    'All submissions: https://app.netlify.com/ (Forms > estimate)',
  ].join('\n');

  const replyTo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value(data.email)) ? value(data.email) : undefined;

  const transport = nodemailer.createTransport({ service: 'gmail', auth: { user, pass } });
  await transport.sendMail({
    from: `"TC Decks website" <${user}>`,
    to: process.env.NOTIFY_TO || user,
    replyTo,
    subject,
    text: body,
  });
  return { statusCode: 200, body: 'sent' };
};
