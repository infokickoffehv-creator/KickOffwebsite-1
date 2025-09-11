import Link from 'next/link'
import { Instagram, Linkedin, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="mb-4">
            <span className="font-bold text-2xl tracking-wider">KICKOFF</span>
            <span className="text-gray-400">/</span>
            <span className="font-light text-2xl">EHV</span>
          </div>
          <p className="text-gray-400">
            Brainport's first startup and entrepreneur club for students
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wider">QUICK LINKS</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wider">CONTACT</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              <a href="mailto:info@kickoffehv.com" className="hover:text-white transition-colors">
                info@kickoffehv.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              <span>TU/e Campus, Eindhoven</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 tracking-wider">FOLLOW US</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/kickoff.ehv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/kickoffehv/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; 2024 Kickoff Eindhoven. Since 2008. All rights reserved.</p>
      </div>
    </footer>
  )
}