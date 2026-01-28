import About from '@/components/About'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Team from '@/components/Team'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Features />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </main>
  )
}
