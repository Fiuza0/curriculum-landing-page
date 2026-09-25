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
      location: 'Salvador, BA, Brazil',
      roles: [
        'Software Engineer',
        'Python Developer',
        '.NET Developer',
        'VR/AR Researcher',
        'Data Automation Specialist',
      ],
      tagline:
        'Software Engineer & Researcher with a Bachelor\'s in Software Engineering from UCSAL. Experienced in .NET, Python, cloud infrastructure, and VR/AR research at Ford Motors. Currently automating pricing processes and leading operational teams.',
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
        "I'm a Software Engineer and Researcher graduated from the fifth class of Software Engineering at Universidade Católica de Salvador (UCSAL). I have solid knowledge of algorithms, software patterns and projects, logic, and programming languages such as Java, C#, Python, and R. In recent years, I've worked with .NET Framework, IT infrastructure, and most recently, Python automation and data optimization. I also have experience as a research scholar at Ford Motors, working with international teams on Virtual and Augmented Reality projects.",
      frontend: {
        title: 'Development & Automation',
        description: 'Python, C#, .NET, Pandas, NumPy, and process automation',
      },
      backend: {
        title: 'Infrastructure & Cloud',
        description: 'AWS, Kubernetes, PostgreSQL, Linux, and network security',
      },
      design: {
        title: 'VR/AR & Design',
        description: 'Unreal, Unity, VRED, Adobe Photoshop & Illustrator',
      },
      performance: {
        title: 'Research & Leadership',
        description: 'International teams, agile methodologies, and project management',
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
        'The full technology ecosystem I work with daily — from languages and frameworks to cloud infrastructure and data tools — each chosen to deliver reliable, scalable software.',
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
          title: 'Developer',
          company: 'Rede Central Variedades',
          location: 'Salvador, BA',
          period: '2025 - Present',
          description:
            'Developing solutions for pricing process automation in the retail sector, ensuring data quality and standardization. Applying exploratory data analysis, descriptive statistics, and data manipulation using Python and specialized libraries like Pandas and NumPy to build automated pipelines. Leading operational teams with Kanban and micro-management tools to increase productivity and mitigate risks.',
        },
        {
          title: 'Research Scholar',
          company: 'Ford Motors',
          location: 'Salvador, BA',
          period: '2022 - 2023',
          description:
            'Research in Virtual Reality and Augmented Reality for Engineering and Graphic Design, developing immersive interaction solutions for visualization and manipulation of hyper-realistic automotive models with VR/AR headsets. Worked with international teams including Ford USA, deepening software engineering, project management, and English language skills.',
        },
        {
          title: 'Junior .NET Developer',
          company: 'SINQIA',
          location: 'Salvador, BA',
          period: '2019 - 2021',
          description:
            'After completing internship, was hired as Junior .NET Developer. Worked alongside tech leads and software engineers to deepen knowledge of the Framework, PostgreSQL, and soft skills like clear communication of results, agile methodologies (sprints, kanban, task prioritization through graphs), and system architecture planning, creating new features and optimizations.',
        },
        {
          title: 'Software Engineering Intern',
          company: 'Atena Tecnologia (now SINQIA)',
          location: 'Salvador, BA',
          period: '2018 - 2019',
          description:
            'Initially as a developer, worked with .NET Framework and ASP.NET, implementing solutions for robust private social security systems. Developed skills in software projects, data structures, algorithms, and ubiquitous language. Later worked in IT infrastructure, enhancing knowledge of computer networks, information security, Windows Server, and systems management.',
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
          title: 'Pricing Automation Pipeline',
          description:
            'Automated pricing process system for the retail sector using Python, Pandas, and NumPy. Builds data pipelines that optimize pricing decisions and identify product behavior patterns with exploratory data analysis and descriptive statistics.',
        },
        {
          title: 'VR/AR Automotive Visualization',
          description:
            'Immersive virtual and augmented reality solutions for hyper-realistic automotive model visualization and manipulation at Ford Motors, using VR headsets for interactive design reviews with international teams.',
        },
        {
          title: 'Social Security Platform',
          description:
            'Robust private social security system built with .NET Framework and ASP.NET with PostgreSQL, implementing complex business rules, data structures, and algorithms for the Brazilian previdência social market.',
        },
        {
          title: 'IT Infrastructure Management',
          description:
            'Implementation and management of IT infrastructure including Windows Server, computer networks, information security protocols, and systems monitoring for enterprise social security platforms.',
        },
        {
          title: 'Data Quality & Standardization',
          description:
            'Python-based data quality assurance system ensuring standardization across large retail datasets. Applies statistical validation, anomaly detection, and automated correction pipelines.',
        },
        {
          title: 'Cybersecurity Research Tools',
          description:
            'Personal research projects in cybersecurity leveraging Linux environments, network analysis tools, and Python scripting as part of ongoing postgraduate studies at USP-ESALQ.',
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
      certificationsTitle: 'Certifications & Courses',
      items: [
        {
          degree: 'Postgraduate in Cybersecurity',
          school: 'USP - ESALQ',
          location: 'Piracicaba, SP',
          period: '2026 - Present',
          gpa: '',
          highlights: [
            'Advanced cybersecurity techniques and network defense',
            'Linux security and penetration testing',
            'Information security governance and compliance',
          ],
        },
        {
          degree: 'Bachelor in Software Engineering',
          school: 'Universidade Católica de Salvador (UCSAL)',
          location: 'Salvador, BA',
          period: '2018 - 2024',
          gpa: '',
          highlights: [
            '5th class of Software Engineering program',
            'Solid foundation in algorithms, patterns, and software projects',
            'Programming: Java, C#, Python, R',
          ],
        },
        {
          degree: 'Professional Course in Graphic Design',
          school: 'SAGA ART',
          location: 'Salvador, BA',
          period: '2016 - 2018',
          gpa: '',
          highlights: [
            'Adobe Photoshop and Illustrator',
            'Unreal Engine and Unity',
            'Visual communication and UI design principles',
          ],
        },
      ],
      certifications: [
        'Caelum — Statistics with R',
        'Caelum — PHP with Object-Oriented Programming',
        'Caelum — AWS with Lightsail, EC2, S3, VPC, RDS & DynamoDB',
        'ABED — BIM Management (Engineering Management)',
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
          title: 'Cybersecurity Postgraduate',
          type: 'Course',
          author: 'USP - ESALQ',
          count: 'In progress',
        },
        {
          title: 'AWS Cloud Architecture',
          type: 'Course',
          author: 'Caelum',
          count: undefined,
        },
        {
          title: 'Statistics with R',
          type: 'Course',
          author: 'Caelum',
          count: undefined,
        },
        {
          title: 'Python Automation',
          type: 'Video',
          author: 'Personal projects',
          count: 'Daily practice',
        },
        {
          title: 'Linux & Cybersecurity',
          type: 'Book',
          author: 'Fedora daily driver',
          count: undefined,
        },
        {
          title: 'Data Science with Pandas',
          type: 'Course',
          author: 'Applied at work',
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
          title: 'Automating Retail Pricing with Python and Pandas',
          excerpt:
            'A practical guide to building automated pricing pipelines using Python, Pandas, and NumPy for exploratory data analysis and pattern identification in retail product data.',
        },
        {
          title: 'VR/AR in Automotive Engineering: Lessons from Ford',
          excerpt:
            'Insights from working on Virtual and Augmented Reality projects at Ford Motors, developing immersive solutions for automotive design visualization with international teams.',
        },
        {
          title: 'From .NET to Python: A Developer\'s Journey',
          excerpt:
            'Reflecting on transitioning from .NET Framework and ASP.NET enterprise development to Python automation and data engineering, and the skills that bridge both worlds.',
        },
      ],
    },

    // ─── Terminal ─────────────────────────────────────────────────────────────
    terminal: {
      badge: 'Interactive',
      title: 'Developer at a Glance',
      subtitle: 'Quick terminal-style overview of development setup and stats',
      stats: {
        lines: 'Lines of Code',
        projects: 'Projects Shipped',
        countries: 'Countries Reached',
        uptime: 'Uptime Record',
      },
      content: {
        whoami: 'rodrigo — Software Engineer & Researcher',
        uptime: '7+ years building production software',
        quote: '"First, solve the problem. Then, write the code." — John Johnson',
        windowTitle: 'developer-stats',
      },
    },

    // ─── CodePlayground ──────────────────────────────────────────────────────
    playground: {
      badge: 'Live Code',
      title: 'Code Snippets',
      subtitle: 'Real code from real projects',
      stats: {
        snippets: '50+ Snippets',
        languages: '10 Languages',
        openSource: 'Open Source',
      },
      copy: 'Copy',
      copied: 'Copied!',
    },

    // ─── CTA ─────────────────────────────────────────────────────────────────
    cta: {
      title1: 'Ready to Build Something',
      title2: 'Amazing Together?',
      subtitle:
        "Whether you need a full-stack application, process automation, data pipelines, or technical consulting — I'm here to help turn your vision into reality.",
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
        email: 'fiuza0122@gmail.com',
        phone: '(71) 98108-6001',
        location: 'Salvador, BA, Brazil',
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
        'Software Engineer & Researcher passionate about building elegant solutions. Experienced in .NET, Python, cloud infrastructure, and VR/AR. Always open to new challenges and collaborations.',
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

    // ─── Now Playing ─────────────────────────────────────────────────────────
    nowPlaying: {
      title: 'Now Playing',
    },

    // ─── Page Loader ─────────────────────────────────────────────────────────
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
      location: 'Salvador, BA, Brasil',
      roles: [
        'Engenheiro de Software',
        'Desenvolvedor Python',
        'Desenvolvedor .NET',
        'Pesquisador VR/AR',
        'Especialista em Automação de Dados',
      ],
      tagline:
        'Engenheiro de Software & Pesquisador formado em Engenharia de Software pela UCSAL. Experiência em .NET, Python, infraestrutura cloud e pesquisa em VR/AR na Ford Motors. Atualmente automatizando processos de precificação e liderando equipes operacionais.',
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
        'Engenheiro de Software e Pesquisador formado na quinta turma de bacharelado em Engenharia de Software da Universidade Católica de Salvador (UCSAL). Possuo conhecimentos sólidos de algoritmos, padrões e projetos de software, lógica e linguagens de programação, tais como Java, C#, Python e R. Nos últimos anos, atuei no desenvolvimento de sistemas com .NET Framework, na implementação de infraestrutura de TI e, mais recentemente, na criação de otimizações e automações em Python. Além disso, possuo experiência de pesquisador bolsista na Ford Motors, atuando com times internacionais em projetos de Realidade Virtual e Aumentada.',
      frontend: {
        title: 'Desenvolvimento & Automação',
        description: 'Python, C#, .NET, Pandas, NumPy e automação de processos',
      },
      backend: {
        title: 'Infraestrutura & Cloud',
        description: 'AWS, Kubernetes, PostgreSQL, Linux e segurança de redes',
      },
      design: {
        title: 'VR/AR & Design',
        description: 'Unreal, Unity, VRED, Adobe Photoshop e Illustrator',
      },
      performance: {
        title: 'Pesquisa & Liderança',
        description: 'Times internacionais, metodologias ágeis e gestão de projetos',
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
          title: 'Desenvolvedor',
          company: 'Rede Central Variedades',
          location: 'Salvador, BA',
          period: '2025 - Presente',
          description:
            'Trabalhando com a criação de soluções envolvendo a automação de processos de precificação de produtos no setor do varejo, garantindo a qualidade e a padronização de dados. Aplica técnicas de análise exploratória de dados, estatística descritiva e manipulação de informações utilizando Python e bibliotecas especializadas, como Pandas e NumPy. Liderança de times operacionais com Kanban e microgerenciamento de processos.',
        },
        {
          title: 'Bolsista',
          company: 'Ford Motors',
          location: 'Salvador, BA',
          period: '2022 - 2023',
          description:
            'Bolsista em projeto de Realidade Virtual e Realidade Aumentada na área de Engenharia e Design Gráfico, com foco em desenvolver soluções de interação imersiva para a visualização e manipulação de modelos automobilísticos hiper-realistas com óculos de VR/AR. Aprofundou conhecimentos de engenharia de software, projetos, língua inglesa e trabalho em equipe com times internacionais como a equipe Ford dos EUA.',
        },
        {
          title: 'Desenvolvedor .NET Jr',
          company: 'SINQIA',
          location: 'Salvador, BA',
          period: '2019 - 2021',
          description:
            'Após conclusão do estágio, foi efetivado como desenvolvedor .NET Jr. Trabalhou em conjunto com tech leads e engenheiros de software, aprimorando conhecimentos do Framework, PostgreSQL e soft skills como comunicação clara de resultados, metodologias ágeis (sprints, kanban, priorização de tarefas através de grafos) e planejamento de arquitetura de sistemas.',
        },
        {
          title: 'Estagiário',
          company: 'Atena Tecnologia (atual SINQIA)',
          location: 'Salvador, BA',
          period: '2018 - 2019',
          description:
            'Como desenvolvedor, trabalhou com .NET Framework e ASP.NET, implementando soluções para sistemas robustos de previdência social privada. Desenvolveu habilidades em projetos de software, estruturas de dados, algoritmos e linguagem ubíqua. Posteriormente, trabalhou na seção de infraestrutura de TI, aprimorando conhecimentos de redes, segurança da informação, Windows Server e gestão de sistemas.',
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
          title: 'Pipeline de Automação de Precificação',
          description:
            'Sistema automatizado de processos de precificação para o setor varejista usando Python, Pandas e NumPy. Constrói pipelines de dados que otimizam decisões de precificação e identificam padrões no comportamento de produtos com análise exploratória e estatística descritiva.',
        },
        {
          title: 'Visualização Automobilística em VR/AR',
          description:
            'Soluções imersivas de realidade virtual e aumentada para visualização e manipulação de modelos automobilísticos hiper-realistas na Ford Motors, usando óculos VR para revisões interativas de design com times internacionais.',
        },
        {
          title: 'Plataforma de Previdência Social',
          description:
            'Sistema robusto de previdência social privada construído com .NET Framework e ASP.NET com PostgreSQL, implementando regras de negócio complexas, estruturas de dados e algoritmos para o mercado brasileiro.',
        },
        {
          title: 'Gestão de Infraestrutura de TI',
          description:
            'Implementação e gestão de infraestrutura de TI incluindo Windows Server, redes de computadores, protocolos de segurança da informação e monitoramento de sistemas para plataformas enterprise.',
        },
        {
          title: 'Qualidade e Padronização de Dados',
          description:
            'Sistema de garantia de qualidade de dados em Python assegurando padronização em grandes conjuntos de dados do varejo. Aplica validação estatística, detecção de anomalias e pipelines de correção automatizados.',
        },
        {
          title: 'Ferramentas de Pesquisa em Cibersegurança',
          description:
            'Projetos pessoais de pesquisa em cibersegurança utilizando ambientes Linux, ferramentas de análise de redes e scripts Python como parte dos estudos de pós-graduação na USP-ESALQ.',
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
      certificationsTitle: 'Certificações e Cursos',
      items: [
        {
          degree: 'Pós-Graduação em Cibersegurança',
          school: 'USP - ESALQ',
          location: 'Piracicaba, SP',
          period: '2026 - Presente',
          gpa: '',
          highlights: [
            'Técnicas avançadas de cibersegurança e defesa de redes',
            'Segurança Linux e testes de penetração',
            'Governança e conformidade em segurança da informação',
          ],
        },
        {
          degree: 'Bacharelado em Engenharia de Software',
          school: 'Universidade Católica de Salvador (UCSAL)',
          location: 'Salvador, BA',
          period: '2018 - 2024',
          gpa: '',
          highlights: [
            'Quinta turma do curso de Engenharia de Software',
            'Base sólida em algoritmos, padrões e projetos de software',
            'Programação: Java, C#, Python, R',
          ],
        },
        {
          degree: 'Curso Profissionalizante em Design Gráfico',
          school: 'SAGA ART',
          location: 'Salvador, BA',
          period: '2016 - 2018',
          gpa: '',
          highlights: [
            'Adobe Photoshop e Illustrator',
            'Unreal Engine e Unity',
            'Comunicação visual e princípios de design UI',
          ],
        },
      ],
      certifications: [
        'Caelum — Estatística com R',
        'Caelum — PHP com Orientação a Objetos',
        'Caelum — AWS com Lightsail, EC2, S3, VPC, RDS e DynamoDB',
        'ABED — Gestão em BIM (Gestão em Engenharia)',
      ],
    },

    // ─── Learning ────────────────────────────────────────────────────────────
    learning: {
      badge: 'Crescimento',
      title: 'Sempre Aprendendo',
      subtitle:
        'O aprendizado contínuo está no coração da grande engenharia. Aqui está o que estou estudando e explorando para me manter afiado e crescer a cada dia.',
      progress: 'Progresso',
      viewFullList: 'Ver Lista Completa',
      items: [
        {
          title: 'Pós-Graduação em Cibersegurança',
          type: 'Curso',
          author: 'USP - ESALQ',
          count: 'Em andamento',
        },
        {
          title: 'Arquitetura Cloud AWS',
          type: 'Curso',
          author: 'Caelum',
          count: undefined,
        },
        {
          title: 'Estatística com R',
          type: 'Curso',
          author: 'Caelum',
          count: undefined,
        },
        {
          title: 'Automação Python',
          type: 'Vídeo',
          author: 'Projetos pessoais',
          count: 'Prática diária',
        },
        {
          title: 'Linux e Cibersegurança',
          type: 'Livro',
          author: 'Fedora como SO principal',
          count: undefined,
        },
        {
          title: 'Data Science com Pandas',
          type: 'Curso',
          author: 'Aplicado no trabalho',
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
          title: 'Automatizando Precificação no Varejo com Python e Pandas',
          excerpt:
            'Um guia prático para construir pipelines automatizados de precificação usando Python, Pandas e NumPy para análise exploratória de dados e identificação de padrões em dados de produtos varejistas.',
        },
        {
          title: 'VR/AR na Engenharia Automobilística: Lições da Ford',
          excerpt:
            'Insights sobre projetos de Realidade Virtual e Aumentada na Ford Motors, desenvolvendo soluções imersivas para visualização de design automobilístico com times internacionais.',
        },
        {
          title: 'De .NET a Python: A Jornada de um Desenvolvedor',
          excerpt:
            'Reflexões sobre a transição do desenvolvimento enterprise com .NET Framework e ASP.NET para automação Python e engenharia de dados, e as habilidades que conectam ambos os mundos.',
        },
      ],
    },

    // ─── Terminal ─────────────────────────────────────────────────────────────
    terminal: {
      badge: 'Interativo',
      title: 'Dev num Relance',
      subtitle: 'Visão geral rápida no estilo terminal do setup e estatísticas de desenvolvimento',
      stats: {
        lines: 'Linhas de Código',
        projects: 'Projetos Entregues',
        countries: 'Países Alcançados',
        uptime: 'Recorde de Uptime',
      },
      content: {
        whoami: 'rodrigo — Engenheiro de Software & Pesquisador',
        uptime: '7+ anos construindo software de produção',
        quote: '"Primeiro, resolva o problema. Depois, escreva o código." — John Johnson',
        windowTitle: 'estatisticas-dev',
      },
    },

    // ─── CodePlayground ──────────────────────────────────────────────────────
    playground: {
      badge: 'Código ao Vivo',
      title: 'Snippets de Código',
      subtitle: 'Código real de projetos reais',
      stats: {
        snippets: '50+ Snippets',
        languages: '10 Linguagens',
        openSource: 'Open Source',
      },
      copy: 'Copiar',
      copied: 'Copiado!',
    },

    // ─── CTA ─────────────────────────────────────────────────────────────────
    cta: {
      title1: 'Pronto para Construir Algo',
      title2: 'Incrível Juntos?',
      subtitle:
        'Seja uma aplicação full-stack, automação de processos, pipelines de dados ou consultoria técnica — estou aqui para ajudar a transformar sua visão em realidade.',
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
        email: 'fiuza0122@gmail.com',
        phone: '(71) 98108-6001',
        location: 'Salvador, BA, Brasil',
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
        'Engenheiro de Software & Pesquisador apaixonado por construir soluções elegantes. Experiência em .NET, Python, infraestrutura cloud e VR/AR. Sempre aberto a novos desafios e colaborações.',
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

    // ─── Now Playing ─────────────────────────────────────────────────────────
    nowPlaying: {
      title: 'Tocando Agora',
    },

    // ─── Page Loader ─────────────────────────────────────────────────────────
    pageLoader: {
      loading: 'Carregando',
    },
  },
}

export type Translations = typeof translations.en
