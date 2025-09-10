'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Users, Rocket } from 'lucide-react'

export default function WhatWeDo() {
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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h2>
          <p className="text-xl text-gray-600">Building tomorrow's entrepreneurs, today</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-white p-8 border border-gray-200 hover:border-black transition-colors duration-300"
            >
              <div className="mb-6">{pillar.icon}</div>
              <h3 className="text-2xl font-bold mb-4 tracking-wider">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}