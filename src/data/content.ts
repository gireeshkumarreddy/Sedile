import type { Category } from './products'

export const BRAND = { name: 'sedile', legal: 'Sedile Studio', tagline: 'Chairs for thoughtful work' }

export interface Designer {
  slug: string
  name: string
  studio: string
  city: string
  born: string
  bio: string
  philosophy: string
  quote: string
}

export const designers: Designer[] = [
  {
    slug: 'mara-lindqvist', name: 'Mara Lindqvist', studio: 'Lindqvist Form', city: 'Stockholm', born: '1978',
    bio: 'Trained as a cabinetmaker before studying industrial design in Gothenburg, Mara brings an upholsterer’s eye to the precision of the task chair. Her work balances warmth with engineering discipline.',
    philosophy: 'A chair you sit in for eight hours should feel like a well-made coat: soft where it touches you, structured where it needs to hold.',
    quote: 'Comfort is a craft before it is a feature.',
  },
  {
    slug: 'tomas-okafor', name: 'Tomas Okafor', studio: 'Okafor Industrial', city: 'London', born: '1984',
    bio: 'Tomas studied mechanical engineering in Lagos and product design in London. His chairs start from how the body moves, and end when nothing further can be removed.',
    philosophy: 'Adjustability should be obvious. If you need a manual, the design is not finished.',
    quote: 'The best mechanism is the one you never notice.',
  },
  {
    slug: 'studio-hanazono', name: 'Studio Hanazono', studio: 'Studio Hanazono', city: 'Kyoto', born: '2009',
    bio: 'Founded by Aya and Kenji Mori, Studio Hanazono works across furniture, ceramics and lighting. Their chairs are defined by a single continuous gesture and a disciplined colour palette.',
    philosophy: 'One line, one material, one colour — and then the patience to refine it for years.',
    quote: 'Simplicity is the result of many decisions.',
  },
  {
    slug: 'elio-varga', name: 'Elio Varga', studio: 'Atelier Varga', city: 'Milan', born: '1969',
    bio: 'Elio Varga has designed seating for boardrooms, libraries and private residences for three decades. His executive chairs pair traditional leatherwork with polished structural aluminium.',
    philosophy: 'Structure should be honest and visible. Luxury is in the proportion, not the ornament.',
    quote: 'A chair is architecture you can move.',
  },
  {
    slug: 'ines-moreau', name: 'Ines Moreau', studio: 'Moreau Objets', city: 'Paris', born: '1990',
    bio: 'Ines moved from set design to furniture, and it shows: her pieces are generous, tactile and a little theatrical. She designs for the pause between tasks.',
    philosophy: 'Offices need places to slow down. Softness is a function too.',
    quote: 'Design the moment, not only the object.',
  },
]

export const designerBySlug = (s: string) => designers.find((d) => d.slug === s)

export interface Collection {
  slug: string
  title: string
  category?: Category
  eyebrow: string
  intro: string
  story: { title: string; body: string }[]
  hero: string
  productSlugs?: string[]
}

export const collections: Collection[] = [
  {
    slug: 'task-chairs', title: 'Task Chairs', category: 'task', eyebrow: 'Collection 01', hero: 'tessera-task',
    intro: 'Precise, adjustable and quietly beautiful. Task chairs designed for long, focused days at the desk.',
    story: [
      { title: 'Built around movement', body: 'Synchro mechanisms let the seat and back move together, so your posture changes naturally throughout the day instead of locking you in place.' },
      { title: 'Support where it matters', body: 'Integrated lumbar contours and adjustable seat depths adapt the chair to your body, not the other way round.' },
    ],
  },
  {
    slug: 'executive-chairs', title: 'Executive Chairs', category: 'executive', eyebrow: 'Collection 02', hero: 'meridian-executive',
    intro: 'Full-grain leather, polished aluminium and generous proportions for the decisions that matter.',
    story: [
      { title: 'Leather, finished by hand', body: 'Every hide is selected and cut individually, so natural marks are celebrated rather than hidden.' },
      { title: 'Engineered to last decades', body: 'Replaceable cushions and a ten-year warranty make these chairs an investment, not a purchase.' },
    ],
  },
  {
    slug: 'conference-chairs', title: 'Conference Chairs', category: 'conference', eyebrow: 'Collection 03', hero: 'orbit-conference',
    intro: 'Light, colourful and composed. Chairs for meetings, dining and every table where ideas are shared.',
    story: [
      { title: 'Colour as a tool', body: 'Dyed-through shells bring rhythm to a meeting room and never chip to reveal a different colour underneath.' },
      { title: 'Easy to move, easy to love', body: 'Lightweight frames and swivel bases make rearranging a room an effortless part of the day.' },
    ],
  },
  {
    slug: 'lounge-chairs', title: 'Lounge Chairs', category: 'lounge', eyebrow: 'Collection 04', hero: 'nuvola-lounge',
    intro: 'Soft places to pause, read and talk. Lounge chairs for receptions, libraries and the corner office.',
    story: [
      { title: 'Softness is a function', body: 'Deep cushions and embracing shells invite a different posture, and a different kind of conversation.' },
      { title: 'Tactile materials', body: 'Wool bouclé, twill and full-grain leather age gracefully and feel better every year.' },
    ],
  },
  {
    slug: 'stools', title: 'Stools', category: 'stool', eyebrow: 'Collection 05', hero: 'perch-stool',
    intro: 'Active seating for standing desks, counters and studios. Perch, lean and keep moving.',
    story: [
      { title: 'Stay in motion', body: 'Saddle seats and rocking bases encourage small, constant movements that keep the back engaged.' },
      { title: 'Small footprint', body: 'Stools tuck away when you need the space and come out when the work gets standing-height.' },
    ],
  },
  {
    slug: 'the-quiet-office', title: 'The Quiet Office', eyebrow: 'Featured collection', hero: 'kinto-mesh',
    intro: 'A curated edit of pale tones, soft textures and calm silhouettes for daylight-filled workplaces.',
    productSlugs: ['kinto-mesh', 'aero-light', 'cove-side-chair', 'nuvola-lounge', 'tessera-task', 'arcadia-cantilever'],
    story: [
      { title: 'Designed to recede', body: 'Soft whites, mist greys and natural oak let architecture and daylight take the lead.' },
      { title: 'Texture over colour', body: 'Bouclé, knit and leather give depth to a restrained palette.' },
    ],
  },
]

