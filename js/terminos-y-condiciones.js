function initReveal() {
    const revealElements = document.querySelectorAll('.reveal:not(.reveal--visible)');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: .12 });

    revealElements.forEach(el => observer.observe(el));
}

function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');
    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('nav__list--open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
    });

    navList.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}

function initHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 80;
        header.style.background = isScrolled ? 'rgba(10, 10, 18, .96)' : '';
        header.style.borderBottomColor = isScrolled ? 'rgba(139, 92, 246, .3)' : '';
    }, { passive: true });
}

function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

initReveal();
initMobileNav();
initHeader();
initSmoothAnchors();