import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { services } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore Vantage Logistics services: air freight, ocean freight, domestic transportation, warehousing, cargo forwarding, customs clearance, and e-commerce fulfillment.',
}

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Our Services"
        title="Logistics Solutions for Every Need"
        description="We offer a full range of logistics services designed to move your business forward — by air, sea, road, and everything in between."
        image="/images/air-freight.webp"
        imageAlt="Cargo aircraft being loaded on an airport tarmac"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Services' }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <article
                  key={service.slug}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-navy/10 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-lg bg-white/95 text-navy shadow-sm">
                      <Icon className="size-5" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-xl font-semibold text-navy">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
