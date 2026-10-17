// Deck Planner: design model, plan geometry and canvas drawing (top view + 3D view).
// Units are feet. Plan coordinates: x runs along the house, y runs away from the house.

export type Side = 'front' | 'left' | 'right';

export type Design = {
  shape: 'rect' | 'l';
  width: number;
  depth: number;
  lWidth: number;
  lDepth: number;
  lSide: 'left' | 'right';
  attached: boolean;
  height: number;
  stairs: Side[];
  stairWidth: number;
  stairStyle: 'standard' | 'cascading';
  brand: string;
  line: string;
  color: string;
  colorName: string;
  frame: boolean;
  frameColor: string;
  direction: 'parallel' | 'perpendicular' | 'diagonal';
  framing: string;
  railing: string;
  railColor: string;
  extras: string[];
};

export const defaultDesign: Design = {
  shape: 'rect',
  width: 20,
  depth: 14,
  lWidth: 10,
  lDepth: 8,
  lSide: 'right',
  attached: true,
  height: 3,
  stairs: ['front'],
  stairWidth: 4,
  stairStyle: 'standard',
  brand: 'TimberTech',
  line: 'Help me choose',
  color: 'medium-gray',
  colorName: '',
  frame: true,
  frameColor: 'charcoal',
  direction: 'parallel',
  framing: 'Fortress Evolution steel',
  railing: 'aluminum',
  railColor: 'black',
  extras: [],
};

export const deckColors: Record<string, { label: string; hex: string }> = {
  'light-gray': { label: 'Light gray', hex: '#c6c4be' },
  'medium-gray': { label: 'Medium gray', hex: '#928f89' },
  charcoal: { label: 'Charcoal', hex: '#4d4b49' },
  driftwood: { label: 'Driftwood tan', hex: '#b89f80' },
  'medium-brown': { label: 'Medium brown', hex: '#8c6344' },
  'dark-brown': { label: 'Dark brown', hex: '#5b3e2c' },
  reddish: { label: 'Reddish brown', hex: '#9b4b2d' },
};

export const railColors: Record<string, { label: string; hex: string }> = {
  black: { label: 'Black', hex: '#1c1c1e' },
  white: { label: 'White', hex: '#f1f1f1' },
  bronze: { label: 'Bronze', hex: '#5a4632' },
  gray: { label: 'Gray', hex: '#8a8d90' },
};

export const railings: Record<string, string> = {
  aluminum: 'Aluminum (Fortress FE26 style)',
  glass: 'Frameless glass',
  cable: 'Cable',
  rod: 'Horizontal rod',
  composite: 'Composite',
  privacy: 'Privacy panels (HideAway style)',
  none: 'No railing / not sure',
};

export const extrasList: { id: string; label: string }[] = [
  { id: 'lighting', label: 'Deck lighting' },
  { id: 'pergola', label: 'Pergola' },
  { id: 'cover', label: 'Roof cover or louvered roof' },
  { id: 'privacy', label: 'Privacy wall or screen' },
  { id: 'hottub', label: 'Hot tub or cold plunge spot' },
  { id: 'firepit', label: 'Fire pit area' },
  { id: 'kitchen', label: 'Outdoor kitchen or bar' },
  { id: 'drainage', label: 'Under-deck drainage (Trex RainEscape)' },
  { id: 'storage', label: 'Under-deck storage' },
];

type Pt = [number, number];
type Pt3 = [number, number, number];

const RAIL_H = 3;
const TREAD = 11 / 12;
const RISE = 7.5 / 12;

export const clampDesign = (d: Design): Design => {
  const n = (v: number, lo: number, hi: number, dflt: number) => (Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : dflt);
  const width = n(d.width, 4, 80, 20);
  return {
    ...d,
    width,
    depth: n(d.depth, 4, 50, 14),
    lWidth: Math.min(width, n(d.lWidth, 4, 80, 10)),
    lDepth: n(d.lDepth, 4, 50, 8),
    height: n(d.height, 0, 25, 3),
    stairWidth: n(d.stairWidth, 3, 20, 4),
  };
};

export const footprint = (d: Design): Pt[] => {
  const { width: W, depth: D } = d;
  if (d.shape !== 'l') return [[0, 0], [W, 0], [W, D], [0, D]];
  const W2 = d.lWidth, D2 = d.lDepth;
  return d.lSide === 'right'
    ? [[0, 0], [W, 0], [W, D + D2], [W - W2, D + D2], [W - W2, D], [0, D]]
    : [[0, 0], [W, 0], [W, D], [W2, D], [W2, D + D2], [0, D + D2]];
};

export const area = (d: Design) => Math.round(d.width * d.depth + (d.shape === 'l' ? d.lWidth * d.lDepth : 0));

// Risers from the ground to the deck surface; a deck under ~8" needs no stairs.
export const stepCount = (d: Design) => (d.height * 12 < 8 ? 0 : Math.ceil((d.height * 12) / 7.5));

type Edge = { a: Pt; b: Pt; n: Pt; side?: Side | 'house' };

