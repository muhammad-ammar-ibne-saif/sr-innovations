// Served from /public so it works in every host (Lovable preview, Vercel, etc.)
export const LOGO_URL = "/Logo.png";

export const SITE = {
  name: "The SR Innovations",
  legalName: "THE SR INNOVATION WORLDWIDE LIMITED",
  companyNo: "16371735",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/16371735",
  tagline: "UK Registered Digital Growth Agency",
  email: "info@thesrinnovations.com",
  ukPhone: "+44 7951 793541",
  ukPhoneHref: "tel:+447951793541",
  auPhone: "+61 489 996 322",
  auPhoneHref: "tel:+61489996322",
  whatsapp: "+447951793541",
  whatsappDisplay: "07951 793541",
  whatsappLink: "https://wa.me/447951793541?text=Hi%20SR%20Innovations%2C%20I'd%20like%20a%20free%20growth%20audit.",
  ukAddress: "3rd floor, 86–90 Paul Street, London EC2A 4NE",
  auAddress: "415 Bay Street Station Pier Port, Melbourne VIC 3207, Australia",
  google: {
    rating: "5.0",
    reviewCount: 27,
    profileUrl: "https://share.google/VIpBrORl2GfuMxnH4",
    writeReviewUrl: "https://share.google/VIpBrORl2GfuMxnH4",
  },
};

