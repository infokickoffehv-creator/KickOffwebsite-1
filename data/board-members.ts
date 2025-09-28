import type { BoardMember } from '@/lib/types';

// Current Board Members Data
export const currentBoard: BoardMember[] = [
  {
    id: 'board-001',
    name: 'Pablo Vega',
    position: 'Chair',
    bio: 'Driven by the passion to build, innovate, and inspire the next generation of student entrepreneurs.',
    image: '/2026BoardPics/pablo.jpg',
    email: 'chairman@kickoffehv.com',
    linkedinUrl: 'https://www.linkedin.com/in/pablo-vega-rodriguez-villar/',
    studyProgram: 'Industrial Engineering',
    year: 2,
  },
  {
    id: 'board-002',
    name: 'Tim Molas Pfeifer',
    position: 'External Affairs',
    bio: 'Entrepreneurial enthusiast with a passion for building products and Venture Capital.',
    image: '/2026BoardPics/tim.jpg',
    email: 'external@kickoffehv.com',
    linkedinUrl: 'https://www.linkedin.com/in/tim-molas-pfeifer-41419631a/',
    studyProgram: 'Mechanical Engineering',
    year: 2,
  },
  {
    id: 'board-003',
    name: 'Egor Kubyshev',
    position: 'Vision and Marketing',
    bio: 'Artist and pilot. Owner of a record label.',
    image: '/2026BoardPics/egor.jpg',
    email: 'marketing@kickoffehv.com',
    linkedinUrl: 'https://www.linkedin.com/in/egor-kubyshev/',
    studyProgram: 'Mechanical Engineering',
    year: 2,
  },
  {
    id: 'board-004',
    name: 'Sebastian Castaño',
    position: 'Treasurer',
    bio: 'Junior process optimization consultant and aspiring entrepreneur.',
    image: '/2026BoardPics/sebastiaan.jpg',
    email: 'treasurer@kickoffehv.com',
    linkedinUrl: 'https://www.linkedin.com/in/sebastian-casta%C3%B1o-7b8614202/',
    studyProgram: 'Industrial Engineering',
    year: 3,
  },
  {
    id: 'board-005',
    name: 'Johannes Wagenknecht',
    position: 'Events Manager',
    bio: 'Experience in stock investment.',
    image: '/2026BoardPics/johannes.jpg',
    email: 'events@kickoffehv.com',
    linkedinUrl: 'https://www.linkedin.com/in/johannes-wagenknecht-ab3306285/',
    studyProgram: 'Industrial Engineering',
    year: 2,
  },
];



// Helper functions
export function getBoardMemberByPosition(position: string): BoardMember | undefined {
  return currentBoard.find(member =>
    member.position.toLowerCase() === position.toLowerCase()
  );
}

