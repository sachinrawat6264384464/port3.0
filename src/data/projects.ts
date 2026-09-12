import { LogoItem, Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'reyug-brand-impact',
    title: 'Reyug - Incense & Pooja Range',
    category: 'Packaging',
    subtitle: 'Full-circle thinking, Brand impact everywhere',
    description:
      'Handled complete brand journey from strategy and packaging identity to outdoor billboard campaigns, retail display stands, and point-of-sale branding across platforms.',
    image: '/assets/projects/reyug_hero.png',
    additionalImages: [
      '/assets/projects/reyug_touchpoints.png',
      '/assets/projects/reyug_channels.png',
      '/assets/projects/reyug_lineup.png',
    ],
    tags: ['Brand Identity', 'Packaging Design', 'Outdoor Campaigns', 'Retail Branding'],
    featured: true,
  },
  {
    id: 'luwwa-energy-bar',
    title: 'LUWWA Energy Bar & Banaras Paan',
    category: 'Packaging',
    subtitle: 'Designed to Stand Out, Built to Be Remembered',
    description:
      'Vibrant packaging identity created for LUWWA 15g Protein Energy Bar series and traditional Banaras Paan snack pouches with high shelf contrast and bold visual hierarchy.',
    image: '/assets/projects/packaging_luwwa.png',
    additionalImages: ['/assets/projects/packaging_grid.png'],
    tags: ['Packaging Design', 'FMCG', '3D Visualisation'],
    featured: true,
  },
  {
    id: 'corporate-presentations',
    title: 'Corporate & Investor Presentations',
    category: 'Presentations',
    subtitle: 'From Storytelling to Visual Hierarchy',
    description:
      'Crafted high-stakes investor pitch decks, corporate presentations, and brand strategy keynotes for clients including Ameerji, D.P. Abushan Limited, and Malpani Group.',
    image: '/assets/projects/presentations_devices.png',
    additionalImages: ['/assets/projects/presentations_grid.png'],
    tags: ['Presentation Design', 'Pitch Deck', 'Visual Hierarchy'],
    featured: true,
  },
  {
    id: 'annual-report-terex',
    title: 'Terex / Equipment Annual Report',
    category: 'Annual Reports',
    subtitle: 'Performance, Presented with Purpose. Design that Informs!',
    description:
      'Comprehensive 40 Years of Legacy annual report publication and corporate sustainability reports highlighting financial performance, eco-innovations, and corporate growth.',
    image: '/assets/projects/annual_report_hero.png',
    additionalImages: ['/assets/projects/annual_report_spreads.png'],
    tags: ['Annual Report', 'Editorial Design', 'Corporate Publication'],
    featured: true,
  },
  {
    id: 'the-raas-valley',
    title: 'The Raas Valley Luxury Resort',
    category: 'Logos',
    subtitle: 'Logos that Speak Silently yet Powerfully',
    description:
      'Bespoke architectural identity and illuminated facade logo design for The Raas Valley luxury resort & hospitality destination.',
    image: '/assets/projects/logo_raas_valley.png',
    additionalImages: ['/assets/projects/logos_showcase_grid.png'],
    tags: ['Logo Design', 'Hospitality Branding', 'Environmental Graphic'],
    featured: true,
  },
  {
    id: 'lemount-beer-campaign',
    title: 'Lemount Beer Outdoor Campaign',
    category: 'Outdoor & Print',
    subtitle: 'Bold Visuals, Clear Communication. We Design them All!',
    description:
      'High-impact outdoor billboard and campaign design ("CHILL KARNA HO TA CELEBRATE, LEMOUNT BEER CHOICE HAI GREAT") engineered for maximum road visibility and recall.',
    image: '/assets/projects/billboard_lemount.png',
    additionalImages: [
      '/assets/projects/billboards_grid.png',
      '/assets/projects/newspaper_bhaskar.png',
      '/assets/projects/newspaper_grid.png',
    ],
    tags: ['Outdoor Campaign', 'Billboard Design', 'Print Media'],
    featured: true,
  },
  {
    id: 'malpani-brochure',
    title: 'Malpani Group Brochure & Identity',
    category: 'Brochures',
    subtitle: 'Design that Speaks Before Words',
    description:
      'Prestige corporate brochure ("THE TRUE STRENGTH") designed for Malpani Group with metallic finishes, architectural layouts, and premium paper textures.',
    image: '/assets/projects/brochure_malpani.png',
    additionalImages: ['/assets/projects/brochure_spreads.png'],
    tags: ['Brochure Design', 'Corporate Collateral', 'Print Production'],
    featured: true,
  },
  {
    id: 'dainik-bhaskar-newspaper',
    title: 'Dainik Bhaskar Print & Ad Campaign',
    category: 'Outdoor & Print',
    subtitle: 'Because Print Still Speaks when Done by the Outline!',
    description:
      'Full-page newspaper print campaigns and editorial advertisements ("YAHI CHOTI SOTE SE KAM HAI KYA!") engineered for regional circulation dominance.',
    image: '/assets/projects/newspaper_bhaskar.png',
    additionalImages: ['/assets/projects/newspaper_grid.png'],
    tags: ['Newspaper Campaign', 'Print Media', 'Copywriting & Layout'],
    featured: false,
  },
];

export const LOGOS: LogoItem[] = [
  {
    id: 'saveria',
    name: 'Saveria',
    category: 'The Hub of Interiors',
    image: '/assets/logos/saveria.png',
    description: 'Interior architecture & luxury spaces mark',
  },
  {
    id: 'trinaas',
    name: 'Trinaas',
    category: 'Brand Identity',
    image: '/assets/logos/trinaas.png',
    description: 'Sophisticated monogram visual identity',
  },
  {
    id: 'ariddha',
    name: 'Ariddha',
    category: 'Fibre Center',
    image: '/assets/logos/ariddha.png',
    description: 'Textile & fibre industrial brand mark',
  },
  {
    id: 'royal-park',
    name: 'Royal Park',
    category: 'Hospitality & Greens',
    image: '/assets/logos/royal_park.png',
    description: 'Luxury park & event venue logo',
  },
  {
    id: 'valencia-greens',
    name: 'Valencia Greens',
    category: 'Real Estate & Living',
    image: '/assets/logos/valencia_greens.png',
    description: 'Premium township & residential logo mark',
  },
  {
    id: 'anvith',
    name: 'Anvith',
    category: 'Luxury Branding',
    image: '/assets/logos/anvith.png',
    description: 'Bespoke high-end lifestyle brand symbol',
  },
  {
    id: 'pronocis',
    name: 'Pronocis',
    category: 'Corporate Identity',
    image: '/assets/logos/pronocis.png',
    description: 'Minimalist corporate tech brand emblem',
  },
  {
    id: 'marketing-express',
    name: 'Marketing Express',
    category: 'Media & Marketing',
    image: '/assets/logos/marketing_express.png',
    description: 'Dynamic speed-line marketing mark',
  },
  {
    id: 'ava',
    name: 'AVA',
    category: 'Boutiquified Fashion',
    image: '/assets/logos/ava.png',
    description: 'High-fashion boutique brand typography',
  },
];
