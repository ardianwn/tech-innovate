'use client'

import { BookOpen, Building2, Car, Heart, Landmark, ShoppingBag } from 'lucide-react'

const clients = [
  { name: 'TechCorp', Icon: Building2 },
  { name: 'GlobalFinance', Icon: Landmark },
  { name: 'HealthPlus', Icon: Heart },
  { name: 'EduLearn', Icon: BookOpen },
  { name: 'RetailMax', Icon: ShoppingBag },
  { name: 'AutoDrive', Icon: Car }
]

export default function Clients() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with amazing companies to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center group hover:-translate-y-2"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform text-primary-600">
                <client.Icon size={48} strokeWidth={1.5} />
              </div>
              <p className="text-gray-700 font-semibold text-center">{client.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">95%</div>
            <p className="text-gray-600 font-medium">Client Satisfaction</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">85%</div>
            <p className="text-gray-600 font-medium">Repeat Business</p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
            <p className="text-gray-600 font-medium">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
