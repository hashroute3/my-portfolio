/**
 * Portfolio content — edit this file to update your site.
 * Experience and projects use placeholder copy; replace with your real details from LinkedIn.
 */

export const site = {
  name: 'Mahendran Vasagam',
  tagline: 'Staff Software Engineer',
  taglineAlt: 'Software Engineer',
  intro: `I'm a Staff Software Engineer at Slack, building scalable data platform infrastructure. I focus on systems that help teams ship reliably and move faster. When I'm not at the keyboard, I'm exploring new tech and sharing what I learn.`,
  location: 'Dallas, Texas, United States',
  lastUpdated: '14 Feb, 2026',
} as const;

export const social = [
  { label: 'GitHub', href: 'https://github.com/hashroute3', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mahendran-vasagam-0738704/', icon: 'linkedin' },
  { label: 'Twitter', href: 'https://x.com/mahendranv33', icon: 'twitter' },
  { label: 'Email', href: 'mailto:mahendran.vasagam@gmail.com', icon: 'email' },
] as const;

/** Experience — structure matches Anayat’s layout. Replace placeholders with your full history from LinkedIn. */
export const experience = [
  {
    company: 'Slack',
    logo: '/logos/slack.png', // Replace with logo from LinkedIn (company/tiny-spec-inc) if desired
    role: 'Staff Software Engineer',
    period: 'Feb 2021 - Present',
    location: 'San Francisco, California, USA',
    bullets: [
      'Data @ Scale: building scalable data platform infrastructure that powers product and analytics.',
      'Tech: Kafka Streams, Airflow, Data Pipelines, Apache Spark, Trino, Big Data Analytics, CDC, Hadoop, Iceberg.',
      'Focus on software infrastructure and reliability for high-throughput, low-latency systems.',
    ],
  },
  {
    company: 'Armorblox (now part of Cisco)',
    logo: '/logos/armorblox.jpg', // Crunchbase (Armorblox logo)
    role: 'Principal Software Engineer',
    period: 'May 2019 - Jan 2021',
    location: 'Cupertino, California, USA · On-site',
    bullets: [
      'Principal engineer building data infrastructure powering AI-driven email security; core technology led to Cisco acquisition in 2023.',
      'Architected real-time data ingestion pipelines processing millions of emails daily across Microsoft 365, Gmail, and Slack.',
      'Designed distributed data processing with Kafka Streams for natural language understanding model inference at scale; built ML feature extraction pipeline supporting LLMs for threat detection.',
      'Implemented data governance and compliance infrastructure for GDPR and SOC2; technical leadership for platform engineering serving enterprise customers.',
      'Infrastructure enabled 10x scale increase while reducing inference latency by 40%; platform processed 5M+ emails daily with sub-second ML inference.',
    ],
  },
  {
    company: 'McAfee (Skyhigh Networks, acquired by McAfee)',
    logo: '/logos/mcafee.svg', // Wikimedia Commons
    role: 'Member Of Technical Staff',
    period: 'May 2012 - May 2019',
    location: 'Santa Clara, California, USA',
    bullets: [
      'Early/founding engineer at Skyhigh Networks building industry-leading cloud security products from the ground up; scaled from 0 to 500+ customers including Fortune 500 before McAfee acquisition in 2018.',
      'Shadow IT & Cloud Security: architected end-to-end data analytics and multi-tenant platform detecting unmanaged cloud usage; built data processing handling billions of cloud events daily; compliance engine for GDPR, HIPAA, PCI-DSS; threat detection for insider threats and anomalies.',
      'Identity Management: developed services that became core infrastructure across product lines; built auth layer for multi-product cloud security suite; unified identity framework used by multiple Skyhigh products.',
      'Technical lead for analytics infrastructure; led architecture for microservices platform handling petabyte-scale data; mentored engineers on distributed systems, big data, cloud security.',
      'Infrastructure processed 10B+ security events daily by 2018; Gartner named Skyhigh a Leader in Magic Quadrant for CASB.',
    ],
  },
  {
    company: 'Cisco Systems',
    logo: '/logos/cisco.svg', // Wikimedia Commons
    role: 'Senior Software Engineer',
    period: 'Mar 2008 - May 2012',
    location: 'California, USA',
    bullets: [
      'Senior engineer on 4 major Cisco security products; core contributor to platforms still in production 13–20+ years later.',
      "Identity Services Engine (ISE): co-owned network service framework for Cisco's flagship zero-trust NAC platform; built authentication/authorization engine as policy decision point; device profiling and policy enforcement; deployed to 5,000+ enterprises, foundation of Cisco zero-trust strategy.",
      'Cisco Security Manager (CSM) Event Monitoring: technical lead; designed GUI layer and data model from scratch; owned frontend application; backend syslog parser for threat detection across ASA, IPS/IDS, FWSM; threat visualization processing millions of security events daily.',
      'IPS Manager Express & ASDM: owned dashboard frameworks and reporting for two management products; delivered IME 7.0.1/7.0.2; botnet filtering, threat detection, reputation efficacy; ASDM remains primary GUI for Cisco ASA firewalls (20+ years in production).',
    ],
  },
  {
    company: 'eBay ODC',
    logo: '/logos/ebay.svg', // Wikimedia Commons
    role: 'Software Developer',
    period: 'Feb 2007 - Mar 2008',
    location: 'Offshore Development Center',
    bullets: [
      'Senior Developer at eBay ODC contributing to eBay.com platform serving billions of user hits globally.',
      'Site Email Code Consolidation (Lead): led email consolidation project; architected consistent code library for site-wide email standards; batch process for digest emails and bulk notifications.',
      'eBay Express: developed View Item integration and seller promotion; optimized traffic and scalability for millions of daily page views; built integration for Shopping.com products on eBay Express.',
      'MyeBay User Preferences Redesign: re-engineered preferences page with V4 framework; batch notification system for buyers/sellers; J2EE, XML/XSL, JMS, batch processes at massive scale.',
    ],
  },
  {
    company: 'HCL Technologies Ltd.',
    logo: '/logos/hcltech.png', // Favicon (no Wikimedia entry)
    role: 'Member Of Technical Staff',
    period: 'Nov 2004 - Feb 2007',
    location: 'India',
    bullets: [
      'J2EE developer on complex enterprise financial systems for global clients.',
      'Developed Entitlements and Market Order Processing Systems for financial services; components for transaction processing and access control; high-reliability applications with strict compliance.',
      'Re-engineered legacy Delphi application to modern tiered J2EE web architecture; led migration to industry-standard Java; reduced maintenance costs and improved scalability.',
    ],
  },
] as const;

export const projects = [
  {
    name: 'MuleRun',
    description: 'Run and orchestrate workflows at scale.',
    href: 'https://mulerun.com/',
    tags: [],
  },
  {
    name: 'AgentKit',
    description: 'Build production-ready AI agents, fast.',
    href: 'https://agentkitt.xyz/',
    tags: [],
  },
  {
    name: 'Writora AI',
    description: 'AI-powered blogs with media — create high-quality blog posts from video and audio in seconds.',
    href: 'https://writora.xyz/',
    tags: [],
  },
] as const;

/** Grouped for the dedicated /skills page. Sourced from experience (Slack, Armorblox, McAfee, Cisco, eBay ODC, HCL). */
export const skillsByCategory = [
  {
    category: 'Languages',
    items: ['Java', 'Python', 'Go', 'Terraform', 'XML', 'XSLT', 'XSL'],
  },
  {
    category: 'Backend & Data',
    items: [
      'Kafka Streams',
      'Airflow',
      'Data Pipelines',
      'Apache Spark',
      'Trino',
      'Hadoop',
      'Iceberg',
      'CDC',
      'Big Data Analytics',
      'Real-time Processing',
      'Real-time Data',
      'Batch Processing',
      'Microservices',
      'Software Infrastructure',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'Kubernetes', 'Google Kubernetes Engine (GKE)'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'Oracle Database', 'Aurora RDS', 'Postgres', 'TimescaleDB', 'Vitess'],
  },
  {
    category: 'Security',
    items: [
      'Cloud Security',
      'Identity & Access Management (IAM)',
      'Network Security',
      'Network Access Control (NAC)',
      'Email Security',
      'DLP',
      'Sanctioned Cloud Security',
      'AI Infra Security',
      'AI Security',
    ],
  },
  {
    category: 'AI / ML',
    items: [
      'ML Infrastructure',
      'Natural Language Processing (NLP)',
      'OpenAI',
      'Claude',
      'Evals',
      'Agents',
      'Multi-agent Systems',
      'Vector Embeddings',
      'HuggingFace',
      'Fine-Tuning',
    ],
  },
  {
    category: 'Tools & Platforms',
    items: ['J2EE', 'JAXB', 'Jakarta Messaging API (JMS)', 'ClearCase'],
  },
  {
    category: 'Methodologies',
    items: [
      'Agile Development',
      'TDD',
      'DevOps',
      'CI/CD',
      'MLOps',
      'System Design',
      'Code Review',
      'Iterative Development',
    ],
  },
] as const;

export const testimonials = [
  {
    quote: "Mahendran carries lot of energy to work, enthusiastic about learning new technologies and has a very good attitude towards work even during difficult times. And of course, technically good as well.",
    author: 'Jayaprakash Arthanareeswaran',
    role: 'Colleague',
  },
] as const;

/** Copy for the AI chat page (mahendran://ai). Edit answers to match your voice. */
export const ai = {
  tagline: 'where my experience becomes a conversation.',
  heading: 'have a chat with my AI to know more about me!',
  intro: "I'm Mahendran's AI counterpart — ask me anything about his work, his approach, or his experience. I'm here to help.",
  suggestedQuestions: [
    'What projects have you worked on?',
    "What's your approach to data security?",
    'What is your engineering philosophy?',
  ] as const,
  /** Predefined answers keyed by question (matched case-insensitively). Fallback used for other messages. */
  answers: {
    'What projects have you worked on?': "I've worked on data platform infrastructure at Slack and earlier on various backend and systems projects. Check out the Projects section on the homepage for more — and my GitHub for open-source work.",
    "What's your approach to data security?": "Data security is core to how we build at scale. I focus on least-privilege access, encryption in transit and at rest, and making security observable so teams can move fast without sacrificing safety. Happy to go deeper — reach out via the contact page.",
    'What is your engineering philosophy?': "I care about building systems that are reliable, observable, and easy for teams to ship on. I like to keep things simple, automate the boring stuff, and focus on impact.",
  } as const,
  fallbackAnswer: "That's a great question! I don't have a canned answer for that — try one of the suggested questions above, or reach out to Mahendran directly via the contact page. He'd love to hear from you.",
  ctaHeading: 'open to a short conversation?',
  ctaLabel: 'Book an intro call',
  ctaHref: '/contact/',
} as const;
