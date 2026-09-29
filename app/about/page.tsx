import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowRight, ShieldCheck, HeartHandshake, Target } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { BrandButton } from '@/components/brand-button'
import { CtaBanner } from '@/components/cta-banner'
import { stats } from '@/lib/site'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Vantage Logistics is a global logistics company committed to delivering reliable, efficient, and secure shipping solutions for businesses and individuals.',
}

const values = [
  {
    icon: ShieldCheck,
    title: 'Reliability',
    description: 'On-time, every time.',
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description: 'We do what is right.',
  },
  {
    icon: Target,
    title: 'Customer Focus',
    description: 'Your success is our success.',
  },
]

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Vantage Logistics"
        title="Moving the World Forward"
        description="Vantage Logistics is a global logistics company committed to delivering reliable, efficient, and secure shipping solutions for businesses and individuals across the globe."
        image="/images/ocean-freight.webp"
        imageAlt="Aerial view of a container terminal with stacked shipping containers"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
      />

      {/* Mission */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Our Mission
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
                Connecting people, businesses, and markets worldwide
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                To provide dependable, innovative, and customer-focused
                logistics solutions that connect people, businesses, and markets
                — anywhere in the world.
              </p>

              <dl className="mt-10 grid gap-6 sm:grid-cols-3">
                {values.map((value) => (
                  <div key={value.title}>
                    <div className="flex size-11 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <value.icon className="size-5" />
                    </div>
                    <dt className="mt-4 font-semibold text-navy">
                      {value.title}
                    </dt>
                    <dd className="mt-1 text-sm text-muted-foreground">
                      {value.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/mission.webp"
                alt="Logistics team reviewing global shipping operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-navy py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-8 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dd className="text-4xl font-bold text-gold sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 text-sm text-white/70">{stat.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-last aspect-[4/3] overflow-hidden rounded-2xl lg:order-first">
              <Image
                src="/images/about-story.webp"
                alt="Cargo aircraft and trucks at a logistics hub"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Our Story
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
                A Global Partner You Can Trust
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Founded with a vision to simplify global trade, Vantage
                Logistics has grown into a trusted logistics partner, serving
                clients across continents with a commitment to excellence,
                innovation, and integrity.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Today, we combine deep industry expertise with modern technology
                to keep supply chains moving — delivering shipments safely,
                securely, and on time, wherever business takes you.
              </p>
              <BrandButton href="/services" variant="gold" className="mt-8">
                Learn More
                <ArrowRight />
              </BrandButton>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </main>
  )
}
