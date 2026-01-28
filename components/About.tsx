'use client'

import { Award, Eye, Target } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About TechInnovate</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leading the digital transformation with innovative technology solutions since 2009
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Empowering Businesses Through Technology
            </h3>
            <p className="text-gray-600 mb-6">
              TechInnovate is a premier technology company specializing in cutting-edge software development, 
              cloud solutions, and digital transformation services. With over 15 years of experience, 
              we've helped hundreds of businesses achieve their digital goals.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert developers, designers, and consultants work collaboratively to deliver 
              solutions that not only meet but exceed expectations. We pride ourselves on our commitment 
              to quality, innovation, and client satisfaction.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                <span className="text-gray-700">Agile Methodology</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To deliver innovative technology solutions that drive business growth and digital transformation, 
              making technology accessible and beneficial for all.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading technology partner for businesses worldwide, recognized for excellence, 
              innovation, and unwavering commitment to client success.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-6">
              <Award className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
            <p className="text-gray-600">
              Innovation, integrity, excellence, and collaboration are at the core of everything we do. 
              We believe in building lasting relationships with our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
