'use client'

import { Cloud, Code, Cpu, Database, Globe, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Custom Software Development',
    description: 'Tailored software solutions built to meet your unique business requirements with cutting-edge technologies.',
    features: ['Web Applications', 'Enterprise Software', 'API Development']
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure services to modernize your IT landscape and reduce costs.',
    features: ['Cloud Migration', 'AWS/Azure/GCP', 'DevOps & CI/CD']
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
    features: ['iOS & Android', 'React Native', 'Flutter']
  },
  {
    icon: Database,
    title: 'Data Analytics & AI',
    description: 'Transform your data into actionable insights with advanced analytics and artificial intelligence.',
    features: ['Business Intelligence', 'Machine Learning', 'Data Visualization']
  },
  {
    icon: Globe,
    title: 'Digital Transformation',
    description: 'End-to-end digital transformation services to help your business stay competitive in the digital age.',
    features: ['Process Automation', 'Legacy Modernization', 'Digital Strategy']
  },
  {
    icon: Cpu,
    title: 'IT Consulting',
    description: 'Expert guidance on technology strategy, architecture, and implementation to drive your success.',
    features: ['Technology Assessment', 'Architecture Design', 'IT Strategy']
  }
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your digital journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-2xl hover:border-primary-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors">
                <service.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="#contact"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center group-hover:translate-x-2 transition-transform"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
