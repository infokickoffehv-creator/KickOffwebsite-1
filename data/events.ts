import type { Event } from '@/lib/types';

// Mock Events Data
export const mockEvents: Event[] = [
  {
    id: 'event-rift-mark-verhagen-upcoming',
    title: 'From Student Project to Real Startup 🚀',
    description: 'What happens when a group of students decide their project shouldn\'t end after graduation?\n\n<em>Eindhoven Business Talks</em> presents Mark Verhagen, <strong>co-founder & CEO of RIFT</strong>, sharing how Team SOLID turned into a real company raising <strong>11M€ in their Series A funding</strong>, and why they chose to keep building when things got serious.\n\n🎟 Free tickets · 1 MyFuture point',
    date: '2025-01-14',
    time: '18:00–19:30',
    location: 'TU/e – Blauwe Zaal',
    type: 'business-talks',
    status: 'upcoming',
    ticketUrl: '#',
    image: '/Rift/Rift_poster_lowquality.jpeg',
    capacity: 200,
    registeredCount: 0,
    speakers: [
      {
        id: 'mark-verhagen',
        name: 'Mark Verhagen',
        title: 'Co-founder & CEO',
        company: 'RIFT',
        bio: 'Mark Verhagen is the co-founder & CEO of RIFT, who successfully transformed a student project into a real startup that raised 11M€ in Series A funding.',
        image: '/Rift/Rift_poster_lowquality.jpeg',
        linkedinUrl: '#',
      }
    ]
  },
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
    youtubeUrl: 'https://www.youtube.com/watch?v=96yIQWfWUvU',
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
