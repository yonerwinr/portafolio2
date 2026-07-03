document.addEventListener('DOMContentLoaded', () => {
  // --- DICCIONARIO DE TRADUCCIONES ---
  const translations = {
    es: {
      "nav-home": "Inicio",
      "nav-projects": "Proyectos",
      "nav-skills": "Habilidades",
      "nav-experience": "Experiencia",
      "nav-education": "Educación",
      "nav-contact": "Contacto",
      "nav-cv": "Descargar CV",
      "hero-subtitle": "Ingeniero en Informática",
      "hero-title": "Hola, soy Yonerwin Rodríguez",
      "hero-desc": "Especializado en crear soluciones web modernas e implementar modelos de Inteligencia Artificial para la toma de decisiones y optimización de datos.",
      "hero-btn-projects": "Ver Proyectos",
      "hero-btn-contact": "Hablemos",
      "projects-title": "Proyectos Destacados",
      "tag-webapp": "Web App",
      "tag-tourism": "Turismo",
      "tag-ai": "Inteligencia Artificial",
      "tag-dashboard": "Dashboard",
      "tag-logistics": "Logística",
      "tag-shipping": "Envíos",
      "tag-ecology": "Ecología",
      "tag-assistant": "Asistente Virtual",
      "tag-uxui": "UX/UI",
      "tag-ecommerce": "E-commerce",
      "tag-tech": "Tecnología",
      "btn-visit": "Visitar Sitio",
      "project-travelvzla-desc": "Agencia de viajes con soluciones integrales en boletería, hospedajes, transporte terrestre y seguros de viajes.",
      "project-petrojuana-desc": "Optimización inteligente para la extracción y logística de petróleo utilizando modelos de redes neuronales artificiales.",
      "project-import2ven-desc": "Plataforma de gestión logística y envíos de carga puerta a puerta desde China y Estados Unidos hacia Venezuela.",
      "project-biuk-desc": "Aplicación interactiva e informativa diseñada para calcular, analizar y concientizar sobre el consumo hídrico personal.",
      "project-itstravel-desc": "Portal turístico internacional de la agencia It's Travel, que integra un asistente de chat virtual inteligente.",
      "project-yourfaith-desc": "Tienda online premium de dispositivos tecnológicos, gadgets e importaciones, con pasarela interactiva y soporte directo.",
      "skills-title": "Habilidades Técnicas",
      "skill-databases": "Bases de Datos",
      "skill-google": "Herramientas de Google",
      "skill-ai": "Inteligencia Artificial (IA)",
      "skill-microsoft": "Herramientas de Microsoft",
      "nav-support": "Soporte IT",
      "support-title": "Soporte IT & Redes",
      "support-subtitle": "Servicios técnicos especializados y administración de infraestructura tecnológica.",
      "support-card1-title": "Soporte de Hardware & Software",
      "support-card1-desc": "Diagnóstico completo, mantenimiento preventivo/correctivo y optimización de equipos informáticos.",
      "support-card1-f1": "Ensamblaje y diagnóstico físico de componentes",
      "support-card1-f2": "Instalación y optimización de sistemas operativos",
      "support-card1-f3": "Limpieza física y cambio de pasta térmica",
      "support-card2-title": "Redes y Conectividad",
      "support-card2-desc": "Planificación, cableado y configuración de redes locales para optimizar la comunicación de datos.",
      "support-card2-f1": "Instalación de cableado estructurado UTP",
      "support-card2-f2": "Configuración de Routers, Switches y APs",
      "support-card2-f3": "Seguridad y segmentación de redes locales (VLANs)",
      "support-card3-title": "Servidores y Copias de Seguridad",
      "support-card3-desc": "Administración de sistemas de servidor, virtualización y políticas de respaldo de información.",
      "support-card3-f1": "Configuración de servidores locales y compartidos",
      "support-card3-f2": "Virtualización de entornos (Hyper-V / VirtualBox)",
      "support-card3-f3": "Implementación de backups y almacenamiento NAS",
      "exp-title": "Experiencia Laboral",
      "exp-date-1": "Abril 2025 - Actualidad",
      "exp-role-1": "Emprendedor",
      "exp-task-1-1": "Gestión de compras nacionales e internacionales.",
      "exp-task-1-2": "Coordinación de inventarios y logística comercial de importaciones.",
      "exp-date-2": "Enero 2025 - Abril 2025",
      "exp-role-2": "Analista de Soporte IT",
      "exp-task-2-1": "Soporte técnico de hardware, software y conectividad a red.",
      "exp-task-2-2": "Desarrollo y mantenimiento de módulos de gestión administrativa de pacientes.",
      "exp-date-3": "Mayo 2024 - Noviembre 2024",
      "exp-role-3": "Desarrollador Web",
      "exp-task-3-1": "Desarrollo de aplicación web personalizada para reservas.",
      "exp-task-3-2": "Diseño e implementación de interfaz responsive accesible.",
      "edu-title": "Educación & Certificaciones",
      "edu-date-1": "Febrero 2026 - Abril 2026",
      "edu-title-1": "Bootcamp IA sector Petrolero",
      "edu-desc-1": "Formación avanzada en Machine Learning, análisis de datos y redes neuronales aplicadas a la optimización de operaciones energéticas.",
      "edu-date-2": "Enero 2020 - Abril 2025",
      "edu-title-2": "Ingeniería de Informática",
      "edu-desc-2": "Graduado en Ingeniería de Informática con foco en desarrollo de software, algoritmos avanzados y diseño de arquitecturas de bases de datos.",
      "edu-date-3": "Agosto 2024 - Actualidad",
      "edu-title-3": "Curso de Inglés (Nivel B2)",
      "edu-desc-3": "Estudios continuos del idioma inglés, logrando fluidez comunicativa y técnica.",
      "contact-title": "Contáctame",
      "contact-subtitle": "¿Tienes un proyecto en mente?",
      "contact-desc": "Estoy disponible para integrarme a equipos de desarrollo o cooperar en el diseño de soluciones de software a medida. ¡Hablemos directamente por WhatsApp!",
      "contact-label-email": "Correo Electrónico",
      "contact-label-location": "Ubicación",
      "contact-label-name": "Nombre",
      "contact-label-message": "Mensaje",
      "contact-placeholder-name": "Tu nombre",
      "contact-placeholder-message": "Hola Yonerwin, me gustaría hablar contigo sobre...",
      "contact-btn-send": "Enviar a WhatsApp",
      "footer-text": "© 2026 Yonerwin Rodríguez. Todos los derechos reservados. Diseñado con pasión."
    },
    en: {
      "nav-home": "Home",
      "nav-projects": "Projects",
      "nav-skills": "Skills",
      "nav-experience": "Experience",
      "nav-education": "Education",
      "nav-contact": "Contact",
      "nav-cv": "Download CV",
      "hero-subtitle": "Software Engineer",
      "hero-title": "Hi, I'm Yonerwin Rodríguez",
      "hero-desc": "Specialized in building modern web solutions and implementing Artificial Intelligence models for decision making and data optimization.",
      "hero-btn-projects": "View Projects",
      "hero-btn-contact": "Let's Talk",
      "projects-title": "Featured Projects",
      "tag-webapp": "Web App",
      "tag-tourism": "Tourism",
      "tag-ai": "Artificial Intelligence",
      "tag-dashboard": "Dashboard",
      "tag-logistics": "Logistics",
      "tag-shipping": "Shipping",
      "tag-ecology": "Ecology",
      "tag-assistant": "Virtual Assistant",
      "tag-uxui": "UX/UI",
      "tag-ecommerce": "E-commerce",
      "tag-tech": "Technology",
      "btn-visit": "Visit Site",
      "project-travelvzla-desc": "Travel agency offering comprehensive solutions in ticketing, lodging, land transportation, and travel insurance.",
      "project-petrojuana-desc": "Intelligent optimization for oil extraction and logistics using artificial neural network models.",
      "project-import2ven-desc": "Logistics management and door-to-door shipping platform from China and the United States to Venezuela.",
      "project-biuk-desc": "Interactive and informative application designed to calculate, analyze, and raise awareness about personal water consumption.",
      "project-itstravel-desc": "International tourism portal for the It's Travel agency, integrating an intelligent virtual chat assistant.",
      "project-yourfaith-desc": "Premium online store for tech devices, gadgets, and imports, with an active gateway and direct support.",
      "skills-title": "Technical Skills",
      "skill-databases": "Databases",
      "skill-google": "Google Tools",
      "skill-ai": "Artificial Intelligence (AI)",
      "skill-microsoft": "Microsoft Tools",
      "nav-support": "IT Support",
      "support-title": "IT Support & Networks",
      "support-subtitle": "Specialized technical services and IT infrastructure management.",
      "support-card1-title": "Hardware & Software Support",
      "support-card1-desc": "Complete diagnosis, preventive/corrective maintenance, and computer hardware optimization.",
      "support-card1-f1": "Assembly and hardware diagnosis of components",
      "support-card1-f2": "Operating system installation and tuning",
      "support-card1-f3": "Physical cleaning and thermal paste replacement",
      "support-card2-title": "Networking & Connectivity",
      "support-card2-desc": "Planning, cabling, and configuration of local networks to optimize data communication.",
      "support-card2-f1": "Installation of UTP structured cabling",
      "support-card2-f2": "Configuration of Routers, Switches, and APs",
      "support-card2-f3": "Local network security and segmentation (VLANs)",
      "support-card3-title": "Servers & Backups",
      "support-card3-desc": "Administration of server operating systems, virtualization, and data backup policies.",
      "support-card3-f1": "Local and shared server configuration",
      "support-card3-f2": "Environment virtualization (Hyper-V / VirtualBox)",
      "support-card3-f3": "Implementation of backups and NAS storage",
      "exp-title": "Work Experience",
      "exp-date-1": "April 2025 - Present",
      "exp-role-1": "Entrepreneur",
      "exp-task-1-1": "Management of national and international purchases.",
      "exp-task-1-2": "Coordination of inventories and commercial logistics for imports.",
      "exp-date-2": "January 2025 - April 2025",
      "exp-role-2": "IT Support Analyst",
      "exp-task-2-1": "Technical support for hardware, software, and network connectivity.",
      "exp-task-2-2": "Development and maintenance of patient administrative management modules.",
      "exp-date-3": "May 2024 - November 2024",
      "exp-role-3": "Web Developer",
      "exp-task-3-1": "Development of a custom web application for bookings.",
      "exp-task-3-2": "Design and implementation of an accessible responsive interface.",
      "edu-title": "Education & Certifications",
      "edu-date-1": "February 2026 - April 2026",
      "edu-title-1": "Oil Sector AI Bootcamp",
      "edu-desc-1": "Advanced training in Machine Learning, data analysis, and neural networks applied to the optimization of energy operations.",
      "edu-date-2": "January 2020 - April 2025",
      "edu-title-2": "Computer Engineering",
      "edu-desc-2": "Graduated in Computer Engineering with a focus on software development, advanced algorithms, and database architecture design.",
      "edu-date-3": "August 2024 - Present",
      "edu-title-3": "English Course (B2 Level)",
      "edu-desc-3": "Ongoing English language studies, achieving communicative and technical fluency.",
      "contact-title": "Contact Me",
      "contact-subtitle": "Have a project in mind?",
      "contact-desc": "I am available to join development teams or cooperate in the design of custom software solutions. Let's talk directly on WhatsApp!",
      "contact-label-email": "Email Address",
      "contact-label-location": "Location",
      "contact-label-name": "Name",
      "contact-label-message": "Message",
      "contact-placeholder-name": "Your name",
      "contact-placeholder-message": "Hi Yonerwin, I would like to talk to you about...",
      "contact-btn-send": "Send to WhatsApp",
      "footer-text": "© 2026 Yonerwin Rodríguez. All rights reserved. Designed with passion."
    }
  };

  const typingWords = {
    es: [
      'Ingeniero en Informática',
      'Desarrollador Full Stack',
      'Entusiasta de la IA & Datos'
    ],
    en: [
      'Computer Engineer',
      'Full Stack Developer',
      'AI & Data Enthusiast'
    ]
  };

  // Variables de control de idioma
  let currentLang = localStorage.getItem('portfolioLang') || 'es';

  // --- 1. Cursor Personalizado ---
  const cursor = document.querySelector('.custom-cursor');
  const cursorDot = document.querySelector('.custom-cursor-dot');

  if (cursor && cursorDot) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;

      cursorDot.style.left = `${e.clientX}px`;
      cursorDot.style.top = `${e.clientY}px`;
    });

    // Añadir escala al pasar sobre elementos interactivos
    const hoverElements = document.querySelectorAll('a, button, .project-item, select, input, textarea');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
        cursor.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        cursor.style.borderColor = 'var(--cyan)';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.backgroundColor = 'transparent';
        cursor.style.borderColor = 'var(--primary)';
      });
    });
  }

  // --- 2. Efecto de Máquina de Escribir (Typing Effect) ---
  const typingText = document.getElementById('typingText');
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let delay = 120; // velocidad de escritura

  if (typingText) {
    function type() {
      const words = typingWords[currentLang] || typingWords['es'];
      const currentWord = words[wordIndex];

      if (isDeleting) {
        typingText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        delay = 60; // velocidad de borrado más rápida
      } else {
        typingText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        delay = 120;
      }

      if (!isDeleting && charIndex === currentWord.length) {
        // Pausa al terminar de escribir la palabra
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500; // pausa antes de empezar la nueva palabra
      }

      setTimeout(type, delay);
    }

    // Iniciar efecto de escritura
    setTimeout(type, 1000);
  }

  // --- 3. Inclinación 3D en las Laptops (Parallax al mover el mouse) ---
  const laptopMockups = document.querySelectorAll('.laptop-mockup');
  const projectSection = document.getElementById('proyectos');

  if (laptopMockups.length > 0 && projectSection) {
    document.addEventListener('mousemove', (e) => {
      const xVal = (e.clientX / window.innerWidth) - 0.5;
      const yVal = (e.clientY / window.innerHeight) - 0.5;

      const rotateX = 10 - (yVal * 15);
      const rotateY = -8 + (xVal * 20);

      laptopMockups.forEach(mockup => {
        mockup.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });
  }

  // --- 4. Animaciones al Scroll (Scroll Reveal) ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // --- 5. Lógica del Sistema de Traducción ---
  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolioLang', lang);

    // Actualizar botón langToggle
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.innerHTML = `<i class="bx bx-globe"></i> ${lang === 'es' ? 'EN' : 'ES'}`;
    }

    // Traducir todos los elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        const translationText = translations[lang][key];

        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translationText;
        } else {
          // Si el elemento contiene algún icono (como los botones), buscamos un span interno con el atributo
          // De lo contrario, reemplazamos el texto completo
          const icon = el.querySelector('i');
          if (icon) {
            // El elemento tiene un icono y texto. Suponemos que el texto se encuentra después del icono
            // O idealmente dentro de un span con data-i18n. Si tiene span, este selector lo tradujo ya.
            // Si data-i18n está en el elemento padre, volvemos a inyectar el icono y la traducción.
            el.innerHTML = '';
            el.appendChild(icon);
            el.appendChild(document.createTextNode(' ' + translationText));
          } else {
            el.textContent = translationText;
          }
        }
      }
    });

    // Resetear máquina de escribir para aplicar el cambio inmediatamente
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
    if (typingText) {
      typingText.textContent = '';
    }
  }

  // Configurar event listener en el botón del navbar
  const langToggleBtn = document.getElementById('langToggle');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      applyLanguage(nextLang);
    });
  }

  // Aplicar idioma inicial (guardado o por defecto 'es')
  applyLanguage(currentLang);

  // --- 6. Gestión del Formulario de Contacto (Redirección a WhatsApp) ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button');
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
      const originalHTML = btn.innerHTML;

      const loadingText = currentLang === 'es' ? 'Abriendo WhatsApp...' : 'Opening WhatsApp...';
      btn.innerHTML = `<i class="bx bx-loader-alt bx-spin" style="margin-right: 5px;"></i> ${loadingText}`;
      btn.disabled = true;

      // Generar URL de WhatsApp según el idioma seleccionado
      const phone = "584126807599";
      const text = currentLang === 'es' 
        ? `Hola Yonerwin, mi nombre es ${name}.\n\n${message}`
        : `Hello Yonerwin, my name is ${name}.\n\n${message}`;
        
      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodedText}`;

      // Redirigir después de una breve transición de carga
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        
        const successText = currentLang === 'es' ? '¡Redirigido a WhatsApp! ✓' : 'Redirected to WhatsApp! ✓';
        btn.innerHTML = `<i class="bx bx-check-circle" style="margin-right: 5px;"></i> ${successText}`;
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        contactForm.reset();

        setTimeout(() => {
          btn.innerHTML = originalHTML;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1000);
    });
  }
});
