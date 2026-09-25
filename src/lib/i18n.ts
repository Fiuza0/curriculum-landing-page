export type Locale = 'en' | 'pt'

export const translations = {
  en: {
    // ─── Navigation ──────────────────────────────────────────────────────────
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      learning: 'Learning',
      contact: 'Contact',
      logo: '<Dev />',
    },

    // ─── Hero ────────────────────────────────────────────────────────────────
    hero: {
      greeting: "Hi, I'm",
      name: 'Rodrigo Oliveira',
      location: 'São Paulo, Brazil',
      roles: [
        'Software Engineer',
        'Full-Stack Developer',
        'Cloud Architect',
        'UI/UX Enthusiast',
        'Open Source Contributor',
      ],
      tagline:
        'Passionate about building elegant solutions to complex problems. Specializing in full-stack development, cloud architecture, and creating impactful user experiences.',
      viewWork: 'View My Work',
      getInTouch: 'Get In Touch',
      downloadCV: 'Download CV',
      downloadFilename: 'RodrigoOliveira_CV.pdf',
      available: 'Available',
    },

    // ─── Stats ───────────────────────────────────────────────────────────────
    stats: {
      projects: 'Projects Completed',
      users: 'Users Impacted',
      commits: 'GitHub Commits',
      coffee: 'Cups of Coffee',
    },

    // ─── About ───────────────────────────────────────────────────────────────
    about: {
      badge: 'About Me',
      title: 'Who I Am',
      description:
        "I'm a software engineer with a passion for creating innovative digital solutions. With experience spanning frontend and backend development, I thrive on turning complex challenges into elegant, user-friendly applications. My journey in tech has been driven by curiosity and a commitment to continuous learning.",
      frontend: {
        title: 'Frontend Development',
        description: 'React, Next.js, TypeScript, and modern UI frameworks',
      },
      backend: {
        title: 'Backend & Cloud',
        description: 'Node.js, Python, AWS, Docker, and microservices',
      },
      design: {
        title: 'UI/UX Design',
        description: 'User-centered design, accessibility, and responsive layouts',
      },
      performance: {
        title: 'Performance',
        description: 'Optimization, caching strategies, and scalable architecture',
      },
      learnMore: 'Learn more',
    },

    // ─── Skills ──────────────────────────────────────────────────────────────
    skills: {
      badge: 'Skills',
      title: 'Skills & Expertise',
      subtitle:
        'A comprehensive overview of my technical skills and proficiency levels across different domains.',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      toolsTitle: 'Tools & Platforms',
    },

    // ─── TechShowcase ────────────────────────────────────────────────────────
    techShowcase: {
      badge: 'Stack',
      title: 'My Tech',
      titleAccent: 'Universe',
      subtitle:
        'The full technology ecosystem I wield daily — from languages and frameworks to cloud infrastructure and data tools — each chosen to ship reliable, scalable software faster.',
      languages: 'Languages',
      frameworks: 'Frameworks',
      cloud: 'Cloud & Infra',
      data: 'Data & Testing',
    },

    // ─── Contributions ───────────────────────────────────────────────────────
    contributions: {
      badge: 'Activity',
      title: 'Open Source Activity',
      subtitle:
        'My contribution history across open source projects and personal repositories.',
      legendLess: 'Less',
      legendMore: 'More',
      inLastYear: 'contributions in the last year',
    },

    // ─── Experience ──────────────────────────────────────────────────────────
    experience: {
      badge: 'Career',
      title: 'Experience',
      subtitle: 'My professional journey building software that makes a difference.',
      current: 'Current',
      jobs: [
        {
          title: 'Senior Software Engineer',
          company: 'Tech Corp Inc.',
          location: 'São Paulo, SP',
          period: '2022 - Present',
          description:
            'Leading the frontend architecture for the core platform. Built micro-frontend infrastructure serving 2M+ users. Mentoring a team of 4 junior engineers.',
        },
        {
          title: 'Software Engineer',
          company: 'StartupXYZ',
          location: 'Remote',
          period: '2020 - 2022',
          description:
            'Full-stack development of a SaaS analytics platform. Reduced page load times by 60% and implemented real-time data pipelines.',
        },
        {
          title: 'Junior Software Engineer',
          company: 'Digital Agency Co.',
          location: 'São Paulo, SP',
          period: '2018 - 2020',
          description:
            'Developed responsive web applications for enterprise clients. Collaborated with design teams to deliver pixel-perfect implementations.',
        },
        {
          title: 'Software Engineering Intern',
          company: 'BigTech Ltd.',
          location: 'Remote',
          period: 'Summer 2017',
          description:
            'Contributed to the internal tooling team, building developer productivity tools and automated testing frameworks.',
        },
      ],
    },

    // ─── Projects ────────────────────────────────────────────────────────────
    projects: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      subtitle:
        "A selection of projects I've built that showcase my skills and passion for software development.",
      viewAll: 'View All Projects',
      showLess: 'Show Less',
      liveDemo: 'Live Demo',
      sourceCode: 'Source Code',
      featured: 'Featured',
      items: [
        {
          title: 'E-Commerce Platform',
          description:
            'A full-stack e-commerce solution with real-time inventory management, payment processing, and an admin dashboard. Handles 10K+ daily transactions.',
        },
        {
          title: 'AI Analytics Dashboard',
          description:
            'An intelligent analytics platform that leverages ML models to provide predictive insights and automated reporting for business metrics.',
        },
        {
          title: 'Real-Time Chat Application',
          description:
            'A scalable chat platform supporting WebSocket connections, file sharing, and end-to-end encryption. Built for enterprise communication.',
        },
        {
          title: 'DevOps Automation Toolkit',
          description:
            'A CLI toolkit that automates deployment pipelines, infrastructure provisioning, and monitoring setup for cloud-native applications.',
        },
        {
          title: 'Mobile Fitness Tracker',
          description:
            'A cross-platform mobile app with workout tracking, nutrition planning, and social features. 50K+ active users.',
        },
        {
          title: 'Open Source UI Component Library',
          description:
            'A comprehensive React component library with 50+ accessible components, theming support, and detailed documentation.',
        },
      ],
    },

    // ─── Testimonials ────────────────────────────────────────────────────────
    testimonials: {
      badge: 'Testimonials',
      title: 'What People Say',
      subtitle: "Feedback from colleagues and clients I've worked with.",
      items: [
        {
          quote:
            'An exceptional engineer who consistently delivers high-quality solutions. Their attention to detail and ability to translate complex requirements into elegant code is remarkable.',
          name: 'Sarah Johnson',
          role: 'CTO, TechVentures',
        },
        {
          quote:
            'Working together was a game-changer for our product. They brought both technical excellence and creative problem-solving that elevated our entire platform.',
          name: 'Michael Chen',
          role: 'Product Manager, InnovateCo',
        },
        {
          quote:
            "One of the most talented engineers I've had the pleasure of working with. Their code is clean, well-documented, and always ships on time.",
          name: 'Emily Rodriguez',
          role: 'Engineering Lead, DataFlow',
        },
      ],
    },

    // ─── Education ───────────────────────────────────────────────────────────
    education: {
      badge: 'Education',
      title: 'Education',
      subtitle: 'My academic background and professional certifications.',
      certificationsTitle: 'Certifications',
      items: [
        {
          degree: 'M.S. Computer Science',
          school: 'Stanford University',
          location: 'Stanford, CA',
          period: '2016 - 2018',
          gpa: '3.9 / 4.0',
          highlights: [
            'Specialization in Distributed Systems',
            'Research in Machine Learning Optimization',
            'Teaching Assistant for CS 229',
          ],
        },
        {
          degree: 'B.S. Computer Science',
          school: 'UC Berkeley',
          location: 'Berkeley, CA',
          period: '2012 - 2016',
          gpa: '3.8 / 4.0',
          highlights: [
            "Dean's List - All Semesters",
            'ACM Programming Team Captain',
            'Senior Capstone: AI-Powered Code Review Tool',
          ],
        },
      ],
      certifications: [
        'AWS Solutions Architect - Professional',
        'Google Cloud Professional Developer',
        'Certified Kubernetes Administrator (CKA)',
        'Meta Front-End Developer Certificate',
      ],
    },

    // ─── Learning ────────────────────────────────────────────────────────────
    learning: {
      badge: 'Growth',
      title: 'Always Learning',
      subtitle:
        "Continuous learning is at the heart of great engineering. Here's what I'm currently reading, watching, and exploring to stay sharp and grow every day.",
      progress: 'Progress',
      viewFullList: 'View Full List',
      items: [
        {
          title: 'System Design Interview',
          type: 'Book',
          author: 'Alex Xu',
          count: undefined,
        },
        {
          title: 'Building Microservices',
          type: 'Book',
          author: 'Sam Newman',
          count: undefined,
        },
        {
          title: 'Syntax FM Podcast',
          type: 'Podcast',
          author: 'Weekly episodes',
          count: '40 episodes listened',
        },
        {
          title: 'Fireship',
          type: 'Video',
          author: '100 Seconds of Code',
          count: 'Daily watcher',
        },
        {
          title: 'Rust Programming',
          type: 'Course',
          author: 'Noam Goren',
          count: undefined,
        },
        {
          title: 'Advanced TypeScript',
          type: 'Course',
          author: 'Matt Pocock',
          count: undefined,
        },
      ],
    },

    // ─── Blog ────────────────────────────────────────────────────────────────
    blog: {
      badge: 'Blog',
      title: 'Latest Articles',
      subtitle:
        'Sharing insights, tutorials, and lessons learned from building production-grade software.',
      readArticle: 'Read article',
      viewAll: 'View All Articles',
      items: [
        {
          title: 'Building Scalable Micro-Frontends with Next.js',
          excerpt:
            'A deep dive into architecting micro-frontend applications using Module Federation, Next.js, and TypeScript for enterprise-scale deployments.',
        },
        {
          title: 'Optimizing React Performance: Beyond React.memo',
          excerpt:
            'Advanced performance optimization techniques including virtualization, state colocation, and custom hooks that go beyond basic memoization strategies.',
        },
        {
          title: 'Designing Effective API Rate Limiting Strategies',
          excerpt:
            'How to implement token bucket, sliding window, and fixed window rate limiting algorithms with Redis and distributed systems.',
        },
      ],
    },

    // ─── Terminal ─────────────────────────────────────────────────────────────
    terminal: {
      badge: 'Interactive',
      title: 'Developer at a Glance',
      subtitle: 'Quick terminal-style overview of development setup and stats',
      content: {
        whoami: 'rodrigo — Senior Software Engineer',
        uptime: '5+ years building production software',
        quote: '"First, solve the problem. Then, write the code." — John Johnson',
        windowTitle: 'developer-stats',
      },
      stats: {
        lines: 'Lines of Code',
        projects: 'Projects Shipped',
        countries: 'Countries Reached',
        uptime: 'Uptime Record',
      },
    },

    // ─── CodePlayground ──────────────────────────────────────────────────────
    playground: {
      badge: 'Live Code',
      title: 'Code Snippets',
      subtitle: 'Real code from real projects',
      copy: 'Copy',
      copied: 'Copied!',
      stats: {
        snippets: '50+ Snippets',
        languages: '10 Languages',
        openSource: 'Open Source',
      },
    },

    // ─── CTA ─────────────────────────────────────────────────────────────────
    cta: {
      title1: 'Ready to Build Something',
      title2: 'Amazing Together?',
      subtitle:
        "Whether you need a full-stack application, a performance audit, or technical consulting — I'm here to help turn your vision into reality.",
      button1: "Let's Talk",
      button2: 'View My Work',
    },

    // ─── Contact ─────────────────────────────────────────────────────────────
    contact: {
      badge: 'Contact',
      title: 'Get In Touch',
      subtitle:
        "I'm always open to discussing new projects, opportunities, or partnerships. Let's build something amazing together!",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      sent: 'Message Sent!',
      sentMessage: "Thank you for reaching out. I'll get back to you soon!",
      followMe: 'Follow me',
      values: {
        email: 'rodrigo@oliveira.dev',
        phone: '+55 11 99999-9999',
        location: 'São Paulo, SP, Brasil',
      },
      placeholders: {
        name: 'Your name',
        email: 'your@email.com',
        subject: 'Project Discussion',
        message: 'Tell me about your project or opportunity...',
      },
    },

    // ─── Footer ──────────────────────────────────────────────────────────────
    footer: {
      name: 'Rodrigo Oliveira',
      brandDescription:
        'Software Engineer passionate about building elegant solutions to complex problems. Always open to new challenges and collaborations.',
      navigation: 'Navigation',
      social: 'Social',
      copyright: 'All rights reserved.',
      madeWith: 'Crafted with',
      madeWithAnd: 'and',
    },

    // ─── Command Palette ─────────────────────────────────────────────────────
    cmdk: {
      placeholder: 'Type a command or search...',
      navigation: 'Navigation',
      actions: 'Actions',
      noResults: 'No results found for',
      toggleDark: 'Toggle Dark Mode',
      downloadCV: 'Download CV',
      viewSource: 'View Source Code',
      scrollTop: 'Scroll to Top',
      navigate: 'navigate',
      select: 'select',
      close: 'close',
    },

    // ─── Radar Chart ─────────────────────────────────────────────────────────
    radar: {
      badge: 'Visualization',
      title: 'Skill Radar',
      subtitle:
        'A multi-dimensional view of my core competencies, visualized as an interactive radar chart that reveals proficiency across every key discipline.',
      breakdown: 'Skill Breakdown',
    },

    // ─── Now Playing ────────────────────────────────────────────────────────
    nowPlaying: {
      title: 'Now Playing',
    },

    // ─── Page Loader ────────────────────────────────────────────────────────
    pageLoader: {
      loading: 'Loading',
    },
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // PORTUGUÊS (BR)
  // ═══════════════════════════════════════════════════════════════════════════
  pt: {
    // ─── Navigation ──────────────────────────────────────────────────────────
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      learning: 'Aprendizado',
      contact: 'Contato',
      logo: '<Dev />',
    },

    // ─── Hero ────────────────────────────────────────────────────────────────
    hero: {
      greeting: 'Olá, eu sou',
      name: 'Rodrigo Oliveira',
      location: 'São Paulo, Brasil',
      roles: [
        'Engenheiro de Software',
        'Desenvolvedor Full-Stack',
        'Arquiteto Cloud',
        'Entusiasta UI/UX',
        'Contribuidor Open Source',
      ],
      tagline:
        'Apaixonado por construir soluções elegantes para problemas complexos. Especializado em desenvolvimento full-stack, arquitetura cloud e criação de experiências de usuário impactantes.',
      viewWork: 'Ver Meu Trabalho',
      getInTouch: 'Entre em Contato',
      downloadCV: 'Baixar CV',
      downloadFilename: 'RodrigoOliveira_CV.pdf',
      available: 'Disponível',
    },

    // ─── Stats ───────────────────────────────────────────────────────────────
    stats: {
      projects: 'Projetos Concluídos',
      users: 'Usuários Impactados',
      commits: 'Commits no GitHub',
      coffee: 'Xícaras de Café',
    },

    // ─── About ───────────────────────────────────────────────────────────────
    about: {
      badge: 'Sobre Mim',
      title: 'Quem Eu Sou',
      description:
        'Sou um engenheiro de software apaixonado por criar soluções digitais inovadoras. Com experiência em desenvolvimento frontend e backend, prospero ao transformar desafios complexos em aplicações elegantes e amigáveis. Minha trajetória na tecnologia é impulsionada pela curiosidade e pelo compromisso com o aprendizado contínuo.',
      frontend: {
        title: 'Desenvolvimento Frontend',
        description: 'React, Next.js, TypeScript e frameworks UI modernos',
      },
      backend: {
        title: 'Backend & Cloud',
        description: 'Node.js, Python, AWS, Docker e microsserviços',
      },
      design: {
        title: 'Design UI/UX',
        description: 'Design centrado no usuário, acessibilidade e layouts responsivos',
      },
      performance: {
        title: 'Performance',
        description: 'Otimização, estratégias de cache e arquitetura escalável',
      },
      learnMore: 'Saiba mais',
    },

    // ─── Skills ──────────────────────────────────────────────────────────────
    skills: {
      badge: 'Habilidades',
      title: 'Habilidades e Expertise',
      subtitle:
        'Uma visão completa das minhas habilidades técnicas e níveis de proficiência em diferentes domínios.',
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      toolsTitle: 'Ferramentas e Plataformas',
    },

    // ─── TechShowcase ────────────────────────────────────────────────────────
    techShowcase: {
      badge: 'Stack',
      title: 'Meu Tech',
      titleAccent: 'Universo',
      subtitle:
        'O ecossistema tecnológico completo que utilizo diariamente — de linguagens e frameworks até infraestrutura cloud e ferramentas de dados — cada um escolhido para entregar software confiável e escalável mais rápido.',
      languages: 'Linguagens',
      frameworks: 'Frameworks',
      cloud: 'Cloud e Infra',
      data: 'Dados e Testes',
    },

    // ─── Contributions ───────────────────────────────────────────────────────
    contributions: {
      badge: 'Atividade',
      title: 'Atividade Open Source',
      subtitle:
        'Meu histórico de contribuições em projetos open source e repositórios pessoais.',
      legendLess: 'Menos',
      legendMore: 'Mais',
      inLastYear: 'contribuições no último ano',
    },

    // ─── Experience ──────────────────────────────────────────────────────────
    experience: {
      badge: 'Carreira',
      title: 'Experiência',
      subtitle: 'Minha trajetória profissional construindo software que faz a diferença.',
      current: 'Atual',
      jobs: [
        {
          title: 'Engenheiro de Software Sênior',
          company: 'Tech Corp Inc.',
          location: 'São Paulo, SP',
          period: '2022 - Presente',
          description:
            'Liderando a arquitetura frontend da plataforma principal. Construí infraestrutura de micro-frontends atendendo mais de 2M de usuários. Mentoria de uma equipe de 4 engenheiros juniores.',
        },
        {
          title: 'Engenheiro de Software',
          company: 'StartupXYZ',
          location: 'Remoto',
          period: '2020 - 2022',
          description:
            'Desenvolvimento full-stack de uma plataforma SaaS de analytics. Reduzi tempos de carregamento em 60% e implementei pipelines de dados em tempo real.',
        },
        {
          title: 'Engenheiro de Software Júnior',
          company: 'Digital Agency Co.',
          location: 'São Paulo, SP',
          period: '2018 - 2020',
          description:
            'Desenvolvimento de aplicações web responsivas para clientes enterprise. Colaborei com equipes de design para entregar implementações pixel-perfect.',
        },
        {
          title: 'Estagiário em Engenharia de Software',
          company: 'BigTech Ltd.',
          location: 'Remoto',
          period: 'Verão 2017',
          description:
            'Contribuí para a equipe de ferramentas internas, construindo ferramentas de produtividade para desenvolvedores e frameworks de testes automatizados.',
        },
      ],
    },

    // ─── Projects ────────────────────────────────────────────────────────────
    projects: {
      badge: 'Portfólio',
      title: 'Projetos em Destaque',
      subtitle:
        'Uma seleção de projetos que construí, demonstrando minhas habilidades e paixão pelo desenvolvimento de software.',
      viewAll: 'Ver Todos os Projetos',
      showLess: 'Ver Menos',
      liveDemo: 'Demo ao Vivo',
      sourceCode: 'Código Fonte',
      featured: 'Destaque',
      items: [
        {
          title: 'Plataforma de E-Commerce',
          description:
            'Uma solução e-commerce full-stack com gerenciamento de inventário em tempo real, processamento de pagamentos e dashboard administrativo. Processa mais de 10K transações diárias.',
        },
        {
          title: 'Dashboard de Analytics com IA',
          description:
            'Uma plataforma inteligente de analytics que utiliza modelos de ML para fornecer insights preditivos e relatórios automatizados de métricas de negócio.',
        },
        {
          title: 'Aplicação de Chat em Tempo Real',
          description:
            'Uma plataforma de chat escalável com suporte a conexões WebSocket, compartilhamento de arquivos e criptografia ponta a ponta. Construída para comunicação enterprise.',
        },
        {
          title: 'Toolkit de Automação DevOps',
          description:
            'Um toolkit CLI que automatiza pipelines de deploy, provisionamento de infraestrutura e configuração de monitoramento para aplicações cloud-native.',
        },
        {
          title: 'App Fitness Móvel',
          description:
            'Um app móvel multiplataforma com rastreamento de treinos, planejamento nutricional e recursos sociais. Mais de 50K usuários ativos.',
        },
        {
          title: 'Biblioteca de Componentes UI Open Source',
          description:
            'Uma biblioteca React abrangente com mais de 50 componentes acessíveis, suporte a temas e documentação detalhada.',
        },
      ],
    },

    // ─── Testimonials ────────────────────────────────────────────────────────
    testimonials: {
      badge: 'Depoimentos',
      title: 'O Que Dizem Sobre Mim',
      subtitle: 'Feedback de colegas e clientes com quem trabalhei.',
      items: [
        {
          quote:
            'Um engenheiro excepcional que entrega consistentemente soluções de alta qualidade. Sua atenção aos detalhes e capacidade de traduzir requisitos complexos em código elegante é notável.',
          name: 'Sarah Johnson',
          role: 'CTO, TechVentures',
        },
        {
          quote:
            'Trabalhar juntos foi um divisor de águas para nosso produto. Trouxeram tanto excelência técnica quanto resolução criativa de problemas que elevaram toda a nossa plataforma.',
          name: 'Michael Chen',
          role: 'Gerente de Produto, InnovateCo',
        },
        {
          quote:
            'Um dos engenheiros mais talentosos com quem tive o prazer de trabalhar. Seu código é limpo, bem documentado e sempre entregue no prazo.',
          name: 'Emily Rodriguez',
          role: 'Líder de Engenharia, DataFlow',
        },
      ],
    },

    // ─── Education ───────────────────────────────────────────────────────────
    education: {
      badge: 'Educação',
      title: 'Educação',
      subtitle: 'Minha formação acadêmica e certificações profissionais.',
      certificationsTitle: 'Certificações',
      items: [
        {
          degree: 'Mestrado em Ciência da Computação',
          school: 'Stanford University',
          location: 'Stanford, CA',
          period: '2016 - 2018',
          gpa: '3.9 / 4.0',
          highlights: [
            'Especialização em Sistemas Distribuídos',
            'Pesquisa em Otimização de Machine Learning',
            'Monitor da disciplina CS 229',
          ],
        },
        {
          degree: 'Bacharelado em Ciência da Computação',
          school: 'UC Berkeley',
          location: 'Berkeley, CA',
          period: '2012 - 2016',
          gpa: '3.8 / 4.0',
          highlights: [
            'Lista de Honra — Todos os Semestres',
            'Capitão da Equipe de Programação ACM',
            'Projeto Final: Ferramenta de Code Review com IA',
          ],
        },
      ],
      certifications: [
        'AWS Solutions Architect — Professional',
        'Google Cloud Professional Developer',
        'Certified Kubernetes Administrator (CKA)',
        'Certificado Meta Front-End Developer',
      ],
    },

    // ─── Learning ────────────────────────────────────────────────────────────
    learning: {
      badge: 'Crescimento',
      title: 'Sempre Aprendendo',
      subtitle:
        'O aprendizado contínuo está no coração da grande engenharia. Aqui está o que estou lendo, assistindo e explorando para me manter afiado e crescer a cada dia.',
      progress: 'Progresso',
      viewFullList: 'Ver Lista Completa',
      items: [
        {
          title: 'System Design Interview',
          type: 'Livro',
          author: 'Alex Xu',
          count: undefined,
        },
        {
          title: 'Building Microservices',
          type: 'Livro',
          author: 'Sam Newman',
          count: undefined,
        },
        {
          title: 'Syntax FM Podcast',
          type: 'Podcast',
          author: 'Episódios semanais',
          count: '40 episódios ouvidos',
        },
        {
          title: 'Fireship',
          type: 'Vídeo',
          author: '100 Seconds of Code',
          count: 'Assistente diário',
        },
        {
          title: 'Rust Programming',
          type: 'Curso',
          author: 'Noam Goren',
          count: undefined,
        },
        {
          title: 'Advanced TypeScript',
          type: 'Curso',
          author: 'Matt Pocock',
          count: undefined,
        },
      ],
    },

    // ─── Blog ────────────────────────────────────────────────────────────────
    blog: {
      badge: 'Blog',
      title: 'Últimos Artigos',
      subtitle:
        'Compartilhando insights, tutoriais e lições aprendidas na construção de software de nível produtivo.',
      readArticle: 'Ler artigo',
      viewAll: 'Ver Todos os Artigos',
      items: [
        {
          title: 'Construindo Micro-Frontends Escaláveis com Next.js',
          excerpt:
            'Um mergulho profundo na arquitetura de aplicações micro-frontend usando Module Federation, Next.js e TypeScript para deploys em escala enterprise.',
        },
        {
          title: 'Otimizando Performance React: Além do React.memo',
          excerpt:
            'Técnicas avançadas de otimização de performance incluindo virtualização, colocalização de estado e hooks customizados que vão além de estratégias básicas de memoização.',
        },
        {
          title: 'Projetando Estratégias Eficazes de Rate Limiting para APIs',
          excerpt:
            'Como implementar algoritmos de rate limiting com token bucket, sliding window e fixed window usando Redis e sistemas distribuídos.',
        },
      ],
    },

    // ─── Terminal ─────────────────────────────────────────────────────────────
    terminal: {
      badge: 'Interativo',
      title: 'Dev num Relance',
      subtitle: 'Visão geral rápida no estilo terminal do setup e estatísticas de desenvolvimento',
      content: {
        whoami: 'rodrigo — Engenheiro de Software Sênior',
        uptime: '5+ anos construindo software de produção',
        quote: '"Primeiro, resolva o problema. Depois, escreva o código." — John Johnson',
        windowTitle: 'estatisticas-dev',
      },
      stats: {
        lines: 'Linhas de Código',
        projects: 'Projetos Entregues',
        countries: 'Países Alcançados',
        uptime: 'Recorde de Uptime',
      },
    },

    // ─── CodePlayground ──────────────────────────────────────────────────────
    playground: {
      badge: 'Código ao Vivo',
      title: 'Snippets de Código',
      subtitle: 'Código real de projetos reais',
      copy: 'Copiar',
      copied: 'Copiado!',
      stats: {
        snippets: '50+ Snippets',
        languages: '10 Linguagens',
        openSource: 'Open Source',
      },
    },

    // ─── CTA ─────────────────────────────────────────────────────────────────
    cta: {
      title1: 'Pronto para Construir Algo',
      title2: 'Incrível Juntos?',
      subtitle:
        'Seja uma aplicação full-stack, uma auditoria de performance ou consultoria técnica — estou aqui para ajudar a transformar sua visão em realidade.',
      button1: 'Vamos Conversar',
      button2: 'Ver Meu Trabalho',
    },

    // ─── Contact ─────────────────────────────────────────────────────────────
    contact: {
      badge: 'Contato',
      title: 'Entre em Contato',
      subtitle:
        'Estou sempre aberto a discutir novos projetos, oportunidades ou parcerias. Vamos construir algo incrível juntos!',
      email: 'E-mail',
      phone: 'Telefone',
      location: 'Localização',
      formName: 'Nome',
      formEmail: 'E-mail',
      formSubject: 'Assunto',
      formMessage: 'Mensagem',
      formSubmit: 'Enviar Mensagem',
      sent: 'Mensagem Enviada!',
      sentMessage: 'Obrigado pelo contato. Responderei em breve!',
      followMe: 'Me siga',
      values: {
        email: 'rodrigo@oliveira.dev',
        phone: '+55 11 99999-9999',
        location: 'São Paulo, SP, Brasil',
      },
      placeholders: {
        name: 'Seu nome',
        email: 'seu@email.com',
        subject: 'Discussão de Projeto',
        message: 'Conte-me sobre seu projeto ou oportunidade...',
      },
    },

    // ─── Footer ──────────────────────────────────────────────────────────────
    footer: {
      name: 'Rodrigo Oliveira',
      brandDescription:
        'Engenheiro de Software apaixonado por construir soluções elegantes para problemas complexos. Sempre aberto a novos desafios e colaborações.',
      navigation: 'Navegação',
      social: 'Social',
      copyright: 'Todos os direitos reservados.',
      madeWith: 'Feito com',
      madeWithAnd: 'e',
    },

    // ─── Command Palette ─────────────────────────────────────────────────────
    cmdk: {
      placeholder: 'Digite um comando ou pesquise...',
      navigation: 'Navegação',
      actions: 'Ações',
      noResults: 'Nenhum resultado encontrado para',
      toggleDark: 'Alternar Modo Escuro',
      downloadCV: 'Baixar CV',
      viewSource: 'Ver Código Fonte',
      scrollTop: 'Voltar ao Topo',
      navigate: 'navegar',
      select: 'selecionar',
      close: 'fechar',
    },

    // ─── Radar Chart ─────────────────────────────────────────────────────────
    radar: {
      badge: 'Visualização',
      title: 'Radar de Habilidades',
      subtitle:
        'Uma visão multidimensional das minhas competências centrais, visualizada como um radar interativo que revela a proficiência em cada disciplina-chave.',
      breakdown: 'Detalhamento',
    },

    // ─── Now Playing ────────────────────────────────────────────────────────
    nowPlaying: {
      title: 'Tocando Agora',
    },

    // ─── Page Loader ────────────────────────────────────────────────────────
    pageLoader: {
      loading: 'Carregando',
    },
  },
}

export type Translations = typeof translations.en
