const servicesData = [
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2L15 8H21L13 12L16 18L12 14L8 18L11 12L3 8H9L12 2Z"/></svg>`,
        title: 'Observatorio Premium',
        text: 'Telescopios robóticos guiados por astrónomos. Sesiones privadas y charlas para todos los niveles.',
        features: ['Telescopio robótico', 'Guía astronómico', 'Fotografía astral']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16t-2-2V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2v6a2 2 0 0 0 2 2h2Z"/><path d="M10 16V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg>`,
        title: 'Wellness Cósmico',
        text: 'Spa con rituales energéticos, saunas, piscinas y programas personalizados de bienestar.',
        features: ['Spa exclusivo', 'Terapias estelares', 'Programa personalizado']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2Z"/><path d="M21 9a2 2 0 0 1-2 2H7a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2Z"/></svg>`,
        title: 'Cocina Estelar',
        text: 'Menús creados por chefs con ingredientes locales y una experiencia sensorial única.',
        features: ['Chef residente', 'Menú degustación', 'Cenas bajo las estrellas']
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
        title: 'Concierge 24/7',
        text: 'Asistencia personalizada en cualquier momento: reservas, traslados, sorpresas y detalles.',
        features: ['Asistencia 24/7', 'Traslados privados', 'Detalles personalizados']
    }
];

const extrasData = [
    {
        title: 'Traslados blindados',
        text: 'Vehículos exclusivos desde el aeropuerto al resort con chofer bilingüe.'
    },
    {
        title: 'Mayordomo personal',
        text: 'Un anfitrión dedicado a tus preferencias, desde el check-in hasta la despedida.'
    },
    {
        title: 'Experiencias privadas',
        text: 'Cenas románticas, rutas guiadas y observaciones exclusivas solo para ti.'
    },
    {
        title: 'Sostenibilidad activa',
        text: 'Programas de compensación, plástico cero y energías renovables en cada estancia.'
    }
];

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;

    grid.innerHTML = servicesData.map((item, index) => `
        <article class="service-card reveal" style="animation-delay: ${index * 80}ms">
            <div class="service-card__icon">${item.icon}</div>
            <h3 class="service-card__title">${item.title}</h3>
            <p class="service-card__text">${item.text}</p>
            <ul class="service-card__list">
                ${item.features.map(f => `<li>• ${f}</li>`).join('')}
            </ul>
        </article>
    `).join('');
}

function renderExtras() {
    const grid = document.getElementById('extrasGrid');
    if (!grid) return;

    grid.innerHTML = extrasData.map((item, index) => `
        <article class="extra-card reveal" style="animation-delay: ${index * 80}ms">
            <span class="extra-card__number" aria-hidden="true">0${index + 1}</span>
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

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

renderServices();
renderExtras();
initReveal();
initMobileNav();
initHeader();