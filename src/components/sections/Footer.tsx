'use client'

import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react'

const footerLinks = [
  {
    title: 'Navigation',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Social',
    links: [
      { label: 'GitHub', href: '#' },
      { label: 'LinkedIn', href: '#' },
      { label: 'Twitter', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
]

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-card relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-lg">&lt;Dev /&gt;</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed">
              Software Engineer passionate about building elegant solutions to
              complex problems. Always open to new challenges and collaborations.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Github, label: 'GitHub' },
                { Icon: Linkedin, label: 'LinkedIn' },
                { Icon: Twitter, label: 'Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="p-2 rounded-lg bg-muted hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={() => handleClick(link.href)}
                      className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}
