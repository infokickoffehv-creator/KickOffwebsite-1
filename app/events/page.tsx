import { Calendar, Clock, Users, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'
import { getUpcomingEvents, getPastEvents } from '@/data/events'
import { getYouTubeThumbnail } from '@/lib/utils'

export default function Events() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        {upcomingEvents.length > 0 && (
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-orange-500 rounded-full"></div>
              <h2 className="text-3xl font-bold">Upcoming Events</h2>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            <div className="grid gap-8">
              {upcomingEvents.map((event, index) => (
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
                            <span className="text-orange-400">{event.title.split(':')[0]}:</span>
                            <span className="text-white"> {event.title.split(':')[1]}</span>
                          </h3>

                          <p className="text-lg leading-relaxed text-gray-200 whitespace-pre-line">
                            {event.description}
                          </p>
                        </div>

                        {/* Bottom section with date/time/location and button */}
                        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-6 pt-6 border-t border-orange-500/20">
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar size={16} className="text-orange-400" />
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
                              <Clock size={16} className="text-orange-400" />
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
                              <button className="group/btn relative overflow-hidden px-8 py-4 rounded-full font-bold tracking-wider transition-all duration-300 hover:scale-105 whitespace-nowrap bg-orange-500 text-white hover:bg-orange-600">
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
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-500/10 to-transparent pointer-events-none"></div>
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
                          {/* Regular poster image */}
                          <img
                            src="/OWOW/OWOW horizontal poster.jpg"
                            alt={event.title}
                            className={`w-full h-auto object-cover transition-all duration-500 ${
                              event.youtubeUrl ? 'group-hover/video:opacity-0' : 'group-hover:scale-105'
                            }`}
                          />

                          {/* YouTube thumbnail overlay */}
                          {event.youtubeUrl && (
                            <>
                              <div className="absolute inset-0 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500">
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
                                className="absolute inset-0 z-10 opacity-0 group-hover/video:opacity-100 transition-opacity duration-500"
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