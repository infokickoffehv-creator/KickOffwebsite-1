import Hero from '@/components/Hero'
import Link from 'next/link'
import { Lightbulb, Users, Rocket, Calendar, Clock, ArrowRight } from 'lucide-react'

export default function Home() {
  const pillars = [
    {
      title: 'INSPIRE',
      icon: <Lightbulb size={40} />,
      description: 'Ignite entrepreneurial mindsets through CEO talks, success stories, and innovative workshops.',
    },
    {
      title: 'MOTIVATE',
      icon: <Rocket size={40} />,
      description: 'Push boundaries with pitch nights, hackathons, and hands-on startup challenges.',
    },
    {
      title: 'CONNECT',
      icon: <Users size={40} />,
      description: 'Build lasting relationships with fellow entrepreneurs, mentors, and industry leaders.',
    },
  ]

  // const events = [
  //   {
  //     title: 'CEO Talk: Building in Brainport',
  //     date: 'Nov 15, 2024',
  //     time: '18:00 - 20:00',
  //     description: 'Learn from successful founders who built their startups in the Eindhoven ecosystem.',
  //   },
  //   {
  //     title: 'Pitch Night Winter Edition',
  //     date: 'Nov 22, 2024',
  //     time: '19:00 - 22:00',
  //     description: 'Present your startup idea and compete for prizes and mentorship opportunities.',
  //   },
  //   {
  //     title: 'AI Workshop: From Idea to MVP',
  //     date: 'Nov 29, 2024',
  //     time: '14:00 - 17:00',
  //     description: 'Hands-on workshop on leveraging AI to build your minimum viable product.',
  //   },
  // ]

  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Three Pillars Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create an ecosystem where student entrepreneurs can thrive through three core pillars
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center p-8 bg-white rounded-lg penthouse-shadow hover:penthouse-shadow-lg transition-all duration-300">
                <div className="text-black mb-6 flex justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for inspiring talks, workshops, and networking opportunities
            </p>
          </div>

          <div className="text-center py-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100 penthouse-shadow max-w-lg mx-auto">
              <Calendar size={40} className="mx-auto mb-4 text-brand-electric-blue" />
              <h3 className="text-xl font-bold">
                Exciting Events Coming Soon!
              </h3>
            </div>
          </div>

          <div className="text-center">
            <Link href="/events">
              <button className="btn-primary">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Last Year's Events - Founders Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Last Year's Impact
            </h2>
            <p className="text-xl text-gray-300">
              We brought in founders worth over <span className="text-brand-electric-blue font-bold">1 Billion €</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center">
            <div className="flex justify-center">
              <img 
                src="/avularlogo.webp" 
                alt="Avular" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/axeleraailogo.png" 
                alt="Axelera AI" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/BlueWalkerLogo.jpg" 
                alt="Blue Walker" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/dembradelogo.jpg" 
                alt="Dembrade" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/smartphotonicslogo.png" 
                alt="Smart Photonics" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/weheatlogo.jpg" 
                alt="WeHeat" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            <div className="flex justify-center">
              <img 
                src="/KickoffLogo.png" 
                alt="Kick-Off" 
                className="h-12 md:h-16 object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay in the Loop
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Get the latest updates on events, opportunities, and startup news
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black transition-colors"
            />
            <button className="btn-primary">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}