const edges = (d: Design): Edge[] => {
  const pts = footprint(d);
  const far = Math.max(...pts.map((p) => p[1]));
  return pts.map((a, i) => {
    const b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const n: Pt = [(b[1] - a[1]) / len, -(b[0] - a[0]) / len];
    let side: Edge['side'];
    if (n[1] < 0 && a[1] === 0) side = 'house';
    else if (n[1] > 0 && a[1] === far) side = 'front';
    else if (n[0] < 0 && a[0] === 0) side = 'left';
    else if (n[0] > 0 && Math.max(a[0], b[0]) === d.width) side = 'right';
    return { a, b, n, side };
  });
};

type Stair = { edge: Edge; t0: number; t1: number; steps: number; run: number };

// Stair sets: where they sit along their edge (t0..t1, in feet from edge start) and how far they reach out.
const stairSets = (d: Design): Stair[] => {
  const steps = stepCount(d);
  if (!steps) return [];
  return edges(d)
    .filter((e) => e.side && e.side !== 'house' && d.stairs.includes(e.side as Side))
    .map((edge) => {
      const len = Math.hypot(edge.b[0] - edge.a[0], edge.b[1] - edge.a[1]);
      const w = d.stairStyle === 'cascading' ? len : Math.min(len, d.stairWidth);
      const t0 = (len - w) / 2;
      return { edge, t0, t1: t0 + w, steps, run: (steps - 1) * TREAD + TREAD };
    });
};

const along = (e: Edge, t: number): Pt => {
  const len = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]);
  return [e.a[0] + ((e.b[0] - e.a[0]) * t) / len, e.a[1] + ((e.b[1] - e.a[1]) * t) / len];
};

// Railed spans: every edge except the house wall, minus stair openings.
const railSpans = (d: Design): { edge: Edge; t0: number; t1: number }[] => {
  if (d.railing === 'none' || d.height < 1.5) return [];
  const stairs = stairSets(d);
  const out: { edge: Edge; t0: number; t1: number }[] = [];
  for (const e of edges(d)) {
    if (e.side === 'house' && d.attached) continue;
    const len = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]);
    const s = stairs.find((st) => st.edge.a === e.a);
    if (!s) out.push({ edge: e, t0: 0, t1: len });
    else {
      if (s.t0 > 0.3) out.push({ edge: e, t0: 0, t1: s.t0 });
      if (len - s.t1 > 0.3) out.push({ edge: e, t0: s.t1, t1: len });
    }
  }
  return out;
};

// Plan rectangles for extras that get drawn on the deck.
type Box = { x0: number; y0: number; x1: number; y1: number };
const extraBoxes = (d: Design) => {
  const W = d.width, D = d.depth;
  const has = (id: string) => d.extras.includes(id);
  const r: Record<string, Box> = {};
  if (has('pergola') || has('cover')) r.cover = { x0: 0, y0: 0, x1: W, y1: Math.min(D, 12) };
  if (has('hottub')) {
    const s = Math.min(7.5, W - 1, D - 1);
    r.hottub = { x0: W - s - 0.5, y0: D - s - 0.5, x1: W - 0.5, y1: D - 0.5 };
  }
  if (has('kitchen')) r.kitchen = { x0: Math.max(0.5, W - 9), y0: 0.4, x1: W - 0.5, y1: 2.9 };
  if (has('firepit')) {
    if (d.shape === 'l') {
      const x0 = d.lSide === 'right' ? W - d.lWidth : 0;
      const cx = x0 + d.lWidth / 2, cy = D + d.lDepth / 2;
      r.firepit = { x0: cx - 1.75, y0: cy - 1.75, x1: cx + 1.75, y1: cy + 1.75 };
    } else {
      const cx = Math.min(W / 3, 7), cy = D - Math.min(D / 3, 5);
      r.firepit = { x0: cx - 1.75, y0: cy - 1.75, x1: cx + 1.75, y1: cy + 1.75 };
    }
  }
  return r;
};

const shade = (hex: string, amt: number) => {
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.round(Math.min(255, Math.max(0, amt < 0 ? c * (1 + amt) : c + (255 - c) * amt)));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
};

// Inset an axis-aligned polygon (clockwise in screen space) by dist.
const inset = (pts: Pt[], dist: number): Pt[] => {
  const es = pts.map((a, i) => {
    const b = pts[(i + 1) % pts.length];
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    return [-(b[1] - a[1]) / len, (b[0] - a[0]) / len] as Pt; // inward normal
  });
  return pts.map((p, i) => {
    const n1 = es[(i - 1 + pts.length) % pts.length], n2 = es[i];
    return [p[0] + dist * (n1[0] + n2[0]), p[1] + dist * (n1[1] + n2[1])];
  });
};

const setupCanvas = (canvas: HTMLCanvasElement, cssW: number, cssH: number) => {
  const dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(cssW * dpr);
  canvas.height = Math.round(cssH * dpr);
  const ctx = canvas.getContext('2d')!;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
};

