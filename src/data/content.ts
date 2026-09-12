import { ContactPerson, Pillar, Service } from '@/types';

export const BRAND = {
  name: 'The Outline',
  tagline: 'strategy | design | direction',
  heroHeadline: 'ideas with intent',
  heroSubheadline: 'Design with Direction!',
  positioningStatement: "It's communication, perception, and positioning, done right.",
  aboutTitle: 'The Outline is where strategy meets aesthetics.',
  aboutDescription:
    'We exist to bring clarity to brands in a noisy world by turning raw ideas into structured, powerful visual identities. We believe every brand already has a story. Our job is to outline it, sharpen it, and make it unforgettable.',
  coreQuote: 'For us, good design is not decoration.',
  workingExperienceStatement:
    'Partnered with startups, scaling businesses, and established brands across industries, understanding unique challenges and crafting tailored creative solutions.',
  ctaHeadline: 'Ready to give your brand the clarity, structure, and identity it truly deserves?',
  ctaSubheadline: "Let's outline a brand that speaks with purpose and stands out with confidence.",
};

export const CONTACTS: ContactPerson[] = [
  {
    name: 'Ravin Kothari',
    title: 'Founder',
    email: 'ravin@theoutline.in',
    phone: '93000 12365',
    phoneRaw: '+919300012365',
  },
  {
    name: 'Lakshita Kothari',
    title: 'Brand Strategist',
    email: 'lakshita@theoutline.in',
    phone: '75838 95123',
    phoneRaw: '+917583895123',
  },
];

export const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'Diverse Brand Collaborations',
    description:
      'Partnered with startups, scaling businesses, and established brands across industries, understanding unique challenges and crafting tailored creative solutions.',
    iconName: 'Users',
  },
  {
    number: '02',
    title: 'End-to-End Creative Delivery',
    description:
      'Handled complete brand journeys from strategy and identity creation to communication design and final execution across platforms.',
    iconName: 'Layers',
  },
  {
    number: '03',
    title: 'Strategy-Driven Design',
    description:
      'Transformed business goals and brand intent into structured, impactful visual systems that strengthen recognition and recall.',
    iconName: 'Target',
  },
  {
    number: '04',
    title: 'Founder-Led Brand Alignment',
    description:
      'Worked closely with founders and leadership teams to ensure brand identity aligns with vision, values, and long-term growth plans.',
    iconName: 'Compass',
  },
  {
    number: '05',
    title: 'Concept to Completion',
    description:
      'Managed projects from initial ideation to final delivery, maintaining quality, consistency, and timelines at every stage.',
    iconName: 'CheckCircle2',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Idea',
    description: 'Raw concepts and founder vision gathered with intent.',
  },
  {
    step: '02',
    name: 'Strategy',
    description: 'Positioning, perception, and market clarity structured.',
  },
  {
    step: '03',
    name: 'Identity',
    description: 'Visual systems, logos, and brand architecture crafted.',
  },
  {
    step: '04',
    name: 'Communication',
    description: 'Consistent message across every touchpoint & channel.',
  },
  {
    step: '05',
    name: 'Execution',
    description: 'Flawless production, print, digital, and billboard rollout.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'logo-design',
    number: '01',
    title: 'Logo Design',
    statement: 'Logos that Speak Silently yet Powerfully for your Business Growth',
    description:
      'Crafting timeless, memorable visual marks that embody the essence of your business and establish immediate market authority.',
    iconName: 'Sparkles',
    previewImage: '/assets/projects/logo_raas_valley.png',
    features: ['Brand Mark Creation', 'Visual Identity Systems', 'Brand Guidelines', 'Typography Guidelines'],
  },
  {
    id: 'presentation-design',
    number: '02',
    title: 'Presentation Design',
    statement: 'From Storytelling to Visual Hierarchy, We Craft Presentations that Speak with Purpose',
    description:
      'Transforming complex business narratives and data into pitch-deck presentations that command attention and drive decision-making.',
    iconName: 'Presentation',
    previewImage: '/assets/projects/presentations_devices.png',
    features: ['Investor Decks', 'Corporate Keynotes', 'Pitch Presentations', 'Visual Storytelling Layouts'],
  },
  {
    id: 'packaging-design',
    number: '03',
    title: 'Packaging Design',
    statement: 'Designed to Stand Out, Built to Be Remembered',
    description:
      'Creating tactile retail packaging and product unboxing experiences that dominate shelf space and entice consumer purchasing.',
    iconName: 'Package',
    previewImage: '/assets/projects/packaging_luwwa.png',
    features: ['Retail Pouch & Box Design', 'FMCG Product Packaging', '3D Mockup Visualizations', 'Print-Ready Dielines'],
  },
  {
    id: 'annual-report',
    number: '04',
    title: 'Annual Report Design',
    statement: 'Performance, Presented with Purpose. Design that Informs!',
    description:
      'Designing editorial annual reports and corporate publications that elegantly highlight business milestones, sustainability, and financial legacy.',
    iconName: 'FileText',
    previewImage: '/assets/projects/annual_report_hero.png',
    features: ['Legacy & Milestone Publications', 'Editorial Data Layouts', 'Financial Summaries', 'Corporate Storytelling'],
  },
  {
    id: 'brochure-design',
    number: '05',
    title: 'Brochure Design',
    statement: 'Design that Speaks Before Words',
    description:
      'Designing bespoke print brochures, company profiles, and multi-page collateral that leave a lasting impression in offline interactions.',
    iconName: 'BookOpen',
    previewImage: '/assets/projects/brochure_malpani.png',
    features: ['Corporate Identity Books', 'Tri-fold & Multi-page Catalogues', 'Specialty Print Finishes', 'Brand Collateral'],
  },
  {
    id: 'print-outdoor',
    number: '06',
    title: 'Print & Outdoor Campaigns',
    statement: 'Because Print Still Speaks when Done by the Outline!',
    description:
      'Bold outdoor billboards, newspaper campaigns, and large-format print designs crafted with high-impact visual hierarchy.',
    iconName: 'Megaphone',
    previewImage: '/assets/projects/billboard_lemount.png',
    features: ['Outdoor Billboard Campaigns', 'Full-Page Newspaper Advertisements', 'Transit Advertising', 'Print Media Kits'],
  },
];

export const PHILOSOPHY_QUOTES = [
  { quote: 'Performance, Presented with Purpose.', emphasis: 'Design that Informs!' },
  { quote: 'Designed to Stand Out.', emphasis: 'Built to Be Remembered.' },
  { quote: 'One Brand Voice', emphasis: 'Across Every Touchpoint.' },
  { quote: 'Design that Speaks', emphasis: 'Before Words.' },
];
