export const site = {
  name: 'Just-Chemicals',
  brandShort: 'JCSPL',
  domain: 'just-chemicals.com',
  url: 'https://www.just-chemicals.com',
  tagline: 'Power plant chemistry that stops failures before they start.',
  description:
    'Juschem Solutions Pvt. Ltd. — IAPWS/EPRI/VGB-aligned power plant chemistry consulting, certified training, and specialty chemicals. Trusted by JSW Energy, Tata Power, IOCL, and 40+ industrial plants.',
  emails: {
    contact: 'Contact@just-chemicals.com',
  },
  phone: {
    e164: '+917985635683',
    display: '+91 798 563 5683',
  },
  location: {
    city: 'Bangalore',
    region: 'Karnataka',
    country: 'India',
  },
  legalEntity: 'Juschem Solutions Pvt. Ltd.',
  cin: 'U52603KA2018PTC112946',
  socials: {
    linkedin: 'https://www.linkedin.com/company/juschem-solutions-pvt-ltd/',
    facebook: 'https://www.facebook.com/powerplantchem/',
  },
  legalLastUpdated: '2026-05-18',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#case-studies', label: 'Case Studies' },
  { href: '/trainings', label: 'Trainings' },
  { href: '/chemicals', label: 'Chemicals' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const verticals = [
  {
    slug: 'chemicals',
    name: 'Specialty Chemicals',
    role: 'SigmaGuard · SigmaTreat · MemPro · SigmaFloc',
    industryLabel: 'Industrial Water Treatment',
    tagline: 'Diagnose first. Then prescribe.',
    accentHex: '#0E6FC7',
    accentSoft: '#DCEBF8',
    heroImg:
      'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Chemist analysing water sample in an industrial lab',
  },
  {
    slug: 'trainings',
    name: 'Power Plant Chemistry Training',
    role: 'On-Demand · Online · On-Site',
    industryLabel: 'Operator & Engineer Upskilling',
    tagline: 'Frameworks engineers apply on Monday morning.',
    accentHex: '#B45309',
    accentSoft: '#FEF3C7',
    heroImg:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Engineers in a training session reviewing technical data',
  },
  {
    slug: 'techie',
    name: 'JC Techie',
    role: 'Industrial Process Tech & Monitoring',
    industryLabel: 'Digital Plant Chemistry',
    tagline: 'Plant data, made decision-ready.',
    accentHex: '#0F766E',
    accentSoft: '#CCFBF1',
    heroImg:
      'https://images.unsplash.com/photo-1581092446327-9b52bd1570c2?auto=format&fit=crop&w=1600&q=80',
    heroAlt: 'Power plant control room with monitoring dashboards',
  },
] as const;

export type Vertical = (typeof verticals)[number];

export function getVertical(slug: string): Vertical | undefined {
  return verticals.find((v) => v.slug === slug);
}
