import Link from 'next/link'
import { ArrowRight, PackageCheck } from 'lucide-react'
import { BrandButton } from '@/components/brand-button'
import { ServiceCard } from '@/components/service-card'
import { services } from '@/lib/site'

export function ServicesSection() {
  const gridServices = services.slice(0, 6)
  const featured = services[6]

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[340px_1fr] lg:gap-14">
          <div className="lg:pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
              Our Services
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
              Comprehensive Logistics Solutions
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From air to sea, road to warehouse, we provide end-to-end
              logistics services designed to keep your business moving forward
              — on time, and worldwide.
            </p>
            <BrandButton href="/services" variant="gold" className="mt-8">
              Explore All Services
              <ArrowRight />
            </BrandButton>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {gridServices.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>

            <Link
              href="/services"
              className="group flex items-center justify-between gap-4 rounded-xl border border-navy/10 bg-navy/[0.03] p-6 transition-all hover:border-gold/50 hover:bg-navy/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy-dark">
                  <PackageCheck className="size-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy">
                    {featured.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {featured.short}
                  </p>
                </div>
              </div>
              <ArrowRight className="size-5 shrink-0 text-gold transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
