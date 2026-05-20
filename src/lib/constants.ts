export const SITE_NAME = "PureFlow Leads";
export const SITE_DOMAIN = "thepureflowleads.com";
export const SITE_URL = `https://${SITE_DOMAIN}`;
export const SITE_DESCRIPTION =
  "USA-focused business growth insights, lead generation strategies, and free tools for small businesses, agencies, and marketing professionals.";
export const SITE_TAGLINE = "Grow smarter. Convert faster.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-default.png`;

export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/pureflowleads",
  linkedin: "https://linkedin.com/company/pureflowleads",
  youtube: "https://youtube.com/@pureflowleads",
  facebook: "https://facebook.com/pureflowleads",
} as const;

export const NAV_ITEMS = [
  {
    label: "Insights",
    href: "/blog",
    mega: true,
    children: [
      { label: "Lead Generation", href: "/category/lead-generation", description: "Strategies to fill your pipeline" },
      { label: "Business Growth", href: "/category/business-growth", description: "Scale operations sustainably" },
      { label: "Marketing Tools", href: "/category/marketing-tools", description: "Software that moves the needle" },
      { label: "AI Automation", href: "/category/ai-automation", description: "Work smarter with AI workflows" },
      { label: "CRM Software", href: "/category/crm-software", description: "Manage relationships at scale" },
      { label: "Email Marketing", href: "/category/email-marketing", description: "Inbox strategies that convert" },
      { label: "Sales Funnels", href: "/category/sales-funnels", description: "Optimize every stage" },
    ],
  },
  { label: "Free Tools", href: "/tools" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const CATEGORIES = [
  {
    slug: "lead-generation",
    name: "Lead Generation",
    description: "Proven tactics to attract, qualify, and convert high-intent prospects across channels.",
    icon: "Target",
  },
  {
    slug: "business-growth",
    name: "Business Growth",
    description: "Frameworks for scaling revenue, operations, and team performance in competitive markets.",
    icon: "TrendingUp",
  },
  {
    slug: "marketing-tools",
    name: "Marketing Tools",
    description: "Reviews, comparisons, and workflows for the software stack modern teams rely on.",
    icon: "Wrench",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    description: "Practical AI implementations that save time without sacrificing quality or compliance.",
    icon: "Bot",
  },
  {
    slug: "crm-software",
    name: "CRM Software",
    description: "CRM selection guides, integrations, and pipeline management best practices.",
    icon: "Users",
  },
  {
    slug: "email-marketing",
    name: "Email Marketing",
    description: "Deliverability, copy, sequences, and list growth strategies that drive ROI.",
    icon: "Mail",
  },
  {
    slug: "sales-funnels",
    name: "Sales Funnels",
    description: "Landing pages, offers, and conversion optimization for every funnel stage.",
    icon: "Filter",
  },
] as const;

export const FREE_TOOLS = [
  {
    slug: "roi-calculator",
    name: "ROI Calculator",
    description: "Measure campaign returns and justify marketing spend with clear projections.",
    status: "coming-soon" as const,
    icon: "Calculator",
  },
  {
    slug: "email-subject-generator",
    name: "Email Subject Generator",
    description: "Generate high-open-rate subject lines tailored to your audience and offer.",
    status: "coming-soon" as const,
    icon: "Sparkles",
  },
  {
    slug: "marketing-budget-calculator",
    name: "Marketing Budget Calculator",
    description: "Allocate spend across channels based on goals, CAC targets, and seasonality.",
    status: "coming-soon" as const,
    icon: "PieChart",
  },
  {
    slug: "lead-cost-calculator",
    name: "Lead Cost Calculator",
    description: "Estimate cost per lead across paid, organic, and outbound acquisition channels.",
    status: "coming-soon" as const,
    icon: "DollarSign",
  },
  {
    slug: "business-name-generator",
    name: "Business Name Generator",
    description: "Brainstorm memorable, brandable names aligned with your positioning and niche.",
    status: "coming-soon" as const,
    icon: "Lightbulb",
  },
] as const;

export const TRUST_STATS = [
  { value: "250K+", label: "Monthly readers" },
  { value: "120+", label: "Expert guides" },
  { value: "50+", label: "Tool reviews" },
  { value: "USA", label: "Market focus" },
] as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
  { label: "Terms & Conditions", href: "/legal/terms-and-conditions" },
  { label: "Disclaimer", href: "/legal/disclaimer" },
  { label: "Cookie Policy", href: "/legal/cookie-policy" },
] as const;
