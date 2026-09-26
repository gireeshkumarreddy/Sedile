import type { ChairType } from '../three/chairs'
import type { Finish, Upholstery } from '../three/materials'

export type Category = 'task' | 'executive' | 'conference' | 'lounge' | 'stool'
export type Use = 'task' | 'executive' | 'meeting' | 'lounge'
export type Priority = 'comfort' | 'support' | 'adjustability' | 'design'
export type Style = 'minimal' | 'classic' | 'executive' | 'contemporary'

export interface ColorOption { id: string; name: string; hex: string; upholstery: Upholstery; shell?: string; mesh?: string }
export interface FrameOption { id: Finish; name: string; priceDelta: number }
export interface ConfigOption { id: string; name: string; arms: boolean; priceDelta: number; note?: string }

export interface Product {
  slug: string
  name: string
  designer: string
  year: string
  category: Category
  type: ChairType
  price: number
  tagline: string
  description: string
  highlights: string[]
  colors: ColorOption[]
  frames: FrameOption[]
  configs: ConfigOption[]
  materials: { upholstery: string; frame: string; other: string }
  dimensions: { width: number; depth: number; height: string; seatHeight: string; seatDepth: number; weight: number }
  sustainability: string
  warranty: number
  leadTime: string
  finder: { use: Use[]; sitting: [number, number, number]; priorities: Record<Priority, number>; style: Style[] }
  isNew?: boolean
  /** Optional real GLB/GLTF model. When present it replaces the procedural model. */
  modelUrl?: string
}

const polished: FrameOption = { id: 'polished', name: 'Polished aluminium', priceDelta: 0 }
const black: FrameOption = { id: 'black', name: 'Basic dark', priceDelta: 0 }
const white: FrameOption = { id: 'white', name: 'Soft white', priceDelta: 40 }
const chrome: FrameOption = { id: 'chrome', name: 'Chrome', priceDelta: 0 }
const oak: FrameOption = { id: 'oak', name: 'Natural oak', priceDelta: 0 }
const walnut: FrameOption = { id: 'walnut', name: 'American walnut', priceDelta: 90 }

const armsCfg = (delta = 140): ConfigOption[] => [
  { id: 'arms', name: 'With armrests', arms: true, priceDelta: 0, note: 'Height-adjustable 2D arms' },
  { id: 'no-arms', name: 'Without armrests', arms: false, priceDelta: -delta },
]

