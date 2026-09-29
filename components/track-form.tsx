'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Search, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type TrackFormProps = {
  className?: string
  defaultValue?: string
  placeholder?: string
  autoFocus?: boolean
}

export function TrackForm({
  className,
  defaultValue = '',
  placeholder = 'Enter tracking number (e.g. VGL-8291047)',
  autoFocus = false,
}: TrackFormProps) {
  const router = useRouter()
  const [value, setValue] = useState(defaultValue)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    router.push(`/track?number=${encodeURIComponent(trimmed)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        'flex flex-col gap-2 rounded-xl bg-white p-2 shadow-lg sm:flex-row sm:items-center',
        className,
      )}
    >
      <div className="flex flex-1 items-center gap-3 px-3">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          aria-label="Tracking number"
          className="h-11 w-full bg-transparent text-sm text-navy outline-none placeholder:text-muted-foreground"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-gold px-6 text-sm font-semibold text-navy-dark transition-colors hover:bg-gold-dark"
      >
        Track Shipment
        <ArrowRight className="size-4" />
      </button>
    </form>
  )
}
