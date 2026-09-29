import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { q, isId } from '@/lib/db'
import { STATUS_LABELS, fmt } from '@/lib/status'
import { siteConfig } from '@/lib/site'
import { Barcode, PrintButton } from '@/components/admin/receipt-tools'

function Party({ title, p }: { title: string; p: (string | null)[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase text-muted-foreground">{title}</h3>
      {p.filter(Boolean).map((l, i) => <p key={i} className="text-sm text-navy">{l}</p>)}
    </div>
  )
}

export default async function Receipt({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  if (!isId(id)) notFound()
  const [s] = await q('select * from shipments where id=$1', [id])
  if (!s) notFound()
  const rows: [string, string | null][] = [
    ['Tracking Number', s.tracking_number], ['Date', fmt(s.created_at)], ['Status', STATUS_LABELS[s.status]],
    ['Origin', s.origin], ['Destination', s.destination], ['Shipping Method', s.method],
    ['Weight', s.weight], ['Description', s.description], ['Estimated Delivery', s.eta],
  ]
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-4 flex justify-between print:hidden">
        <Link href={`/admin/shipments/${id}`} className="text-sm text-navy underline">← Back</Link>
        <PrintButton />
      </div>
      <div className="rounded-lg border border-navy/15 bg-white p-8 print:border-0 print:p-0">
        <div className="flex items-start justify-between border-b border-navy/15 pb-5">
          <div>
            <Image src="/vantage-logo.webp" alt="Vantage Logistics" width={160} height={87} />
            <p className="mt-2 text-xs text-muted-foreground">{siteConfig.address}<br />{siteConfig.email} · {siteConfig.phone}</p>
          </div>
          <h1 className="text-2xl font-bold tracking-wide text-navy">RECEIPT INVOICE</h1>
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
          {rows.filter(([, v]) => v).map(([k, v]) => (
            <div key={k}><dt className="text-xs uppercase text-muted-foreground">{k}</dt><dd className="text-sm font-medium text-navy">{v}</dd></div>
          ))}
        </dl>
        <div className="mt-8 grid grid-cols-2 gap-6 border-t border-navy/15 pt-6">
          <Party title="Sender" p={[s.sender_name, s.sender_phone, s.sender_email, s.sender_address]} />
          <Party title="Receiver" p={[s.receiver_name, s.receiver_phone, s.receiver_email, s.receiver_address]} />
        </div>
        <div className="mt-8 flex justify-center border-t border-navy/15 pt-6"><Barcode value={s.tracking_number} /></div>
      </div>
    </div>
  )
}
