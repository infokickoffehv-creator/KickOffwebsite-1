import Hero from '@/components/Hero'
import Link from 'next/link'
import { Lightbulb, Users, Rocket, Calendar, Clock, ArrowRight, Play } from 'lucide-react'
import { getFeaturedEvents, getPastEvents } from '@/data/events'
import { getYouTubeThumbnail } from '@/lib/utils'

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

      {/* Upcoming Events Preview - Only shows section if there are events */}
      {featuredEvents.length > 0 && (
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

            {featuredEvents.length > 0 && (
            <div className="grid gap-8 mb-12">
              {featuredEvents.map((event, index) => (
                <div key={event.id} className={`group relative overflow-hidden rounded-2xl penthouse-shadow hover:penthouse-shadow-lg transition-all duration-500 hover:scale-[1.02] ${
                  index === 0 ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white' : 'bg-white'
                }`}>
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row gap-8">
                      {/* Event Poster */}
                      {event.image && (
                        <div className="lg:w-2/5 relative overflow-hidden rounded-xl">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}

                      {/* Event Content */}
                      <div className="flex-1 flex flex-col">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
                            <span className={event.id.includes('rift') ? 'text-brand-electric-blue' : 'text-orange-400'}>{event.title.split(':')[0]}:</span>
                            <span className="text-white"> {event.title.split(':')[1]}</span>
                          </h3>

                          <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: event.description }}></p>
                        </div>

                        {/* Bottom section with date/time/location and button */}
                        <div className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-6 pt-6 border-t ${event.id.includes('rift') ? 'border-brand-electric-blue/20' : 'border-orange-500/20'}`}>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className={event.id.includes('rift') ? 'text-brand-electric-blue' : 'text-orange-400'} />
                              <span className="font-medium text-gray-300">
                                {new Date(event.date).toLocaleDateString('en-US', {
                                  month: 'long',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </span>
                            </div>
                            <span className="text-gray-500">•</span>
                            <div className="flex items-center gap-2">
                              <Clock size={16} className={event.id.includes('rift') ? 'text-brand-electric-blue' : 'text-orange-400'} />
                              <span className="font-medium text-gray-300">
                                {event.time}
                              </span>
                            </div>
                            <span className="text-gray-500">•</span>
                            <span className="font-medium text-gray-300">
                              {event.location}
                            </span>
                          </div>

                          {event.ticketUrl && (
                            <Link href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                              <button className={`group/btn relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-wider transition-all duration-300 hover:scale-105 whitespace-nowrap text-white ${event.id.includes('rift') ? 'bg-brand-electric-blue hover:bg-blue-600' : 'bg-orange-500 hover:bg-orange-600'}`}>
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
                  </div>

                  {/* Decorative gradient overlay */}
                  <div className={`absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l to-transparent pointer-events-none ${event.id.includes('rift') ? 'from-brand-electric-blue/10' : 'from-orange-500/10'}`}></div>
                </div>
              ))}
            </div>
            )}
          </div>
        </section>
      )}

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
                      {/* Event Image - Compact with YouTube hover */}
                      {event.image && (
                        <div className="lg:w-2/5 relative overflow-hidden rounded-xl">
                          {/* Regular poster image */}
                          <img
                            src="/OWOW/OWOW horizontal poster.jpg"
                            alt={event.title}
                            className={`w-full h-auto object-cover transition-all duration-500 ${
                              event.youtubeUrl ? 'group-hover:opacity-0' : 'group-hover:scale-105'
                            }`}
                          />

                          {/* YouTube thumbnail overlay */}
                          {event.youtubeUrl && (
                            <>
                              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <img
                                  src={getYouTubeThumbnail(event.youtubeUrl) || event.image}
                                  alt={`${event.title} - Video`}
                                  className="w-full h-full object-cover"
                                />
                                {/* YouTube play button overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-200">
                                    <Play size={24} className="text-white ml-1" fill="currentColor" />
                                  </div>
                                </div>
                              </div>

                              {/* Clickable overlay to open YouTube */}
                              <a
                                href={event.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                aria-label={`Watch ${event.title} on YouTube`}
                              />
                            </>
                          )}
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
                              <a
                                key={speaker.id}
                                href={speaker.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm font-semibold text-gray-200 hover:text-orange-400 transition-colors"
                              >
                                {speaker.name} - <span className="text-orange-400">{speaker.title}</span> at {speaker.company}
                              </a>
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

      {/* Coming Soon Section - Only shows when NO upcoming events */}
      {featuredEvents.length === 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl penthouse-shadow bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
              <div className="p-8 text-center relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-electric-blue/20 to-purple-500/20 rounded-full mb-4 backdrop-blur-sm border border-white/10">
                  <Rocket size={28} className="text-brand-electric-blue" />
                </div>

                <h3 className="text-2xl font-bold mb-2">
                  New Events Coming Soon
                </h3>

                <p className="text-sm text-gray-300 max-w-md mx-auto">
                  Stay tuned for announcements about inspiring talks and networking opportunities.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-electric-blue/10 to-transparent pointer-events-none"></div>
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