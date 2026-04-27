import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import TargetUsers from '@/components/TargetUsers'
import WhyChooseUs from '@/components/WhyChooseUs'
import Screenshots from '@/components/Screenshots'
import Pricing from '@/components/Pricing'
import Payment from '@/components/Payment'
import Contact from '@/components/Contact'
import ScrollReveal from '@/components/ScrollReveal'

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TargetUsers />
        <WhyChooseUs />
        <Screenshots />
        <Pricing />
        <Payment />
        <Contact />
      </main>
    </>
  )
}
