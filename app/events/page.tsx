import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import Link from 'next/link'
import { getUpcomingEvents, getPastEvents } from '@/data/events'

export default function Events() {
  const upcomingEvents = getUpcomingEvents()
  // Filter for only the NVIDIA event
  const nvidiaEvent = upcomingEvents.find(event => event.id === 'event-nvidia-ceo')

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-8">Events</h1>
        <p className="text-xl text-gray-600 mb-16">
          Discover upcoming startup events, workshops, and networking opportunities.
        </p>

        {/* NVIDIA Event Banner */}
        {nvidiaEvent && (
          <section className="mb-16">
            <div className="bg-gradient-to-r from-black to-gray-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Left side - Event Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar size={24} className="text-green-400" />
                      <span className="text-green-400 font-semibold text-lg">Upcoming Event</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                      {nvidiaEvent.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar size={20} className="text-gray-300" />
                        <div>
                          <p className="text-gray-300 text-sm">Date</p>
                          <p className="font-semibold">{new Date(nvidiaEvent.date).toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                          })}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Clock size={20} className="text-gray-300" />
                        <div>
                          <p className="text-gray-300 text-sm">Time</p>
                          <p className="font-semibold">{nvidiaEvent.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin size={20} className="text-gray-300" />
                        <div>
                          <p className="text-gray-300 text-sm">Location</p>
                          <p className="font-semibold">Atlast 0.820</p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-200 text-lg mb-6 leading-relaxed">
                      {nvidiaEvent.description}
                    </p>

                    {nvidiaEvent.speakers && nvidiaEvent.speakers.length > 0 && (
                      <div className="mb-8">
                        <p className="text-gray-300 text-sm mb-3">Featured Speaker</p>
                        {nvidiaEvent.speakers.map((speaker) => (
                          <div key={speaker.id} className="bg-white/10 backdrop-blur rounded-lg p-4">
                            <p className="font-bold text-xl">{speaker.name}</p>
                            <p className="text-gray-300">{speaker.title} at {speaker.company}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right side - CTA */}
                  <div className="lg:flex-shrink-0 text-center lg:text-right">
                    {nvidiaEvent.ticketUrl && (
                      <Link href={nvidiaEvent.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 text-lg">
                          Register Now
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-green-500/20 to-transparent"></div>
            </div>
          </section>
        )}

        {/* No other events message */}
        <section className="text-center py-12">
          <div className="bg-gray-50 rounded-lg p-8">
            <Calendar size={48} className="mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">More Events Coming Soon</h3>
            <p className="text-gray-500">Stay tuned for more exciting startup events and workshops!</p>
          </div>
        </section>
      </div>
    </div>
  )
}