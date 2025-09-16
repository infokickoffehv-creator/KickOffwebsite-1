import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import Link from 'next/link'
import { getUpcomingEvents, getPastEvents } from '@/data/events'

export default function Events() {
  const upcomingEvents = getUpcomingEvents()
  const pastEvents = getPastEvents()

  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-bold mb-8">Events</h1>
        <p className="text-xl text-gray-600 mb-16">
          Discover upcoming startup events, workshops, and networking opportunities.
        </p>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
          {upcomingEvents.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white p-6 rounded-lg border border-gray-100 penthouse-shadow hover:penthouse-shadow-lg transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      <span>{event.registeredCount}/{event.capacity} registered</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {event.speakers && event.speakers.length > 0 && (
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">Featured Speaker:</p>
                      {event.speakers.map((speaker) => (
                        <div key={speaker.id} className="text-sm text-gray-600">
                          <span className="font-medium">{speaker.name}</span> - {speaker.title} at {speaker.company}
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-3 mt-6">
                    {event.ticketUrl && (
                      <Link href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                        <button className="btn-primary">
                          Register Now
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar size={64} className="mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Upcoming Events</h3>
              <p className="text-gray-500">Check back soon for exciting new events!</p>
            </div>
          )}
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold mb-8">Past Events</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event) => (
                <div key={event.id} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-lg font-bold mb-2">{event.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })} • {event.time}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}