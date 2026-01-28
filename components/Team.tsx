'use client'

import { Github, Linkedin } from 'lucide-react'

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: '15+ years in tech leadership',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'Expert in cloud architecture',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    bio: 'Full-stack development specialist',
    linkedin: '#',
    github: '#'
  },
  {
    name: 'David Kim',
    role: 'UX/UI Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'Award-winning designer',
    linkedin: '#',
    github: '#'
  }
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Talented professionals dedicated to delivering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={member.github}
                    className="w-10 h-10 bg-gray-100 text-gray-400 rounded-full flex items-center justify-center hover:bg-primary-600 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
