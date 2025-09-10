import type { BoardMember } from '@/lib/types';

// Current Board Members Data
export const currentBoard: BoardMember[] = [
  {
    id: 'board-001',
    name: 'Emma van der Berg',
    position: 'Chairman',
    bio: 'Master\'s student in Innovation Sciences at TU/e with a passion for sustainable technology startups. Previously founded a successful EdTech platform.',
    image: '/images/board/emma-van-der-berg.jpg',
    email: 'chairman@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/emmavdberg',
    studyProgram: 'Innovation Sciences',
    year: 2,
  },
  {
    id: 'board-002',
    name: 'Lucas Martinez',
    position: 'Vice Chairman',
    bio: 'Electrical Engineering student passionate about hardware startups and IoT innovations. Co-founded a smart city solutions startup.',
    image: '/images/board/lucas-martinez.jpg',
    email: 'vice-chairman@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/lucasmartinez',
    studyProgram: 'Electrical Engineering',
    year: 3,
  },
  {
    id: 'board-003',
    name: 'Sophie Chen',
    position: 'Treasurer',
    bio: 'Industrial Engineering & Management student with expertise in fintech and financial modeling. Former intern at a leading venture capital firm.',
    image: '/images/board/sophie-chen.jpg',
    email: 'treasurer@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/sophiechen',
    studyProgram: 'Industrial Engineering & Management',
    year: 2,
  },
  {
    id: 'board-004',
    name: 'Thijs Verkerk',
    position: 'Secretary',
    bio: 'Computer Science student specializing in AI and machine learning applications. Built several successful SaaS products.',
    image: '/images/board/thijs-verkerk.jpg',
    email: 'secretary@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/thijsverkerk',
    studyProgram: 'Computer Science',
    year: 3,
  },
  {
    id: 'board-005',
    name: 'Isabella Rodriguez',
    position: 'Events Coordinator',
    bio: 'Industrial Design student with a flair for organizing memorable events and building communities. Expert in design thinking methodologies.',
    image: '/images/board/isabella-rodriguez.jpg',
    email: 'events@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/isabellarodriguez',
    studyProgram: 'Industrial Design',
    year: 2,
  },
  {
    id: 'board-006',
    name: 'Jasper de Wit',
    position: 'Marketing Manager',
    bio: 'Psychology & Technology student specializing in growth hacking and digital marketing strategies for startups.',
    image: '/images/board/jasper-de-wit.jpg',
    email: 'marketing@kickoffehv.com',
    linkedinUrl: 'https://linkedin.com/in/jasperdewit',
    studyProgram: 'Psychology & Technology',
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
