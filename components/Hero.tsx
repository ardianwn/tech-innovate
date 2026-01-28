'use client'

import { ArrowRight, Code2, Shield, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center bg-primary-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Innovation Meets Excellence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Your Business with
              <span className="text-primary-300"> Cutting-Edge Technology</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8">
              We deliver innovative software solutions that drive digital transformation and accelerate your business growth in the modern era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-white text-primary-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:scale-105"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-900 transition-all"
              >
                Explore Services
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-primary-700">
              <div>
                <div className="text-4xl font-bold text-primary-300">500+</div>
                <div className="text-sm text-gray-300 mt-1">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-300">200+</div>
                <div className="text-sm text-gray-300 mt-1">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-300">15+</div>
                <div className="text-sm text-gray-300 mt-1">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-xl">
                    <Code2 className="w-10 h-10 text-primary-300 mb-4" />
                    <h3 className="font-semibold mb-2">Clean Code</h3>
                    <p className="text-sm text-gray-300">Well-structured & maintainable</p>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-xl">
                    <Zap className="w-10 h-10 text-primary-300 mb-4" />
                    <h3 className="font-semibold mb-2">Fast Performance</h3>
                    <p className="text-sm text-gray-300">Optimized for speed</p>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-xl">
                    <Shield className="w-10 h-10 text-primary-300 mb-4" />
                    <h3 className="font-semibold mb-2">Secure</h3>
                    <p className="text-sm text-gray-300">Enterprise-grade security</p>
                  </div>
                  <div className="bg-primary-800/50 backdrop-blur-sm p-6 rounded-xl">
                    <div className="w-10 h-10 bg-primary-300 rounded-full flex items-center justify-center mb-4">
                      <span className="text-primary-900 font-bold text-xl">✓</span>
                    </div>
                    <h3 className="font-semibold mb-2">Quality Assured</h3>
                    <p className="text-sm text-gray-300">Tested & reliable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
