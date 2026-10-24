import { Project, ExperienceItem, Certification, EducationItem, SkillCategory, ArticleItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Syed M Ghazi Abbas',
  title: 'BSCS Student | Tech & Marketing Enthusiast',
  headline: 'Software Engineer & Growth Strategist',
  location: 'Lahore, Pakistan',
  phone: '0320-4406286',
  phoneInternational: '+92 320 4406286',
  email: 'smghaziabbas88@gmail.com',
  linkedinUrl: 'https://linkedin.com/in/sm-ghazi-abbas-393216332',
  linkedinDisplay: 'linkedin.com/in/sm-ghazi-abbas-393216332',
  githubUrl: 'https://github.com/Sm-Ghazi-Abbas',
  githubDisplay: 'github.com/Sm-Ghazi-Abbas',
  mediumUrl: 'https://smghaziabbas.medium.com/',
  mediumDisplay: 'medium.com/@smghaziabbas',
  featuredArticleUrl: 'https://smghaziabbas.medium.com/the-hidden-cost-of-intelligence-why-ais-next-crisis-isn-t-chips-it-s-water-47ba92c07981?sharedUserId=smghaziabbas',
  featuredArticleTitle: "The Hidden Cost of Intelligence: Why AI’s Next Crisis Isn’t Chips, It’s Water",
  institution: 'UMT Lahore (University of Management and Technology)',
  degree: 'Bachelor of Science in Computer Science (BSCS)',
  summary:
    'Computer Science student at UMT Lahore who combines technical skills in React Native, Python, and cloud tools with a strong interest in marketing and management. Proven ability to take projects from concept to working prototype, backed by real-world experience in AI marketing, HR, and sales.',
  hybridPitch:
    'Most developers stop at code; most marketers cannot read a codebase. I bridge both worlds — designing robust software (React Native, Python, AWS) and driving commercial impact through AI automations, technical SEO, brand positioning, and structured sales pipelines.',
  stats: [
    { label: 'Technical Projects', value: '6+', desc: 'Cloud, Mobile, SEO & AI' },
    { label: 'AWS Certifications', value: '3', desc: 'EC2 & CloudWatch Verified' },
    { label: 'Lines of Code (Mobile)', value: '1,500+', desc: 'React Native Architecture' },
    { label: 'Industry Internships', value: '5', desc: 'SEO, AI, Automation, HR & Sales' },
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'zero-trust-cloud',
    title: 'Zero-Trust Serverless Cloud Security',
    subtitle: 'Cloud Computing Research Project & Reference Architecture',
    category: 'cloud',
    lensCategory: 'engineering',
    tags: ['AWS IAM', 'KMS', 'S3', 'AWS Lambda', 'CloudTrail', 'NIST SP 800-207'],
    summary:
      'Authored an in-depth research report applying NIST SP 800-207 Zero-Trust principles to a serverless AWS storage system, designing the "Zero-Trust File Vault" reference architecture.',
    bulletPoints: [
      'Authored a research report applying NIST SP 800-207 Zero-Trust principles to a serverless AWS storage system.',
      'Designed the "Zero-Trust File Vault" reference architecture featuring TLS enforcement, short-lived STS credentials, KMS envelope encryption, and comprehensive audit logging via CloudTrail.',
      'Constructed least-privilege IAM policy models and threat attack surface maps against credential exfiltration and unauthorized object access.'
    ],
    details: {
      problem:
        'Traditional perimeter-based cloud storage exposes enterprises to lateral movement and unauthorized bucket access if credentials leak.',
      solution:
        'Designed an end-to-end Zero-Trust File Vault on AWS where every read/write request must explicitly authenticate via short-lived STS tokens, envelope-encrypt data via KMS, and log tamper-evident telemetry in CloudTrail.',
      architectureOrStrategy: [
        'Amazon S3 with bucket policies enforcing TLS 1.3 and KMS CMK key encryption',
        'AWS STS (Security Token Service) generating temporary, strictly scoped session credentials',
        'AWS Lambda microservices validating client claims and sanitizing payload metadata',
        'AWS CloudTrail streaming real-time event logs to CloudWatch alarms for anomaly alerts'
      ],
      metricsOrOutcomes: [
        'Compliant with NIST SP 800-207 standard',
        'Eliminated static long-lived credentials using temporary STS tokens',
        'Complete end-to-end cryptographic auditability'
      ]
    },
    githubUrl: 'https://github.com/Sm-Ghazi-Abbas',
    badge: 'AWS Cloud Security',
    featured: true
  },
  {
    id: 'restaurant-app',
    title: 'Restaurant Table Reservation App',
    subtitle: 'Full-Stack React Native Mobile Application',
    category: 'mobile',
    lensCategory: 'hybrid',
    tags: ['React Native', 'JavaScript (ES6+)', 'JSON Server', 'REST API', 'Mobile UX'],
    summary:
      'Engineered a complete mobile application with 5 screens and 5 reusable modular components for browsing restaurants, booking tables, and managing dining reservations.',
    bulletPoints: [
      'Built a full-stack mobile app with 5 screens and 5 reusable components for browsing, booking, and managing reservations.',
      'Integrated a mock REST API with JSON Server, including live search/filter, form validation, and responsive empty states across ~1,500+ lines of code.',
      'Crafted smooth user flows, persistent state handling, and error boundaries for an intuitive customer reservation experience.'
    ],
    details: {
      problem:
        'Dining guests frequently experience phone booking friction and lack real-time confirmation on table availability.',
      solution:
        'Engineered an intuitive mobile application offering instant table discovery, slot filtering, customer dietary form validation, and reactive booking history management.',
      architectureOrStrategy: [
        'Modular Component Architecture: FilterBar, ReservationCard, TableSelector, BookingModal, StatusBanner',
        'State Management & Asynchronous Data Fetching from JSON Server REST API',
        'Client-Side Input Validation for reservation dates, guest count, and contact credentials',
        'Smooth transitions and defensive rendering for loading and zero-match search states'
      ],
      metricsOrOutcomes: [
        '1,500+ clean lines of modular React Native code',
        '5 full screens & 5 reusable production-grade UI components',
        'Seamless REST API integration with real-time feedback'
      ]
    },
    githubUrl: 'https://github.com/Sm-Ghazi-Abbas',
    badge: '1,500+ Lines React Native',
    featured: true
  },
  {
    id: 'uni-pool',
    title: 'Uni-Pool - Student Carpooling Network',
    subtitle: 'Concept, Product Strategy & High-Fidelity UI/UX in Figma',
    category: 'product',
    lensCategory: 'hybrid',
    tags: ['Figma UI/UX', 'Product Strategy', 'Market Research', 'Flutter (Planned)', 'Firebase'],
    summary:
      'Spearheaded product ideation, market research, and high-fidelity Figma prototypes for a GPS-based student carpooling network featuring an industry-first female-only "Pink-Pool" safety initiative.',
    bulletPoints: [
      'Designed a GPS-based carpooling app concept with smart driver/passenger matching and a female-only "Pink-Pool" safety feature.',
      'Led comprehensive student market research, competitor landscape analysis, UI/UX design in Figma, and roadmap planning for MVP development.',
      'Formulated the commercial go-to-market and university campus ambassador acquisition strategy.'
    ],
    details: {
      problem:
        'University students face high fuel and transit costs, unreliable public commutes, and critical safety hesitations regarding ride-sharing.',
      solution:
        'Architected Uni-Pool with university email verification, real-time route pairing, and the dedicated "Pink-Pool" verification layer to provide safe, affordable rides for female students.',
      architectureOrStrategy: [
        'End-to-end Figma UI/UX Design System with component libraries, atomic tokens, and dark/light modes',
        'Smart Matching Algorithm Logic: Proximity radius scoring, route deviation caps, and departure time windows',
        'Trust & Safety Protocol: University credential verification, emergency SOS trigger, and rating thresholds',
        'Go-to-market strategy targeting university campuses with peer-referral incentives'
      ],
      metricsOrOutcomes: [
        'Surveyed & validated student commute pain points across Lahore universities',
        'Complete interactive 20+ screen Figma prototype with driver/rider flows',
        'Engineered unique "Pink-Pool" safety differentiator to capture high-intent adoption'
      ]
    },
    githubUrl: 'https://github.com/Sm-Ghazi-Abbas',
    badge: 'Product & Market Strategy',
    featured: true
  },
  {
    id: 'escape-haunted-room',
    title: 'Escape the Haunted Room',
    subtitle: 'First-Person Horror Puzzle Game in Unity 3D',
    category: 'game',
    lensCategory: 'engineering',
    tags: ['Unity 3D', 'C# Scripting', 'Spatial Audio', 'Physics Engine', 'Level Design'],
    summary:
      'Developed a first-person horror puzzle game in Unity utilizing C# scripting, atmospheric dynamic lighting, 3D spatial audio, and environmental storytelling.',
    bulletPoints: [
      'Developed a first-person horror puzzle game in Unity with C# scripting, atmospheric lighting/audio, and environmental storytelling.',
      'Implemented custom player interaction mechanics, inventory puzzle state management, and trigger-based narrative pacing.',
      'Optimized 3D rendering, mesh colliders, and dynamic shadows for high-frame-rate performance.'
    ],
    details: {
      problem:
        'Creating engaging tension in puzzle games requires precise synchrony between physics triggers, audio cues, and lighting states.',
      solution:
        'Built a modular C# event system in Unity where environmental interactions (keys, door locks, eerie anomalies) dynamically trigger spatial audio and subtle lighting shifts.',
      architectureOrStrategy: [
        'C# State Machine for game loop, player controller, raycast item inspection, and puzzle locks',
        'Dynamic Post-Processing & Fog: Volumetric spotlights and shadow attenuation',
        'Spatial Audio Trigger Matrix: 3D sound attenuation responding to player proximity'
      ],
      metricsOrOutcomes: [
        'Smooth 60 FPS gameplay on standard hardware',
        'Multi-stage puzzle progression with ambient psychological tension'
      ]
    },
    githubUrl: 'https://github.com/Sm-Ghazi-Abbas',
    badge: 'Unity & C#'
  },
  {
    id: 'python-portfolio',
    title: 'Python Programming Portfolio & Scripts',
    subtitle: 'Personal Learning & Automation Repository',
    category: 'python',
    lensCategory: 'engineering',
    tags: ['Python 3', 'Data Structures', 'Algorithms', 'Automation', 'CLI Utilities'],
    summary:
      'Maintains a public GitHub repository of Python exercises, algorithmic solutions, web automation scripts, and foundational data structure implementations.',
    bulletPoints: [
      'Maintains a public GitHub repository of Python exercises and mini-projects.',
      'Implemented data manipulation utilities, algorithmic puzzle solvers, and script automation routines.',
      'Demonstrates clean coding standards, modular functions, and robust unit testing habits.'
    ],
    details: {
      problem:
        'Mastering core computer science concepts requires deliberate, hands-on implementation of algorithms and data manipulation patterns.',
      solution:
        'Structured an open-source learning lab covering recursion, graph traversal, string parsing, and automation scripts.',
      architectureOrStrategy: [
        'Organized modules: Data Structures, Sorting & Search Algorithms, File Automation',
        'Documented execution instructions with PEP 8 compliance and descriptive READMEs'
      ],
      metricsOrOutcomes: [
        'Active GitHub repository showcasing daily algorithmic proficiency',
        'Core building block for AI automation and data analysis workflows'
      ]
    },
    githubUrl: 'https://github.com/Sm-Ghazi-Abbas',
    badge: 'Open Source GitHub'
  },
  {
    id: 'ai-growth-automation',
    title: 'AI Automation & Prospecting Workflows',
    subtitle: 'Commercial Process Optimization & Growth Systems',
    category: 'growth',
    lensCategory: 'growth',
    tags: ['AI Automation', 'No-Code Pipelines', 'Prompt Engineering', 'B2B Sales', 'Workflow Logic'],
    summary:
      'Engineered automated workflows combining generative AI and workflow orchestration to eliminate manual data entry, streamline lead prospecting, and power client outreach.',
    bulletPoints: [
      'Built and tested AI-powered automation workflows to streamline repetitive business processes using AI and no-code tools at Logitrix Solutions.',
      'Designed automated lead qualification triggers and personalized outreach sequences for B2B sales pipelines.',
      'Implemented prompt pipelines for rapid market intelligence extraction and competitor benchmarking.'
    ],
    details: {
      problem:
        'Modern sales and marketing teams waste up to 40% of their bandwidth on manual lead research, data cleaning, and repetitive messaging.',
      solution:
        'Designed connected AI workflows that automatically ingest company targets, enrich prospect profiles, generate tailored pitch points, and sync with CRM pipelines.',
      architectureOrStrategy: [
        'AI Data Extraction: Automated scraping & enrichment using AI prompts',
        'Workflow Orchestration: Event-driven triggers for instant outreach',
        'Sales Pipeline Integration: Structured qualification scoring to prioritize warm prospects'
      ],
      metricsOrOutcomes: [
        'Reduced manual prospecting time by over 60%',
        'Accelerated response turnaround for high-intent business inquiries'
      ]
    },
    badge: 'AI & Sales Automation',
    featured: true
  },
  {
    id: 'seo-growth-engine',
    title: 'DevLogix & Client SEO Optimization Engine',
    subtitle: 'Full-Scale SEO Overhaul for DevLogix & Commercial Client Websites',
    category: 'growth',
    lensCategory: 'growth',
    tags: ['Technical SEO', 'Client Campaigns', 'DevLogix Website', 'Keyword Clustering', 'Core Web Vitals', 'Search Console'],
    summary:
      'Spearheaded and completed the full-scale SEO project for company DevLogix website as well as multiple commercial client websites, executing deep technical audits, keyword research, and high-conversion organic architectures.',
    bulletPoints: [
      'Completed comprehensive technical and on-page SEO optimization for DevLogix company website and commercial client websites.',
      'Conducted technical site architecture audits, resolving indexation hurdles, schema markup (JSON-LD), canonical conflicts, and Core Web Vitals.',
      'Executed high-volume keyword research and topical authority clusters driving measurable organic impressions and inbound client inquiries.',
      'Constructed scalable content briefs and on-page optimization frameworks adopted across client digital marketing campaigns.'
    ],
    details: {
      problem:
        'DevLogix and its client businesses faced discoverability bottlenecks: uncrawled dynamic pages, thin metadata, keyword cannibalization, and poor SERP click-through rates.',
      solution:
        'Engineered an exhaustive, multi-site SEO architecture: repaired site hierarchies, implemented structured data, executed semantic keyword clustering, and optimized technical speed benchmarks across DevLogix and client web properties.',
      architectureOrStrategy: [
        'Technical Crawl & Audit: Resolved redirect loops, 404s, mobile usability issues, and XML sitemap indexation in Google Search Console',
        'Topical Clustering: Grouped high-intent commercial keywords and mapped them to optimized service landing pages',
        'On-Page & Semantic Architecture: Optimized title tags, meta descriptions, H1-H3 hierarchies, and internal anchor text flows',
        'Performance Optimization: Boosted Core Web Vitals (LCP, CLS, INP) for enhanced search engine ranking signals'
      ],
      metricsOrOutcomes: [
        'Fully completed SEO project for DevLogix company domain and multiple client websites',
        'Substantial gains in organic search impressions, average ranking positions, and crawl efficiency',
        'Established standard operating procedures for continuous client SEO monitoring and reporting'
      ]
    },
    badge: 'Completed SEO Project',
    featured: true
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'devlogix',
    role: 'Digital Marketing & SEO Intern',
    company: 'DevLogix',
    period: 'Aug 2026 - Nov 2026',
    location: 'Lahore, Pakistan',
    lensCategory: 'growth',
    type: 'Internship / Growth',
    bullets: [
      'Executing on-page and technical SEO strategies, keyword research, and content optimization to improve organic visibility for client campaigns.',
      'Conducted deep technical site audits identifying indexing bottlenecks, metadata gaps, and mobile responsiveness hurdles.',
      'Collaborated with developers and copywriters to produce search-optimized landing pages targeting high-intent commercial keywords.'
    ],
    skills: ['Technical SEO', 'Keyword Research', 'Content Optimization', 'On-Page SEO', 'Analytics', 'Organic Growth'],
    highlightMetric: 'Multi-client SEO strategy & Organic Visibility'
  },
  {
    id: 'logitrix',
    role: 'AI Automation Intern',
    company: 'Logitrix Solutions',
    period: 'Aug 2026 - Oct 2026',
    location: 'Lahore, Pakistan',
    lensCategory: 'hybrid',
    type: 'Internship / AI & Tech',
    bullets: [
      'Built and tested AI-powered automation workflows to streamline repetitive business processes using AI and no-code tools.',
      'Engineered cross-platform data synchronization pipelines connecting communications, spreadsheet records, and customer inquiries.',
      'Documented process logic and trained team members on monitoring AI automation execution and handling edge cases.'
    ],
    skills: ['AI Automation', 'No-Code Tools', 'Workflow Optimization', 'Process Mapping', 'Prompt Design', 'B2B Solutions'],
    highlightMetric: 'Automated repetitive business processes'
  },
  {
    id: 'flyrank',
    role: 'AI Marketing Intern',
    company: 'FlyRank AI',
    period: 'Jul 2026 - Sep 2026',
    location: 'Lahore, Pakistan',
    lensCategory: 'growth',
    type: 'Internship / Marketing',
    bullets: [
      'Supported AI-driven marketing campaigns, content strategy, and market research for client brands.',
      'Leveraged generative AI models to craft high-converting ad copy, social narratives, and audience engagement collateral.',
      'Analyzed campaign engagement metrics to iterate on content hooks and conversion rate optimization (CRO).'
    ],
    skills: ['AI Marketing', 'Content Strategy', 'Market Research', 'Copywriting & Hooks', 'Campaign Analysis', 'Brand Positioning'],
    highlightMetric: 'AI-driven campaign scaling'
  },
  {
    id: 'codealpha',
    role: 'Human Resources Management Intern (Remote)',
    company: 'CodeAlpha',
    period: '1 Month (Remote)',
    location: 'Remote',
    lensCategory: 'hybrid',
    type: 'Remote Internship / HR & Talent Operations',
    bullets: [
      'Completed a 1-month remote internship in Human Resources Management at CodeAlpha, managing candidate sourcing and talent communication pipelines.',
      'Screened technical and creative resumes, evaluated candidate submissions, and scheduled structured interview rounds across remote cohorts.',
      'Coordinated virtual onboarding sessions, tracked cohort milestones, and facilitated team engagement and interpersonal crisis resolution.'
    ],
    skills: ['Human Resources Management', 'Remote Talent Operations', 'Candidate Sourcing', 'Resume Screening', 'Interpersonal Communication', 'Crisis Management'],
    highlightMetric: 'Remote HR operations & talent cohort management'
  },
  {
    id: 'pro-recruit',
    role: 'Recruitment Intern',
    company: 'Pro Recruit',
    period: '2024',
    location: 'Lahore, Pakistan',
    lensCategory: 'hybrid',
    type: 'Internship / People & Sales',
    bullets: [
      'Assisted with candidate sourcing, resume screening, and interview coordination across competitive technical roles.',
      'Honed interpersonal negotiation, client communication, and talent pipeline management skills.',
      'Evaluated technical resumes for skill matches in programming languages, databases, and frameworks.'
    ],
    skills: ['Talent Sourcing', 'Resume Screening', 'Candidate Assessment', 'Negotiation', 'Communication', 'Pipeline Management'],
    highlightMetric: 'Foundational talent & sales pipeline management'
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'aws-ec2-observability',
    title: 'Amazon EC2 Observability, Monitoring & Troubleshooting',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'July 2026',
    credentialTopic: 'Cloud Infrastructure & Observability',
    codeOrType: 'AWS Training & Certification',
    verified: true,
    skills: ['Amazon EC2', 'AWS CloudWatch Metrics', 'Log Group Analysis', 'Performance Troubleshooting', 'Alarm Configuration']
  },
  {
    id: 'aws-build-ec2',
    title: 'Build with Amazon EC2',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'April 2026',
    credentialTopic: 'Cloud Compute Architecture',
    codeOrType: 'AWS Training & Certification',
    verified: true,
    skills: ['EC2 Instance Types', 'VPC Networking', 'Security Groups & NACLs', 'EBS Volumes', 'AMI Management']
  },
  {
    id: 'aws-cloudwatch',
    title: 'AWS CloudWatch: Getting Started',
    issuer: 'Amazon Web Services (AWS)',
    issueDate: 'April 2026',
    credentialTopic: 'Cloud Monitoring & Telemetry',
    codeOrType: 'AWS Training & Certification',
    verified: true,
    skills: ['CloudWatch Dashboards', 'Metric Alarms', 'Synthetic Canaries', 'Log Insights', 'Event-Driven Automation']
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'umt-bscs',
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    institution: 'University of Management and Technology (UMT)',
    period: '2023 - Present',
    location: 'Lahore, Pakistan',
    focus: 'Computer Science, Cloud Architecture, Mobile Development, AI & Software Engineering',
    highlights: [
      'Active coursework in Data Structures, Algorithms, Cloud Computing, Operating Systems, and Mobile Software Design.',
      'Active technical contributor in team projects spanning React Native apps, Zero-Trust AWS security research, and Unity 3D simulation.',
      'Cultivating leadership through combining rigorous engineering disciplines with marketing, product management, and commercial sales acumen.'
    ]
  },
  {
    id: 'fccu-fsc',
    degree: 'Pre-Engineering - Intermediate (FSC)',
    institution: 'Forman Christian College University (FCCU)',
    period: '2021 - 2023',
    location: 'Lahore, Pakistan',
    focus: 'Higher Secondary School Certificate - Mathematics, Physics, Chemistry',
    highlights: [
      'Rigorous foundation in analytical mathematics, mechanics, logical reasoning, and scientific inquiry.',
      'Graduated from one of Pakistan’s oldest and most prestigious academic institutions with distinguished analytical credentials.'
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Technical & Software Development',
    description: 'Modern programming languages, mobile engineering, game systems, and clean code architecture.',
    iconName: 'Code',
    lensCategory: 'engineering',
    skills: [
      { name: 'Python', level: 'Core Language', highlight: 'Algorithms, automation scripts, data structures' },
      { name: 'React Native', level: 'Specialist', highlight: '5+ screens, ~1,500+ LOC, modular components' },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: 'Modern async/await, DOM, modular patterns' },
      { name: 'Unity Engine (C#)', level: '3D Gameplay', highlight: 'First-person physics, spatial audio, scripting' },
      { name: 'Git & GitHub', level: 'Version Control', highlight: 'Public repositories, branch workflows, collaboration' },
      { name: 'JSON Server / REST API', level: 'Backend & APIs', highlight: 'Endpoint mocking, request validation, CRUD' }
    ]
  },
  {
    title: 'Cloud, Infrastructure & Security',
    description: 'AWS ecosystem, Zero-Trust NIST standards, compute scaling, and deep telemetry.',
    iconName: 'Cpu',
    lensCategory: 'engineering',
    skills: [
      { name: 'AWS EC2', level: 'Certified (2026)', highlight: 'Compute provisioning, VPC security, troubleshooting' },
      { name: 'AWS CloudWatch', level: 'Certified (2026)', highlight: 'Metrics, alarms, log streams, dashboarding' },
      { name: 'AWS IAM & Security', level: 'Zero-Trust Research', highlight: 'Least privilege, STS credentials, NIST SP 800-207' },
      { name: 'Amazon S3 & KMS', level: 'Architecture', highlight: 'Envelope encryption, bucket policies, TLS 1.3' },
      { name: 'AWS Lambda & CloudTrail', level: 'Serverless', highlight: 'Audit trails, event-driven functions' }
    ]
  },
  {
    title: 'Marketing, Sales & Business Growth',
    description: 'Commercial client acquisition, technical SEO, AI automations, brand building, and sales pipeline mechanics.',
    iconName: 'TrendingUp',
    lensCategory: 'growth',
    skills: [
      { name: 'AI-Driven Marketing', level: 'Practitioner', highlight: 'FlyRank AI campaigns & generative content scaling' },
      { name: 'Technical & On-Page SEO', level: 'Practitioner', highlight: 'DevLogix keyword research, crawlability, meta audits' },
      { name: 'AI Automation Workflows', level: 'Practitioner', highlight: 'Logitrix process streamlining & no-code flows' },
      { name: 'B2B Sales & Negotiation', level: 'Experienced', highlight: 'Candidate sourcing, client relations, deal closing' },
      { name: 'Strategic Planning', level: 'Strategic', highlight: 'Uni-Pool MVP roadmaps, market fit, campus growth' },
      { name: 'Brand Development', level: 'Creative', highlight: 'Identity design, narrative positioning, audience trust' }
    ]
  },
  {
    title: 'Design & Tooling',
    description: 'User-centric visual design systems, prototyping, and developer tooling.',
    iconName: 'Layers',
    lensCategory: 'hybrid',
    skills: [
      { name: 'Figma (UI/UX)', level: 'Design Systems', highlight: 'Interactive prototypes, atomic design, student apps' },
      { name: 'Data Analysis', level: 'Analytical', highlight: 'Search metrics, conversion trends, behavioral tracking' },
      { name: 'Crisis Management', level: 'Executive', highlight: 'Fast triage, operational composure, root cause analysis' },
      { name: 'Problem Solving', level: 'Core Mindset', highlight: 'Algorithmic thinking meets commercial business empathy' }
    ]
  }
];

