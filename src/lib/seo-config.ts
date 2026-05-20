export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
}

const KW = {
  brand: 'Just-Chemicals, Juschem Solutions, JCSPL, power plant chemistry India',
  geo: 'India, Bangalore, Southeast Asia',
  standards: 'IAPWS, EPRI, VGB, Jurans Trilogy',
  chemicals: 'SigmaGuard, SigmaTreat, MemPro, SigmaFloc, cooling water treatment, boiler water treatment, RO antiscalant, polyelectrolyte',
  trainings: 'boiler tube failure training, power plant chemistry course, RO training, steam-water cycle chemistry, cooling water training',
};

export const seoConfig: Record<string, PageSeo> = {
  '/': {
    title: 'Power Plant Chemistry Consulting, Training & Specialty Chemicals — Just-Chemicals',
    description:
      'IAPWS/EPRI/VGB-aligned power plant chemistry. Specialty chemicals, certified training, and audits for thermal power plants, refineries, and cement. Trusted by 40+ industrial plants.',
    keywords: `${KW.brand}, ${KW.standards}, ${KW.chemicals}, ${KW.geo}`,
  },
  '/chemicals': {
    title: 'Specialty Chemicals — SigmaGuard, SigmaTreat, MemPro, SigmaFloc',
    description:
      '42 specialty chemical SKUs for cooling water treatment, boiler water treatment, RO antiscalants, polyelectrolytes, and maintenance cleaning. Supplied by Juschem Solutions.',
    keywords: `${KW.chemicals}, industrial water treatment chemicals India, ${KW.brand}`,
  },
  '/trainings': {
    title: 'Power Plant Chemistry Training — Boiler, RO, Steam-Water Cycle',
    description:
      'On-demand, online, and on-site training for power plant chemistry: boiler tube failure mechanisms, RO best practices, steam-water cycle, cooling water, coal quality, water management.',
    keywords: `${KW.trainings}, ${KW.brand}, ${KW.standards}`,
  },
  '/techie': {
    title: 'JC Techie — Industrial Process Tech & Monitoring',
    description:
      'Plant chemistry monitoring, data tooling, and process tech consulting for thermal power, refining, and cement. Coming soon from Juschem Solutions Pvt. Ltd.',
    keywords: `industrial monitoring, plant chemistry data, ${KW.brand}`,
  },
  '/privacy': {
    title: 'Privacy Policy — Just-Chemicals',
    description: 'How Juschem Solutions Pvt. Ltd. collects, uses, and protects information from visitors to just-chemicals.com.',
    keywords: `privacy policy, ${KW.brand}`,
  },
  '/terms': {
    title: 'Terms of Service — Just-Chemicals',
    description: 'Terms of Service governing the use of just-chemicals.com and the materials provided by Juschem Solutions Pvt. Ltd. Governed by the laws of India.',
    keywords: `terms of service, ${KW.brand}`,
  },
};

export function getPageSeo(routePath: string): PageSeo | undefined {
  const key = routePath.replace(/\/$/, '') || '/';
  return seoConfig[key];
}
