export default function CTA() {
  return (
    <section id="cta" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-green-50 via-emerald-50 to-white" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-900 text-white p-8 sm:p-12 overflow-hidden relative">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-green-500/20 blur-2xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-emerald-500/20 blur-2xl" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Open your courts to more players</h2>
            <p className="mt-4 text-gray-300 max-w-2xl">Launch in days, not months. We handle the tech, you handle the game. Try it free—no credit card required.</p>
            <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3 max-w-xl">
              <input type="email" required placeholder="Work email" className="w-full rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-500" />
              <button className="inline-flex items-center justify-center rounded-md bg-green-500 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-green-400">Get started</button>
            </form>
            <p className="mt-3 text-xs text-gray-400">Free 14-day trial • No credit card • Cancel anytime</p>
          </div>
        </div>
      </div>
    </section>
  )
}
