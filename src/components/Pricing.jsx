export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$39',
      period: '/mo',
      highlight: false,
      features: [
        'Up to 3 courts',
        'Online booking',
        'Email support',
      ],
    },
    {
      name: 'Growth',
      price: '$99',
      period: '/mo',
      highlight: true,
      features: [
        'Up to 10 courts',
        'Payments + payouts',
        'SMS notifications',
        'Memberships',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      highlight: false,
      features: [
        'Unlimited courts',
        'Dedicated support',
        'SLA & SSO',
      ],
    },
  ]

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple, predictable pricing</h2>
          <p className="mt-4 text-gray-600">No setup fees. Cancel anytime. 30-day money-back guarantee.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border ${plan.highlight ? 'border-green-600 shadow-lg' : 'border-black/5 shadow-sm'} bg-white p-6`}>
              <div className="flex items-baseline gap-2">
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                {plan.highlight && (
                  <span className="text-xs font-medium text-green-700 bg-green-100 rounded-full px-2 py-0.5">Popular</span>
                )}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-600">{plan.period}</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-green-600" />
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 block w-full text-center rounded-md px-4 py-2 font-semibold ${plan.highlight ? 'bg-green-600 text-white hover:bg-green-700' : 'ring-1 ring-inset ring-gray-300 text-gray-900 hover:bg-gray-50'}`}>
                {plan.name === 'Enterprise' ? 'Talk to sales' : 'Start free trial'}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
