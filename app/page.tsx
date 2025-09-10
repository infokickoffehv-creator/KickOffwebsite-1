import Hero from '@/components/Hero'
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

  const events = [
    {
      title: 'CEO Talk: Building in Brainport',
      date: 'Nov 15, 2024',
      time: '18:00 - 20:00',
      description: 'Learn from successful founders who built their startups in the Eindhoven ecosystem.',
    },
    {
      title: 'Pitch Night Winter Edition',
      date: 'Nov 22, 2024',
      time: '19:00 - 22:00',
      description: 'Present your startup idea and compete for prizes and mentorship opportunities.',
    },
    {
      title: 'AI Workshop: From Idea to MVP',
      date: 'Nov 29, 2024',
      time: '14:00 - 17:00',
      description: 'Hands-on workshop on leveraging AI to build your minimum viable product.',
    },
  ]

  const stats = [
    { number: '16+', label: 'Years of Impact' },
    { number: '500+', label: 'Events Hosted' },
    { number: '5000+', label: 'Students Reached' },
    { number: '100+', label: 'Startups Launched' },
  ]

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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-600">
              Join us for inspiring talks, workshops, and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {events.map((event, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 hover:penthouse-shadow transition-all duration-300">
                <h3 className="font-bold text-xl mb-3">
                  {event.title}
                </h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <Clock size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <p className="text-gray-700 mb-4">
                  {event.description}
                </p>
                <button className="btn-ghost group">
                  Register Now
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn-primary">
              View All Events
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">
              Building the startup ecosystem since 2008
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-6xl font-bold mb-2 text-brand-electric-blue">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
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