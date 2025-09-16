import Hero from '@/components/Hero'
import Link from 'next/link'
import { Lightbulb, Users, Rocket, Calendar, Clock, ArrowRight, MapPin } from 'lucide-react'
import { getFeaturedEvents } from '@/data/events'

export default function Home() {
  const featuredEvents = getFeaturedEvents(1); // Get the first upcoming event
  
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

      {/* Last Year's Events - Founders Showcase */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Last Year's Impact
            </h2>
            <p className="text-xl text-gray-600">
              We brought in founders worth over <span className="text-brand-electric-blue font-bold whitespace-nowrap">1 Billion €</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            <div className="flex justify-center">
              <a href="https://www.avular.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/avularlogo.webp"
                  alt="Avular"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://axelera.ai/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/axeleraailogo.png"
                  alt="Axelera AI"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/curiouscamilo/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/BlueWalkerLogo.jpg"
                  alt="Blue Walker"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.dembrane.com/en-US" target="_blank" rel="noopener noreferrer">
                <img
                  src="/dembradelogo.jpg"
                  alt="Dembrane"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://smartphotonics.nl/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/smartphotonicslogo.png"
                  alt="Smart Photonics"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.weheat.nl/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/weheatlogo.jpg"
                  alt="WeHeat"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
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

          {featuredEvents.length > 0 ? (
            <div className="max-w-2xl mx-auto mb-12">
              {featuredEvents.map((event) => (
                <div key={event.id} className="bg-white p-8 rounded-lg border border-gray-100 penthouse-shadow hover:penthouse-shadow-lg transition-all duration-300 mb-8">
                  <div className="flex items-start gap-4 mb-4">
                    <Calendar size={24} className="text-brand-electric-blue mt-1 flex-shrink-0" />
                    <div className="text-left flex-grow">
                      <h3 className="text-2xl font-bold mb-2">
                        {event.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{new Date(event.date).toLocaleDateString('en-US', { 
                            weekday: 'long', 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={16} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>Atlast 0.820</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-6">
                        {event.description}
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    {event.ticketUrl && (
                      <Link href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <button className="btn-primary">
                          Register for Event
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="bg-white p-8 rounded-lg border border-gray-100 penthouse-shadow max-w-lg mx-auto">
                <Calendar size={40} className="mx-auto mb-4 text-brand-electric-blue" />
                <h3 className="text-xl font-bold">
                  Exciting Events Coming Soon!
                </h3>
              </div>
            </div>
          )}

          <div className="text-center">
            <Link href="/events">
              <button className="btn-primary">
                View All Events
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
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

          <div className="text-center mt-12">
            <Link href="/about">
              <button className="btn-primary">
                Learn More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}