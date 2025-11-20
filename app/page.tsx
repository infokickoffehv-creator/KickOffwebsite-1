import Hero from '@/components/Hero'
import Link from 'next/link'
import { Lightbulb, Users, Rocket, Calendar, Clock, ArrowRight } from 'lucide-react'
import { getFeaturedEvents, getPastEvents } from '@/data/events'

export default function Home() {
  const featuredEvents = getFeaturedEvents(1); // Get the first upcoming event
  const pastEvents = getPastEvents(); // Get all past events

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
                  src="/2025EventsLogos/avularlogo.webp"
                  alt="Avular"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://axelera.ai/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/2025EventsLogos/axeleraailogo.png"
                  alt="Axelera AI"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.linkedin.com/in/curiouscamilo/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/2025EventsLogos/BlueWalkerLogo.jpg"
                  alt="Blue Walker"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.dembrane.com/en-US" target="_blank" rel="noopener noreferrer">
                <img
                  src="/2025EventsLogos/dembradelogo.jpg"
                  alt="Dembrane"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://smartphotonics.nl/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/2025EventsLogos/smartphotonicslogo.png"
                  alt="Smart Photonics"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://www.weheat.nl/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/2025EventsLogos/weheatlogo.jpg"
                  alt="WeHeat"
                  className="h-14 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider mb-6">
              <Calendar size={16} />
              UPCOMING EVENTS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events
            </h2>
          </div>

          {featuredEvents.length > 0 ? (
            <div className="grid gap-8 mb-12">
              {featuredEvents.map((event, index) => (
                <div key={event.id} className={`group relative overflow-hidden rounded-2xl penthouse-shadow hover:penthouse-shadow-lg transition-all duration-500 hover:scale-[1.02] ${
                  index === 0 ? 'bg-gradient-to-r from-black to-gray-800 text-white' : 'bg-white'
                }`}>
                  {index === 0 && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                        FEATURED
                      </div>
                    </div>
                  )}

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`p-2 rounded-lg ${index === 0 ? 'bg-white/20' : 'bg-gray-100'}`}>
                            <Calendar size={20} className={index === 0 ? 'text-orange-400' : 'text-brand-electric-blue'} />
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <span className={`font-medium ${index === 0 ? 'text-gray-200' : 'text-gray-600'}`}>
                              {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'long',
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                            <span className={`${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>•</span>
                            <span className={`font-medium ${index === 0 ? 'text-gray-200' : 'text-gray-600'}`}>
                              {event.time}
                            </span>
                            <span className={`${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>•</span>
                            <span className={`font-medium ${index === 0 ? 'text-gray-200' : 'text-gray-600'}`}>
                              {event.location}
                            </span>
                          </div>
                        </div>

                        <h3 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${
                          index === 0 ? 'text-white' : 'text-black'
                        }`}>
                          {event.title}
                        </h3>

                        <p className={`text-lg leading-relaxed mb-6 ${
                          index === 0 ? 'text-gray-200' : 'text-gray-600'
                        }`}>
                          {event.description}
                        </p>

                        {event.speakers && event.speakers.length > 0 && (
                          <div className="flex items-center gap-3 mb-6">
                            <Users size={16} className={index === 0 ? 'text-orange-400' : 'text-gray-500'} />
                            <span className={`text-sm font-medium ${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                              Speaker:
                            </span>
                            {event.speakers.map((speaker) => (
                              <span key={speaker.id} className={`font-semibold ${
                                index === 0 ? 'text-orange-400' : 'text-black'
                              }`}>
                                {speaker.name}, {speaker.title} at {speaker.company}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="lg:flex-shrink-0">
                        {event.ticketUrl && (
                          <Link href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                            <button className={`group/btn relative overflow-hidden px-8 py-4 font-bold tracking-wider transition-all duration-300 hover:scale-105 ${
                              index === 0
                                ? 'bg-orange-500 text-white hover:bg-orange-600'
                                : 'bg-black text-white hover:bg-gray-800'
                            }`}>
                              <span className="relative z-10 flex items-center gap-2">
                                Register Now
                                <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                              </span>
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>

                  {index === 0 && (
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-white p-12 rounded-2xl penthouse-shadow max-w-lg mx-auto">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar size={32} className="text-brand-electric-blue" />
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  More Coming Soon!
                </h3>
                <p className="text-gray-600 mb-6">
                  We're planning exciting events for the upcoming semester. Check out our past events below!
                </p>
                <Link href="/events">
                  <button className="btn-primary group inline-flex items-center">
                    <span>View Past Events</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Past Events Section */}
      {pastEvents.length > 0 && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider mb-6">
                <Clock size={16} />
                RECENT EVENTS
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Recent Events
              </h2>
            </div>

            <div className="grid gap-6">
              {pastEvents.map((event) => (
                <div key={event.id} className="group relative overflow-hidden rounded-2xl penthouse-shadow hover:penthouse-shadow-lg transition-all duration-500 hover:scale-[1.01] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                      {/* Event Image - Compact */}
                      {event.image && (
                        <div className="lg:w-2/5 relative overflow-hidden rounded-xl">
                          <img
                            src="/OWOW/OWOW horizontal poster.jpg"
                            alt={event.title}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Event Info - Compact */}
                      <div className="flex-1 text-white">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="p-2 rounded-lg bg-orange-500/20">
                            <Calendar size={16} className="text-orange-400" />
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm">
                            <span className="font-medium text-gray-300">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric'
                              })}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span className="font-medium text-gray-300">{event.time}</span>
                            <span className="text-gray-500">•</span>
                            <span className="font-medium text-gray-300">{event.location}</span>
                          </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                          <span className="text-orange-400">{event.title.split(':')[0]}:</span>
                          <span className="text-white"> {event.title.split(':')[1]}</span>
                        </h3>

                        <p className="text-base leading-relaxed mb-4 text-gray-300 line-clamp-2">
                          {event.description}
                        </p>

                        {/* Speakers - Compact */}
                        {event.speakers && event.speakers.length > 0 && (
                          <div className="flex items-center gap-2">
                            <Users size={14} className="text-orange-400" />
                            {event.speakers.map((speaker) => (
                              <span key={speaker.id} className="text-sm font-semibold text-gray-200">
                                {speaker.name} - <span className="text-orange-400">{speaker.title}</span> at {speaker.company}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none"></div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/events">
                <button className="bg-orange-500 text-white hover:bg-orange-600 px-6 py-3 rounded-lg font-bold tracking-wider transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 penthouse-shadow">
                  <span>View All Events</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      )}

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