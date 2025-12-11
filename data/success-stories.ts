import type { SuccessStory, Statistic } from '@/lib/types';

// Alumni Success Stories
export const successStories: SuccessStory[] = [
  {
    id: 'story-001',
    name: 'Alexander Volkov',
    title: 'CEO & Co-founder',
    company: 'ClearPath Analytics',
    story: 'Started as a Computer Science student at TU/e in 2018. Joined Kickoff Eindhoven in my second year and pitched my idea at our first pitch night. The feedback and connections I made helped me refine my business model. Today, ClearPath Analytics helps Fortune 500 companies optimize their supply chains using AI, and we\'ve raised €15M in Series A funding.',
    image: '/images/success-stories/alexander-volkov.jpg',
    yearGraduated: 2021,
    companyFounded: '2020',
    funding: '€15M Series A',
    linkedinUrl: 'https://linkedin.com/in/alexandervolkov',
    companyUrl: 'https://clearpathanalytics.com',
  },
  {
    id: 'story-002',
    name: 'Maria Santos',
    title: 'Founder & CTO',
    company: 'EcoFlow Systems',
    story: 'During my Master\'s in Sustainable Energy Technology, I developed a breakthrough water purification technology. Kickoff Eindhoven connected me with my co-founder and our first investor through their network. We\'ve now deployed our systems in 12 countries, providing clean water to over 100,000 people.',
    image: '/images/success-stories/maria-santos.jpg',
    yearGraduated: 2020,
    companyFounded: '2019',
    funding: '€8M Seed',
    linkedinUrl: 'https://linkedin.com/in/mariasantos',
    companyUrl: 'https://ecoflowsystems.com',
  },
  {
    id: 'story-003',
    name: 'David Kim',
    title: 'CEO',
    company: 'NextGen Robotics',
    story: 'As a Mechanical Engineering student, I was passionate about robotics but didn\'t know how to turn it into a business. Kickoff\'s mentorship program paired me with successful entrepreneurs who guided me through the startup journey. NextGen Robotics now develops autonomous robots for warehouses and has partnerships with major logistics companies.',
    image: '/images/success-stories/david-kim.jpg',
    yearGraduated: 2019,
    companyFounded: '2018',
    funding: '€25M Series B',
    linkedinUrl: 'https://linkedin.com/in/davidkim',
    companyUrl: 'https://nextgenrobotics.com',
  },
  {
    id: 'story-004',
    name: 'Lisa van Dijk',
    title: 'Co-founder & CEO',
    company: 'HealthTech Innovations',
    story: 'From Biomedical Engineering to building medical devices that save lives. Kickoff Eindhoven taught me that being an entrepreneur isn\'t just about having a great idea—it\'s about execution, team building, and persistence. Our wearable health monitoring devices are now used in hospitals across Europe.',
    image: '/images/success-stories/lisa-van-dijk.jpg',
    yearGraduated: 2022,
    companyFounded: '2021',
    funding: '€12M Series A',
    linkedinUrl: 'https://linkedin.com/in/lisavandijk',
    companyUrl: 'https://healthtechinnovations.com',
  },
];

// Current Member Highlights
export const memberHighlights = [
  {
    id: 'member-001',
    name: 'Tom Janssen',
    achievement: 'Won €50K at TU/e Innovation Challenge',
    company: 'GreenEnergy Solutions',
    description: 'Developing next-generation solar panel technology with 40% higher efficiency.',
    image: '/images/members/tom-janssen.jpg',
  },
  {
    id: 'member-002',
    name: 'Anna Kowalski',
    achievement: 'Selected for Techstars Amsterdam',
    company: 'AI Tutor',
    description: 'Creating personalized AI-powered learning experiences for students.',
    image: '/images/members/anna-kowalski.jpg',
  },
  {
    id: 'member-003',
    name: 'Carlos Rodriguez',
    achievement: 'Raised €500K Pre-seed',
    company: 'FoodTech Labs',
    description: 'Developing sustainable protein alternatives using fermentation technology.',
    image: '/images/members/carlos-rodriguez.jpg',
  },
];

// Impact Statistics
export const impactStats: Statistic[] = [
  {
    id: 'stat-001',
    label: 'Years Active',
    value: 17,
    description: 'Since 2008 (formerly ESBC)',
  },
  {
    id: 'stat-002',
    label: 'Students Reached',
    value: 2500,
    suffix: '+',
    description: 'Total students engaged through events and programs',
  },
  {
    id: 'stat-003',
    label: 'Events Hosted',
    value: 150,
    suffix: '+',
    description: 'CEO talks, workshops, pitch nights, and networking events',
  },
  {
    id: 'stat-004',
    label: 'Startups Launched',
    value: 85,
    suffix: '+',
    description: 'Companies founded by our community members',
  },
  {
    id: 'stat-005',
    label: 'Total Funding Raised',
    value: 250,
    prefix: '€',
    suffix: 'M+',
    description: 'Cumulative funding raised by alumni startups',
  },
  {
    id: 'stat-006',
    label: 'Alumni Network',
    value: 800,
    suffix: '+',
    description: 'Strong network of entrepreneurs and professionals',
  },
];

// Community Partnerships
export const partnerships = [
  {
    name: 'TU/e Innovation Space',
    type: 'university',
    description: 'Our primary university partner providing venue and academic support',
  },
  {
    name: 'The Gate',
    type: 'startup',
    description: 'Brainport\'s innovation hub and startup accelerator',
  },
  {
    name: 'Brainport Development',
    type: 'government',
    description: 'Regional development agency supporting innovation ecosystem',
  },
  {
    name: 'Fontys University',
    type: 'university',
    description: 'Partner university expanding our reach to applied sciences students',
  },
  {
    name: 'Design Academy Eindhoven',
    type: 'university',
    description: 'Bringing design thinking perspective to entrepreneurship',
  },
];

// Helper functions
export function getFeaturedSuccessStories(limit: number = 3): SuccessStory[] {
  return successStories.slice(0, limit);
}

export function getImpactStats(): Statistic[] {
  return impactStats;
}

export function getCurrentMemberHighlights(): typeof memberHighlights {
  return memberHighlights;
}
