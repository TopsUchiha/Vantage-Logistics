import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/site'
import { cn } from '@/lib/utils'

export function ServiceCard({
  service,
  className,
}: {
  service: Service
  className?: string
}) {
  const Icon = service.icon
  return (
    <Link
      href="/services"
      className={cn(
        'group flex flex-col rounded-xl border border-navy/10 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg',
        className,
      )}
    >
      <div className="flex size-12 items-center justify-center rounded-lg bg-navy/5 text-navy transition-colors group-hover:bg-gold group-hover:text-navy-dark">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 flex items-center justify-between text-lg font-semibold text-navy">
        {service.title}
        <ArrowRight className="size-4 -translate-x-1 text-gold opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {service.short}
      </p>
    </Link>
  )
}
