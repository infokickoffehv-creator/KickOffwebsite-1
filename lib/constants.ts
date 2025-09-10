// Brand Constants
export const BRAND = {
  name: 'Kickoff Eindhoven',
  tagline: '⚡️Brainport\'s first startup and entrepreneur club for students, by students',
  established: 2008,
  formerName: 'Eindhoven Student Business Club (ESBC)',
  email: 'info@kickoffehv.com',
  mission: 'Inspire, Motivate, Connect student entrepreneurs in Eindhoven',
} as const;

// Design Constants
export const DESIGN = {
  colors: {
    primary: {
      black: '#000000',
      white: '#FFFFFF',
    },
    accent: {
      electricBlue: '#0080FF',
      brightOrange: '#FF6B35',
    },
  },
  typography: {
    fonts: {
      primary: 'Inter',
      display: 'Poppins',
    },
  },
} as const;

// Navigation Menu
export const NAVIGATION = [
  { label: 'Home', href: '/' },
  { label: 'Events', href: '/events' },
  { label: 'About', href: '/about' },
  { label: 'Board', href: '/board' },
  { label: 'Community', href: '/community' },
  { label: 'Contact', href: '/contact' },
] as const;

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/kickoffehv',
  linkedin: 'https://linkedin.com/company/kickoffehv',
  facebook: 'https://facebook.com/kickoffehv',
} as const;

// Universities Served
export const UNIVERSITIES = [
  'Eindhoven University of Technology (TU/e)',
  'Fontys University of Applied Sciences',
  'Design Academy Eindhoven',
] as const;

// Event Types
export const EVENT_TYPES = [
  { id: 'all', label: 'All Events' },
  { id: 'ceo-talks', label: 'CEO Talks' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'pitch-nights', label: 'Pitch Nights' },
  { id: 'networking', label: 'Networking' },
  { id: 'panel-discussions', label: 'Panel Discussions' },
] as const;

// Three Pillars
export const PILLARS = [
  {
    title: 'INSPIRE',
    description: 'Igniting entrepreneurial passion through compelling stories and visionary speakers',
    icon: '🚀',
  },
  {
    title: 'MOTIVATE',
    description: 'Empowering students with practical skills and knowledge to turn ideas into reality',
    icon: '💡',
  },
  {
    title: 'CONNECT',
    description: 'Building a vibrant network of ambitious students and successful entrepreneurs',
    icon: '🤝',
  },
] as const;

// Contact Information
export const CONTACT = {
  email: 'info@kickoffehv.com',
  location: 'TU/e Campus, Eindhoven',
  address: {
    street: 'Den Dolech 2',
    city: 'Eindhoven',
    postalCode: '5612 AZ',
    country: 'Netherlands',
  },
} as const;

// SEO Defaults
export const SEO = {
  defaultTitle: 'Kickoff Eindhoven - Student Startup & Entrepreneur Club',
  defaultDescription: 'Brainport\'s first startup and entrepreneur club for students at TU/e. Join our community to inspire, motivate, and connect with fellow student entrepreneurs.',
  keywords: [
    'startup',
    'entrepreneur',
    'students',
    'TU/e',
    'Eindhoven',
    'Brainport',
    'innovation',
    'business',
    'networking',
    'events',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Kickoff Eindhoven',
  },
} as const;
