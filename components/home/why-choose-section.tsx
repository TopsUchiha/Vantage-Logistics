import { Globe2, Radar, ShieldCheck, Headset } from 'lucide-react'

const features = [
  {
    icon: Globe2,
    title: 'Global Network',
    description: 'Worldwide coverage and trusted partners.',
  },
  {
    icon: Radar,
    title: 'Real-Time Tracking',
    description: 'Full visibility at every stage of your shipment.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure & Compliant',
    description: 'We meet international standards and regulations.',
  },
  {
    icon: Headset,
    title: 'Dedicated Support',
    description: 'Our team is always ready to help.',
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
          Why Choose Vantage
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
          Built on Trust. Driven by Results.
        </h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col">
              <div className="flex size-12 items-center justify-center rounded-full bg-navy text-gold">
                <feature.icon className="size-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
