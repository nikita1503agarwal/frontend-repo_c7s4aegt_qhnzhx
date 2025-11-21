import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28" id="hero">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-gradient-to-tr from-green-400/30 via-emerald-400/30 to-lime-300/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs font-medium text-gray-700">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
              New: Automated court scheduling with waitlists
            </div>

            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-gray-900">
              Rent and manage tennis courts without the back-and-forth
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              CourtCloud is the all-in-one platform for clubs and municipalities to accept bookings, take payments, and automate schedules. Built for peak hours and rainy days alike.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-700">
                Start free trial
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                See how it works
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[0,1,2,3].map((i) => (
                  <img key={i} src={`https://i.pravatar.cc/40?img=${i+10}`} alt="" className="h-8 w-8 rounded-full ring-2 ring-white" />
                ))}
              </div>
              <span>Trusted by 120+ facilities worldwide</span>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-lg">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="rounded-2xl border border-black/10 bg-white p-4 shadow-xl">
                <img src="https://images.unsplash.com/photo-1512412046876-f386342eddb3?q=80&w=1600&auto=format&fit=crop" alt="Tennis court" className="rounded-lg object-cover h-72 w-full" />
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-md bg-gray-50 p-3 ring-1 ring-black/5">
                    <p className="font-semibold text-gray-900">Smart Availability</p>
                    <p className="text-gray-600 mt-1">Block maintenance, tournaments, and member-only hours automatically.</p>
                  </div>
                  <div className="rounded-md bg-gray-50 p-3 ring-1 ring-black/5">
                    <p className="font-semibold text-gray-900">Payments Built-in</p>
                    <p className="text-gray-600 mt-1">Accept cards and Apple Pay with instant payouts.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
