import { currentBoard } from '@/data/board-members';

export default function About() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* About Section */}
        <section className="mb-20">
          <h1 className="text-5xl font-bold mb-8">About Us</h1>
          <div className="max-w-4xl">
            <p className="text-xl text-gray-600 mb-6">
              Kickoff Eindhoven is Brainport's first startup and entrepreneur club for students, by students.
            </p>
            <p className="text-lg text-gray-600">
              Add more info here
            </p>
          </div>
        </section>

        {/* Board Section */}
        <section>
          <h2 className="text-4xl font-bold mb-8">Meet Our Board</h2>
          <p className="text-xl text-gray-600 mb-12">
            Our passionate student board leads Kickoff Eindhoven with dedication and vision.
          </p>

          {/* Dynamic Board Members */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {currentBoard.slice(0, 3).map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-brand-electric-blue font-semibold mb-3">{member.position}</p>
                  <p className="text-sm text-gray-600 mb-2">{member.studyProgram} - Year {member.year}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
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
                      <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                      <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                      <p className="text-brand-electric-blue font-semibold mb-3">{member.position}</p>
                      <p className="text-sm text-gray-600 mb-2">{member.studyProgram} - Year {member.year}</p>
                      <p className="text-gray-600 text-sm">{member.bio}</p>
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