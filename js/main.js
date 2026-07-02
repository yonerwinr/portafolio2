document.addEventListener('DOMContentLoaded', () => {
  // 1. Cursor Personalizado
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

  // 2. Efecto de Máquina de Escribir (Typing Effect)
  const typingText = document.getElementById('typingText');
  if (typingText) {
    const words = [
      'Ingeniero en Informática',
      'Desarrollador Full Stack',
      'Entusiasta de la IA & Datos'
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 120; // velocidad de escritura

    function type() {
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

  // 3. Inclinación 3D en las Laptops (Parallax al mover el mouse)
  const laptopMockups = document.querySelectorAll('.laptop-mockup');
  const projectSection = document.getElementById('proyectos');

  if (laptopMockups.length > 0 && projectSection) {
    document.addEventListener('mousemove', (e) => {
      // Obtener posición relativa del mouse en la pantalla (de -0.5 a 0.5)
      const xVal = (e.clientX / window.innerWidth) - 0.5;
      const yVal = (e.clientY / window.innerHeight) - 0.5;

      // Aplicar transformaciones 3D con un límite
      // Inclinación inicial: rotateX(10deg) rotateY(-8deg)
      const rotateX = 10 - (yVal * 15);
      const rotateY = -8 + (xVal * 20);

      laptopMockups.forEach(mockup => {
        mockup.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
    });
  }

  // 5. Gestión del Formulario de Contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('button');
      const name = document.getElementById('name').value;
      const originalText = btn.textContent;

      btn.textContent = 'Enviando...';
      btn.disabled = true;

      // Simulación de envío
      setTimeout(() => {
        btn.textContent = '¡Mensaje Enviado! ✓';
        btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        contactForm.reset();

        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
