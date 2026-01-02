import { Calendar, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Event } from '@/lib/types'

interface EventBannerProps {
  event: Event
  index?: number
}

export default function EventBanner({ event, index = 0 }: EventBannerProps) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl penthouse-shadow hover:penthouse-shadow-lg transition-all duration-500 hover:scale-[1.02] ${
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
              <div className="flex flex-nowrap gap-2 sm:gap-4 text-sm overflow-x-auto">
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Calendar size={16} className={event.id.includes('rift') ? 'text-brand-electric-blue' : 'text-orange-400'} />
                  <span className="font-medium text-gray-300">
                    {new Date(event.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <span className="text-gray-500 flex-shrink-0">•</span>
                <div className="flex items-center gap-2 whitespace-nowrap">
                  <Clock size={16} className={event.id.includes('rift') ? 'text-brand-electric-blue' : 'text-orange-400'} />
                  <span className="font-medium text-gray-300">
                    {event.time}
                  </span>
                </div>
                <span className="text-gray-500 flex-shrink-0">•</span>
                <span className="font-medium text-gray-300 whitespace-nowrap">
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
  )
}