import { ArrowRight } from 'lucide-react'
import { BrandButton } from '@/components/brand-button'

type CtaBannerProps = {
  title?: string
  description?: string
}

export function CtaBanner({
  title = 'Ready to move your cargo forward?',
  description = 'Get in touch with our logistics experts and discover a shipping partner you can rely on.',
}: CtaBannerProps) {
  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-navy px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="absolute -right-16 -top-16 size-64 rounded-full bg-gold/10" />
          <div className="absolute -bottom-20 -left-10 size-64 rounded-full bg-gold/5" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {description}
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <BrandButton href="/contact" variant="gold" size="lg">
                Contact Us
                <ArrowRight />
              </BrandButton>
              <BrandButton href="/track" variant="outlineLight" size="lg">
                Track a Shipment
              </BrandButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
