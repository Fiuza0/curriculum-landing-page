interface Project {
  name: string;
  description: string;
  url: string;
}

interface StructuredDataProps {
  projects?: Project[];
}

const defaultProjects: Project[] = [
  {
    name: "Pricing Automation Pipeline",
    description:
      "Automated pricing process system for the retail sector using Python, Pandas, and NumPy.",
    url: "https://github.com/rodrigo-oliveira/pricing-automation",
  },
  {
    name: "VR/AR Automotive Visualization",
    description:
      "Immersive VR/AR solutions for automotive model visualization at Ford Motors.",
    url: "https://github.com/rodrigo-oliveira/vr-ar-automotive",
  },
  {
    name: "Social Security Platform",
    description:
      "Robust private social security system built with .NET Framework and ASP.NET.",
    url: "https://github.com/rodrigo-oliveira/social-security-platform",
  },
];

export default function StructuredData({
  projects = defaultProjects,
}: StructuredDataProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rodrigo Lisboa Fiuza e Silva de Oliveira",
    jobTitle: "Software Engineer & Researcher",
    url: "https://rodrigo-oliveira.dev",
    image: "https://rodrigo-oliveira.dev/photo-placeholder.jpg",
    email: "fiuza0122@gmail.com",
    telephone: "+5571981086001",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Salvador",
      addressRegion: "BA",
      addressCountry: "BR",
    },
    sameAs: [
      "https://github.com/rodrigo-oliveira",
      "https://linkedin.com/in/rodrigo-oliveira",
    ],
    knowsAbout: [
      "C#",
      "Python",
      "Java",
      "R",
      ".NET Framework",
      "ASP.NET",
      "Pandas",
      "NumPy",
      "PostgreSQL",
      "AWS",
      "Kubernetes",
      "Linux",
      "Docker",
      "Virtual Reality",
      "Augmented Reality",
      "VRED",
      "Unreal Engine",
      "Unity",
      "Data Automation",
      "Process Automation",
      "Cybersecurity",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Rede Central Variedades",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Universidade Católica de Salvador",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://rodrigo-oliveira.dev",
    name: "Rodrigo Oliveira — Software Engineer & Researcher",
    description:
      "Portfolio of a Software Engineer & Researcher specializing in .NET, Python, data automation, cloud infrastructure, and VR/AR research.",
    author: {
      "@type": "Person",
      name: "Rodrigo Oliveira",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rodrigo-oliveira.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Projects",
    description: "A curated list of professional projects.",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareSourceCode",
        name: project.name,
        description: project.description,
        url: project.url,
        author: {
          "@type": "Person",
          name: "Rodrigo Oliveira",
        },
        programmingLanguage: "Python",
      },
    })),
  };

  const jsonLd = JSON.stringify(
    [personSchema, websiteSchema, projectListSchema],
    null,
    2
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLd }}
    />
  );
}
