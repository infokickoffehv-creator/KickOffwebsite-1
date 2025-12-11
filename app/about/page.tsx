import { currentBoard } from '@/data/board-members';
import { Linkedin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
        </section>

        {/* Board Section */}
        <section>
          {/* Dynamic Board Members */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {currentBoard.slice(0, 3).map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-brand-electric-blue font-semibold mb-3">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.studyProgram} - Year {member.year}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Remaining members centered */}
          {currentBoard.length > 3 && (
            <div className="flex justify-center">
              <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
                {currentBoard.slice(3).map((member) => (
                  <div key={member.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <div className="text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 mx-auto mb-4 rounded-full object-cover"
                      />
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-brand-electric-blue font-semibold mb-3">{member.position}</p>
                      <p className="text-sm text-gray-600 mb-2">{member.studyProgram} - Year {member.year}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      {member.linkedinUrl && (
                        <a
                          href={member.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}