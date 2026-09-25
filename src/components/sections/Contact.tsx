'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useConfetti } from '@/hooks/use-confetti'
import { useLanguage } from '@/hooks/use-language'

const contactInfo = [
  {
    icon: Mail,
    value: 'hello@yourname.dev', // ✏️ PLACEHOLDER: Replace with your email
    href: 'mailto:hello@yourname.dev',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10 group-hover:bg-emerald-500',
    labelKey: 'email' as const,
  },
  {
    icon: Phone,
    value: '+1 (555) 123-4567', // ✏️ PLACEHOLDER: Replace with your phone
    href: 'tel:+15551234567',
    color: 'text-teal-500',
    bg: 'bg-teal-500/10 group-hover:bg-teal-500',
    labelKey: 'phone' as const,
  },
  {
    icon: MapPin,
    value: 'San Francisco, CA', // ✏️ PLACEHOLDER: Replace with your location
    href: '#',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10 group-hover:bg-cyan-500',
    labelKey: 'location' as const,
  },
]

const socialLinks = [
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)
  const { fire: fireConfetti } = useConfetti()
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    fireConfetti()
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-20 sm:py-28 bg-muted/30 relative" ref={ref}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge variant="secondary" className="mb-4 px-4 py-1.5 bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
            {t.contact.badge}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.contact.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            {contactInfo.map((item) => (
              <a
                key={item.labelKey}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:shadow-lg hover:border-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center group-hover:text-white transition-all duration-300`}>
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:text-white transition-colors`} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">
                    {t.contact[item.labelKey]}
                  </p>
                  <p className="font-medium text-sm">{item.value}</p>
                </div>
              </a>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">{t.contact.followMe}</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card border border-border/50 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-teal-500 hover:text-white hover:border-transparent transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="border-border/50 hover:border-emerald-500/10 transition-all duration-300 backdrop-blur-sm bg-card/80 neon-glow conic-border">
              <CardContent className="p-6 sm:p-8 relative z-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                      {t.contact.sent}
                    </h3>
                    <p className="text-muted-foreground">
                      {t.contact.sentMessage}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">{t.contact.formName}</label>
                        <Input placeholder="John Doe" required className="focus-visible:ring-emerald-500/30" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">{t.contact.formEmail}</label>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="focus-visible:ring-emerald-500/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.contact.formSubject}</label>
                      <Input placeholder="Project Discussion" required className="focus-visible:ring-emerald-500/30" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">{t.contact.formMessage}</label>
                      <Textarea
                        placeholder="Tell me about your project or opportunity..."
                        rows={5}
                        required
                        className="focus-visible:ring-emerald-500/30"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white border-0 shadow-lg shadow-emerald-500/20">
                      <Send className="w-4 h-4" />
                      {t.contact.formSubmit}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
