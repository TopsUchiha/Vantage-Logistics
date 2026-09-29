import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  className?: string
  /** Wrap the logo in a light plate so it stays legible on dark backgrounds. */
  onDark?: boolean
  priority?: boolean
}

export function Logo({ className, onDark = false, priority = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Vantage Logistics home"
      className={cn(
        'inline-flex items-center rounded-md',
        onDark && 'bg-white px-3 py-2 shadow-sm',
        className,
      )}
    >
      <Image
        src="/vantage-logo.webp"
        alt="Vantage Logistics"
        width={1207}
        height={654}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  )
}
