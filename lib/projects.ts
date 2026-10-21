export type Project = {
  slug: string;
  name: string;
  domain: string;
  url: string;
  kind: 'Client project' | 'Personal project';
  sector: string;
  summary: string;
  tags: string[];
  desktop: string;
  mobile: string;
};

type ProjectInput = Omit<Project, 'desktop' | 'mobile'>;

// Screenshots live in /public/projects/<slug>/desktop.webp and mobile.webp
const withScreenshots = (project: ProjectInput): Project => ({
  ...project,
  desktop: `/projects/${project.slug}/desktop.webp`,
  mobile: `/projects/${project.slug}/mobile.webp`,
});

const projectList: ProjectInput[] = [
  {
    slug: 'meinautoverkauf',
    name: 'Meinautoverkauf',
    domain: 'meinautoverkauf.de',
    url: 'https://meinautoverkauf.de/',
    kind: 'Client project',
    sector: 'Car buying · Germany-wide',
    summary:
      'Online car-buying platform where owners get a fair price for their car through a 5-step valuation form, then pick a pickup date and get paid quickly.',
    tags: ['Multi-step valuation', 'Lead capture', 'Local SEO pages'],
  },
  {
    slug: 'al-nur-masjid',
    name: 'An-Nur Mosque',
    domain: 'al-nur-masjid-c.vercel.app',
    url: 'https://al-nur-masjid-c.vercel.app/',
    kind: 'Client project',
    sector: 'Community & religion · Wiesbaden',
    summary:
      'Multilingual website for the Afghan Islamic Cultural Association in Wiesbaden with live prayer times, Quran classes, Ramadan programme and events.',
    tags: ['Live prayer times', 'Multilingual', 'Events & classes'],
  },
  {
    slug: 'autohaus-bodenheim',
    name: 'AutoHaus Bodenheim',
    domain: 'autohaus-bodenheim.de',
    url: 'https://www.autohaus-bodenheim.de/',
    kind: 'Client project',
    sector: 'Car dealership · Bodenheim',
    summary:
      'Premium used-car dealership site with checked stock, a car-selling request flow and registration services, built to turn visitors into on-site appointments.',
    tags: ['Vehicle showroom', 'Car-selling form', 'Registration services'],
  },
  {
    slug: 'ahg-hausgarten',
    name: 'AHG Haus- und Gartenservice',
    domain: 'ahg-hausgarten.de',
    url: 'https://www.ahg-hausgarten.de/',
    kind: 'Client project',
    sector: 'Home & garden services · Wiesbaden',
    summary:
      'Service website for garden care, caretaker work and furniture assembly in Wiesbaden and Mainz, with a clear service overview and free-quote requests.',
    tags: ['Service catalogue', 'Quote requests', 'WhatsApp contact'],
  },
  {
    slug: 'hf-eautos',
    name: 'HF E-Autos',
    domain: 'hf-eautos.de',
    url: 'https://www.hf-eautos.de/',
    kind: 'Client project',
    sector: 'EV dealership · Wiesbaden',
    summary:
      'Website for a used electric and plug-in hybrid car dealer, showing checked vehicles with battery certificates, warranty and a stock list that updates every day.',
    tags: ['Daily-updated stock', 'Battery certificates', 'Contact & WhatsApp'],
  },
  {
    slug: 'hf-autopflege',
    name: 'HF Autopflege',
    domain: 'hf-autopfelge.vercel.app',
    url: 'https://hf-autopfelge.vercel.app/',
    kind: 'Client project',
    sector: 'Car detailing · Bodenheim',
    summary:
      'Elegant site for a car detailing studio presenting interior and exterior detailing, polishing and sealing with transparent guide prices and quick appointment requests.',
    tags: ['Service pricing', 'Appointment requests', 'FAQ'],
  },
  {
    slug: 'main-travel',
    name: 'Main Travel',
    domain: 'main-travel-eight.vercel.app',
    url: 'https://main-travel-eight.vercel.app/',
    kind: 'Client project',
    sector: 'Bus charter · Rüsselsheim',
    summary:
      'Website for a premium bus charter company covering company trips, school and club travel, with a fleet gallery and an instant charter enquiry form.',
    tags: ['Charter enquiry form', 'Fleet gallery', 'Service pages'],
  },
  {
    slug: 'zarin-carpets',
    name: 'Zarin Home',
    domain: 'zarin-carpets-tch3.vercel.app',
    url: 'https://zarin-carpets-tch3.vercel.app/',
    kind: 'Client project',
    sector: 'Handmade carpets · Bischofsheim',
    summary:
      'Gallery-style catalogue for handcrafted carpets, letting customers browse the collection piece by piece and contact the shop directly via WhatsApp.',
    tags: ['Product catalogue', 'Image gallery', 'WhatsApp contact'],
  },
  {
    slug: 'zarin-catalog',
    name: 'Zarin Möbelhaus',
    domain: 'zarincatalog.vercel.app',
    url: 'https://zarincatalog.vercel.app/',
    kind: 'Client project',
    sector: 'Furniture store · Bischofsheim',
    summary:
      'Digital catalogue for an exclusive sofa and armchair collection with 24 models, photo galleries per model and a separate table catalogue.',
    tags: ['Digital catalogue', 'Model galleries', 'Mobile-first'],
  },
  {
    slug: 'autohaus-studio',
    name: 'Autohaus Webstudio',
    domain: 'autohaus-studio.vercel.app',
    url: 'https://autohaus-studio.vercel.app/',
    kind: 'Personal project',
    sector: 'Web agency · Automotive',
    summary:
      'My web studio for car dealerships: websites with automatically synced vehicle stock, car-buying enquiries and clear package pricing.',
    tags: ['Agency site', 'Pricing packages', 'Case studies'],
  },
  {
    slug: 'qalinsara',
    name: 'QalinSara',
    domain: 'qalinsara.vercel.app',
    url: 'https://qalinsara.vercel.app/',
    kind: 'Personal project',
    sector: 'Inventory software · Carpet trade',
    summary:
      'Inventory and order management system for carpet businesses: stock, orders, invoices, expenses and analytics in one dashboard, with CSV/JSON import and export.',
    tags: ['Dashboard', 'Invoices & orders', 'CSV/JSON import'],
  },
  {
    slug: 'datastrikers',
    name: 'Data Strikers',
    domain: 'datastrikers.netlify.app',
    url: 'https://datastrikers.netlify.app/',
    kind: 'Personal project',
    sector: 'Football analytics · Machine learning',
    summary:
      'Machine learning study predicting which players from lower-tier European leagues will succeed in the Premier League, reaching 83% accuracy for attackers.',
    tags: ['Machine learning', 'Data visualization', 'Analytics'],
  },
  {
    slug: 'transalyze',
    name: 'Transalyze',
    domain: 'transalyze.netlify.app',
    url: 'https://transalyze.netlify.app/',
    kind: 'Personal project',
    sector: 'AI tool · Translation',
    summary:
      'AI translator powered by Google Gemini that translates text instantly between more than ten languages.',
    tags: ['Gemini AI', '10+ languages', 'Instant translation'],
  },
];

export const projects: Project[] = projectList.map(withScreenshots);
