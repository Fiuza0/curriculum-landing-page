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
    name: "Open Source CLI Framework",
    description:
      "A powerful command-line framework for building developer tools with plugin support.",
    url: "https://github.com/yourname/cli-framework",
  },
  {
    name: "Real-Time Dashboard",
    description:
      "A performant analytics dashboard with live data streaming and interactive visualizations.",
    url: "https://github.com/yourname/realtime-dashboard",
  },
  {
    name: "API Gateway Service",
    description:
      "A lightweight API gateway with rate limiting, caching, and request transformation.",
    url: "https://github.com/yourname/api-gateway",
  },
];

export default function StructuredData({
  projects = defaultProjects,
}: StructuredDataProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Your Name",
    jobTitle: "Senior Software Engineer",
    url: "https://yourname.dev",
    image: "https://yourname.dev/avatar.png",
    sameAs: [
      "https://github.com/yourname",
      "https://linkedin.com/in/yourname",
      "https://twitter.com/yourname",
    ],
    knowsAbout: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "Go",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "System Design",
      "GraphQL",
      "REST APIs",
      "Microservices",
      "Web Performance",
      "Accessibility",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Acme Corp",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Technology",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://yourname.dev",
    name: "Your Name — Software Engineer",
    description:
      "Portfolio of a Senior Software Engineer specializing in full-stack development, cloud architecture, and open-source contributions.",
    author: {
      "@type": "Person",
      name: "Your Name",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://yourname.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Featured Projects",
    description: "A curated list of open-source and professional projects.",
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
          name: "Your Name",
        },
        programmingLanguage: "TypeScript",
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
