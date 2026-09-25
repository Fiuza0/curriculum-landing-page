'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { type Locale, translations, type Translations } from '@/lib/i18n'

type LanguageContextType = {
  locale: Locale
  t: Translations
  toggleLanguage: () => void
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Default to Portuguese since the user is Brazilian
  const [locale, setLocale] = useState<Locale>('pt')

  const t = translations[locale]

  const toggleLanguage = useCallback(() => {
    setLocale((prev) => (prev === 'en' ? 'pt' : 'en'))
  }, [])

  return (
    <LanguageContext.Provider value={{ locale, t, toggleLanguage, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
