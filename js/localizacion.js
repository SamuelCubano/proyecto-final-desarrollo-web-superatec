const locationData = [
    {
        id: 'maldivas',
        title: 'Maldivas del Norte',
        text: 'Villas flotantes y cielo despejado todo el año para disfrutar del paisaje desde el mar.',
        image: '../img/destino-1.svg',
        meta: ['Puestas de sol visibles', 'Traslado privado', 'Buceo premium'],
        gradient: 'linear-gradient(135deg, #38bdf8, #8b5cf6)'
    },
    {
        id: 'andino',
        title: 'Santuario Andino',
        text: 'Un refugio de montaña donde el aire puro convierte cada noche en un entorno natural privilegiado.',
        image: '../img/destino-2.svg',
        meta: ['Observatorio 24h', 'Aguas termales', 'Rutas guiadas'],
        gradient: 'linear-gradient(135deg, #8b5cf6, #38bdf8)'
    },
    {
        id: 'desierto',
        title: 'Oasis del Desierto',
        text: 'Silencio, dunas y un cielo sin contaminación lumínica para desconectar de verdad.',
        image: '../img/destino-3.svg',
        meta: ['Yoga al amanecer', 'Piscinas de sal', 'Cenas en el desierto'],
        gradient: 'linear-gradient(135deg, #fbbf24, #38bdf8)'
    },
    {
        id: 'helando',
        title: 'Archipiélago Helado',
        text: 'Iglús de cristal bajo la puesta de sol. Uno de los cielos más oscuros del planeta.',
        image: '../img/destino-4.svg',
        meta: ['Puesta de sol', 'Expediciones', 'Suite hielo'],
        gradient: 'linear-gradient(135deg, #38bdf8, #a78bfa)'
    }
];

const experienceData = [
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2L15 8H21L13 12L16 18L12 14L8 18L11 12L3 8H9L12 2Z"/></svg>`,
        title: 'Cielos certificados',
        text: 'Seleccionamos ubicaciones con entornos naturales privilegiados para maximizar la observación.'
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16t-2-2V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2v6a2 2 0 0 0 2 2h2Z"/><path d="M10 16V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"/></svg>`,
        title: 'Traslados incluidos',
        text: 'Desde el aeropuerto al resort en vehículos blindados y, cuando aplica, en hidroavión.'
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
        title: 'Guías locales',
        text: 'Expertos en naturaleza, ecología y cultura local que enriquecen cada recorrido.'
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: 'Protocolos de seguridad',
        text: 'Accesos controlados, seguros y asistencia 24/7 en cada destino.'
    }
];

function renderLocations() {
    const container = document.getElementById('locationGrid');
    if (!container) return;

    container.innerHTML = locationData.map((loc, index) => `
        <article class="location-card reveal" style="--card-gradient: ${loc.gradient}; animation-delay: ${index * 80}ms">
            <div class="location-card__map" style="background-image: url('${loc.image}')" aria-hidden="true"></div>
            <h3 class="location-card__title">${loc.title}</h3>
            <p class="location-card__text">${loc.text}</p>
            <div class="location-card__meta">${loc.map(item => `<span>${item}</span>`).join('')}</div>
        </article>
    `).join('');
}

function renderExperiences() {
    const container = document.getElementById('experienceList');
    if (!container) return;

    container.innerHTML = experienceData.map((item, index) => `
        <article class="experience-card reveal" style="animation-delay: ${index * 80}ms">
            <div class="experience-card__icon">${item.icon}</div>
            <h3 class="experience-card__title">${item.title}</h3>
            <p class="experience-card__text">${item.text}</p>
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
        header.style.background = isScrolled ? 'rgba(253, 251, 247, .96)' : '';
        header.style.borderBottomColor = isScrolled ? 'rgba(196, 168, 130, .3)' : '';
    }, { passive: true });
}

renderLocations();
renderExperiences();
initReveal();
initMobileNav();
initHeader();
