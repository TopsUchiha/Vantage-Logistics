import Image from 'next/image'
import { TrackForm } from '@/components/track-form'

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark">
      <Image
        src="/images/hero-port.webp"
        alt="Container ship being loaded at a busy seaport at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/80 to-navy-dark/40" />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Global Logistics Solutions
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance sm:text-6xl">
            Your Cargo.
            <br />
            <span className="text-gold">Our Priority.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Vantage Logistics delivers reliable, efficient, and secure shipping
            solutions for businesses and individuals across the globe.
          </p>

          <div className="mt-10 max-w-xl">
            <TrackForm />
          </div>
        </div>
      </div>
    </section>
  )
}