export const collectionBySlug = (s: string) => collections.find((c) => c.slug === s)

export interface Article {
  slug: string
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  productSlug: string
  body: { h?: string; p: string }[]
}

export const articles: Article[] = [
  {
    slug: 'how-to-choose-a-task-chair', title: 'How to choose a task chair you will still love in ten years', category: 'Ergonomics', date: '2026-08-12', readTime: '6 min', productSlug: 'linea-mesh',
    excerpt: 'Seat depth, lumbar support and a mechanism that moves with you — the five things that matter more than any feature list.',
    body: [
      { p: 'The right task chair disappears. After a week, you should stop noticing it — not because it is invisible, but because it simply fits.' },
      { h: 'Start with the seat', p: 'Seat depth is the most overlooked adjustment. You should be able to fit two to three fingers between the front edge of the seat and the back of your knee.' },
      { h: 'Support the lower back', p: 'A lumbar contour should meet the natural curve of your spine just above the belt line. Integrated or adjustable, it should feel present but not pushy.' },
      { h: 'Movement beats posture', p: 'There is no perfect posture, only the next one. A synchro mechanism lets the seat and back move together so you can shift position without losing support.' },
      { h: 'Choose materials for your climate', p: 'Mesh breathes; upholstery warms. In a sunny, warm office, mesh keeps you cool. In a calm, cool room, upholstery feels welcoming.' },
    ],
  },
  {
    slug: 'the-art-of-quilting', title: 'The art of quilting: inside Tessera’s backrest', category: 'Craft', date: '2026-07-02', readTime: '4 min', productSlug: 'tessera-task',
    excerpt: 'Twenty button points, a sandwich construction and one very patient upholsterer.',
    body: [
      { p: 'Mara Lindqvist wanted a task chair that felt like a favourite armchair without sacrificing the slimness of a mesh back.' },
      { h: 'A sandwich of support', p: 'Beneath the quilted fabric sits a thin, flexible shell with integrated lumbar support, then a layer of moulded foam, then the cover itself.' },
      { h: 'Why buttons?', p: 'Each button anchors the fabric to the shell, preventing the cover from drifting over years of use and giving the backrest its tailored rhythm.' },
    ],
  },
  {
    slug: 'colour-in-the-meeting-room', title: 'Colour in the meeting room', category: 'Interiors', date: '2026-05-21', readTime: '5 min', productSlug: 'orbit-conference',
    excerpt: 'Why a single, confident colour can change how a room feels — and how people behave in it.',
    body: [
      { p: 'Studio Hanazono’s Orbit shells are available in five colours. Most clients choose one. The effect is striking.' },
      { h: 'Rhythm, not decoration', p: 'A row of tangerine shells around a pale table creates rhythm and energy while leaving the architecture calm.' },
      { h: 'Dyed through', p: 'Because the colour runs through the entire material, scuffs stay the same hue — the chairs age gracefully rather than chip.' },
    ],
  },
  {
    slug: 'designing-for-the-pause', title: 'Designing for the pause', category: 'Designers', date: '2026-03-30', readTime: '7 min', productSlug: 'nuvola-lounge',
    excerpt: 'Ines Moreau on softness, theatre and why every office needs a place to slow down.',
    body: [
      { p: 'For Ines Moreau, the most important moment in a workday is the one where you stop working.' },
      { h: 'From stage to studio', p: 'Years of set design taught her how an object can shift the mood of a room. Nuvola was designed as a pause in the architecture — a soft, generous volume that invites you to sit differently.' },
      { h: 'Bouclé and time', p: 'Wool bouclé is forgiving, tactile and ages beautifully. It rewards the hand as much as the eye.' },
    ],
  },
]

export const articleBySlug = (s: string) => articles.find((a) => a.slug === s)

export const faqs: { q: string; a: string }[] = [
  { q: 'How long does delivery take?', a: 'In-stock chairs ship within 2–4 working days. Made-to-order finishes take the lead time shown on each product page. Delivery is free across the EU and UK.' },
  { q: 'Can I return a chair?', a: 'Yes. You have 14 days from delivery to return any chair in its original condition. We collect it free of charge and refund you within five working days.' },
  { q: 'What does the warranty cover?', a: 'Our warranty covers the frame, mechanism and gas lift against manufacturing defects for the period shown on each product (3–10 years). Upholstery wear is covered for two years.' },
  { q: 'Do you offer assembly?', a: 'Most chairs arrive fully assembled. Where assembly is needed it takes under five minutes, with no tools required.' },
  { q: 'Can I order fabric and leather samples?', a: 'Yes — up to six free samples per order. Contact our team and we will send them within two working days.' },
  { q: 'Do you supply offices and projects?', a: 'Our projects team supports orders of any size, with volume pricing, space planning and on-site installation.' },
]
