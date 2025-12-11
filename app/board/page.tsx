import { currentBoard } from '@/data/board-members';

export default function Board() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-8">Board</h1>
        <p className="text-xl text-gray-600 mb-12">
          Meet the passionate students leading Kickoff Eindhoven.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentBoard.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.position}</p>
              <p className="text-sm text-gray-600 mb-2">
                {member.studyProgram} - Year {member.year}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}