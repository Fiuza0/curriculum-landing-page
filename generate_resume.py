#!/usr/bin/env python3
"""Generate a professional software engineer resume PDF."""

from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.lib import colors
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable
)
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase.pdfmetrics import registerFontFamily

# ── Font Registration ──
pdfmetrics.registerFont(TTFont('FreeSerif', '/usr/share/fonts/truetype/freefont/FreeSerif.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Bold', '/usr/share/fonts/truetype/freefont/FreeSerifBold.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-Italic', '/usr/share/fonts/truetype/freefont/FreeSerifItalic.ttf'))
pdfmetrics.registerFont(TTFont('FreeSerif-BoldItalic', '/usr/share/fonts/truetype/freefont/FreeSerifBoldItalic.ttf'))
registerFontFamily('FreeSerif', normal='FreeSerif', bold='FreeSerif-Bold', italic='FreeSerif-Italic', boldItalic='FreeSerif-BoldItalic')

# ── Color Palette (Emerald/Teal) ──
ACCENT = colors.HexColor('#0D9488')       # Teal-600 - section headers, rules
ACCENT_DARK = colors.HexColor('#0F766E')  # Teal-700 - name
TEXT_PRIMARY = colors.HexColor('#1E293B')  # Slate-800 - body text
TEXT_MUTED = colors.HexColor('#64748B')    # Slate-500 - meta/contact info

# ── Styles ──
name_style = ParagraphStyle(
    'ResumeName', fontName='FreeSerif-Bold', fontSize=26,
    leading=30, alignment=TA_CENTER, spaceAfter=2,
    textColor=ACCENT_DARK
)
title_style = ParagraphStyle(
    'ResumeTitle', fontName='FreeSerif', fontSize=12,
    leading=15, alignment=TA_CENTER, spaceAfter=3,
    textColor=TEXT_PRIMARY
)
contact_style = ParagraphStyle(
    'ResumeContact', fontName='FreeSerif', fontSize=10,
    leading=14, alignment=TA_CENTER, textColor=TEXT_MUTED,
    spaceAfter=16
)
section_title_style = ParagraphStyle(
    'ResumeSectionTitle', fontName='FreeSerif-Bold', fontSize=13,
    leading=18, spaceBefore=18, spaceAfter=5,
    textColor=ACCENT
)
job_title_style = ParagraphStyle(
    'ResumeJobTitle', fontName='FreeSerif-Bold', fontSize=11,
    leading=15, spaceAfter=2, textColor=TEXT_PRIMARY
)
job_meta_style = ParagraphStyle(
    'ResumeJobMeta', fontName='FreeSerif-Italic', fontSize=10,
    leading=14, textColor=TEXT_MUTED, spaceAfter=5
)
bullet_style = ParagraphStyle(
    'ResumeBullet', fontName='FreeSerif', fontSize=10.5,
    leading=16, leftIndent=14, bulletIndent=0,
    spaceBefore=2, spaceAfter=2, textColor=TEXT_PRIMARY
)
body_style = ParagraphStyle(
    'ResumeBody', fontName='FreeSerif', fontSize=10.5,
    leading=16, spaceAfter=3, textColor=TEXT_PRIMARY
)
skills_label_style = ParagraphStyle(
    'SkillsLabel', fontName='FreeSerif-Bold', fontSize=10,
    leading=14, spaceAfter=1, textColor=TEXT_PRIMARY
)

# ── Helpers ──
def section_header(title):
    """Section title + thin rule separator."""
    return [
        Paragraph(title, section_title_style),
        HRFlowable(width='100%', thickness=0.8, color=ACCENT,
                    spaceBefore=0, spaceAfter=8),
    ]

def experience_entry(title, company, dates, bullets):
    """One work experience block."""
    elements = [
        Paragraph(f'{title}  —  {company}', job_title_style),
        Paragraph(dates, job_meta_style),
    ]
    for b in bullets:
        elements.append(Paragraph(f'\u2022 {b}', bullet_style))
    elements.append(Spacer(1, 6))
    return elements

def education_entry(degree, school, dates, details=None):
    """One education block."""
    elements = [
        Paragraph(f'{degree}', job_title_style),
        Paragraph(f'{school}  |  {dates}', job_meta_style),
    ]
    if details:
        elements.append(Paragraph(details, body_style))
    elements.append(Spacer(1, 6))
    return elements

def skills_row(categories):
    """Skills as compact label: value pairs."""
    elements = []
    for cat, vals in categories:
        elements.append(Paragraph(f'<b>{cat}:</b>  {vals}', body_style))
    return elements

# ── Build Document ──
output_path = '/home/z/my-project/public/resume.pdf'

doc = SimpleDocTemplate(
    output_path, pagesize=A4,
    leftMargin=1.5*cm, rightMargin=1.5*cm,
    topMargin=1.5*cm, bottomMargin=1.5*cm,
    title='Resume - Your Name',
    author='Z.ai', creator='Z.ai',
    subject='Senior Software Engineer Resume'
)

story = []

# ── Header ──
story.append(Paragraph('Your Name', name_style))
story.append(Paragraph('Senior Software Engineer', title_style))
story.append(Paragraph(
    'San Francisco, CA  |  hello@yourname.dev  |  yourname.dev',
    contact_style
))

# ── Summary ──
story.extend(section_header('PROFESSIONAL SUMMARY'))
story.append(Paragraph(
    'Full-stack software engineer with 5+ years of experience specializing in React, '
    'Next.js, TypeScript, and cloud architecture. Passionate about building elegant '
    'solutions to complex problems and creating impactful user experiences.',
    body_style
))

# ── Experience ──
story.extend(section_header('WORK EXPERIENCE'))
story.extend(experience_entry(
    'Senior Software Engineer', 'Tech Corp Inc.', '2022 \u2013 Present',
    [
        'Leading frontend architecture for core platform serving 2M+ users',
        'Built micro-frontend infrastructure reducing deployment time by 40%',
        'Mentoring team of 4 junior engineers and establishing code review standards',
    ]
))
story.extend(experience_entry(
    'Software Engineer', 'StartupXYZ', '2020 \u2013 2022',
    [
        'Full-stack development of SaaS analytics platform from ideation to launch',
        'Reduced page load times by 60% through performance optimization and code splitting',
        'Implemented real-time data pipelines with Redis and WebSocket for live dashboards',
    ]
))
story.extend(experience_entry(
    'Junior Software Engineer', 'Digital Agency Co.', '2018 \u2013 2020',
    [
        'Developed responsive web applications for enterprise clients across industries',
        'Delivered pixel-perfect implementations collaborating closely with design teams',
    ]
))

# ── Skills ──
story.extend(section_header('SKILLS'))
story.extend(skills_row([
    ('Languages', 'TypeScript, Python, Go, Rust, SQL'),
    ('Frontend', 'React, Next.js, Tailwind CSS, Framer Motion'),
    ('Backend', 'Node.js, FastAPI, GraphQL, PostgreSQL, Redis'),
    ('Cloud', 'AWS, Docker, Kubernetes, Terraform, CI/CD'),
]))

# ── Education ──
story.extend(section_header('EDUCATION'))
story.extend(education_entry(
    'B.S. Computer Science', 'University of Technology', '2018'
))

# ── Build ──
doc.build(story)

print(f'Resume PDF generated: {output_path}')
