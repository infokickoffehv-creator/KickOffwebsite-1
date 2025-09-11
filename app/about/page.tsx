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

          {/* First row - 3 members */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">Pablo Vega</h3>
                <p className="text-brand-electric-blue font-semibold mb-3">Chair</p>
                <p className="text-sm text-gray-600 mb-2">Industrial Engineering - Year 2</p>
                <p className="text-gray-600 text-sm">Master's student in Innovation Sciences at TU/e with a passion for sustainable technology startups. Previously founded a successful EdTech platform.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">Tim Molas Pfeifer</h3>
                <p className="text-brand-electric-blue font-semibold mb-3">External Affairs</p>
                <p className="text-sm text-gray-600 mb-2">Mechanical Engineering - Year 2</p>
                <p className="text-gray-600 text-sm">Electrical Engineering student passionate about hardware startups and IoT innovations. Co-founded a smart city solutions startup.</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <h3 className="text-xl font-bold mb-2">Egor Kubyshev</h3>
                <p className="text-brand-electric-blue font-semibold mb-3">Vision and Marketing</p>
                <p className="text-sm text-gray-600 mb-2">Mechanical Engineering - Year 2</p>
                <p className="text-gray-600 text-sm">Industrial Engineering & Management student with expertise in fintech and financial modeling. Former intern at a leading venture capital firm.</p>
              </div>
            </div>
          </div>

          {/* Second row - 2 members centered */}
          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                  <h3 className="text-xl font-bold mb-2">Sebastian Castaño</h3>
                  <p className="text-brand-electric-blue font-semibold mb-3">Treasurer</p>
                  <p className="text-sm text-gray-600 mb-2">Fontys</p>
                  <p className="text-gray-600 text-sm">Computer Science student specializing in AI and machine learning applications. Built several successful SaaS products.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                  <h3 className="text-xl font-bold mb-2">Johannes Wagenknecht</h3>
                  <p className="text-brand-electric-blue font-semibold mb-3">Events Manager</p>
                  <p className="text-sm text-gray-600 mb-2">Industrial Engineering - Year 2</p>
                  <p className="text-gray-600 text-sm">Business Administration student with a focus on event management and community building. Has organized multiple successful startup events.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}