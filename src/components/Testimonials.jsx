export default function Testimonials() {
  const testimonials = [
    {
      quote: 'CourtCloud cut our admin time in half and our courts are busier than ever.',
      name: 'Maya R.',
      role: 'Club Manager, Greenview Tennis',
      avatar: 'https://i.pravatar.cc/100?img=32'
    },
    {
      quote: 'Rainout credits and waitlists just work. Our players love the notifications.',
      name: 'Daniel K.',
      role: 'Parks & Rec, City of Brookdale',
      avatar: 'https://i.pravatar.cc/100?img=57'
    },
    {
      quote: 'We moved from spreadsheets to a real system in a weekend. Seamless.',
      name: 'Priya N.',
      role: 'Head Coach, Lakeside Courts',
      avatar: 'https://i.pravatar.cc/100?img=14'
    },
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Loved by facilities big and small</h2>
          <p className="mt-4 text-gray-600">Real stories from teams who switched to CourtCloud.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <blockquote className="text-gray-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt="" className="h-10 w-10 rounded-full" />
                <div>
                  <div className="font-medium text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
