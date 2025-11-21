import { Calendar, CreditCard, Clock, Users, ShieldCheck, Smartphone } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Calendar,
      title: 'Real-time booking',
      desc: 'Live availability with buffers, blackout dates, and recurring slots.'
    },
    {
      icon: CreditCard,
      title: 'Integrated payments',
      desc: 'Card, Apple Pay, and invoicing with automated refunds for rainouts.'
    },
    {
      icon: Clock,
      title: 'Smart waitlists',
      desc: 'Auto-fill cancellations and notify players instantly by SMS/email.'
    },
    {
      icon: Users,
      title: 'Memberships',
      desc: 'Tiers, perks, and usage rules with member/non-member pricing.'
    },
    {
      icon: ShieldCheck,
      title: 'Admin controls',
      desc: 'Staff roles, audit logs, and permissioned court management.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-first',
      desc: 'PWA experience for players and staff on the go.'
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Everything you need to run your courts</h2>
          <p className="mt-4 text-gray-600">Designed with club managers and coaches, CourtCloud handles the busy work so you can focus on players.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-green-600" />
              <h3 className="mt-3 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