export const products: Product[] = [
  {
    slug: 'tessera-task',
    name: 'Tessera',
    designer: 'mara-lindqvist',
    year: '2019 / 2024',
    category: 'task',
    type: 'task-tufted',
    price: 1150,
    tagline: 'Quilted comfort, engineered like a task chair.',
    description:
      'Tessera’s compact, button-quilted backrest brings the warmth of classic upholstery to a precise task chair. A sandwich construction with integrated lumbar support gives the comfort of padding while staying almost as slim as a mesh back.',
    highlights: ['Integrated lumbar support', 'Slim, button-quilted backrest', 'Synchro mechanism with weight adjustment', 'Height-adjustable 2D armrests', 'Suitable for home and office'],
    colors: [
      { id: 'lake', name: 'Lake blue', hex: '#4d7ea8', upholstery: 'fabric' },
      { id: 'graphite', name: 'Graphite', hex: '#4a4c50', upholstery: 'fabric' },
      { id: 'poppy', name: 'Poppy red', hex: '#c8412f', upholstery: 'fabric' },
      { id: 'moss', name: 'Moss', hex: '#667a4b', upholstery: 'fabric' },
      { id: 'chalk', name: 'Chalk', hex: '#e6e1d8', upholstery: 'fabric' },
    ],
    frames: [polished, black],
    configs: armsCfg(),
    materials: { upholstery: 'Plano wool-blend fabric, 90% new wool', frame: 'Die-cast aluminium, polished or powder-coated', other: 'Glass-fibre reinforced polyamide back shell' },
    dimensions: { width: 68, depth: 64, height: '98–110', seatHeight: '40–52', seatDepth: 45, weight: 18.5 },
    sustainability: 'Designed for disassembly. 62% recycled aluminium in the base; upholstery replaceable without tools.',
    warranty: 5,
    leadTime: '2–3 weeks',
    finder: { use: ['task'], sitting: [3, 5, 5], priorities: { comfort: 5, support: 4, adjustability: 4, design: 5 }, style: ['classic', 'contemporary'] },
  },
  {
    slug: 'linea-mesh',
    name: 'Linea Mesh',
    designer: 'tomas-okafor',
    year: '2021',
    category: 'task',
    type: 'task-mesh',
    price: 980,
    tagline: 'A breathable, precise tool for long days.',
    description:
      'A knitted three-dimensional mesh stretched over a flexible frame distributes pressure evenly and keeps you cool through long working hours. Linea is quiet in form and relentless in function.',
    highlights: ['Breathable 3D-knitted mesh back', 'Flexing frame follows your movement', 'Seat depth adjustment', 'Adjustable lumbar zone', 'Recycled polyester mesh'],
    colors: [
      { id: 'black', name: 'Deep black', hex: '#232325', upholstery: 'fabric', mesh: '#1c1c1d' },
      { id: 'stone', name: 'Stone', hex: '#8d8a84', upholstery: 'fabric', mesh: '#8a8781' },
      { id: 'ice', name: 'Ice grey', hex: '#c9ccd0', upholstery: 'fabric', mesh: '#c3c6ca' },
      { id: 'sea', name: 'Sea green', hex: '#557f7a', upholstery: 'fabric', mesh: '#4f7873' },
    ],
    frames: [black, polished],
    configs: armsCfg(),
    materials: { upholstery: '3D-knit mesh, 78% recycled polyester', frame: 'Aluminium five-star base', other: 'Polyamide frame, steel mechanism' },
    dimensions: { width: 66, depth: 62, height: '96–108', seatHeight: '41–53', seatDepth: 44, weight: 16.2 },
    sustainability: 'Mesh made from recycled PET. Every component is labelled for recycling.',
    warranty: 5,
    leadTime: '1–2 weeks',
    finder: { use: ['task'], sitting: [2, 4, 5], priorities: { comfort: 4, support: 5, adjustability: 5, design: 3 }, style: ['minimal', 'contemporary'] },
  },
  {
    slug: 'soren-soft',
    name: 'Soren Soft',
    designer: 'mara-lindqvist',
    year: '2022',
    category: 'task',
    type: 'task-soft',
    price: 1090,
    tagline: 'Soft lines, serious support.',
    description:
      'Soren wraps a fully upholstered backrest around a supportive inner shell. Its calm, cushioned silhouette feels as at home in a study as it does in the open office.',
    highlights: ['Fully upholstered soft backrest', 'Lumbar contour built into the shell', 'Synchro mechanism', 'Soft-touch armrest pads', 'Five-year warranty'],
    colors: [
      { id: 'fern', name: 'Fern green', hex: '#6f8f55', upholstery: 'fabric' },
      { id: 'ochre', name: 'Ochre', hex: '#c99a3a', upholstery: 'fabric' },
      { id: 'dusk', name: 'Dusk', hex: '#5b5f75', upholstery: 'fabric' },
      { id: 'sand', name: 'Sand', hex: '#cdbfa7', upholstery: 'fabric' },
    ],
    frames: [polished, black],
    configs: armsCfg(),
    materials: { upholstery: 'Twill wool fabric', frame: 'Polished aluminium base', other: 'Moulded foam on polyamide shell' },
    dimensions: { width: 67, depth: 63, height: '97–109', seatHeight: '40–52', seatDepth: 45, weight: 17.4 },
    sustainability: 'Cover is removable and washable. Foam is free of flame-retardant additives.',
    warranty: 5,
    leadTime: '2–3 weeks',
    finder: { use: ['task'], sitting: [3, 5, 4], priorities: { comfort: 5, support: 4, adjustability: 3, design: 4 }, style: ['contemporary', 'minimal'] },
  },
  {
    slug: 'aero-light',
    name: 'Aero Light',
    designer: 'tomas-okafor',
    year: '2023',
    category: 'task',
    type: 'task-light',
    price: 720,
    tagline: 'Lightweight, intuitive, quietly clever.',
    description:
      'A single flexible back shell replaces complicated mechanisms: Aero responds to your movement automatically. Light in weight and in footprint, it is ideal for shared desks and home offices.',
    highlights: ['Self-adjusting flexible back shell', 'Only one lever to learn', 'Light 12 kg construction', 'Ideal for shared workstations'],
    colors: [
      { id: 'cloud', name: 'Cloud', hex: '#b9bcbf', upholstery: 'fabric', shell: '#cdd0d2' },
      { id: 'coal', name: 'Coal', hex: '#2f3032', upholstery: 'fabric', shell: '#2a2b2d' },
      { id: 'mint', name: 'Mint', hex: '#8fb8ab', upholstery: 'fabric', shell: '#a9cabf' },
      { id: 'coral', name: 'Coral', hex: '#d76a52', upholstery: 'fabric', shell: '#e0806a' },
    ],
    frames: [black, white],
    configs: armsCfg(90),
    materials: { upholstery: 'Recycled polyester fabric', frame: 'Polyamide base', other: 'Flexible polypropylene back shell' },
    dimensions: { width: 64, depth: 60, height: '94–106', seatHeight: '41–53', seatDepth: 43, weight: 12 },
    sustainability: 'Back shell made from 45% post-consumer recycled polypropylene.',
    warranty: 3,
    leadTime: 'In stock',
    finder: { use: ['task'], sitting: [5, 4, 2], priorities: { comfort: 3, support: 3, adjustability: 3, design: 4 }, style: ['minimal', 'contemporary'] },
    isNew: true,
  },
  {
    slug: 'meridian-executive',
    name: 'Meridian',
    designer: 'elio-varga',
    year: '2018',
    category: 'executive',
    type: 'exec-ribbed',
    price: 2480,
    tagline: 'Stacked leather cushions on a sculpted aluminium spine.',
    description:
      'Six individually padded leather cushions span polished aluminium side members, following the spine from seat to shoulder. Meridian is the executive chair reduced to its most elegant structure.',
    highlights: ['Hand-finished full-grain leather', 'Individually padded cushions', 'Polished aluminium side members', 'Tilt mechanism with tension control', 'High back for full support'],
    colors: [
      { id: 'nero', name: 'Nero leather', hex: '#1d1c1c', upholstery: 'leather' },
      { id: 'cognac', name: 'Cognac leather', hex: '#7a4528', upholstery: 'leather' },
      { id: 'chalk', name: 'Chalk leather', hex: '#d9d2c6', upholstery: 'leather' },
      { id: 'forest', name: 'Forest leather', hex: '#2f4436', upholstery: 'leather' },
    ],
    frames: [polished, black],
    configs: armsCfg(0).map((c) => ({ ...c, priceDelta: c.arms ? 0 : -180 })),
    materials: { upholstery: 'Full-grain aniline leather', frame: 'Die-cast polished aluminium', other: 'Pocket-sprung cushions' },
    dimensions: { width: 65, depth: 70, height: '112–124', seatHeight: '42–54', seatDepth: 47, weight: 24 },
    sustainability: 'Leather from certified tanneries (LWG Gold). Every cushion replaceable individually.',
    warranty: 10,
    leadTime: '4–6 weeks',
    finder: { use: ['executive', 'task'], sitting: [3, 4, 5], priorities: { comfort: 5, support: 5, adjustability: 3, design: 5 }, style: ['executive', 'classic'] },
  },
  {
    slug: 'halden-executive',
    name: 'Halden',
    designer: 'elio-varga',
    year: '2020',
    category: 'executive',
    type: 'exec-bucket',
    price: 2150,
    tagline: 'An embracing leather shell for decisive days.',
    description:
      'Halden’s generous shell wraps from armrest to armrest in one continuous upholstered gesture. Deep, quiet and composed, it brings lounge-chair comfort to the desk.',
    highlights: ['Wrap-around upholstered shell', 'Thick independent seat cushion', 'Swivel and tilt mechanism', 'Polished five-star base'],
    colors: [
      { id: 'cognac', name: 'Cognac leather', hex: '#6b3d27', upholstery: 'leather' },
      { id: 'nero', name: 'Nero leather', hex: '#1f1e1d', upholstery: 'leather' },
      { id: 'taupe', name: 'Taupe leather', hex: '#8c7b6b', upholstery: 'leather' },
      { id: 'bordeaux', name: 'Bordeaux leather', hex: '#5e2429', upholstery: 'leather' },
    ],
    frames: [polished, black],
    configs: [
      { id: 'arms', name: 'Wrap-around arms', arms: true, priceDelta: 0 },
      { id: 'no-arms', name: 'Open shell', arms: false, priceDelta: -150 },
    ],
    materials: { upholstery: 'Semi-aniline leather', frame: 'Polished aluminium', other: 'Moulded cold-cure foam' },
    dimensions: { width: 72, depth: 70, height: '98–110', seatHeight: '43–53', seatDepth: 48, weight: 22 },
    sustainability: 'Leather offcuts are upcycled into accessories. Shell foam is CFC-free.',
    warranty: 10,
    leadTime: '4–6 weeks',
    finder: { use: ['executive', 'lounge'], sitting: [3, 5, 4], priorities: { comfort: 5, support: 4, adjustability: 2, design: 5 }, style: ['executive', 'contemporary'] },
  },
  {
    slug: 'orbit-conference',
    name: 'Orbit',
    designer: 'studio-hanazono',
    year: '2017',
    category: 'conference',
    type: 'conf-shell',
    price: 640,
    tagline: 'One moulded gesture, endlessly composed.',
    description:
      'A continuous moulded shell on a polished four-star swivel base. Orbit brings colour and clarity to meeting rooms, and turns gently with the conversation.',
    highlights: ['Single moulded polypropylene shell', 'Swivel four-star base with glides', 'Stackable-height shell profile', 'Wide colour palette'],
    colors: [
      { id: 'tangerine', name: 'Tangerine', hex: '#e2742f', upholstery: 'plastic', shell: '#e2742f' },
      { id: 'mustard', name: 'Mustard', hex: '#d9a638', upholstery: 'plastic', shell: '#d9a638' },
      { id: 'sage', name: 'Sage', hex: '#90a88f', upholstery: 'plastic', shell: '#90a88f' },
      { id: 'ink', name: 'Ink', hex: '#26282c', upholstery: 'plastic', shell: '#26282c' },
      { id: 'cotton', name: 'Cotton', hex: '#ecebe6', upholstery: 'plastic', shell: '#ecebe6' },
    ],
    frames: [polished, black],
    configs: [
      { id: 'no-arms', name: 'Side chair', arms: false, priceDelta: 0 },
      { id: 'arms', name: 'With arm rods', arms: true, priceDelta: 120 },
    ],
    materials: { upholstery: 'Dyed-through polypropylene', frame: 'Polished aluminium', other: 'Felt or hard-floor glides' },
    dimensions: { width: 56, depth: 55, height: '82', seatHeight: '46', seatDepth: 42, weight: 7.5 },
    sustainability: 'Shell is 100% recyclable mono-material. Take-back programme included.',
    warranty: 5,
    leadTime: 'In stock',
    finder: { use: ['meeting'], sitting: [5, 3, 1], priorities: { comfort: 3, support: 2, adjustability: 1, design: 5 }, style: ['contemporary', 'minimal'] },
  },
  {
    slug: 'cove-side-chair',
    name: 'Cove',
    designer: 'studio-hanazono',
    year: '2021',
    category: 'conference',
    type: 'visitor-wood',
    price: 420,
    tagline: 'A soft-edged shell on solid oak.',
    description:
      'Cove pairs a softly curved shell with tapering solid-wood legs. Light enough to move with one hand, warm enough for the dining table, disciplined enough for the meeting room.',
    highlights: ['Solid oak or walnut legs', 'Curved, supportive shell', 'Steel wire cradle', 'Suitable for meeting and dining'],
    colors: [
      { id: 'sage', name: 'Sage', hex: '#9bb4a8', upholstery: 'plastic', shell: '#9bb4a8' },
      { id: 'blush', name: 'Blush', hex: '#e2b9a7', upholstery: 'plastic', shell: '#e2b9a7' },
      { id: 'cotton', name: 'Cotton', hex: '#eeece6', upholstery: 'plastic', shell: '#eeece6' },
      { id: 'ink', name: 'Ink', hex: '#27292d', upholstery: 'plastic', shell: '#27292d' },
    ],
    frames: [oak, walnut],
    configs: [
      { id: 'no-arms', name: 'Side chair', arms: false, priceDelta: 0 },
      { id: 'arms', name: 'Armchair', arms: true, priceDelta: 80 },
    ],
    materials: { upholstery: 'Polypropylene shell', frame: 'Solid FSC® oak or walnut', other: 'Powder-coated steel wire' },
    dimensions: { width: 47, depth: 53, height: '81', seatHeight: '45', seatDepth: 41, weight: 5.1 },
    sustainability: 'FSC-certified timber. Shell recyclable.',
    warranty: 3,
    leadTime: 'In stock',
    finder: { use: ['meeting', 'lounge'], sitting: [5, 2, 1], priorities: { comfort: 2, support: 2, adjustability: 1, design: 5 }, style: ['minimal', 'classic'] },
  },
  {
    slug: 'arcadia-cantilever',
    name: 'Arcadia',
    designer: 'elio-varga',
    year: '2016',
    category: 'conference',
    type: 'meeting-cantilever',
    price: 890,
    tagline: 'A single chromed line that floats.',
    description:
      'One continuous tubular-steel line forms the base, seat support and back. Arcadia’s cantilever gives a subtle, springy comfort that makes long meetings feel shorter.',
    highlights: ['Cantilever frame with natural spring', 'One continuous chromed tube', 'Leather seat and back', 'Stackable up to four high'],
    colors: [
      { id: 'tan', name: 'Tan leather', hex: '#a9744a', upholstery: 'leather' },
      { id: 'nero', name: 'Nero leather', hex: '#1f1e1d', upholstery: 'leather' },
      { id: 'chalk', name: 'Chalk leather', hex: '#d8d0c3', upholstery: 'leather' },
      { id: 'olive', name: 'Olive leather', hex: '#58593a', upholstery: 'leather' },
    ],
    frames: [chrome, black],
    configs: [
      { id: 'no-arms', name: 'Side chair', arms: false, priceDelta: 0 },
      { id: 'arms', name: 'With arms', arms: true, priceDelta: 150 },
    ],
    materials: { upholstery: 'Full-grain leather', frame: 'Chrome-plated tubular steel', other: 'Plywood seat core' },
    dimensions: { width: 50, depth: 58, height: '84', seatHeight: '46', seatDepth: 43, weight: 7.8 },
    sustainability: 'Steel frame fully recyclable; chrome plating without hexavalent chromium.',
    warranty: 5,
    leadTime: '2–3 weeks',
    finder: { use: ['meeting', 'executive'], sitting: [4, 4, 2], priorities: { comfort: 4, support: 3, adjustability: 1, design: 5 }, style: ['classic', 'executive'] },
  },
  {
    slug: 'pivot-stool',
    name: 'Pivot Stool',
    designer: 'ines-moreau',
    year: '2020',
    category: 'stool',
    type: 'stool-drafting',
    price: 560,
    tagline: 'For standing desks and high counters.',
    description:
      'A generous, rounded seat on a smooth gas lift, with a polished foot ring for relaxed perching. Pivot sits comfortably at standing desks, laboratories and kitchen counters.',
    highlights: ['Height range 60–85 cm', 'Polished aluminium foot ring', 'Swivel with gas lift', 'Glides for hard floors'],
    colors: [
      { id: 'slate', name: 'Slate', hex: '#6d7176', upholstery: 'fabric' },
      { id: 'rust', name: 'Rust', hex: '#b5553a', upholstery: 'fabric' },
      { id: 'pine', name: 'Pine', hex: '#3e5b4a', upholstery: 'fabric' },
      { id: 'oat', name: 'Oat', hex: '#d8ccb8', upholstery: 'fabric' },
    ],
    frames: [black, polished],
    configs: [{ id: 'standard', name: 'Standard height', arms: false, priceDelta: 0 }],
    materials: { upholstery: 'Heavy wool felt', frame: 'Aluminium base', other: 'Steel gas lift' },
    dimensions: { width: 60, depth: 60, height: '60–85', seatHeight: '60–85', seatDepth: 38, weight: 9.4 },
    sustainability: 'Seat cover replaceable. Recycled aluminium base.',
    warranty: 5,
    leadTime: '1–2 weeks',
    finder: { use: ['task'], sitting: [5, 3, 1], priorities: { comfort: 3, support: 2, adjustability: 4, design: 3 }, style: ['minimal', 'contemporary'] },
  },
  {
    slug: 'perch-stool',
    name: 'Perch',
    designer: 'studio-hanazono',
    year: '2022',
    category: 'stool',
    type: 'stool-perch',
    price: 390,
    tagline: 'Active sitting, in one confident colour.',
    description:
      'Perch’s saddle-shaped seat encourages an open hip angle and an upright, active posture. A weighted disc base keeps it steady; the column rocks gently as you move.',
    highlights: ['Saddle seat for active sitting', 'Weighted, rocking disc base', 'Height-adjustable', 'Compact footprint'],
    colors: [
      { id: 'sun', name: 'Sun yellow', hex: '#e7b52a', upholstery: 'felt' },
      { id: 'cobalt', name: 'Cobalt', hex: '#3b5ea8', upholstery: 'felt' },
      { id: 'coal', name: 'Coal', hex: '#2c2c2e', upholstery: 'felt' },
      { id: 'coral', name: 'Coral', hex: '#df6d55', upholstery: 'felt' },
    ],
    frames: [black, white],
    configs: [{ id: 'standard', name: 'Standard', arms: false, priceDelta: 0 }],
    materials: { upholstery: 'Pressed wool felt', frame: 'Powder-coated cast iron disc', other: 'Chromed steel column' },
    dimensions: { width: 44, depth: 44, height: '55–78', seatHeight: '55–78', seatDepth: 32, weight: 8.2 },
    sustainability: 'Mono-material felt seat; base made from 80% recycled iron.',
    warranty: 3,
    leadTime: 'In stock',
    finder: { use: ['task'], sitting: [5, 2, 1], priorities: { comfort: 2, support: 3, adjustability: 3, design: 5 }, style: ['contemporary'] },
    isNew: true,
  },
  {
    slug: 'nuvola-lounge',
    name: 'Nuvola',
    designer: 'ines-moreau',
    year: '2023',
    category: 'lounge',
    type: 'lounge-club',
    price: 2900,
    tagline: 'A cloud of bouclé for the slow hours.',
    description:
      'Nuvola is built from soft, generous volumes: a deep seat cushion, rounded arms and a leaning back pillow, raised on slender oak feet. A lounge chair for reading rooms, receptions and the corner office.',
    highlights: ['Deep feather-wrapped cushions', 'Textured wool bouclé', 'Solid oak feet', 'Removable covers'],
    colors: [
      { id: 'cream', name: 'Cream bouclé', hex: '#e8e1d4', upholstery: 'boucle' },
      { id: 'sand', name: 'Sand bouclé', hex: '#c9b596', upholstery: 'boucle' },
      { id: 'olive', name: 'Olive bouclé', hex: '#7b7d56', upholstery: 'boucle' },
      { id: 'graphite', name: 'Graphite bouclé', hex: '#4c4c4e', upholstery: 'boucle' },
    ],
    frames: [oak, walnut],
    configs: [{ id: 'standard', name: 'Armchair', arms: true, priceDelta: 0 }],
    materials: { upholstery: 'Wool-rich bouclé', frame: 'Solid oak feet', other: 'Feather-wrapped foam cushions' },
    dimensions: { width: 84, depth: 80, height: '76', seatHeight: '41', seatDepth: 56, weight: 31 },
    sustainability: 'Frame of FSC-certified timber; cushions refillable.',
    warranty: 5,
    leadTime: '6–8 weeks',
    finder: { use: ['lounge'], sitting: [3, 4, 2], priorities: { comfort: 5, support: 2, adjustability: 1, design: 5 }, style: ['contemporary', 'classic'] },
    isNew: true,
  },
  {
    slug: 'tulipa-swivel',
    name: 'Tulipa Swivel',
    designer: 'ines-moreau',
    year: '2019',
    category: 'lounge',
    type: 'lounge-pedestal',
    price: 1780,
    tagline: 'A soft bloom on a sculpted pedestal.',
    description:
      'An upholstered bowl turns silently on a trumpet-shaped pedestal. Tulipa suits informal meetings, waiting areas and the quieter corners of the office.',
    highlights: ['360° return swivel', 'Upholstered bowl with loose cushion', 'Cast pedestal base', 'Compact lounge footprint'],
    colors: [
      { id: 'terracotta', name: 'Terracotta', hex: '#c65a3a', upholstery: 'fabric' },
      { id: 'petrol', name: 'Petrol', hex: '#2f5a63', upholstery: 'fabric' },
      { id: 'lilac', name: 'Lilac', hex: '#a597b8', upholstery: 'fabric' },
      { id: 'oat', name: 'Oat', hex: '#d9cdb7', upholstery: 'fabric' },
    ],
    frames: [white, black],
    configs: [
      { id: 'arms', name: 'Embracing arms', arms: true, priceDelta: 0 },
      { id: 'no-arms', name: 'Open bowl', arms: false, priceDelta: -120 },
    ],
    materials: { upholstery: 'Wool twill', frame: 'Cast aluminium pedestal, lacquered', other: 'Moulded foam shell' },
    dimensions: { width: 74, depth: 70, height: '82', seatHeight: '44', seatDepth: 50, weight: 19 },
    sustainability: 'Removable cover; aluminium pedestal from recycled content.',
    warranty: 5,
    leadTime: '3–4 weeks',
    finder: { use: ['lounge', 'meeting'], sitting: [4, 4, 2], priorities: { comfort: 5, support: 2, adjustability: 1, design: 5 }, style: ['contemporary'] },
  },
  {
    slug: 'vela-task',
    name: 'Vela',
    designer: 'mara-lindqvist',
    year: '2024',
    category: 'task',
    type: 'task-soft',
    price: 790,
    tagline: 'A compact task chair with a generous heart.',
    description:
      'Vela distils the upholstered task chair into a compact, armless form that tucks neatly under any desk. Ideal for home offices and smaller spaces.',
    highlights: ['Compact armless form', 'Soft upholstered back', 'Seat height and tilt adjustment', 'Casters for all floors'],
    colors: [
      { id: 'poppy', name: 'Poppy', hex: '#c9402f', upholstery: 'fabric' },
      { id: 'navy', name: 'Navy', hex: '#2b3a55', upholstery: 'fabric' },
      { id: 'pebble', name: 'Pebble', hex: '#a39d93', upholstery: 'fabric' },
      { id: 'olive', name: 'Olive', hex: '#6e6d3c', upholstery: 'fabric' },
    ],
    frames: [black, polished],
    configs: [
      { id: 'no-arms', name: 'Without armrests', arms: false, priceDelta: 0 },
      { id: 'arms', name: 'With armrests', arms: true, priceDelta: 110 },
    ],
    materials: { upholstery: 'Recycled polyester weave', frame: 'Aluminium base', other: 'Polyamide shell' },
    dimensions: { width: 60, depth: 58, height: '92–104', seatHeight: '41–53', seatDepth: 43, weight: 13.8 },
    sustainability: 'Upholstery from 100% recycled PET bottles.',
    warranty: 5,
    leadTime: 'In stock',
    finder: { use: ['task'], sitting: [5, 4, 3], priorities: { comfort: 4, support: 3, adjustability: 3, design: 4 }, style: ['minimal', 'contemporary'] },
    isNew: true,
  },
  {
    slug: 'kinto-mesh',
    name: 'Kinto Mesh',
    designer: 'tomas-okafor',
    year: '2024',
    category: 'task',
    type: 'task-mesh',
    price: 890,
    tagline: 'Airy mesh, soft white frame.',
    description:
      'Kinto brings the breathable comfort of a mesh backrest into a lighter, brighter palette. A soft white frame and pale mesh make it disappear into calm, daylight interiors.',
    highlights: ['Pale 3D-knit mesh', 'Soft white frame', 'Synchro mechanism', 'Adjustable armrests'],
    colors: [
      { id: 'mist', name: 'Mist', hex: '#d7d8d6', upholstery: 'fabric', mesh: '#d2d3d1' },
      { id: 'sky', name: 'Sky', hex: '#9fb6c8', upholstery: 'fabric', mesh: '#9ab1c3' },
      { id: 'sand', name: 'Sand', hex: '#cbbba1', upholstery: 'fabric', mesh: '#c6b69c' },
    ],
    frames: [white, polished],
    configs: armsCfg(),
    materials: { upholstery: '3D-knit mesh', frame: 'Lacquered aluminium', other: 'Polyamide frame' },
    dimensions: { width: 66, depth: 62, height: '96–108', seatHeight: '41–53', seatDepth: 44, weight: 16 },
    sustainability: 'Mesh from recycled PET; white lacquer is solvent-free.',
    warranty: 5,
    leadTime: '2–3 weeks',
    finder: { use: ['task'], sitting: [3, 4, 5], priorities: { comfort: 4, support: 5, adjustability: 4, design: 4 }, style: ['minimal'] },
  },
  {
    slug: 'orbit-armchair',
    name: 'Orbit Armchair',
    designer: 'studio-hanazono',
    year: '2018',
    category: 'conference',
    type: 'conf-shell',
    price: 760,
    tagline: 'Orbit, with a slender arm to lean on.',
    description:
      'The Orbit shell with slender polished arm rods. A touch more support for longer meetings, with all of the lightness of the original.',
    highlights: ['Polished arm rods', 'Swivel four-star base', 'Moulded shell', 'Seat pad available'],
    colors: [
      { id: 'mustard', name: 'Mustard', hex: '#d9a638', upholstery: 'plastic', shell: '#d9a638' },
      { id: 'tangerine', name: 'Tangerine', hex: '#e2742f', upholstery: 'plastic', shell: '#e2742f' },
      { id: 'sage', name: 'Sage', hex: '#90a88f', upholstery: 'plastic', shell: '#90a88f' },
      { id: 'ink', name: 'Ink', hex: '#26282c', upholstery: 'plastic', shell: '#26282c' },
    ],
    frames: [polished, black],
    configs: [{ id: 'arms', name: 'With arm rods', arms: true, priceDelta: 0 }],
    materials: { upholstery: 'Dyed-through polypropylene', frame: 'Polished aluminium', other: 'Steel arm rods' },
    dimensions: { width: 60, depth: 55, height: '82', seatHeight: '46', seatDepth: 42, weight: 8.4 },
    sustainability: 'Mono-material shell; take-back programme.',
    warranty: 5,
    leadTime: 'In stock',
    finder: { use: ['meeting'], sitting: [4, 4, 2], priorities: { comfort: 3, support: 3, adjustability: 1, design: 5 }, style: ['contemporary', 'executive'] },
  },
]

