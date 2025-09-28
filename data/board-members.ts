import type { BoardMember } from '@/lib/types';

// Current Board Members Data
export const currentBoard: BoardMember[] = [
  {
    id: 'board-001',
    name: 'Pablo Vega',
    position: 'Chair',
    bio: 'More details to be added later.',
    image: '/images/board/pablo.jpg',
    email: 'chairman@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/pablo',
    studyProgram: 'Industrial Engineering',
    year: 2,
  },
  {
    id: 'board-002',
    name: 'Tim Molas Pfeifer',
    position: 'External Affairs',
    bio: 'Entrepreneurial enthusiast with a passion for building products and Venture Capital.',
    image: '/images/board/tim.jpg',
    email: 'external@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/tim',
    studyProgram: 'Mechanical Engineering',
    year: 2,
  },
  {
    id: 'board-003',
    name: 'Egor Kubyshev',
    position: 'Vision and Marketing',
    bio: 'Artist and pilot. Owner of a record label.',
    image: '/images/board/egor.jpg',
    email: 'marketing@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/egor',
    studyProgram: 'Mechanical Engineering',
    year: 2,
  },
  {
    id: 'board-004',
    name: 'Sebastian Castaño',
    position: 'Treasurer',
    bio: 'Junior process optimization consultant and aspiring entrepreneur.',
    image: '/images/board/sebastiaan.jpg',
    email: 'treasurer@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/sebastiaan',
    studyProgram: 'Industrial Engineering',
    year: 3,
  },
  {
    id: 'board-005',
    name: 'Johannes Wagenknecht',
    position: 'Events Manager',
    bio: 'Experience in stock investment.',
    image: '/images/board/johannes.jpg',
    email: 'events@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/johannes',
    studyProgram: 'Industrial Engineering',
    year: 2,
  },
];

// Board Position Information
export const boardPositions = [
  {
    title: 'Chairman',
    description: 'Lead the organization, set strategic direction, and represent Kickoff Eindhoven externally.',
    responsibilities: [
      'Strategic planning and vision setting',
      'External representation and partnerships',
      'Board meeting facilitation',
      'Stakeholder relationship management',
    ],
    commitment: '10-15 hours per week',
    duration: '1 academic year',
  },
  {
    title: 'Vice Chairman',
    description: 'Support the Chairman and oversee daily operations of the club.',
    responsibilities: [
      'Operational oversight',
      'Support Chairman in strategic initiatives',
      'Internal coordination',
      'Project management',
    ],
    commitment: '8-12 hours per week',
    duration: '1 academic year',
  },
  {
    title: 'Treasurer',
    description: 'Manage finances, budgeting, and financial partnerships.',
    responsibilities: [
      'Financial planning and budgeting',
      'Sponsorship and partnership deals',
      'Financial reporting',
      'Cost management for events',
    ],
    commitment: '6-10 hours per week',
    duration: '1 academic year',
  },
  {
    title: 'Secretary',
    description: 'Handle communications, documentation, and administrative tasks.',
    responsibilities: [
      'Meeting documentation',
      'Internal and external communications',
      'Administrative coordination',
      'Legal compliance',
    ],
    commitment: '6-8 hours per week',
    duration: '1 academic year',
  },
  {
    title: 'Events Coordinator',
    description: 'Plan, organize, and execute all Kickoff Eindhoven events.',
    responsibilities: [
      'Event planning and execution',
      'Venue coordination',
      'Speaker management',
      'Logistics coordination',
    ],
    commitment: '8-12 hours per week',
    duration: '1 academic year',
  },
  {
    title: 'Marketing Manager',
    description: 'Develop and execute marketing strategies to grow the community.',
    responsibilities: [
      'Digital marketing campaigns',
      'Social media management',
      'Brand development',
      'Community engagement',
    ],
    commitment: '6-10 hours per week',
    duration: '1 academic year',
  },
];

// Helper functions
export function getBoardMemberByPosition(position: string): BoardMember | undefined {
  return currentBoard.find(member =>
    member.position.toLowerCase() === position.toLowerCase()
  );
}

export function getPositionInfo(title: string) {
  return boardPositions.find(position =>
    position.title.toLowerCase() === title.toLowerCase()
  );
}
