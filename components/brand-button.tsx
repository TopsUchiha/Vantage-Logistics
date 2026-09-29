import Link from 'next/link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const brandButton = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        gold: 'bg-gold text-navy-dark hover:bg-gold-dark shadow-sm hover:shadow-md',
        navy: 'bg-navy text-white hover:bg-navy-light shadow-sm hover:shadow-md',
        outline:
          'border border-navy/20 bg-white text-navy hover:border-navy hover:bg-navy hover:text-white',
        outlineLight:
          'border border-white/40 bg-transparent text-white hover:bg-white hover:text-navy',
        ghost: 'text-navy hover:bg-navy/5',
      },
      size: {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-sm',
        lg: 'h-12 px-7 text-base',
      },
    },
    defaultVariants: { variant: 'gold', size: 'md' },
  },
)

type BrandButtonProps = VariantProps<typeof brandButton> & {
  href?: string
  className?: string
  children: React.ReactNode
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

export function BrandButton({
  href,
  variant,
  size,
  className,
  children,
  ...props
}: BrandButtonProps) {
  const classes = cn(brandButton({ variant, size }), className)

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
