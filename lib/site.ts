import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  Globe2,
  ShieldCheck,
  PackageCheck,
  type LucideIcon,
} from 'lucide-react'

export const siteConfig = {
  name: 'Vantage Logistics',
  tagline: 'Your trusted partner in global logistics. Safe. Secure. On time.',
  email: 'contact@vantagelogistics.com',
  phone: '+1 (740) 555-0199',
  address: '1234 Commerce Drive, Sunbury, OH 43074, USA',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Track Shipment', href: '/track' },
  { label: 'Contact', href: '/contact' },
]

export type Service = {
  slug: string
  title: string
  short: string
  description: string
  icon: LucideIcon
  image: string
}

export const services: Service[] = [
  {
    slug: 'air-freight',
    title: 'Air Freight',
    short: 'Fast and reliable air cargo for time-sensitive shipments.',
    description:
      'Priority air cargo services with global carrier partnerships, ensuring your time-sensitive shipments arrive quickly and safely anywhere in the world.',
    icon: Plane,
    image: '/images/air-freight.webp',
  },
  {
    slug: 'ocean-freight',
    title: 'Ocean Freight',
    short: 'Cost-effective sea freight for large and heavy cargo.',
    description:
      'Full container load (FCL) and less-than-container load (LCL) ocean shipping designed for large, heavy, and high-volume cargo at competitive rates.',
    icon: Ship,
    image: '/images/ocean-freight.webp',
  },
  {
    slug: 'domestic-transportation',
    title: 'Domestic Transportation',
    short: 'Efficient ground transport across regions and cities.',
    description:
      'Reliable trucking and ground distribution across regions and cities, with real-time tracking and flexible scheduling for every delivery.',
    icon: Truck,
    image: '/images/domestic-transport.webp',
  },
  {
    slug: 'warehousing',
    title: 'Warehousing',
    short: 'Secure storage and inventory management solutions.',
    description:
      'Modern, secure warehousing facilities with advanced inventory management, order fulfillment, and distribution capabilities.',
    icon: Warehouse,
    image: '/images/warehousing.webp',
  },
  {
    slug: 'cargo-forwarding',
    title: 'Cargo Forwarding',
    short: 'End-to-end logistics coordination and support.',
    description:
      'Comprehensive freight forwarding that coordinates every leg of your shipment, from origin pickup to final-mile delivery.',
    icon: Globe2,
    image: '/images/cargo-forwarding.webp',
  },
  {
    slug: 'customs-clearance',
    title: 'Customs Clearance',
    short: 'Smooth and compliant customs processing.',
    description:
      'Expert customs brokerage that keeps your cargo moving with accurate documentation, duty management, and full regulatory compliance.',
    icon: ShieldCheck,
    image: '/images/customs.webp',
  },
  {
    slug: 'ecommerce-fulfillment',
    title: 'E-commerce Fulfillment',
    short: 'Reliable fulfillment for your online business.',
    description:
      'Scalable pick, pack, and ship fulfillment integrated with your online store to delight customers with fast, accurate deliveries.',
    icon: PackageCheck,
    image: '/images/ecommerce.webp',
  },
]

export const stats = [
  { value: '150+', label: 'Countries' },
  { value: '500+', label: 'Global Partners' },
  { value: '99.7%', label: 'On-Time Delivery' },
]
