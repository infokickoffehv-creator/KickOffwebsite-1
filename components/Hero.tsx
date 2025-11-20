'use client'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <div className="inline-block mb-6">
              <img
                src="/KickoffLogo.png"
                alt="Kickoff Eindhoven Logo"
                className="h-32 md:h-40 w-auto mx-auto"
              />
            </div>
          </div>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-4 font-light">
            Brainport's first startup and entrepreneur club
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-12">
            for students, by students
          </p>
        </div>
      </div>
    </section>
  )
}