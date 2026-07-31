export interface ProjectStack {
  category: string;
  items: string[];
}

export interface ProjectArchitecture {
  pattern: string;
  description: string;
  components: { name: string; role: string }[];
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  overview: string;
  techs: string[];
  stack: ProjectStack[];
  architecture: ProjectArchitecture;
  features: string[];
  image: string;
  hint: string;
  link: string;
  repo: string;
}

export const projects: Project[] = [
  {
    slug: 'technova-ecommerce',
    title: 'TechNova E-commerce',
    description:
      'Plataforma de comercio electrónico de alto rendimiento desarrollada con NestJS y NextJS, optimizada con asistencia de IA mediante Cursor para una experiencia de usuario fluida.',
    overview:
      'TechNova es una plataforma e-commerce fullstack diseñada para manejar catálogos extensos, checkout seguro y gestión de inventario en tiempo real. El frontend consume una API REST tipada mientras el backend aplica reglas de negocio y validaciones de stock.',
    techs: ['Nestjs', 'Next', 'Cursor'],
    stack: [
      { category: 'Frontend', items: ['Next.js 14', 'React', 'TypeScript', 'Tailwind CSS'] },
      { category: 'Backend', items: ['NestJS', 'TypeORM', 'JWT Auth', 'Swagger'] },
      { category: 'Base de datos', items: ['PostgreSQL', 'Redis (cache)'] },
      { category: 'DevOps & IA', items: ['Docker', 'Cursor AI', 'GitHub Actions'] },
    ],
    architecture: {
      pattern: 'Monolito modular + BFF',
      description:
        'Arquitectura en capas con Next.js como BFF (Backend for Frontend) que consume la API NestJS. Los módulos de dominio (productos, pedidos, usuarios) están desacoplados mediante inyección de dependencias.',
      components: [
        { name: 'Next.js App Router', role: 'SSR/SSG, rutas dinámicas y optimización de imágenes' },
        { name: 'NestJS API', role: 'Lógica de negocio, autenticación y persistencia' },
        { name: 'PostgreSQL', role: 'Almacenamiento relacional de catálogo y transacciones' },
        { name: 'Redis', role: 'Cache de sesiones y productos destacados' },
      ],
    },
    features: [
      'Catálogo con filtros, búsqueda y paginación server-side',
      'Carrito persistente y checkout con validación de stock',
      'Panel de administración para productos y pedidos',
      'Autenticación JWT con roles (cliente / admin)',
      'Optimización de rendimiento con ISR y lazy loading',
    ],
    image: '/projects/project-technova.png',
    hint: 'ecommerce shop',
    link: '#',
    repo: '#',
  },
  {
    slug: 'ticker-manager',
    title: 'Ticker Manager',
    description:
      'Sistema integral de gestión de tickets con manejo de roles y autenticación robusta. Arquitectura desacoplada con backend en NestJS y frontend en Angular.',
    overview:
      'Ticker Manager centraliza la creación, asignación y seguimiento de tickets de soporte. Soporta flujos de trabajo por estados, notificaciones y control de acceso basado en roles para equipos de distintos departamentos.',
    techs: ['Nestjs', 'Angular', 'PostgreSQL'],
    stack: [
      { category: 'Frontend', items: ['Angular 17', 'RxJS', 'Angular Material', 'TypeScript'] },
      { category: 'Backend', items: ['NestJS', 'Passport JWT', 'Class Validator', 'WebSockets'] },
      { category: 'Base de datos', items: ['PostgreSQL', 'TypeORM migrations'] },
      { category: 'Infraestructura', items: ['Docker Compose', 'Nginx reverse proxy'] },
    ],
    architecture: {
      pattern: 'Cliente-servidor desacoplado',
      description:
        'SPA Angular comunicada con API REST NestJS. El backend expone módulos independientes por dominio (tickets, usuarios, departamentos) con guards de autorización por rol.',
      components: [
        { name: 'Angular SPA', role: 'Interfaz reactiva con lazy-loaded modules' },
        { name: 'NestJS REST API', role: 'CRUD de tickets, RBAC y validaciones' },
        { name: 'WebSocket Gateway', role: 'Actualizaciones en tiempo real de estados' },
        { name: 'PostgreSQL', role: 'Persistencia relacional con auditoría de cambios' },
      ],
    },
    features: [
      'CRUD completo de tickets con prioridades y categorías',
      'Flujo de estados: abierto → en progreso → resuelto → cerrado',
      'Roles: admin, agente y solicitante con permisos granulares',
      'Dashboard con métricas de resolución y carga por agente',
      'Notificaciones en tiempo real vía WebSockets',
    ],
    image: '/projects/project-ticker.png',
    hint: 'dashboard software',
    link: '#',
    repo: '#',
  },
  {
    slug: 'spring-cloud-microservices',
    title: 'Spring Cloud Microservices',
    description:
      'Arquitectura de microservicios escalable utilizando Spring Boot, Docker, Kubernetes y monitoreo avanzado con Grafana para alta disponibilidad.',
    overview:
      'Ecosistema de microservicios empresarial con descubrimiento de servicios, API Gateway centralizado y observabilidad completa. Diseñado para escalar horizontalmente bajo carga variable.',
    techs: ['Spring', 'Docker', 'Kubernetes'],
    stack: [
      { category: 'Backend', items: ['Spring Boot 3', 'Spring Cloud Gateway', 'Eureka', 'Feign Client'] },
      { category: 'Mensajería', items: ['RabbitMQ', 'Spring AMQP'] },
      { category: 'Base de datos', items: ['PostgreSQL', 'MongoDB (por servicio)'] },
      { category: 'DevOps', items: ['Docker', 'Kubernetes', 'Helm Charts', 'Grafana', 'Prometheus'] },
    ],
    architecture: {
      pattern: 'Microservicios + API Gateway + Event-driven',
      description:
        'Cada servicio de dominio (usuarios, pedidos, pagos, inventario) es un contenedor independiente registrado en Eureka. El API Gateway enruta peticiones y aplica rate limiting. Comunicación asíncrona entre servicios vía RabbitMQ.',
      components: [
        { name: 'API Gateway', role: 'Punto de entrada único, routing y autenticación' },
        { name: 'Service Registry (Eureka)', role: 'Descubrimiento dinámico de instancias' },
        { name: 'Microservicios de dominio', role: 'Lógica aislada con base de datos propia' },
        { name: 'RabbitMQ', role: 'Eventos de dominio entre servicios' },
        { name: 'Grafana + Prometheus', role: 'Monitoreo, alertas y dashboards' },
      ],
    },
    features: [
      'API Gateway con circuit breaker (Resilience4j)',
      'Descubrimiento de servicios con Eureka',
      'Comunicación síncrona (Feign) y asíncrona (RabbitMQ)',
      'Despliegue en Kubernetes con auto-scaling (HPA)',
      'Dashboards Grafana para latencia, errores y throughput',
      'CI/CD con pipelines automatizados por servicio',
    ],
    image: '/projects/project-spring-cloud.png',
    hint: 'cloud server',
    link: '#',
    repo: '#',
  },
  {
    slug: 'airbnb-clone',
    title: 'Airbnb Clone (Fullstack)',
    description:
      'Clon completo de Airbnb con funcionalidades de reserva, gestión de propiedades y mapas interactivos, utilizando arquitecturas modernas para escalabilidad.',
    overview:
      'Réplica funcional de una plataforma de alojamientos con búsqueda geográfica, reservas con calendario de disponibilidad, perfiles de anfitrión y sistema de reseñas.',
    techs: ['Next', 'Nestjs', 'MongoDB'],
    stack: [
      { category: 'Frontend', items: ['Next.js', 'React', 'Mapbox GL', 'Tailwind CSS'] },
      { category: 'Backend', items: ['NestJS', 'Mongoose', 'Passport OAuth', 'Stripe API'] },
      { category: 'Base de datos', items: ['MongoDB', 'Cloudinary (media)'] },
      { category: 'Infraestructura', items: ['Vercel', 'Railway', 'Docker'] },
    ],
    architecture: {
      pattern: 'Fullstack desacoplado con SSR',
      description:
        'Next.js renderiza páginas de listado y detalle con SSR para SEO. NestJS gestiona reservas, pagos y autenticación OAuth. MongoDB almacena propiedades con índices geoespaciales para búsqueda por ubicación.',
      components: [
        { name: 'Next.js (SSR/CSR)', role: 'Listados, detalle de propiedad y checkout' },
        { name: 'NestJS API', role: 'Reservas, pagos y gestión de usuarios' },
        { name: 'MongoDB', role: 'Propiedades con geo-index y reseñas embebidas' },
        { name: 'Mapbox', role: 'Mapas interactivos y búsqueda por radio' },
      ],
    },
    features: [
      'Búsqueda de propiedades con filtros y mapa interactivo',
      'Calendario de disponibilidad y reservas en tiempo real',
      'Autenticación OAuth (Google, GitHub)',
      'Subida de imágenes con Cloudinary',
      'Sistema de reseñas y calificaciones',
      'Panel de anfitrión para gestionar propiedades',
    ],
    image: '/projects/project-airbnb.png',
    hint: 'real estate app',
    link: '#',
    repo: '#',
  },
  {
    slug: 'crediya-microservices',
    title: 'Crediya Microservices',
    description:
      'Ecosistema de microservicios para la gestión de solicitudes financieras y autenticación de usuarios, implementado con estándares bancarios de seguridad.',
    overview:
      'Plataforma fintech para procesamiento de solicitudes de crédito con evaluación de riesgo, verificación de identidad y flujos de aprobación multi-nivel conforme a estándares de seguridad financiera.',
    techs: ['Spring', 'MySQL', 'Docker'],
    stack: [
      { category: 'Backend', items: ['Spring Boot', 'Spring Security', 'Spring Cloud', 'OAuth2'] },
      { category: 'Base de datos', items: ['MySQL', 'Flyway migrations'] },
      { category: 'Mensajería', items: ['Apache Kafka', 'Spring Kafka'] },
      { category: 'DevOps', items: ['Docker', 'Docker Compose', 'Jenkins'] },
    ],
    architecture: {
      pattern: 'Microservicios orientados a eventos',
      description:
        'Servicios independientes para autenticación, solicitudes, scoring crediticio y notificaciones. Kafka actúa como bus de eventos para desacoplar el flujo de aprobación. Spring Security con OAuth2 y cifrado AES para datos sensibles.',
      components: [
        { name: 'Auth Service', role: 'OAuth2, JWT y gestión de sesiones' },
        { name: 'Application Service', role: 'CRUD de solicitudes y documentos' },
        { name: 'Scoring Service', role: 'Evaluación de riesgo crediticio' },
        { name: 'Notification Service', role: 'Emails y SMS de estado de solicitud' },
        { name: 'Kafka', role: 'Event sourcing del flujo de aprobación' },
      ],
    },
    features: [
      'Registro y verificación de identidad (KYC básico)',
      'Flujo de solicitud con carga de documentos',
      'Scoring crediticio automatizado',
      'Aprobación multi-nivel (analista → supervisor)',
      'Auditoría completa de cambios (compliance)',
      'Cifrado de datos sensibles en reposo y tránsito',
    ],
    image: '/projects/project-crediya.png',
    hint: 'financial app',
    link: '#',
    repo: '#',
  },
  {
    slug: 'laravel-inertia-ssr',
    title: 'Laravel Inertia SSR',
    description:
      'Aplicación web moderna utilizando Laravel con Inertia.js para Renderizado en el Servidor (SSR), combinando potencia backend y agilidad frontend.',
    overview:
      'Aplicación monolítica moderna que combina el ecosistema Laravel con Vue 3 a través de Inertia.js, logrando SSR sin necesidad de una API REST separada.',
    techs: ['Laravel', 'Vue', 'MySQL'],
    stack: [
      { category: 'Backend', items: ['Laravel 11', 'Inertia.js', 'Sanctum', 'Eloquent ORM'] },
      { category: 'Frontend', items: ['Vue 3', 'Composition API', 'Tailwind CSS', 'Vite'] },
      { category: 'Base de datos', items: ['MySQL', 'Redis (sessions/queue)'] },
      { category: 'DevOps', items: ['Laravel Forge', 'Supervisor', 'Nginx'] },
    ],
    architecture: {
      pattern: 'Monolito con Inertia SSR',
      description:
        'Laravel sirve páginas Inertia con datos embebidos en la respuesta SSR. No hay API REST intermedia: los controllers retornan Inertia responses que Vue renderiza en el servidor y hidrata en el cliente.',
      components: [
        { name: 'Laravel Controllers', role: 'Lógica de negocio y respuestas Inertia' },
        { name: 'Inertia.js Adapter', role: 'Puente server-client sin API REST' },
        { name: 'Vue 3 Pages', role: 'Componentes de página con SSR' },
        { name: 'MySQL + Redis', role: 'Persistencia y colas de trabajo' },
      ],
    },
    features: [
      'SSR completo con hidratación progresiva',
      'Autenticación con Laravel Sanctum',
      'Formularios con validación server-side y feedback instantáneo',
      'Colas de trabajo con Redis y Laravel Horizon',
      'File uploads con almacenamiento S3-compatible',
      'Hot Module Replacement en desarrollo con Vite',
    ],
    image: '/projects/project-laravel-ssr.png',
    hint: 'web development',
    link: '#',
    repo: '#',
  },
  {
    slug: 'patient-management',
    title: 'Patient Management System',
    description:
      'Sistema de gestión de pacientes desarrollado con Spring Boot, enfocado en la eficiencia operativa y seguridad de datos médicos.',
    overview:
      'Sistema hospitalario para registro de pacientes, historiales clínicos, citas médicas y reportes. Cumple con principios de seguridad para datos de salud (HIPAA-inspired patterns).',
    techs: ['Spring', 'SQL Server', 'Docker'],
    stack: [
      { category: 'Backend', items: ['Spring Boot', 'Spring Data JPA', 'Spring Security', 'Thymeleaf'] },
      { category: 'Base de datos', items: ['SQL Server', 'Flyway'] },
      { category: 'Frontend', items: ['Thymeleaf', 'Bootstrap 5', 'JavaScript'] },
      { category: 'DevOps', items: ['Docker', 'Azure DevOps', 'SonarQube'] },
    ],
    architecture: {
      pattern: 'Monolito en capas (MVC)',
      description:
        'Arquitectura clásica Spring MVC con capas Controller → Service → Repository. Thymeleaf renderiza vistas server-side. Spring Security protege rutas por rol médico (doctor, enfermera, admin).',
      components: [
        { name: 'Controllers', role: 'Endpoints MVC y validación de formularios' },
        { name: 'Service Layer', role: 'Reglas de negocio y transacciones' },
        { name: 'JPA Repositories', role: 'Acceso a SQL Server con queries optimizadas' },
        { name: 'Security Filter Chain', role: 'RBAC y auditoría de acceso a datos clínicos' },
      ],
    },
    features: [
      'Registro y búsqueda avanzada de pacientes',
      'Historial clínico con notas y diagnósticos',
      'Agenda de citas con recordatorios',
      'Reportes PDF de historial médico',
      'Control de acceso por rol (RBAC)',
      'Log de auditoría para acceso a datos sensibles',
    ],
    image: '/projects/project-patient.png',
    hint: 'medical system',
    link: '#',
    repo: '#',
  },
  {
    slug: 'social-book-django',
    title: 'Social Book Django',
    description:
      'Red social completa desarrollada con Django, incluyendo flujos de amistad, publicaciones en tiempo real y perfiles personalizables.',
    overview:
      'Plataforma social con feed de publicaciones, sistema de amistades, mensajería directa y perfiles con avatar personalizable. Construida con el ecosistema Django y despliegue containerizado.',
    techs: ['Django', 'PostgreSQL', 'Tailwind'],
    stack: [
      { category: 'Backend', items: ['Django 5', 'Django REST Framework', 'Channels', 'Celery'] },
      { category: 'Frontend', items: ['Django Templates', 'HTMX', 'Tailwind CSS', 'Alpine.js'] },
      { category: 'Base de datos', items: ['PostgreSQL', 'Redis (cache/channels)'] },
      { category: 'DevOps', items: ['Docker', 'Gunicorn', 'Nginx'] },
    ],
    architecture: {
      pattern: 'Monolito Django con real-time',
      description:
        'Django maneja la lógica de negocio y renderizado de templates. Django Channels habilita WebSockets para el feed en tiempo real. Celery procesa tareas asíncronas como notificaciones y procesamiento de imágenes.',
      components: [
        { name: 'Django Views + DRF', role: 'Lógica de negocio y API interna' },
        { name: 'Django Channels', role: 'WebSockets para feed y mensajería live' },
        { name: 'Celery Workers', role: 'Tareas async: emails, thumbnails, notificaciones' },
        { name: 'PostgreSQL + Redis', role: 'Datos persistentes y capa de cache/channels' },
      ],
    },
    features: [
      'Feed de publicaciones con likes y comentarios',
      'Sistema de amistades con solicitudes pendientes',
      'Mensajería directa en tiempo real',
      'Perfiles personalizables con avatar y bio',
      'Notificaciones push vía WebSockets',
      'Moderación básica de contenido',
    ],
    image: '/projects/project-django.png',
    hint: 'social network',
    link: '#',
    repo: '#',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
