import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { BrandButton } from '@/components/brand-button'
import { stats } from '@/lib/site'

export function GlobalReachSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark py-20 sm:py-24">
      <Image
        src="/images/world-map.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-right opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-dark/85 to-navy-dark/30" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              Global Reach
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              International Logistics Without Borders
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              We connect your business to markets worldwide with tailored
              logistics solutions, trusted partners, and real-time visibility.
            </p>
            <BrandButton href="/services" variant="gold" className="mt-8">
              Our Services
              <ArrowRight />
            </BrandButton>
          </div>

          <dl className="grid grid-cols-3 gap-6 lg:justify-items-end">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-right">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-bold text-gold sm:text-5xl">
                  {stat.value}
                </dd>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
