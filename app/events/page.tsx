import { Calendar, Clock, MapPin, Users, ArrowRight, Zap, Star } from 'lucide-react'
import Link from 'next/link'
import { getUpcomingEvents, getPastEvents } from '@/data/events'

export default function Events() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium tracking-wider mb-6">
            <Zap size={16} />
            EVENTS
          </div>
        </div>

        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="grid gap-8">
              {upcomingEvents.map((event, index) => (
                <div key={event.id} className={`group relative overflow-hidden rounded-2xl penthouse-shadow hover:penthouse-shadow-lg transition-all duration-500 hover:scale-[1.01] ${
                  index === 0 ? 'bg-gradient-to-r from-black via-gray-900 to-black text-white' : 'bg-white'
                }`}>
                  {/* Featured badge for first event */}
                  {index === 0 && (
                    <div className="absolute top-6 right-6 z-10">
                      <div className="flex items-center gap-1 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
                        <Star size={12} />
                        FEATURED
                      </div>
                    </div>
                  )}

                  <div className="p-8 md:p-12">
                    <div className="flex flex-col xl:flex-row xl:items-center gap-8">
                      {/* Event Details */}
                      <div className="flex-1">
                        {/* Event Type Badge */}
                        <div className="inline-flex items-center gap-2 mb-4">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider ${
                            index === 0
                              ? 'bg-orange-500/20 text-orange-400'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {event.type.replace('-', ' ').toUpperCase()}
                          </div>
                        </div>

                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-tight ${
                          index === 0 ? 'text-white' : 'text-black'
                        }`}>
                          {event.title}
                        </h3>

                        {/* Event Meta */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${index === 0 ? 'bg-orange-500/20' : 'bg-gray-100'}`}>
                              <Calendar size={16} className={index === 0 ? 'text-orange-400' : 'text-brand-electric-blue'} />
                            </div>
                            <div>
                              <p className={`text-xs font-medium ${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                                DATE
                              </p>
                              <p className={`font-semibold ${index === 0 ? 'text-white' : 'text-black'}`}>
                                {new Date(event.date).toLocaleDateString('en-US', {
                                  month: 'short',
                                  day: 'numeric',
                                  year: 'numeric'
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${index === 0 ? 'bg-orange-500/20' : 'bg-gray-100'}`}>
                              <Clock size={16} className={index === 0 ? 'text-orange-400' : 'text-brand-electric-blue'} />
                            </div>
                            <div>
                              <p className={`text-xs font-medium ${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                                TIME
                              </p>
                              <p className={`font-semibold ${index === 0 ? 'text-white' : 'text-black'}`}>
                                {event.time}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${index === 0 ? 'bg-orange-500/20' : 'bg-gray-100'}`}>
                              <MapPin size={16} className={index === 0 ? 'text-orange-400' : 'text-brand-electric-blue'} />
                            </div>
                            <div>
                              <p className={`text-xs font-medium ${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                                LOCATION
                              </p>
                              <p className={`font-semibold ${index === 0 ? 'text-white' : 'text-black'}`}>
                                {event.location}
                              </p>
                            </div>
                          </div>
                        </div>

                        <p className={`text-lg leading-relaxed mb-6 ${
                          index === 0 ? 'text-gray-200' : 'text-gray-600'
                        }`}>
                          {event.description}
                        </p>

                        {/* Speakers */}
                        {event.speakers && event.speakers.length > 0 && (
                          <div className={`p-4 rounded-lg mb-6 ${
                            index === 0 ? 'bg-orange-500/10 backdrop-blur' : 'bg-gray-50'
                          }`}>
                            <div className="flex items-center gap-2 mb-2">
                              <Users size={16} className={index === 0 ? 'text-orange-400' : 'text-gray-500'} />
                              <span className={`text-sm font-medium ${index === 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                                Featured Speaker
                              </span>
                            </div>
                            {event.speakers.map((speaker) => (
                              <div key={speaker.id}>
                                <p className={`font-bold text-lg ${index === 0 ? 'text-orange-400' : 'text-black'}`}>
                                  {speaker.name}
                                </p>
                                <p className={`${index === 0 ? 'text-gray-300' : 'text-gray-600'}`}>
                                  {speaker.title} at {speaker.company}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}


                      </div>

                      {/* CTA Section */}
                      <div className="xl:flex-shrink-0 text-center xl:text-right">
                        {event.ticketUrl && (
                          <Link href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                            <button className={`group/btn relative overflow-hidden px-8 py-4 font-bold tracking-wider transition-all duration-300 hover:scale-105 rounded-lg ${
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

                  {/* Decorative elements */}
                  {index === 0 && (
                    <>
                      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/20 to-transparent"></div>
                      <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl"></div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-gray-400 rounded-full"></div>
              <h2 className="text-3xl font-bold">Past Events</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
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
          </section>
        )}

        {/* No events fallback */}
        {upcomingEvents.length === 0 && pastEvents.length === 0 && (
          <section className="text-center py-20">
            <div className="bg-white p-16 rounded-2xl penthouse-shadow max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <Calendar size={40} className="text-brand-electric-blue" />
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Exciting Events Coming Soon!
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                We're working on some incredible events that will inspire and connect the startup community. Stay tuned for announcements!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="btn-primary">
                    Get Notified
                  </button>
                </Link>
                <Link href="/about">
                  <button className="btn-secondary">
                    Learn More About Us
                  </button>
                </Link>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  )
}