export const FOUNDER = {
  name: "Saqib Rasheed",
  title: "Founder & CEO",
  age: 19,
  bio: "Saqib founded The SR Innovations to give ambitious UK service businesses the same growth machine that big brands quietly rely on — premium websites, sharp Google Ads, and content that actually brings customers.",
  pillars: [
    { i: "Eye", t: "Vision", d: "Build an agency UK service businesses genuinely trust to grow their revenue." },
    { i: "Zap", t: "Drive", d: "Move fast, ship premium work, and treat every client's pipeline like our own." },
    { i: "Users", t: "Leadership", d: "A senior team across design, SEO, ads and social — all behind one accountable point of contact." },
    { i: "TrendingUp", t: "Results", d: "Every campaign is judged on one thing: the leads and revenue it puts in your business." },
  ],
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  // { label: "Case Studies", to: "/case-studies" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export type ServiceKey =
  | "website-design"
  | "social-media-marketing"
  | "seo-services"
  | "google-ads-management"
  | "branding-design"
  | "graphic-design"
  | "ecommerce-websites"
  | "mobile-app-development";

export const SERVICES: {
  key: ServiceKey;
  title: string;
  short: string;
  icon: string;
  bullets: string[];
  hasPage?: boolean;
}[] = [
  { key: "website-design", title: "Website Design", icon: "Monitor", short: "High converting websites built to turn visitors into enquiries.", bullets: ["Conversion focused layouts", "Mobile first", "Fast page speeds", "SEO ready foundations"], hasPage: true },
  { key: "social-media-marketing", title: "Social Media Marketing", icon: "Share2", short: "Content and ads that build trust and bring real customers.", bullets: ["Content strategy", "Reels & posts", "Paid social ads", "Community management"], hasPage: true },
  { key: "seo-services", title: "SEO Services", icon: "Search", short: "Rank higher on Google for the searches your customers use.", bullets: ["Local & national SEO", "Technical fixes", "Content & backlinks", "Monthly reporting"], hasPage: true },
  { key: "google-ads-management", title: "Google Ads Management", icon: "Target", short: "Get phone calls and enquiries within 7 days of launch.", bullets: ["Search & call ads", "Landing pages", "Conversion tracking", "Weekly optimisation"], hasPage: true },
  { key: "branding-design", title: "Branding & Design", icon: "Sparkles", short: "Premium brand identities that command higher prices.", bullets: ["Logo & identity", "Brand guidelines", "Print & digital", "Pitch materials"], hasPage: true },
  { key: "graphic-design", title: "Graphic Design", icon: "Palette", short: "Polished graphics for ads, social and print.", bullets: ["Social creatives", "Brochures & flyers", "Ad creatives", "Banners & signage"],hasPage: true  },
  { key: "ecommerce-websites", title: "Ecommerce Websites", icon: "ShoppingBag", short: "Stores built to sell, scale and keep customers coming back.", bullets: ["Shopify & WooCommerce", "Payment integrations", "Speed optimised", "Email & SMS flows"],hasPage: true  },
  { key: "mobile-app-development", title: "Mobile App Development", icon: "Smartphone", short: "iOS and Android apps for service and product businesses.", bullets: ["iOS & Android", "Cross platform", "Booking & loyalty", "API integrations"],hasPage: true  },
];

export type IndustryKey =
  | "plumbers" | "cleaning" | "automotive" | "coaches"
  | "law-firms" | "medical-clinics" | "massage" | "home-services";

export const INDUSTRIES: {
  key: IndustryKey;
  title: string;
  page: string;
  short: string;
  icon: string;
  problems: string[];
  recommended: ServiceKey[];
}[] = [
  { key: "plumbers", title: "Plumbers", page: "Marketing For Plumbers", icon: "Wrench", short: "Phone calls on tap from local emergency searches.", problems: ["Inconsistent emergency calls", "Beaten by directory sites", "Quotes go cold"], recommended: ["website-design", "google-ads-management", "seo-services"] },
  { key: "cleaning", title: "Cleaning Companies", page: "Marketing For Cleaning Companies", icon: "Sparkle", short: "Recurring contracts from domestic and commercial searches.", problems: ["Low repeat bookings", "No local visibility", "Weak brand trust"], recommended: ["website-design", "seo-services", "social-media-marketing"] },
  { key: "automotive", title: "Automotive Businesses", page: "Marketing For Automotive Businesses", icon: "Car", short: "Workshops, detailers and dealers — booked out weeks ahead.", problems: ["Low quality leads", "Seasonal dips", "Poor brand image"], recommended: ["google-ads-management", "social-media-marketing", "branding-design"] },
  { key: "coaches", title: "Coaches", page: "Marketing For Coaches", icon: "Trophy", short: "Premium positioning that fills your calendar with ideal clients.", problems: ["Inconsistent client flow", "Underpriced offers", "Weak personal brand"], recommended: ["branding-design", "social-media-marketing", "website-design"] },
  { key: "law-firms", title: "Law Firms", page: "Marketing For Law Firms", icon: "Scale", short: "Authority websites and SEO that attract high value cases.", problems: ["Low quality enquiries", "Outdated website", "Hard to stand out"], recommended: ["website-design", "seo-services", "google-ads-management"] },
  { key: "medical-clinics", title: "Medical Clinics", page: "Marketing For Medical Clinics", icon: "Stethoscope", short: "Compliant patient acquisition that grows bookings predictably.", problems: ["Empty slots", "Weak online reputation", "No clear funnel"], recommended: ["website-design", "google-ads-management", "seo-services"] },
  { key: "massage", title: "Massage Businesses", page: "Marketing For Massage Businesses", icon: "Heart", short: "Beautiful booking websites that fill the diary.", problems: ["Quiet mid week days", "Walk in dependence", "No retention plan"], recommended: ["website-design", "social-media-marketing", "branding-design"] },
  { key: "home-services", title: "Home Service Businesses", page: "Marketing For Home Service Businesses", icon: "Home", short: "Roofers, electricians, gardeners — all booked out from local search.", problems: ["Lead quality varies", "Reliant on word of mouth", "No marketing system"], recommended: ["google-ads-management", "seo-services", "website-design"] },
];

export const INDUSTRY_CATEGORIES: {
  key: string;
  title: string;
  icon: string;
  short: string;
  industries: string[];
  link?: IndustryKey;
}[] = [
  { key: "home-services", title: "Home Services", icon: "Home", short: "Plumbers, electricians, roofers, cleaners and builders booked from local search.", industries: ["Plumbers", "Electricians", "Roofers", "Cleaning Companies", "Builders"], link: "home-services" },
  { key: "automotive", title: "Automotive", icon: "Car", short: "Garages, tuners and detailers filling the diary with high-ticket bookings.", industries: ["Garages", "Tuners", "Detailers", "Vehicle Services"], link: "automotive" },
  { key: "professional", title: "Professional Services", icon: "Briefcase", short: "Law firms, accountants and consultants positioned as the obvious choice.", industries: ["Law Firms", "Consultants", "Accountants", "Financial Services"], link: "law-firms" },
  { key: "health", title: "Health & Wellness", icon: "Stethoscope", short: "Clinics and practitioners with full diaries and a premium reputation.", industries: ["Medical Clinics", "Aesthetic Clinics", "Massage Therapists", "Healthcare"], link: "medical-clinics" },
  { key: "education", title: "Education & Coaching", icon: "Trophy", short: "Coaches and training providers attracting their ideal clients monthly.", industries: ["Business Coaches", "Career Coaches", "Training Providers"], link: "coaches" },
  { key: "local", title: "Local Businesses", icon: "Store", short: "Restaurants, salons and retail with a brand customers actively choose.", industries: ["Restaurants", "Retail Stores", "Salons", "Independent Businesses"] },
];

export const VIDEO_TESTIMONIALS = [
  { url: "https://www.instagram.com/reel/DNknF8cooX4/", name: "Client Story #1", business: "UK Service Business", summary: "Higher quality enquiries and a website that finally reflects the brand.", cover: "/cover1.jpeg"},
  { url: "https://www.instagram.com/reel/DNStT8no9Hq/", name: "Client Story #2", business: "UK Service Business", summary: "Phones ringing, diary filling — a real difference within weeks of launch.",cover: "/cover2.jpeg" },
  { url: "https://www.instagram.com/reel/DQrUSy7DAbs/", name: "Client Story #3", business: "UK Service Business", summary: "Genuine partnership and consistent results month after month.",cover: "/cover3.jpeg" },
];

export const CASE_STUDIES = [
  {
    slug: "emergency-plumbing-ltd",
    name: "Emergency Plumbing Ltd",
    industry: "Emergency Plumbing — London",
    url: "https://emergencyplumbingltd.co.uk/",
    services: ["Website Design", "Google Ads", "SEO"],
    overview: "An established emergency plumbing company serving London and the surrounding boroughs, available 24/7 for domestic and commercial call-outs.",
    challenges: "High competition for emergency search terms, leads being lost to directory sites, and a website that did not communicate trust quickly enough on mobile.",
    solution: "Conversion-focused redesign with prominent click-to-call, structured service pages, Google Ads call campaigns with proper conversion tracking, and Google Business Profile optimisation.",
    results: ["Faster mobile load and clearer call-to-action above the fold", "Stronger Google presence for emergency plumbing searches", "Steady flow of qualified emergency call enquiries"],
    color: "from-sky-500 to-blue-600",
  },
  {
    slug: "imperium-chambers",
    name: "Imperium Chambers",
    industry: "Barristers' Chambers — London",
    url: "https://www.imperiumchambers.co.uk/",
    services: ["Website Design", "SEO", "Branding"],
    overview: "A specialist London barristers' chambers handling immigration, public and human rights law for clients across the UK and internationally.",
    challenges: "Required an authoritative digital presence reflecting the seniority of the chambers, with practice area pages that ranked for high-intent legal searches.",
    solution: "Premium chambers website with clear practice area structure, barrister profiles, technical SEO foundations and content built around real client search intent.",
    results: ["Improved organic visibility for key practice area terms", "Cleaner enquiry path for prospective clients", "A digital presence that matches the chambers' reputation"],
    color: "from-indigo-600 to-violet-700",
  },
  {
    slug: "voodoo-motorworks",
    name: "Voodoo Motorworks",
    industry: "Performance Automotive — UK",
    url: "https://www.voodoomotorworks.co.uk/",
    services: ["Website Design", "Social Media", "Branding"],
    overview: "A UK performance automotive workshop specialising in tuning, servicing and bespoke builds for enthusiasts and high-end clientele.",
    challenges: "Needed a premium brand presence that matched the quality of the workshop's builds and converted enthusiast traffic into booked work.",
    solution: "Modern automotive website with a strong gallery-led layout, structured services and a content engine across Instagram showcasing real workshop builds.",
    results: ["Brand image that matches the quality of the work", "Stronger enquiry flow for high-ticket builds and tuning", "Active social audience compounding monthly"],
    color: "from-zinc-700 to-zinc-900",
  },
  {
    slug: "cordelias-clinic",
    name: "Cordelia's Clinic",
    industry: "Aesthetic Clinic — UK",
    url: "https://www.cordeliasclinic.co.uk/",
    services: ["Website Design", "SEO", "Social Media"],
    overview: "A UK aesthetic clinic offering advanced skincare and aesthetic treatments delivered by qualified practitioners in a premium clinic setting.",
    challenges: "Required a refined, trust-building website with clear treatment pages, booking-friendly UX, and visibility for local aesthetic search terms.",
    solution: "Elegant clinic website with structured treatment pages, prominent booking calls-to-action, on-page SEO, and a consistent social content programme.",
    results: ["Premium online presence aligned to the clinic's brand", "Smoother booking journey for new patients", "Steady growth in local search visibility"],
    color: "from-rose-400 to-pink-600",
  },
];

export type PortfolioSite = {
  slug: string;
  name: string;
  industry: string;
  url: string;
  cat: "Websites" | "Social Media" | "SEO" | "Google Ads" | "Branding";
  services: string[];
  color: string;
  screenshot: string;
};

const colorCycle = [
  "from-sky-500 to-blue-600",
  "from-indigo-600 to-violet-700",
  "from-zinc-700 to-zinc-900",
  "from-rose-400 to-pink-600",
  "from-amber-500 to-orange-500",
  "from-fuchsia-500 to-pink-500",
  "from-emerald-500 to-teal-600",
  "from-cyan-500 to-blue-500",
];

const rawPortfolioSites: Omit<PortfolioSite, "color" | "screenshot"> & { slug: string }[] extends never ? never : any[] = [
  // WordPress
  { slug: "welkin-accounting", name: "Welkin Accounting", industry: "Accounting — Canada", url: "https://welkinaccounting.ca/", cat: "Websites", services: ["Website Design"] },
  { slug: "cruz-sports-coaching", name: "Cruz Sports Coaching", industry: "Sports Coaching — UK", url: "https://cruzsportscoaching.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "ultratherm-services", name: "Ultratherm Services", industry: "Heating Services — UK", url: "https://ultrathermservices.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "simply-hot-stones", name: "Simply Hot Stones", industry: "Wellness / Spa", url: "https://simplyhotstones.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "social-spawn", name: "Social Spawn", industry: "Marketing Agency", url: "https://socialspawn.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "trade-genius", name: "Trade Genius", industry: "Trading Tech", url: "https://www.tradegenius.bot/", cat: "Websites", services: ["Website Design"] },
  { slug: "tommy-hanley", name: "Tommy Hanley", industry: "Personal Brand", url: "https://tommyhanley.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "blackburn-united-fc", name: "Blackburn United FC", industry: "Sports Club — UK", url: "https://blackburnunitedfc.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "whitetime-property-group", name: "Whitetime Property Group", industry: "Real Estate — UK", url: "https://whitetimepropertygroup.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "og-construction", name: "OG Construction", industry: "Construction — UK", url: "https://ogconstruction.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "awan-associates-construction", name: "Awan Associates & Construction", industry: "Construction", url: "https://awanassociatesandconstruction.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "mobile-tyrefitting", name: "Mobile Tyre Fitting", industry: "Automotive — UK", url: "https://mobile-tyrefitting.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "yor-dan-gas", name: "Yor-Dan Gas", industry: "Gas Services — UK", url: "https://yor-dangas.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "phentom-logistics", name: "Phentom Logistics", industry: "Logistics", url: "https://phentomlogistics.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "tasters-peri-peri-grill", name: "Tasters Peri Peri Grill", industry: "Restaurant — UK", url: "https://tastersperiperigrill.co.uk/", cat: "Websites", services: ["Website Design"] },

  // Wix
  { slug: "blueberry-dental", name: "Blueberry Dental", industry: "Dental Clinic — UK", url: "https://www.blueberrydental.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "big-ink-bash", name: "Big Ink Bash", industry: "Tattoo Studio", url: "https://www.biginkbash.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "daredevil-books", name: "Daredevil Books", industry: "Bookstore — UK", url: "https://www.daredevilbooks.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "cj-rose-plumbing", name: "CJ Rose Plumbing", industry: "Plumbing", url: "https://www.cjroseplumbing.com/", cat: "Websites", services: ["Website Design"] },

  // Custom Code
  { slug: "inventory-management-system", name: "Inventory Management System", industry: "Custom SaaS", url: "https://inventory-management-system-rouge-five.vercel.app/", cat: "Websites", services: ["Custom App"] },
  { slug: "ad-solution", name: "Ad Solution", industry: "Advertising — UK", url: "https://ad-solution.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "cambria-energy", name: "Cambria Energy", industry: "Energy — UK", url: "https://cambriaenergy.co.uk/", cat: "Websites", services: ["Website Design"] },
  { slug: "waqar-e-madina", name: "Waqar-e-Madina", industry: "Religious / Community", url: "https://waqar-e-madina.vercel.app/", cat: "Websites", services: ["Website Design"] },
  { slug: "aymarix", name: "Aymarix", industry: "Tech / SaaS", url: "https://aymarix.vercel.app/", cat: "Websites", services: ["Website Design"] },
  { slug: "marching-bell-schools", name: "Marching Bell Schools", industry: "Education — LMS", url: "https://marching-bell-schoolss.vercel.app/login", cat: "Websites", services: ["Custom App"] },
  { slug: "corpodit", name: "Corpodit", industry: "Corporate / SaaS", url: "https://corpodit-orpin.vercel.app/", cat: "Websites", services: ["Website Design"] },
  { slug: "efe-retrofit-services", name: "EFE Retrofit Services", industry: "Home Retrofit — UK", url: "https://efretrofitservices.com/", cat: "Websites", services: ["Website Design"] },
  { slug: "aklikx", name: "Aklikx", industry: "Tech / Agency", url: "https://aklikx.ca/", cat: "Websites", services: ["Website Design"] },

  // Most recent flagship
  { slug: "emergency-plumbing-ltd", name: "Emergency Plumbing Ltd", industry: "Emergency Plumbing — London", url: "https://www.emergencyplumbingltd.co.uk/", cat: "Websites", services: ["Website Design", "Google Ads", "SEO"] },
  { slug: "marchbloom-law", name: "Marchbloom Law", industry: "Law Firm", url: "https://marchbloomlaw.com/", cat: "Websites", services: ["Website Design", "SEO"] },
  { slug: "techonskills", name: "TechOnSkills", industry: "Education — LMS Platform", url: "https://techonskills.com/", cat: "Websites", services: ["Custom App", "Website Design"] },
];

export const PORTFOLIO_SITES: PortfolioSite[] = rawPortfolioSites.map((s, i) => ({
  ...s,
  color: colorCycle[i % colorCycle.length],
  screenshot: `/portfolio/web/${s.slug}.jpg`,
}));


// ---- Add this below PORTFOLIO_SITES in site.ts ----

const rawSocialSites = [
  { slug: "social-client-1", name: "Social Client 1", industry: "Add industry", url: "fhjfn", services: ["Social Media"] },
  { slug: "social-client-2", name: "Social Client 2", industry: "Add industry", url: "", services: ["Social Media"] },
  { slug: "social-client-3", name: "Social Client 3", industry: "Add industry", url: "", services: ["Social Media"] },
  { slug: "social-client-4", name: "Social Client 4", industry: "Add industry", url: "", services: ["Social Media"] },
  { slug: "social-client-5", name: "Social Client 5", industry: "Add industry", url: "", services: ["Social Media"] },
  { slug: "social-client-6", name: "Social Client 6", industry: "Add industry", url: "", services: ["Social Media"] },
];

export const SOCIAL_MEDIA_SITES: PortfolioSite[] = rawSocialSites.map((s, i) => ({
  ...s,
  cat: "Social Media",
  color: colorCycle[i % colorCycle.length],
  screenshot: `/portfolio/social/${s.slug}.jpg`,
}));