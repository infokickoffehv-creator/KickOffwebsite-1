import type { Event } from '@/lib/types';

// Mock Events Data
export const mockEvents: Event[] = [
  // TEMPLATE: Use this as a model for future upcoming events
  // Uncomment and modify when adding a new event
  /*
  {
    id: 'event-owow-robin-dohmen-upcoming',
    title: 'Eindhoven Business Talks: Robin Dohmen, OWOW',
    description: 'After hosting 1B€+ worth of companies, KickOff 🚀 presents: Eindhoven Business Talks.\n\nCo-hosting with B&R🐂, our first guest this year is Robin Dohmen, CEO and Founder of OWOW, a leading digital product and venture studio from Eindhoven that designs software and partners with startups to bring new ideas to life.\n\nRobin will break down OWOW\'s journey from agency to venture studio, and what it takes to turn an idea into a company.\n\nMeet the team at the end during the networking drinks. 🍻🥂\nFree lecture, 1 MyFuture point.',
    date: '2025-12-15',
    time: '18:00',
    location: 'Blauwe Zaal Auditorium, TU/e',
    type: 'business-talks',
    status: 'upcoming',
    ticketUrl: 'https://owow.io/',
    image: '/OWOW/Robin Dohmen - OWOW.png',
    capacity: 200,
    registeredCount: 150,
    speakers: [
      {
        id: 'robin-dohmen',
        name: 'Robin Dohmen',
        title: 'CEO & Founder',
        company: 'OWOW',
        bio: 'Robin Dohmen is the CEO and Founder of OWOW, a leading digital product and venture studio from Eindhoven that designs software and partners with startups to bring new ideas to life.',
        image: '/OWOW/owowlogo.jpg',
        linkedinUrl: 'https://owow.io/',
      }
    ]
  },
  */
  {
    id: 'event-owow-robin-dohmen-past',
    title: 'Eindhoven Business Talks: Robin Dohmen, OWOW',
    description: 'Robin Dohmen, CEO and Founder of OWOW, shared insights on OWOW\'s journey from agency to venture studio and what it takes to turn an idea into a company.',
    date: '2024-11-19',
    time: '18:00',
    location: 'Blauwe Zaal Auditorium, TU/e',
    type: 'business-talks',
    status: 'past',
    image: '/OWOW/Robin Dohmen - OWOW.png',
    capacity: 200,
    registeredCount: 200,
    speakers: [
      {
        id: 'robin-dohmen',
        name: 'Robin Dohmen',
        title: 'CEO & Founder',
        company: 'OWOW',
        bio: 'Robin Dohmen is the CEO and Founder of OWOW, a leading digital product and venture studio from Eindhoven that designs software and partners with startups to bring new ideas to life.',
        image: '/OWOW/owowlogo.jpg',
        linkedinUrl: 'https://owow.io/',
      }
    ]
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