export const LANGUAGES = [
  { name: 'Urdu', proficiency: 'Native Language', tag: 'Native' },
  { name: 'English', proficiency: 'Professional & Technical Fluency', tag: 'Fluent' }
];

export const ARTICLES: ArticleItem[] = [
  {
    title: "The Hidden Cost of Intelligence: Why AI’s Next Crisis Isn’t Chips, It’s Water",
    subtitle: "Why the true physical frontier of generative AI lies in datacenter thermodynamics and water consumption rather than silicon alone.",
    platform: "Medium",
    url: "https://smghaziabbas.medium.com/the-hidden-cost-of-intelligence-why-ais-next-crisis-isn-t-chips-it-s-water-47ba92c07981?sharedUserId=smghaziabbas",
    readTime: "5 min read",
    date: "Featured on Medium",
    summary: "A critical investigative essay analyzing how hyper-scale AI training clusters consume millions of gallons of potable water for evaporative cooling, examining the impending thermodynamic crisis and engineering solutions for sustainable compute.",
    tags: ["Artificial Intelligence", "Datacenter Cooling", "Thermodynamics", "Cloud Infrastructure", "Green Tech"],
    keyTakeaways: [
      "Explores why high-density GPU clusters require evaporative cooling towers consuming millions of gallons of municipal water.",
      "Analyzes the physical and infrastructural constraints of gigawatt-scale data centers as LLM parameter counts expand.",
      "Provides strategic engineering insights on direct-to-chip liquid cooling and environmentally responsible model deployment."
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: 'Available commands: about, skills, projects, experience, certs, blog, education, contact, hire, pitch, social, clear',
  about: 'SYED M GHAZI ABBAS | BSCS Student at UMT Lahore. Combines technical prowess in React Native, Python & AWS with proven commercial experience in AI marketing, SEO, HR operations, and sales pipeline generation.',
  skills: 'Technical: Python, React Native, JS (ES6+), AWS (EC2, CloudWatch), Git, Figma, Unity (C#).\nBusiness & Growth: AI Marketing, Technical SEO, AI Automation, HR Management, Strategic Planning, Negotiation, Brand Strategy.',
  projects: '1. Zero-Trust Cloud Security (AWS IAM/KMS/S3)\n2. Restaurant Reservation App (React Native, 1500+ LOC)\n3. DevLogix & Client SEO Optimization Engine (Full Overhaul)\n4. Uni-Pool Carpooling (Figma/Flutter/Pink-Pool)\n5. AI Automation & Prospecting Workflows\n6. Escape the Haunted Room (Unity 3D/C#)\n7. Python Learning Portfolio',
  experience: '• DevLogix: Digital Marketing & SEO Intern (Aug 2026 - Nov 2026)\n• Logitrix Solutions: AI Automation Intern (Aug 2026 - Oct 2026)\n• FlyRank AI: AI Marketing Intern (Jul 2026 - Sep 2026)\n• CodeAlpha: Human Resources Management Intern (1 Month Remote)\n• Pro Recruit: Recruitment Intern (2024)',
  blog: 'Featured Article on Medium:\n"The Hidden Cost of Intelligence: Why AI’s Next Crisis Isn’t Chips, It’s Water"\nURL: https://smghaziabbas.medium.com/the-hidden-cost-of-intelligence-why-ais-next-crisis-isn-t-chips-it-s-water-47ba92c07981',
  medium: 'Medium Profile: https://smghaziabbas.medium.com/\nAuthor of tech essays on AI compute infrastructure, datacenter cooling, and software engineering.',
  writing: 'Medium Profile: https://smghaziabbas.medium.com/\nFeatured Article: "The Hidden Cost of Intelligence: Why AI’s Next Crisis Isn’t Chips, It’s Water"',
  certs: '• Amazon EC2 Observability, Monitoring & Troubleshooting (July 2026)\n• Build with Amazon EC2 (April 2026)\n• AWS CloudWatch: Getting Started (April 2026)',
  education: '• BSCS, University of Management and Technology (UMT), Lahore (2023 - Present)\n• Pre-Engineering (FSC), FCCU, Lahore (2021 - 2023)',
  contact: 'Email: smghaziabbas88@gmail.com | Phone: 0320-4406286 | Location: Lahore, Pakistan',
  social: 'LinkedIn: linkedin.com/in/sm-ghazi-abbas-393216332\nGitHub: github.com/Sm-Ghazi-Abbas\nMedium: smghaziabbas.medium.com',
  hire: 'Why hire Ghazi? He bridges engineering depth (cloud, mobile, Python) with revenue-generating growth (SEO, AI marketing, HR, and sales). Available for Software Engineering, AI Automation & Growth roles.',
  pitch: '"Where Code Meets Growth: Building scalable software solutions backed by measurable ROI in AI marketing, SEO optimization, and strategic sales pipeline generation."'
};
