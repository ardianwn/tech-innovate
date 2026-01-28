'use client'

import { CheckCircle, Clock, HeadphonesIcon, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description: '500+ successful projects delivered across various industries worldwide'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: '98% of our projects are delivered on or ahead of schedule'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock technical support to ensure your systems run smoothly'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Build solutions that grow with your business needs'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-xl mb-8 text-primary-100">
            Let's discuss how we can help you achieve your digital goals
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
