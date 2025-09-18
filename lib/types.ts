// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: EventType;
  status: EventStatus;
  ticketUrl?: string;
  image?: string;
  speakers?: Speaker[];
  capacity?: number;
  registeredCount?: number;
}

export type EventType =
  | 'ceo-talks'
  | 'business-talks'
  | 'workshops'
  | 'pitch-nights'
  | 'networking'
  | 'panel-discussions';

export type EventStatus = 'upcoming' | 'ongoing' | 'past' | 'cancelled';

// Speaker Types
export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  bio: string;
  image?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

// Board Member Types
export interface BoardMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  email: string;
  linkedinUrl?: string;
  studyProgram?: string;
  year?: number;
}

// Success Story Types
export interface SuccessStory {
  id: string;
  name: string;
  title: string;
  company: string;
  story: string;
  image: string;
  yearGraduated?: number;
  companyFounded?: string;
  funding?: string;
  linkedinUrl?: string;
  companyUrl?: string;
}

// Contact Form Types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Newsletter Types
export interface NewsletterSignup {
  email: string;
  firstName?: string;
  interests?: string[];
}

// Navigation Types
export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form State Types
export interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
}

// Animation Types
export interface AnimationConfig {
  duration?: number;
  delay?: number;
  ease?: string;
  repeat?: number | boolean;
}

// Statistics Types
export interface Statistic {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description?: string;
}

// Partner Types
export interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  type: 'university' | 'corporate' | 'startup' | 'government' | 'other';
  description?: string;
}