export const bySlug = (slug: string) => products.find((p) => p.slug === slug)

export const categoryLabel: Record<Category, string> = {
  task: 'Task Chair',
  executive: 'Executive Chair',
  conference: 'Conference Chair',
  lounge: 'Lounge Chair',
  stool: 'Stool',
}

export function priceFor(p: Product, frameId?: string, configId?: string) {
  const f = p.frames.find((x) => x.id === frameId) ?? p.frames[0]
  const c = p.configs.find((x) => x.id === configId) ?? p.configs[0]
  return p.price + f.priceDelta + c.priceDelta
}

export const defaultVariant = (p: Product) => ({ color: p.colors[0].id, frame: p.frames[0].id, config: p.configs[0].id })

export function specFor(p: Product, colorId?: string, frameId?: string) {
  const c = p.colors.find((x) => x.id === colorId) ?? p.colors[0]
  return { upholstery: c.upholstery, color: c.hex, frame: (frameId ?? p.frames[0].id) as Finish, shell: c.shell, mesh: c.mesh }
}

export function shapeFor(p: Product, configId?: string) {
  const c = p.configs.find((x) => x.id === configId) ?? p.configs[0]
  return { type: p.type, arms: c.arms }
}

export const formatPrice = (n: number) => '€ ' + n.toLocaleString('en-GB')
