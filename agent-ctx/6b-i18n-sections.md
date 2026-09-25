# Task 6b - i18n Translation Update for Sections

## Task
Update Experience, Projects, Contact, Footer, Testimonials, Education, and Skills sections to use i18n translations.

## Work Completed

### 1. Experience.tsx
- Imported `useLanguage` hook
- Replaced hardcoded badge text with `t.experience.badge`
- Replaced title with `t.experience.title`
- Replaced subtitle with `t.experience.subtitle`
- Replaced "Current" badge with `t.experience.current`
- Replaced job title, company, location, period, description with `t.experience.jobs[index]` fields
- Kept tech arrays as-is (universal)

### 2. Projects.tsx
- Imported `useLanguage` hook
- Replaced "Portfolio" badge with `t.projects.badge`
- Replaced title with `t.projects.title`
- Replaced subtitle with `t.projects.subtitle`
- Replaced "Featured" badge with `t.projects.featured`
- Replaced "Live Demo" with `t.projects.liveDemo`
- Replaced "Source Code" with `t.projects.sourceCode`
- Replaced "View All Projects" with `t.projects.viewAll`
- Replaced "Show Less" with `t.projects.showLess`
- Replaced project titles/descriptions with `t.projects.items[index]`
- Kept tech arrays as-is

### 3. Contact.tsx
- Imported `useLanguage` hook
- Replaced badge with `t.contact.badge`
- Replaced title with `t.contact.title`
- Replaced subtitle with `t.contact.subtitle`
- Replaced contact info labels with `t.contact.email`, `t.contact.phone`, `t.contact.location`
- Replaced form labels with `t.contact.formName`, `t.contact.formEmail`, `t.contact.formSubject`, `t.contact.formMessage`
- Replaced submit button with `t.contact.formSubmit`
- Replaced success message with `t.contact.sent` and `t.contact.sentMessage`
- Replaced "Follow me" with `t.contact.followMe`

### 4. Footer.tsx
- Imported `useLanguage` hook
- Replaced brand description with `t.footer.brandDescription`
- Replaced "Navigation" with `t.footer.navigation`
- Replaced "Social" with `t.footer.social`
- Replaced copyright text with `t.footer.copyright` (kept dynamic year)
- Replaced "Crafted with" with `t.footer.madeWith` and `t.footer.madeWithAnd`
- Navigation link labels use `t.nav` keys

### 5. Testimonials.tsx
- Imported `useLanguage` hook
- Replaced badge with `t.testimonials.badge`
- Replaced title with `t.testimonials.title`
- Replaced subtitle with `t.testimonials.subtitle`
- Replaced quote, name, role with `t.testimonials.items[index]`

### 6. Education.tsx
- Imported `useLanguage` hook
- Replaced badge with `t.education.badge`
- Replaced title with `t.education.title`
- Replaced subtitle with `t.education.subtitle`
- Replaced "Certifications" heading with `t.education.certificationsTitle`
- Replaced degree, school, location, period, gpa, highlights with `t.education.items[index]`
- Replaced certification names with `t.education.certifications[index]`

### 7. Skills.tsx
- Imported `useLanguage` hook
- Replaced badge with `t.skills.badge`
- Replaced title with `t.skills.title`
- Replaced subtitle with `t.skills.subtitle`
- Replaced tab labels with `t.skills.frontend`, `t.skills.backend`, `t.skills.devops`
- Replaced "Tools & Platforms" with `t.skills.toolsTitle`

## Verification
- ESLint: clean, no errors
- Dev server: compiling and serving successfully, no errors
- No TypeScript compilation errors
