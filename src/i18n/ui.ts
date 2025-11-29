export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'es';

export const ui = {
  es: {
    // ### NAVBAR ###
    'nav.languages': 'Idiomas',
    'nav.projects': 'Proyectos',
    'nav.skills': 'Habilidades',
    'nav.education': 'Educación',

    // ### HERO ###
    'hero.student': 'Estudiante de Ciencias de la Computación en',
    'hero.unam.full': 'Universidad Nacional Autónoma de México',
    'hero.desc.p1': 'Estudiante de ciencias de la computación interesado en los',
    'hero.desc.os': 'Sistemas Operativos',
    'hero.desc.and': 'y',
    'hero.desc.web': 'el desarrollo web',
    'hero.desc.p2':
      'Busco usar las tecnologías para construir soluciones de software optimizadas y mantenibles',

    // ### PROJECTS ###
    'projects.title': 'Proyectos',

    // FIXIBAR PROJECT
    'fixibar.subtitle': 'Hyprland Personalizado',
    'fixibar.desc':
      'Configuración altamente personalizada para el compositor <strong>Hyprland</strong> inspirada en mi gato “Fixi”. Esta configuración prioriza el monitoreo de bajo nivel, la estética, funcionalidad y la productividad.',
    'fixibar.li1':
      'Implementé mecanismos de <strong>sondeo asíncrono</strong> en Python para evitar bloqueos de I/O.',
    'fixibar.li2':
      'Desarrollé software personalizado para la <strong>automatización</strong> de tareas del sistema.',
    'fixibar.li3':
      'Diseñé una <strong>arquitectura modular</strong> para facilitar la adición de widgets a mi propia barra de estado.',
    'fixibar.li4':
      'Usé <strong>GTK</strong> para desarrollar aplicaciones y widgets de escritorio personalizados en Linux.',

    // BORDER DETECTION PROJECT
    'proj.border.title': 'Detección de Bordes',
    'proj.border.subtitle': 'Software en Java para detección de bordes en imágenes',
    'proj.border.desc':
      'Software desarrollado en <strong>Java</strong> para procesamiento digital de imágenes utilizando el Operador Sobel y concurrencia.',
    'proj.border.li3':
      'Diseñado con <strong>arquitectura MVC</strong> y <strong>patrones de diseño</strong> para mayor modularidad.',
    'proj.border.altOriginal': 'Ejemplo original',
    'proj.border.altResult': 'Resultado del operador Sobel',

    // LABREMO PROJECT
    'proj.labremo.title': 'Laboratorio Remoto',
    'proj.labremo.subtitle': 'Aplicación web para gestión de laboratorios remotos',
    'proj.labremo.wip': 'En desarrollo',
    'proj.labremo.desc':
      'Participé en el desarrollo de una aplicación web integral que facilita el acceso remoto para programación, simulación y experimentación de circuitos programables para el instituto <strong>IIMAS</strong>,',
    'proj.labremo.li1':
      'Trabajé con diseñadores UI/UX para desarrollar una aplicación en <strong>React</strong>.',
    'proj.labremo.li2':
      'Colaboré con el equipo de backend usando <strong>Django</strong> para crear APIs RESTful.',

    // PORTFOLIO PROJECT
    'proj.portfolio.title': 'Portafolio Web',
    'proj.portfolio.subtitle': 'Mi portafolio personal',
    'proj.portfolio.desc':
      'Desarrollé un sitio web personal <strong>ligero</strong> y de <strong>alto rendimiento</strong> desde cero utilizando la arquitectura de islas de <strong>Astro</strong>.',
    'proj.portfolio.li1':
      'Aproveché la <strong>generación de sitios estáticos (SSG)</strong> para entregar HTML prerenderizado, asegurando una huella mínima y <strong>tiempos de carga casi instantáneos</strong>.',
    'proj.portfolio.li2':
      'Construí componentes reutilizables con <strong>TypeScript</strong> y <strong>Tailwind</strong> para garantizar consistencia, mantenibilidad y extensionabilidad.',

    // ### EDUCATION ###
    'edu.title': 'Educación',

    // bs computer science
    'edu.bs.degree': 'Licenciatura en Ciencias de la Computación',
    'edu.bs.status': 'En curso',

    // hfc
    'edu.hfc.title': 'Cuarta generación de HFC',
    'edu.hfc.role': 'Miembro de',
    'edu.hfc.time': '2025 - presente',
    'edu.hfc.desc':
      'Miembro activo de una comunidad de hacking ético enfocada en investigación de ciberseguridad, CTFs y prácticas de divulgación responsable.',

    // android
    'edu.android.title': 'Introducción al Desarrollo Android',
    'edu.android.desc':
      'Curso enfocado en aprender las bases del desarrollo Android usando Kotlin y Android Studio.',
    'edu.cert.verify': 'Verificación de certificado:',
    'edu.cert.link': 'Ir al validador',
    'edu.cert.entity': 'Entidad:',
    'edu.cert.folio': 'Folio:',

    // technician
    'edu.tech.degree': 'Técnico Especialista en Computación — Titulado',

    // ### SKILLS ###
    'skills.title': 'Tecnologías y perfil',
    'skills.core': 'Intereses principales',
    'skills.core.os': 'Sistemas operativos y automatización',
    'skills.core.frontend': 'Frontend moderno y UI/UX',
    'skills.core.mobile': 'Desarrollo móvil (Android)',
    'skills.core.cyber': 'Ciberseguridad y CTFs',
    'skills.core.desktop': 'Aplicaciones de escritorio',
    'skills.core.cp': 'Programación competitiva',

    'skills.tools': 'Herramientas',
    'skills.tools.env': 'Entorno',
    'skills.tools.web': 'Web',
    'skills.tools.other': 'Otros',

    'skills.soft': 'Habilidades blandas',
    'skills.soft.collab': 'Colaboración',
    'skills.soft.mentor': 'Mentoría',
    'skills.soft.lead': 'Liderazgo',
    'skills.soft.problem': 'Resolución de problemas',
    'skills.soft.persist': 'Persistencia',
    'skills.soft.learning': 'Aprendizaje continuo',

    'skills.lang': 'Idiomas',
    'skills.lang.es': 'Español',
    'skills.lang.en': 'Inglés',
    'skills.lang.fr': 'Francés',
    'skills.lang.native': 'Nativo',
    'skills.lang.inter': 'Intermedio',
    'skills.lang.conv': 'Conversacional',

    // ### FOOTER ###
    'footer.goStart': 'Volver al inicio',
    'footer.designed': 'Diseñado y hecho por',
    'footer.quote': 'Si he visto más lejos es porque estoy sobre los hombros de gigantes.',
    'footer.cite': 'Carta a Robert Hooke',
    'footer.logo': 'Logo de FixiArch gracias a',
    'footer.cv': 'Ver CV',
    'footer.email': 'Envíame un correo',
    'footer.github': 'GitHub',
    'footer.linkedin': 'LinkedIn',
  },

  // ------------------------------------------------------------------------
  // --------------------------- ENGLISH VERSION -----------------------------
  // ------------------------------------------------------------------------

  en: {
    // ### NAVBAR ###
    'nav.languages': 'Languages',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',

    // ### HERO ###
    'hero.student': 'Computer Science Student at',
    'hero.unam.full': 'National Autonomous University of Mexico',
    'hero.desc.p1': 'A computer science student interested in',
    'hero.desc.os': 'operating systems',
    'hero.desc.and': 'and',
    'hero.desc.web': 'web development',
    'hero.desc.p2':
      'I aim to leverage technology to build optimized and maintainable software solutions',

    // ### PROJECTS ###
    'projects.title': 'Projects',

    // FIXIBAR
    'fixibar.subtitle': 'Fully Riced Hyprland',
    'fixibar.desc':
      'A highly customized configuration for the <strong>Hyprland</strong> compositor, inspired by my cat “Fixi”. This setup prioritizes low-level system monitoring, aesthetics, functionality, and productivity.',
    'fixibar.li1':
      'Implemented <strong>asynchronous polling</strong> mechanisms in Python to prevent I/O blocking.',
    'fixibar.li2':
      'Developed custom software for <strong>system task automation</strong>.',
    'fixibar.li3':
      'Designed a <strong>modular architecture</strong> to simplify the addition of custom status bar widgets.',
    'fixibar.li4':
      'Utilized <strong>GTK</strong> to create custom desktop applications and widgets with a focus on UI/UX.',

    // BORDER DETECTION
    'proj.border.title': 'Edge Detection', // "Edge detection" es más común que "Border" en Computer Vision
    'proj.border.subtitle': 'Java software for image edge detection',
    'proj.border.desc':
      'Software developed in <strong>Java</strong> for digital image processing utilizing concurrency and the Sobel Operator.',
    'proj.border.li1': 'Implemented the <strong>Sobel Operator</strong> for edge detection.', // Ojo: Esta llave no estaba en tu español, la dejé por consistencia si la usas
    'proj.border.li2': 'Uses parallel processing with <strong>Java Threads</strong>.', // Igual aquí
    'proj.border.li3':
      'Designed using <strong>MVC architecture</strong> and <strong>design patterns</strong> to ensure modularity.',
    'proj.border.altOriginal': 'Original sample',
    'proj.border.altResult': 'Sobel operator result',

    // LABREMO
    'proj.labremo.title': 'Remote Laboratory',
    'proj.labremo.subtitle': 'Web application for remote lab management',
    'proj.labremo.wip': 'In Development',
    'proj.labremo.desc':
      'Contributed to the development of a comprehensive web platform for the <strong>IIMAS</strong> institute, facilitating remote access for programming, simulation, and experimentation with programmable circuits.',
    'proj.labremo.li1':
      'Collaborated with UI/UX designers to build the frontend in <strong>React</strong>.',
    'proj.labremo.li2':
      'Worked with the backend team using <strong>Django</strong> to develop RESTful APIs.',

    // PORTFOLIO
    'proj.portfolio.title': 'Portfolio Website',
    'proj.portfolio.subtitle': 'My personal portfolio',
    'proj.portfolio.desc':
      'Developed a <strong>lightweight</strong> and <strong>high-performance</strong> personal website from scratch using <strong>Astro</strong>’s island architecture.',
    'proj.portfolio.li1':
      'Leveraged <strong>Static Site Generation (SSG)</strong> to deliver pre-rendered HTML, ensuring a minimal footprint and <strong>near-instant load times</strong>.',
    'proj.portfolio.li2':
      'Built reusable components with <strong>TypeScript</strong> and <strong>Tailwind</strong> to guarantee consistency, maintainability, and extensibility.',

    // ### EDUCATION ###
    'edu.title': 'Education',

    'edu.bs.degree': 'B.S. in Computer Science',
    'edu.bs.status': 'In progress',

    'edu.hfc.title': 'Fourth HFC Generation',
    'edu.hfc.role': 'Member of the',
    'edu.hfc.time': '2025 – Present',
    'edu.hfc.desc':
      'Active member of an ethical hacking community focused on cybersecurity research, CTFs, and responsible disclosure practices.',

    'edu.android.title': 'Introduction to Android Development',
    'edu.android.desc':
      'Course focused on the fundamentals of Android development using Kotlin and Android Studio.',
    'edu.cert.verify': 'Certificate verification:',
    'edu.cert.link': 'Validate certificate',
    'edu.cert.entity': 'Issued by:',
    'edu.cert.folio': 'ID/Folio:',

    'edu.tech.degree': 'Computer Specialist Technician — Certified',

    // ### SKILLS ###
    'skills.title': 'Tech Stack & Profile',
    'skills.core': 'Core Interests',
    'skills.core.os': 'Operating Systems & Automation',
    'skills.core.frontend': 'Modern Frontend & UI/UX',
    'skills.core.mobile': 'Mobile Development (Android)',
    'skills.core.cyber': 'Cybersecurity & CTFs',
    'skills.core.desktop': 'Desktop Applications',
    'skills.core.cp': 'Competitive Programming',

    'skills.tools': 'Toolbox',
    'skills.tools.env': 'Environment',
    'skills.tools.web': 'Web',
    'skills.tools.other': 'Other',

    'skills.soft': 'Soft Skills',
    'skills.soft.collab': 'Collaboration',
    'skills.soft.mentor': 'Mentorship',
    'skills.soft.lead': 'Leadership',
    'skills.soft.problem': 'Problem-solving',
    'skills.soft.persist': 'Perseverance',
    'skills.soft.learning': 'Continuous Learning',

    'skills.lang': 'Languages',
    'skills.lang.es': 'Spanish',
    'skills.lang.en': 'English',
    'skills.lang.fr': 'French',
    'skills.lang.native': 'Native',
    'skills.lang.inter': 'Intermediate',
    'skills.lang.conv': 'Conversational',

    // ### FOOTER ###
    'footer.goStart': 'Back to top',
    'footer.designed': 'Designed & built by',
    'footer.quote': 'If I have seen further it is by standing on the shoulders of Giants.',
    'footer.cite': 'Letter to Robert Hooke',
    'footer.logo': 'FixiArch logo thanks to',
    'footer.cv': 'View CV',
    'footer.email': 'Email me',
    'footer.github': 'GitHub',
    'footer.linkedin': 'LinkedIn',
  },
} as const;
