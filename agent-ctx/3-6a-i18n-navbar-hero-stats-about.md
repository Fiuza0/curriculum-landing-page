# Task 3-6a: Language Toggle + i18n for Navbar, Hero, Stats, About

## Summary
Added language toggle (PT/EN) to the Navbar and updated Hero, Stats, and About sections to use i18n translations from the `useLanguage` hook.

## Files Modified
1. **`/src/components/sections/Navbar.tsx`** — Added Globe icon language toggle button, i18n nav labels
2. **`/src/components/sections/Hero.tsx`** — Replaced all hardcoded text with `t.hero.*` translations
3. **`/src/components/sections/Stats.tsx`** — Replaced hardcoded stat labels with `t.stats.*` translations
4. **`/src/components/sections/About.tsx`** — Replaced all hardcoded text with `t.about.*` translations

## Changes Detail

### Navbar
- Imported `useLanguage` hook and `Globe` icon from lucide-react
- Replaced hardcoded `navLinks` array with `navLinkKeys` using typed keys (`about`, `skills`, etc.)
- Nav labels now use `t.nav[link.key]` for i18n
- **Desktop**: Added language toggle between ⌘K badge and dark mode toggle — shows `PT` or `EN` inside a rounded Badge with Globe icon, emerald accent when PT is active
- **Mobile header**: Globe icon button for quick toggle
- **Mobile menu**: Full-width language toggle button showing "PT — Português" or "EN — English"
- Toggle calls `toggleLanguage()` from useLanguage hook

### Hero
- Imported `useLanguage`, called `const { t } = useLanguage()` at top
- `t.hero.greeting` replaces "Hi, I'm"
- `t.hero.name` replaces "Your Name" (now shows "Rodrigo Oliveira")
- `t.hero.roles` replaces hardcoded roles array for typewriter
- `t.hero.tagline` replaces hardcoded description
- `t.hero.location` replaces "San Francisco, CA" (now "São Paulo, Brazil")
- `t.hero.viewWork` replaces "View My Work"
- `t.hero.getInTouch` replaces "Get In Touch"
- `t.hero.downloadCV` replaces "Download CV"
- `t.hero.downloadFilename` replaces hardcoded filename
- `t.hero.available` replaces "Available" status badge
- Avatar fallback changed from "YN" to "RO" (Rodrigo Oliveira initials)
- AvatarImage alt text uses `t.hero.name`

### Stats
- Imported `useLanguage`, called `const { t } = useLanguage()`
- Moved `stats` array inside component function so it can access `t`
- `t.stats.projects` replaces "Projects Completed"
- `t.stats.users` replaces "Users Impacted"
- `t.stats.commits` replaces "GitHub Commits"
- `t.stats.coffee` replaces "Cups of Coffee"
- Used `index` as key instead of `stat.label` (since labels now change with language)

### About
- Imported `useLanguage`, called `const { t } = useLanguage()`
- Moved `highlights` array inside component function
- `t.about.badge` replaces "About Me"
- `t.about.title` replaces "Who I Am"
- `t.about.description` replaces hardcoded paragraph
- `t.about.frontend.title/description` replaces hardcoded frontend card
- `t.about.backend.title/description` replaces hardcoded backend card
- `t.about.design.title/description` replaces hardcoded design card
- `t.about.performance.title/description` replaces hardcoded performance card
- `t.about.learnMore` replaces "Learn more"
- Used `index` as key instead of `item.title`

## QA
- Lint: clean (zero errors)
- Dev server: compiles successfully, zero runtime errors
- All components have 'use client' directive
- All components import useLanguage and call it at top of component function
- Photo file copy attempted but source doesn't exist yet (kept `/photo-placeholder.jpg` path)
