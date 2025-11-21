import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Product', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Stories', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-green-500 to-lime-500 ring-2 ring-green-600/30 shadow-sm" />
            <span className="font-semibold text-gray-900">CourtCloud</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="inline-flex items-center rounded-md bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-700 transition-colors">
              Start free trial
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden absolute inset-x-0 top-16 bg-white border-b border-black/5">
          <div className="px-4 py-3 flex items-center justify-between">
            <span className="font-semibold text-gray-900">Menu</span>
            <button onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="px-4 pb-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-md px-3 py-2 text-gray-700 hover:bg-gray-50">
                {item.label}
              </a>
            ))}
            <a href="#cta" onClick={() => setOpen(false)} className="rounded-md px-3 py-2 bg-green-600 text-white text-center font-semibold">
              Start free trial
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
