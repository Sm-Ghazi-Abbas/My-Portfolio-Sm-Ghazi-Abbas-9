export type LensMode = 'all' | 'engineering' | 'growth';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'cloud' | 'mobile' | 'product' | 'game' | 'growth' | 'python';
  lensCategory: 'engineering' | 'growth' | 'hybrid';
  tags: string[];
  summary: string;
  bulletPoints: string[];
  details: {
    problem?: string;
    solution?: string;
    architectureOrStrategy?: string[];
    metricsOrOutcomes?: string[];
    codeHighlights?: string;
  };
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  lensCategory: 'growth' | 'engineering' | 'hybrid';
  type: string;
  bullets: string[];
  skills: string[];
  highlightMetric?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialTopic: string;
  codeOrType: string;
  verified: boolean;
  skills: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  focus: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  lensCategory: 'engineering' | 'growth' | 'hybrid';
  skills: {
    name: string;
    level: string; // e.g., 'Advanced', 'Proficient', 'Certified'
    highlight?: string;
  }[];
}

export interface ArticleItem {
  title: string;
  subtitle: string;
  platform: string;
  url: string;
  readTime: string;
  date: string;
  summary: string;
  tags: string[];
  keyTakeaways: string[];
}