const boardLines = (ctx: CanvasRenderingContext2D, d: Design, bounds: Box, map: (p: Pt) => [number, number]) => {
  const step = 0.47;
  const { x0, y0, x1, y1 } = bounds;
  ctx.beginPath();
  if (d.direction === 'parallel') for (let y = y0; y <= y1; y += step) { ctx.moveTo(...map([x0, y])); ctx.lineTo(...map([x1, y])); }
  else if (d.direction === 'perpendicular') for (let x = x0; x <= x1; x += step) { ctx.moveTo(...map([x, y0])); ctx.lineTo(...map([x, y1])); }
  else {
    const span = (x1 - x0) + (y1 - y0);
    for (let k = -span; k <= span; k += step * 1.41) { ctx.moveTo(...map([x0 + k, y0])); ctx.lineTo(...map([x0 + k + (y1 - y0), y1])); }
  }
  ctx.stroke();
};

/* ---------------- Top view ---------------- */

export function drawTop(canvas: HTMLCanvasElement, design: Design, cssW: number, cssH: number) {
  const d = clampDesign(design);
  const ctx = setupCanvas(canvas, cssW, cssH);
  const pts = footprint(d);
  const stairs = stairSets(d);
  const deckHex = deckColors[d.color]?.hex ?? '#928f89';
  const frameHex = deckColors[d.frameColor]?.hex ?? deckHex;
  const railHex = railColors[d.railColor]?.hex ?? '#1c1c1e';

  // Fit the deck, stairs and house strip, leaving room for dimension labels.
  let minX = 0, minY = d.attached ? -4 : 0, maxX = d.width, maxY = Math.max(...pts.map((p) => p[1]));
  for (const s of stairs) {
    const p0 = along(s.edge, s.t0), p1 = along(s.edge, s.t1);
    for (const p of [p0, p1]) {
      const q: Pt = [p[0] + s.edge.n[0] * s.run, p[1] + s.edge.n[1] * s.run];
      minX = Math.min(minX, q[0]); maxX = Math.max(maxX, q[0]); maxY = Math.max(maxY, q[1]);
    }
  }
  const pad = 34;
  const scale = Math.min((cssW - pad * 2) / (maxX - minX), (cssH - pad * 2) / (maxY - minY));
  const ox = (cssW - (maxX - minX) * scale) / 2 - minX * scale;
  const oy = (cssH - (maxY - minY) * scale) / 2 - minY * scale;
  const map = (p: Pt): [number, number] => [ox + p[0] * scale, oy + p[1] * scale];

  ctx.fillStyle = '#f4f5f2';
  ctx.fillRect(0, 0, cssW, cssH);

  // Grid, 1 ft (5 ft darker), over the visible area.
  const gx0 = Math.floor(-ox / scale), gx1 = Math.ceil((cssW - ox) / scale);
  const gy0 = Math.floor(-oy / scale), gy1 = Math.ceil((cssH - oy) / scale);
  for (let x = gx0; x <= gx1; x++) {
    ctx.strokeStyle = x % 5 === 0 ? '#dde0dc' : '#eaece8';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(ox + x * scale, 0); ctx.lineTo(ox + x * scale, cssH); ctx.stroke();
  }
  for (let y = gy0; y <= gy1; y++) {
    ctx.strokeStyle = y % 5 === 0 ? '#dde0dc' : '#eaece8';
    ctx.beginPath(); ctx.moveTo(0, oy + y * scale); ctx.lineTo(cssW, oy + y * scale); ctx.stroke();
  }

  if (d.attached) {
    const [hx0, hy0] = map([minX - 20, -4]);
    const [hx1, hy1] = map([maxX + 20, 0]);
    ctx.fillStyle = '#5b5f64';
    ctx.fillRect(hx0, hy0 - 400, hx1 - hx0, hy1 - hy0 + 400);
    ctx.fillStyle = '#fff';
    ctx.font = '600 12px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('HOUSE', (map([0, 0])[0] + map([d.width, 0])[0]) / 2, hy1 - 34);
  }

  const path = (poly: Pt[]) => { ctx.beginPath(); poly.forEach((p, i) => (i ? ctx.lineTo(...map(p)) : ctx.moveTo(...map(p)))); ctx.closePath(); };

  // Stairs
  for (const s of stairs) {
    const { n } = s.edge;
    for (let i = 0; i < s.steps; i++) {
      const p0 = along(s.edge, s.t0), p1 = along(s.edge, s.t1);
      const o0 = i * TREAD, o1 = (i + 1) * TREAD;
      const poly: Pt[] = [
        [p0[0] + n[0] * o0, p0[1] + n[1] * o0], [p1[0] + n[0] * o0, p1[1] + n[1] * o0],
        [p1[0] + n[0] * o1, p1[1] + n[1] * o1], [p0[0] + n[0] * o1, p0[1] + n[1] * o1],
      ];
      path(poly);
      ctx.fillStyle = shade(deckHex, -0.08 - i * 0.03);
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,.35)';
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  // Deck surface with board lines and optional picture-frame border
  const inner = d.frame ? inset(pts, 0.5) : pts;
  path(pts);
  ctx.fillStyle = d.frame ? frameHex : deckHex;
  ctx.fill();
  path(inner);
  ctx.fillStyle = deckHex;
  ctx.fill();
  ctx.save();
  path(inner);
  ctx.clip();
  ctx.strokeStyle = 'rgba(0,0,0,.14)';
  ctx.lineWidth = 1;
  boardLines(ctx, d, { x0: 0, y0: 0, x1: d.width, y1: maxY }, map);
  ctx.restore();
  path(pts);
  ctx.strokeStyle = shade(deckHex, -0.55);
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Extras
  const boxes = extraBoxes(d);
  const label = (b: Box, text: string, color: string) => {
    const [cx, cy] = map([(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2]);
    ctx.font = '600 11px system-ui, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const w = ctx.measureText(text).width + 10;
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    ctx.fillRect(cx - w / 2, cy - 9, w, 18);
    ctx.fillStyle = color;
    ctx.fillText(text, cx, cy);
  };
  const rect = (b: Box) => { const [x0, y0] = map([b.x0, b.y0]); const [x1, y1] = map([b.x1, b.y1]); return [x0, y0, x1 - x0, y1 - y0] as const; };
  if (boxes.hottub) {
    ctx.fillStyle = '#3c4a55'; ctx.fillRect(...rect(boxes.hottub));
    const b = boxes.hottub, i = 0.6;
    ctx.fillStyle = '#7fb6cf'; ctx.fillRect(...rect({ x0: b.x0 + i, y0: b.y0 + i, x1: b.x1 - i, y1: b.y1 - i }));
    label(b, 'Hot tub', '#1c2a33');
  }
  if (boxes.kitchen) { ctx.fillStyle = '#6d7175'; ctx.fillRect(...rect(boxes.kitchen)); label(boxes.kitchen, 'Kitchen', '#222'); }
  if (boxes.firepit) {
    const b = boxes.firepit;
    const [cx, cy] = map([(b.x0 + b.x1) / 2, (b.y0 + b.y1) / 2]);
    ctx.beginPath(); ctx.arc(cx, cy, ((b.x1 - b.x0) / 2) * scale, 0, Math.PI * 2);
    ctx.fillStyle = '#6a6460'; ctx.fill();
    ctx.beginPath(); ctx.arc(cx, cy, ((b.x1 - b.x0) / 3) * scale, 0, Math.PI * 2);
    ctx.fillStyle = '#e8792b'; ctx.fill();
  }
  if (boxes.cover) {
    ctx.save();
    ctx.setLineDash([6, 4]);
    ctx.strokeStyle = '#111';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(...rect(boxes.cover));
    ctx.restore();
    label({ ...boxes.cover, y0: boxes.cover.y1 - 2.4 }, d.extras.includes('cover') ? 'Roof cover above' : 'Pergola above', '#111');
  }

  // Railing
  ctx.strokeStyle = railHex === '#f1f1f1' ? '#9a9da1' : railHex;
  ctx.lineWidth = 3.5;
  ctx.lineCap = 'round';
  for (const r of railSpans(d)) {
    ctx.beginPath(); ctx.moveTo(...map(along(r.edge, r.t0))); ctx.lineTo(...map(along(r.edge, r.t1))); ctx.stroke();
  }
  if (d.extras.includes('privacy')) {
    ctx.strokeStyle = '#2b2b2b';
    ctx.lineWidth = 6;
    ctx.beginPath(); ctx.moveTo(...map([0.15, 0])); ctx.lineTo(...map([0.15, Math.min(d.depth, 10)])); ctx.stroke();
  }
  ctx.lineCap = 'butt';

  // Dimensions
  ctx.fillStyle = '#121314';
  ctx.font = '700 13px system-ui, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  const ft = (v: number) => `${Math.round(v * 10) / 10}'`;
  const topY = map([0, 0])[1] - 14;
  if (!d.attached) ctx.fillText(ft(d.width), map([d.width / 2, 0])[0], topY);
  else {
    const t = ft(d.width);
    const w = ctx.measureText(t).width + 8;
    const [cx] = map([d.width / 2, 0]);
    ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.fillRect(cx - w / 2, topY - 9, w, 18);
    ctx.fillStyle = '#121314'; ctx.fillText(t, cx, topY);
  }
  const sideX = d.shape === 'l' && d.lSide === 'left' ? d.width : 0;
  const sideDir = sideX === 0 ? -1 : 1;
  ctx.save();
  const [sx, sy] = map([sideX, d.depth / 2]);
  ctx.translate(sx + sideDir * 14, sy);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText(ft(d.depth), 0, 0);
  ctx.restore();
  if (d.shape === 'l') {
    const x0 = d.lSide === 'right' ? d.width - d.lWidth : 0;
    const lt = ft(d.lWidth), lw = ctx.measureText(lt).width + 8;
    const [lcx, lcy] = map([x0 + d.lWidth / 2, d.depth + d.lDepth - 1.1]);
    ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.fillRect(lcx - lw / 2, lcy - 9, lw, 18);
    ctx.fillStyle = '#121314'; ctx.fillText(lt, lcx, lcy);
    ctx.save();
    const ex = d.lSide === 'right' ? x0 : x0 + d.lWidth;
    const [lx, ly] = map([ex, d.depth + d.lDepth / 2]);
    ctx.translate(lx + (d.lSide === 'right' ? -14 : 14), ly);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(ft(d.lDepth), 0, 0);
    ctx.restore();
  }

  // Square footage badge
  const badge = `${area(d)} sq ft`;
  ctx.font = '800 14px system-ui, sans-serif';
  const bw = ctx.measureText(badge).width + 18;
  const bx = cssW - bw / 2 - 10, by = cssH - 23;
  ctx.fillStyle = 'rgba(18,19,20,.86)';
  ctx.beginPath();
  ctx.roundRect(bx - bw / 2, by - 13, bw, 26, 13);
  ctx.fill();
  ctx.fillStyle = '#fff';
  ctx.fillText(badge, bx, by);
}

/* ---------------- 3D view ---------------- */

export function draw3D(canvas: HTMLCanvasElement, design: Design, cssW: number, cssH: number) {
  const d = clampDesign(design);
  const ctx = setupCanvas(canvas, cssW, cssH);
  const pts = footprint(d);
  const H = d.height;
  const deckHex = deckColors[d.color]?.hex ?? '#928f89';
  const frameHex = deckColors[d.frameColor]?.hex ?? deckHex;
  const railHex = railColors[d.railColor]?.hex ?? '#1c1c1e';
  const stairs = stairSets(d);
  const boxes = extraBoxes(d);
  const maxY = Math.max(...pts.map((p) => p[1]));

  const C = Math.cos(Math.PI / 6), S = Math.sin(Math.PI / 6);
  const iso = (p: Pt3): [number, number] => [(p[0] - p[1]) * C, (p[0] + p[1]) * S - p[2]];

  // Fit: project key points and scale into the canvas.
  const top = H + (boxes.cover ? 9 : RAIL_H) + (d.attached ? 6 : 0);
  const probe: Pt3[] = [];
  for (const p of pts) probe.push([p[0], p[1], 0], [p[0], p[1], top]);
  if (d.attached) probe.push([-2, 0, H + 9], [d.width + 2, 0, H + 9], [-2, 0, 0], [d.width + 2, 0, 0]);
  for (const s of stairs) for (const t of [s.t0, s.t1]) {
    const p = along(s.edge, t);
    probe.push([p[0] + s.edge.n[0] * s.run, p[1] + s.edge.n[1] * s.run, 0]);
  }
  const xs = probe.map((p) => iso(p)[0]), ys = probe.map((p) => iso(p)[1]);
  const pad = 22;
  const scale = Math.min((cssW - pad * 2) / (Math.max(...xs) - Math.min(...xs)), (cssH - pad * 2) / (Math.max(...ys) - Math.min(...ys)));
  const ox = (cssW - (Math.max(...xs) + Math.min(...xs)) * scale) / 2;
  const oy = (cssH - (Math.max(...ys) + Math.min(...ys)) * scale) / 2;
  const P = (p: Pt3): [number, number] => { const [x, y] = iso(p); return [ox + x * scale, oy + y * scale]; };

  const sky = ctx.createLinearGradient(0, 0, 0, cssH);
  sky.addColorStop(0, '#e9eef2');
  sky.addColorStop(1, '#f6f6f3');
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, cssW, cssH);

  const poly = (ps: Pt3[], fill: string, stroke?: string, lw = 1) => {
    ctx.beginPath();
    ps.forEach((p, i) => (i ? ctx.lineTo(...P(p)) : ctx.moveTo(...P(p))));
    ctx.closePath();
    ctx.fillStyle = fill;
    ctx.fill();
    if (stroke) { ctx.strokeStyle = stroke; ctx.lineWidth = lw; ctx.stroke(); }
  };
  const line = (a: Pt3, b: Pt3, color: string, lw = 1) => {
    ctx.beginPath(); ctx.moveTo(...P(a)); ctx.lineTo(...P(b));
    ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.stroke();
  };
  // Solid box; only the faces that face the viewer (top, +y, +x) are drawn.
  const box = (x0: number, y0: number, x1: number, y1: number, z0: number, z1: number, hex: string, edge = 'rgba(0,0,0,.25)') => {
    poly([[x0, y1, z0], [x1, y1, z0], [x1, y1, z1], [x0, y1, z1]], shade(hex, -0.12), edge);
    poly([[x1, y0, z0], [x1, y1, z0], [x1, y1, z1], [x1, y0, z1]], shade(hex, -0.28), edge);
    poly([[x0, y0, z1], [x1, y0, z1], [x1, y1, z1], [x0, y1, z1]], hex, edge);
  };

  // Ground and house wall
  poly(pts.map((p) => [p[0], p[1], 0] as Pt3), 'rgba(0,0,0,.08)');
  if (d.attached) {
    const hz = H + 9.5;
    poly([[-2, 0, 0], [d.width + 2, 0, 0], [d.width + 2, 0, hz], [-2, 0, hz]], '#d9d6cf', '#b5b1a8');
    for (let z = 0.6; z < hz; z += 0.6) line([-2, 0, z], [d.width + 2, 0, z], 'rgba(0,0,0,.06)');
    const dw = Math.min(8, d.width * 0.45), dx = d.width / 2 - dw / 2;
    poly([[dx, 0, H], [dx + dw, 0, H], [dx + dw, 0, H + 6.8], [dx, 0, H + 6.8]], '#3a4148', '#25292d', 1.5);
    line([dx + dw / 2, 0, H], [dx + dw / 2, 0, H + 6.8], '#9aa3ab', 1.5);
  }

  const drawStair = (s: Stair) => {
    const { n } = s.edge;
    const rise = H / s.steps;
    const order = n[0] < 0 || n[1] < 0 ? [...Array(s.steps).keys()].reverse() : [...Array(s.steps).keys()];
    for (const i of order) {
      const p0 = along(s.edge, s.t0), p1 = along(s.edge, s.t1);
      const o0 = i * TREAD, o1 = (i + 1) * TREAD;
      const xsA = [p0[0] + n[0] * o0, p1[0] + n[0] * o0, p0[0] + n[0] * o1, p1[0] + n[0] * o1];
      const ysA = [p0[1] + n[1] * o0, p1[1] + n[1] * o0, p0[1] + n[1] * o1, p1[1] + n[1] * o1];
      const z = H - rise * (i + 1);
      box(Math.min(...xsA), Math.min(...ysA), Math.max(...xsA), Math.max(...ysA), Math.max(0, z - rise * 1.2), Math.max(0.05, z), deckHex);
      if (d.extras.includes('lighting')) {
        const m: Pt3 = [(p0[0] + p1[0]) / 2 + n[0] * o1, (p0[1] + p1[1]) / 2 + n[1] * o1, z - rise * 0.5];
        if (n[0] >= 0 && n[1] >= 0) glow(m);
      }
    }
  };
  const glow = (p: Pt3) => {
    const [x, y] = P(p);
    const g = ctx.createRadialGradient(x, y, 0, x, y, 7);
    g.addColorStop(0, 'rgba(255,220,120,1)');
    g.addColorStop(1, 'rgba(255,220,120,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, 7, 0, Math.PI * 2); ctx.fill();
  };

  // Stairs that run away from the viewer go behind the deck.
  stairs.filter((s) => s.edge.n[0] < 0 || s.edge.n[1] < 0).forEach(drawStair);

  // Posts and beams
  const fascia = Math.min(H, 0.95);
  if (H > 1) {
    const posts: Pt[] = [];
    for (const e of edges(d)) {
      if (e.side === 'house' && d.attached) continue;
      const len = Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]);
      const n = Math.max(1, Math.ceil(len / 8));
      for (let i = 0; i < n; i++) {
        const p = along(e, i ? (len * i) / n : 0.6);
        posts.push([p[0] - e.n[0] * 0.6, p[1] - e.n[1] * 0.6]);
      }
    }
    posts.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
    for (const p of posts) box(p[0] - 0.17, p[1] - 0.17, p[0] + 0.17, p[1] + 0.17, 0, H - fascia, '#3b3d40', 'rgba(0,0,0,.4)');
  }

  // Fascia on faces toward the viewer, then the deck surface.
  edges(d)
    .filter((e) => e.n[0] + e.n[1] > 0)
    .sort((a, b) => a.a[0] + a.a[1] + a.b[0] + a.b[1] - (b.a[0] + b.a[1] + b.b[0] + b.b[1]))
    .forEach((e) => {
      const tone = e.n[1] > 0 ? -0.18 : -0.34;
      poly([[e.a[0], e.a[1], H - fascia], [e.b[0], e.b[1], H - fascia], [e.b[0], e.b[1], H], [e.a[0], e.a[1], H]], shade(d.frame ? frameHex : deckHex, tone), 'rgba(0,0,0,.3)');
    });

  const inner = d.frame ? inset(pts, 0.5) : pts;
  poly(pts.map((p) => [p[0], p[1], H] as Pt3), d.frame ? frameHex : deckHex, shade(deckHex, -0.5));
  poly(inner.map((p) => [p[0], p[1], H] as Pt3), deckHex);
  ctx.save();
  ctx.beginPath();
  inner.forEach((p, i) => (i ? ctx.lineTo(...P([p[0], p[1], H])) : ctx.moveTo(...P([p[0], p[1], H]))));
  ctx.closePath();
  ctx.clip();
  ctx.strokeStyle = 'rgba(0,0,0,.13)';
  ctx.lineWidth = 0.8;
  boardLines(ctx, d, { x0: 0, y0: 0, x1: d.width, y1: maxY }, (p) => P([p[0], p[1], H]));
  ctx.restore();

  // Railing
  const spans = railSpans(d);
  const drawRail = (r: { edge: Edge; t0: number; t1: number }) => {
    const a = along(r.edge, r.t0), b = along(r.edge, r.t1);
    const len = r.t1 - r.t0;
    const at = (t: number, z: number): Pt3 => [a[0] + ((b[0] - a[0]) * t) / len, a[1] + ((b[1] - a[1]) * t) / len, z];
    const zb = H + 0.25, zt = H + RAIL_H;
    const rail = railHex;
    const nPosts = Math.max(1, Math.ceil(len / 6));
    if (d.railing === 'glass') {
      for (let i = 0; i < nPosts; i++) {
        const t0 = (len * i) / nPosts + 0.08, t1 = (len * (i + 1)) / nPosts - 0.08;
        poly([at(t0, zb), at(t1, zb), at(t1, zt - 0.1), at(t0, zt - 0.1)], 'rgba(170,215,230,.35)', 'rgba(90,140,160,.7)');
      }
      return;
    }
    if (d.railing === 'privacy') {
      poly([at(0, zb), at(len, zb), at(len, zt), at(0, zt)], shade(rail, 0.05), 'rgba(0,0,0,.35)');
      for (let t = 0.45; t < len; t += 0.45) line(at(t, zb), at(t, zt), 'rgba(0,0,0,.18)');
    } else if (d.railing === 'cable' || d.railing === 'rod') {
      const gap = d.railing === 'cable' ? 0.25 : 0.33;
      for (let z = zb; z < zt - 0.1; z += gap) line(at(0, z), at(len, z), d.railing === 'cable' ? '#9ea4aa' : rail, d.railing === 'cable' ? 0.8 : 1.4);
    } else {
      const bal = d.railing === 'composite' ? 0.45 : 0.38;
      for (let t = bal; t < len; t += bal) line(at(t, zb), at(t, zt), rail, d.railing === 'composite' ? 1.6 : 1);
      line(at(0, zb), at(len, zb), rail, 1.5);
    }
    for (let i = 0; i <= nPosts; i++) {
      const t = (len * i) / nPosts;
      line(at(t, H), at(t, zt + 0.1), d.railing === 'cable' ? '#3a3c3f' : rail, 3);
      if (d.extras.includes('lighting')) glow(at(t, zt + 0.15));
    }
    line(at(0, zt), at(len, zt), d.railing === 'composite' ? shade(rail, -0.1) : rail, 2.5);
  };
  const facing = (e: Edge) => e.n[0] + e.n[1] > 0;
  spans.filter((r) => !facing(r.edge)).forEach(drawRail);

  if (d.extras.includes('privacy')) {
    const len = Math.min(d.depth, 10);
    poly([[0.1, 0, H], [0.1, len, H], [0.1, len, H + 6.5], [0.1, 0, H + 6.5]], '#3a3836', 'rgba(0,0,0,.4)');
    for (let z = H + 0.4; z < H + 6.5; z += 0.45) line([0.1, 0, z], [0.1, len, z], 'rgba(255,255,255,.08)');
  }

  // Items on the deck, back to front
  const items: { key: number; draw: () => void }[] = [];
  if (boxes.kitchen) { const b = boxes.kitchen; items.push({ key: b.x1 + b.y1, draw: () => { box(b.x0, b.y0, b.x1, b.y1, H, H + 3, '#6d7175'); poly([[b.x0, b.y0, H + 3], [b.x1, b.y0, H + 3], [b.x1, b.y1, H + 3], [b.x0, b.y1, H + 3]], '#2f3234'); } }); }
  if (boxes.firepit) { const b = boxes.firepit; items.push({ key: b.x1 + b.y1, draw: () => { box(b.x0, b.y0, b.x1, b.y1, H, H + 1.3, '#7a736d'); const i = 0.7; poly([[b.x0 + i, b.y0 + i, H + 1.31], [b.x1 - i, b.y0 + i, H + 1.31], [b.x1 - i, b.y1 - i, H + 1.31], [b.x0 + i, b.y1 - i, H + 1.31]], '#f08a30'); } }); }
  if (boxes.hottub) { const b = boxes.hottub; items.push({ key: b.x1 + b.y1, draw: () => { box(b.x0, b.y0, b.x1, b.y1, H, H + 3, '#4a5560'); const i = 0.6; poly([[b.x0 + i, b.y0 + i, H + 3.01], [b.x1 - i, b.y0 + i, H + 3.01], [b.x1 - i, b.y1 - i, H + 3.01], [b.x0 + i, b.y1 - i, H + 3.01]], '#86c1d8'); } }); }
  items.sort((a, b) => a.key - b.key).forEach((i) => i.draw());

  spans.filter((r) => facing(r.edge)).forEach(drawRail);

  // Pergola or roof cover
  if (boxes.cover) {
    const b = boxes.cover;
    const z = H + 9;
    const posts: Pt[] = [[b.x0 + 0.4, b.y1 - 0.4], [b.x1 - 0.4, b.y1 - 0.4]];
    if (!d.attached) posts.unshift([b.x0 + 0.4, b.y0 + 0.4], [b.x1 - 0.4, b.y0 + 0.4]);
    for (const p of posts) box(p[0] - 0.25, p[1] - 0.25, p[0] + 0.25, p[1] + 0.25, H, z, '#3a3028');
    if (d.extras.includes('cover')) {
      poly([[b.x0 - 0.5, b.y0, z + 0.6], [b.x1 + 0.5, b.y0, z + 0.6], [b.x1 + 0.5, b.y1 + 0.5, z], [b.x0 - 0.5, b.y1 + 0.5, z]], 'rgba(60,62,66,.6)', '#222');
      for (let x = b.x0; x <= b.x1; x += 0.8) line([x, b.y0, z + 0.6], [x, b.y1 + 0.5, z], 'rgba(255,255,255,.08)');
    } else {
      box(b.x0 - 0.5, b.y1 - 0.6, b.x1 + 0.5, b.y1 - 0.2, z - 0.8, z, '#3a3028');
      for (let x = b.x0; x <= b.x1 + 0.01; x += 1.4) box(x - 0.1, b.y0, x + 0.1, b.y1 + 0.6, z, z + 0.6, '#4a3e33', 'rgba(0,0,0,.35)');
    }
  }

  stairs.filter((s) => !(s.edge.n[0] < 0 || s.edge.n[1] < 0)).forEach(drawStair);
}

/* ---------------- Summary ---------------- */

export function summary(design: Design) {
  const d = clampDesign(design);
  const steps = stepCount(d);
  const lines: [string, string][] = [];
  const size = d.shape === 'l'
    ? `L-shape: ${d.width} x ${d.depth} ft main area + ${d.lWidth} x ${d.lDepth} ft extension on the ${d.lSide}`
    : `Rectangle: ${d.width} x ${d.depth} ft`;
  lines.push(['Shape', size]);
  lines.push(['Deck area', `about ${area(d)} sq ft (not counting stairs)`]);
  lines.push(['Attached to house', d.attached ? 'Yes' : 'No, freestanding']);
  lines.push(['Height off ground', d.height === 0 ? 'Ground level' : `${d.height} ft${steps ? ` (about ${steps} steps down)` : ''}`]);
  lines.push(['Stairs', !steps || !d.stairs.length ? 'None' : `${d.stairs.join(', ')}; ${d.stairStyle === 'cascading' ? 'wide cascading steps' : `${d.stairWidth} ft wide`}`]);
  const color = `${deckColors[d.color]?.label ?? d.color}${d.colorName ? ` (${d.colorName})` : ''}`;
  lines.push(['Decking', `${d.brand}${d.line && d.line !== 'Help me choose' ? ` ${d.line}` : ''}, ${color}`]);
  lines.push(['Board layout', `${d.direction === 'parallel' ? 'Parallel to house' : d.direction === 'perpendicular' ? 'Perpendicular to house' : 'Diagonal'}${d.frame ? `, picture-frame border in ${deckColors[d.frameColor]?.label.toLowerCase() ?? d.frameColor}` : ''}`]);
  lines.push(['Framing', d.framing]);
  lines.push(['Railing', d.railing === 'none' ? railings.none : `${railings[d.railing]}, ${railColors[d.railColor]?.label.toLowerCase()}`]);
  lines.push(['Extras', d.extras.length ? d.extras.map((id) => extrasList.find((e) => e.id === id)?.label ?? id).join(', ') : 'None']);
  return lines;
}

// One image with both views and the design summary, for the estimate request.
export function exportImage(design: Design): HTMLCanvasElement {
  const W = 1200, viewH = 560;
  const lines = summary(design);
  const out = document.createElement('canvas');
  out.width = W;
  out.height = 80 + viewH + 40 + lines.length * 30 + 40;
  const ctx = out.getContext('2d')!;
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, out.width, out.height);
  ctx.fillStyle = '#121314';
  ctx.fillRect(0, 0, W, 64);
  ctx.fillStyle = '#d0121b';
  ctx.fillRect(0, 64, W, 5);
  ctx.fillStyle = '#fff';
  ctx.font = '800 28px system-ui, sans-serif';
  ctx.textBaseline = 'middle';
  ctx.fillText('TC DECKS', 24, 33);
  ctx.font = '500 18px system-ui, sans-serif';
  ctx.fillStyle = '#c3c8cd';
  ctx.textAlign = 'right';
  ctx.fillText('Deck Planner design  ·  tcdecksutah.com', W - 24, 33);
  ctx.textAlign = 'left';

  // Render each view at 1x into its own canvas, then copy across.
  const half = (W - 60) / 2;
  const views: [string, (c: HTMLCanvasElement, d: Design, w: number, h: number) => void][] = [['Top view', drawTop], ['3D view', draw3D]];
  views.forEach(([title, fn], i) => {
    const c = document.createElement('canvas');
    fn(c, design, half, viewH);
    const x = 20 + i * (half + 20);
    ctx.drawImage(c, x, 84, half, viewH);
    ctx.strokeStyle = '#d7dade';
    ctx.strokeRect(x, 84, half, viewH);
    ctx.font = '700 15px system-ui, sans-serif';
    ctx.fillStyle = 'rgba(255,255,255,.9)';
    ctx.fillRect(x + 4, 89, ctx.measureText(title).width + 14, 22);
    ctx.fillStyle = '#121314';
    ctx.fillText(title, x + 11, 100);
  });

  let y = 84 + viewH + 40;
  for (const [k, v] of lines) {
    ctx.font = '700 18px system-ui, sans-serif';
    ctx.fillStyle = '#4b5056';
    ctx.fillText(k, 24, y);
    ctx.font = '500 18px system-ui, sans-serif';
    ctx.fillStyle = '#141516';
    ctx.fillText(v, 230, y);
    y += 30;
  }
  ctx.font = '400 14px system-ui, sans-serif';
  ctx.fillStyle = '#7a7f85';
  ctx.fillText('Rough customer sketch for estimating. Final layout is confirmed with TC Decks.', 24, y + 6);
  return out;
}
