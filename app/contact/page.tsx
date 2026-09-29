import type { Metadata } from 'next'
import { Mail, Clock } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { siteConfig } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Vantage Logistics. Contact our team for quotes, support, and logistics solutions tailored to your business.',
}

const details = [
  {
    icon: Mail,
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Mon–Fri, 8:00 AM – 6:00 PM',
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Get Your Cargo Moving"
        description="Have a question or need a quote? Our logistics experts are ready to help you find the right solution."
        image="/images/contact-hero.webp"
        imageAlt="Logistics operations center overlooking a shipping port"
        crumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Get In Touch
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy text-balance">
                We&apos;re here to help
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Reach out through the form or use the contact details below.
                Our team responds to every inquiry as quickly as possible.
              </p>

              <ul className="mt-10 space-y-6">
                {details.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-navy/5 text-navy">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block text-sm text-muted-foreground transition-colors hover:text-navy"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
