import type { Event } from '@/lib/types';

// Mock Events Data
export const mockEvents: Event[] = [
  {
    id: 'event-nvidia-ceo',
    title: 'Eindhoven Business Talk: Jensen Huang, NVIDIA (Test Event)',
    description: 'Join us for an extraordinary evening with Jensen Huang, CEO and Founder of NVIDIA, as he shares insights on AI innovation, entrepreneurship, and building the future of computing. Note: This is a test event for demonstration purposes.',
    date: '2025-10-08',
    time: '19:00',
    location: 'TU/e Auditorium',
    type: 'business-talks',
    status: 'upcoming',
    ticketUrl: 'https://eventbrite.com/kickoff-nvidia-ceo',
    image: '/images/events/jensen-huang-talk.jpg',
    capacity: 500,
    registeredCount: 423,
    speakers: [
      {
        id: 'jensen-huang',
        name: 'Jensen Huang',
        title: 'CEO & Founder',
        company: 'NVIDIA',
        bio: 'Jensen Huang co-founded NVIDIA in 1993 and has served as CEO and president since inception. Under his leadership, NVIDIA has become the global leader in AI computing.',
        image: '/images/speakers/jensen-huang.jpg',
        linkedinUrl: 'https://linkedin.com/in/jenhsunhuang',
      }
    ]
  },
  {
    id: 'event-001',
    title: 'CEO Talk: From Student to Unicorn Founder',
    description: 'Join us for an inspiring session with successful entrepreneurs who started their journey as students and built billion-dollar companies.',
    date: '2025-10-15',
    time: '19:00',
    location: 'TU/e Auditorium',
    type: 'ceo-talks',
    status: 'upcoming',
    ticketUrl: 'https://eventbrite.com/kickoff-ceo-talk-001',
    image: '/images/events/ceo-talk-001.jpg',
    capacity: 200,
    registeredCount: 147,
    speakers: [
      {
        id: 'speaker-001',
        name: 'Sarah Chen',
        title: 'CEO & Founder',
        company: 'TechVision AI',
        bio: 'Former TU/e student who founded TechVision AI in 2019, now valued at $2.1B.',
        image: '/images/speakers/sarah-chen.jpg',
        linkedinUrl: 'https://linkedin.com/in/sarahchen',
      }
    ]
  },
  {
    id: 'event-002',
    title: 'Startup Pitch Night: Demo Day',
    description: 'Watch brilliant student entrepreneurs pitch their innovative startups to investors and industry experts.',
    date: '2025-10-22',
    time: '18:30',
    location: 'The Gate Innovation Hub',
    type: 'pitch-nights',
    status: 'upcoming',
    ticketUrl: 'https://eventbrite.com/kickoff-pitch-night-002',
    image: '/images/events/pitch-night-002.jpg',
    capacity: 150,
    registeredCount: 89,
  },
  {
    id: 'event-003',
    title: 'Workshop: Building Your MVP in 48 Hours',
    description: 'Hands-on workshop teaching you how to validate your idea and build a minimum viable product over a weekend.',
    date: '2025-11-05',
    time: '09:00',
    location: 'TU/e Innovation Space',
    type: 'workshops',
    status: 'upcoming',
    ticketUrl: 'https://eventbrite.com/kickoff-mvp-workshop-003',
    image: '/images/events/mvp-workshop-003.jpg',
    capacity: 50,
    registeredCount: 23,
  },
  {
    id: 'event-004',
    title: 'Networking Night: Connect & Collaborate',
    description: 'An evening of networking with fellow student entrepreneurs, alumni, and industry professionals.',
    date: '2025-11-12',
    time: '19:30',
    location: 'Strijp-S Creative District',
    type: 'networking',
    status: 'upcoming',
    ticketUrl: 'https://eventbrite.com/kickoff-networking-004',
    image: '/images/events/networking-004.jpg',
    capacity: 100,
    registeredCount: 67,
  },
  {
    id: 'event-005',
    title: 'Panel: The Future of DeepTech Startups',
    description: 'Industry experts discuss the opportunities and challenges in deep technology entrepreneurship.',
    date: '2025-11-19',
    time: '20:00',
    location: 'TU/e Auditorium',
    type: 'panel-discussions',
    status: 'upcoming',
    ticketUrl: 'https://eventbrite.com/kickoff-deeptech-panel-005',
    image: '/images/events/deeptech-panel-005.jpg',
    capacity: 180,
    registeredCount: 112,
  },
  {
    id: 'event-006',
    title: 'Successful Alumni Meetup',
    description: 'Meet and learn from Kickoff alumni who have successfully launched their startups.',
    date: '2025-09-28',
    time: '18:00',
    location: 'The Gate Innovation Hub',
    type: 'networking',
    status: 'past',
    image: '/images/events/alumni-meetup-006.jpg',
    capacity: 80,
    registeredCount: 80,
  },
];

// Helper functions for events
export function getUpcomingEvents(): Event[] {
  return mockEvents.filter(event => event.status === 'upcoming');
}

export function getPastEvents(): Event[] {
  return mockEvents.filter(event => event.status === 'past');
}

export function getEventsByType(type: string): Event[] {
  if (type === 'all') return mockEvents;
  return mockEvents.filter(event => event.type === type);
}

export function getFeaturedEvents(limit: number = 3): Event[] {
  return getUpcomingEvents().slice(0, limit);
}
