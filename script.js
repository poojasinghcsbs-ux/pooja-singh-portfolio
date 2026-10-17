(() => {
  const sidebar = document.querySelector('.sidebar');
  const toggle = document.querySelector('.menu-toggle');
  const scrim = document.querySelector('.mobile-scrim');
  const navLinks = [...document.querySelectorAll('.contents-nav a')];

  const closeMenu = () => {
    sidebar.classList.remove('open');
    scrim.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open contents menu');
    toggle.innerHTML = '<svg class="icon"><use href="#i-menu"></use></svg>';
  };

  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    scrim.classList.toggle('visible', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Close contents menu' : 'Open contents menu');
    toggle.innerHTML = `<svg class="icon"><use href="#${isOpen ? 'i-close' : 'i-menu'}"></use></svg>`;
  });

  scrim.addEventListener('click', closeMenu);
  navLinks.forEach((link) => link.addEventListener('click', closeMenu));

  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-22% 0px -64% 0px', threshold: 0 });
  sections.forEach((section) => observer.observe(section));

  const learningTarget = document.querySelector('#learning-text');
  const learningItems = ['Java Development', 'Web Development', 'Problem Solving'];
  if (learningTarget) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      learningTarget.textContent = learningItems[0];
    } else {
      let phraseIndex = 0;
      let characterIndex = 0;
      let deleting = false;
      const typeNext = () => {
        const phrase = learningItems[phraseIndex];
        characterIndex += deleting ? -1 : 1;
        learningTarget.textContent = phrase.slice(0, characterIndex);
        let delay = deleting ? 42 : 88;
        if (!deleting && characterIndex === phrase.length) {
          deleting = true;
          delay = 1250;
        } else if (deleting && characterIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % learningItems.length;
          delay = 300;
        }
        window.setTimeout(typeNext, delay);
      };
      learningTarget.textContent = '';
      window.setTimeout(typeNext, 250);
    }
  }
})();
