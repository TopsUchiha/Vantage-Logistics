import type { Metadata } from 'next'
import { PackageSearch } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { TrackForm } from '@/components/track-form'
import { ShipmentResult } from '@/components/track/shipment-result'

export const metadata: Metadata = {
  title: 'Track Shipment',
  description:
    'Enter your Vantage Logistics tracking number to get real-time updates on your shipment location and status.',
}

export default async function TrackPage({
  searchParams,
}: {
  searchParams: Promise<{ number?: string }>
}) {
  const { number } = await searchParams
  const trackingNumber = number?.trim()

  return (
    <main>
      <PageHero
        eyebrow="Track Shipment"
        title="Track Your Shipment"
        description="Enter your tracking number to get real-time updates on your shipment's location and status."
        image="/images/hero-port.webp"
        imageAlt="Container ship docked at a busy port"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Track Shipment' }]}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <TrackForm
              defaultValue={trackingNumber}
              autoFocus={!trackingNumber}
              className="border border-navy/10"
            />
          </div>

          <div className="mt-12">
            {trackingNumber ? (
              <ShipmentResult trackingNumber={trackingNumber} />
            ) : (
              <div className="mx-auto max-w-md rounded-2xl border border-dashed border-navy/15 bg-navy/[0.02] px-6 py-14 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-navy/5 text-navy">
                  <PackageSearch className="size-7" />
                </div>
                <h2 className="mt-5 text-lg font-semibold text-navy">
                  No shipment selected
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter a tracking number above to view live status, route, and
                  delivery timeline.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
