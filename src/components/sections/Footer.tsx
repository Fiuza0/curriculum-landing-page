'use client'

import { Code2, Github, Linkedin, Twitter, Heart } from 'lucide-react'
import { useLanguage } from '@/hooks/use-language'

const footerNavLinks = [
  { labelKey: 'about', href: '#about' },
  { labelKey: 'skills', href: '#skills' },
  { labelKey: 'experience', href: '#experience' },
  { labelKey: 'projects', href: '#projects' },
  { labelKey: 'education', href: '#education' },
  { labelKey: 'contact', href: '#contact' },
]

const footerSocialLinks = [
  { label: 'GitHub', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Blog', href: '#' },
]

export default function Footer() {
  const { t } = useLanguage()

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="border-t border-border bg-card/95 backdrop-blur-md relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      {/* Subtle mesh pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />

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
            <p className="text-muted-foreground text-sm max-w-md mb-6 leading-relaxed font-medium">
              {t.footer.brandDescription}
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

          {/* Navigation group */}
          <div>
            <h4 className="font-semibold text-sm mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2.5">
              {footerNavLinks.map((link) => (
                <li key={link.labelKey}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-emerald-500 transition-colors"
                  >
                    {t.nav[link.labelKey as keyof typeof t.nav]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social group */}
          <div>
            <h4 className="font-semibold text-sm mb-4">{t.footer.social}</h4>
            <ul className="space-y-2.5">
              {footerSocialLinks.map((link) => (
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
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/70">
            &copy; {new Date().getFullYear()} <span className="font-medium text-foreground/80">{t.footer.name}</span>. {t.footer.copyright}
          </p>
          <p className="text-sm text-muted-foreground/70 flex items-center gap-1.5">
            {t.footer.madeWith} <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500 breathe" /> {t.footer.madeWithAnd} <span className="inline-block hover:rotate-12 hover:scale-110 transition-transform duration-200">☕</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
