// Contact Form Validation Schema
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
  }
  if (data.name && data.name.length > 100) {
    errors.push({ field: 'name', message: 'Name must be less than 100 characters' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length < 5) {
    errors.push({ field: 'subject', message: 'Subject must be at least 5 characters' });
  }
  if (data.subject && data.subject.length > 200) {
    errors.push({ field: 'subject', message: 'Subject must be less than 200 characters' });
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
  }
  if (data.message && data.message.length > 1000) {
    errors.push({ field: 'message', message: 'Message must be less than 1000 characters' });
  }

  return errors;
}

// Newsletter Signup Validation Schema
export interface NewsletterData {
  email: string;
  firstName?: string;
  interests?: string[];
}

export function validateNewsletter(data: NewsletterData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Optional first name validation
  if (data.firstName && (data.firstName.length < 2 || data.firstName.length > 50)) {
    errors.push({ field: 'firstName', message: 'First name must be between 2 and 50 characters' });
  }

  return errors;
}

// Board Member Application Schema
export interface BoardApplicationData {
  name: string;
  email: string;
  phone: string;
  studyProgram: string;
  year: number;
  university: string;
  motivation: string;
  experience: string;
  availability: string;
}

export function validateBoardApplication(data: BoardApplicationData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    errors.push({ field: 'name', message: 'Name must be between 2 and 100 characters' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Phone validation
  if (!data.phone || data.phone.length < 10 || data.phone.length > 20) {
    errors.push({ field: 'phone', message: 'Phone number must be between 10 and 20 characters' });
  }

  // Study program validation
  if (!data.studyProgram || data.studyProgram.trim().length < 2 || data.studyProgram.length > 100) {
    errors.push({ field: 'studyProgram', message: 'Study program must be between 2 and 100 characters' });
  }

  // Year validation
  if (!data.year || data.year < 1 || data.year > 6) {
    errors.push({ field: 'year', message: 'Year must be between 1 and 6' });
  }

  // University validation
  if (!data.university || data.university.trim().length < 2) {
    errors.push({ field: 'university', message: 'University must be at least 2 characters' });
  }

  // Motivation validation
  if (!data.motivation || data.motivation.trim().length < 50 || data.motivation.length > 1000) {
    errors.push({ field: 'motivation', message: 'Motivation must be between 50 and 1000 characters' });
  }

  // Experience validation
  if (!data.experience || data.experience.trim().length < 20 || data.experience.length > 1000) {
    errors.push({ field: 'experience', message: 'Experience must be between 20 and 1000 characters' });
  }

  // Availability validation
  if (!data.availability || data.availability.trim().length < 10 || data.availability.length > 500) {
    errors.push({ field: 'availability', message: 'Availability must be between 10 and 500 characters' });
  }

  return errors;
}

// Event Registration Schema
export interface EventRegistrationData {
  name: string;
  email: string;
  university: string;
  studyProgram?: string;
  dietaryRestrictions?: string;
  emergencyContact?: string;
}

export function validateEventRegistration(data: EventRegistrationData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Name validation
  if (!data.name || data.name.trim().length < 2 || data.name.length > 100) {
    errors.push({ field: 'name', message: 'Name must be between 2 and 100 characters' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // University validation
  if (!data.university || data.university.trim().length < 2) {
    errors.push({ field: 'university', message: 'University must be at least 2 characters' });
  }

  // Optional study program validation
  if (data.studyProgram && data.studyProgram.trim().length < 2) {
    errors.push({ field: 'studyProgram', message: 'Study program must be at least 2 characters' });
  }

  // Optional dietary restrictions validation
  if (data.dietaryRestrictions && data.dietaryRestrictions.length > 200) {
    errors.push({ field: 'dietaryRestrictions', message: 'Dietary restrictions must be less than 200 characters' });
  }

  // Optional emergency contact validation
  if (data.emergencyContact && (data.emergencyContact.length < 10 || data.emergencyContact.length > 20)) {
    errors.push({ field: 'emergencyContact', message: 'Emergency contact must be between 10 and 20 characters' });
  }

  return errors;
}

// Partnership Inquiry Schema
export interface PartnershipData {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  website?: string;
  partnershipType: 'sponsorship' | 'speaker' | 'venue' | 'collaboration' | 'other';
  message: string;
}

export function validatePartnership(data: PartnershipData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Company name validation
  if (!data.companyName || data.companyName.trim().length < 2 || data.companyName.length > 100) {
    errors.push({ field: 'companyName', message: 'Company name must be between 2 and 100 characters' });
  }

  // Contact name validation
  if (!data.contactName || data.contactName.trim().length < 2 || data.contactName.length > 100) {
    errors.push({ field: 'contactName', message: 'Contact name must be between 2 and 100 characters' });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({ field: 'email', message: 'Please enter a valid email address' });
  }

  // Optional phone validation
  if (data.phone && (data.phone.length < 10 || data.phone.length > 20)) {
    errors.push({ field: 'phone', message: 'Phone number must be between 10 and 20 characters' });
  }

  // Optional website validation
  if (data.website) {
    const urlRegex = /^https?:\/\/.+\..+/;
    if (!urlRegex.test(data.website)) {
      errors.push({ field: 'website', message: 'Please enter a valid website URL' });
    }
  }

  // Message validation
  if (!data.message || data.message.trim().length < 20 || data.message.length > 1000) {
    errors.push({ field: 'message', message: 'Message must be between 20 and 1000 characters' });
  }

  return errors;
}
