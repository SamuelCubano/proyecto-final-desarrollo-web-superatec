/* ===== SOBRE-NOSOTROS.JS - ASTRO RESORTS ABOUT ===== */

// ===== DATA =====
const timelineData = [
    {
        year: '2010',
        title: 'El Sueño Comienza',
        text: 'Los fundadores Elena Varga y Marcus Chen conciben Astro Resorts durante una expedición astronómica en el desierto de Atacama.'
    },
    {
        year: '2012',
        title: 'Primer Resort: Maldivas del Norte',
        text: 'Inauguración del primer resort con villas flotantes y techos de cristal para observación nocturna.'
    },
    {
        year: '2015',
        title: 'Expansión Global',
        text: 'Apertura de Santuario Andino y Oasis del Desierto. El concepto de "experiencias de lujo" gana reconocimiento internacional.'
    },
    {
        year: '2018',
        title: 'Innovación Tecnológica',
        text: 'Lanzamiento de telescopios robóticos controlados por huéspedes y app de realidad aumentada para navegación nocturna.'
    },
    {
        year: '2021',
        title: 'Archipiélago Helado',
        text: 'Cuarto destino en la Antártida: iglús de cristal con vista a la puesta de sol. Premio World Luxury Hotel Awards.'
    },
    {
        year: '2024',
        title: 'Excellence Club & Sostenibilidad',
        text: 'Lanzamiento del programa de fidelidad y compromiso carbono-neutral para 2030. Más de 50,000 huéspedes atendidos.'
    }
];

const valuesData = [
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H21L13 12L16 18L12 14L8 18L11 12L3 8H9L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Excelencia en el Servicio',
        text: 'Superamos expectativas en cada detalle, desde la calidad del servicio hasta la perfección de cada experiencia.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 20C7.59 18.76 4.5 15.22 4.5 10.5C4.5 6.91 7.17 3.5 11 3.5C14.83 3.5 17.5 6.91 17.5 10.5C17.5 15.22 14.41 18.76 12 20Z" fill="currentColor"/></svg>`,
        title: 'Conexión con la Naturaleza',
        text: 'Creemos que estar en entornos naturales nos conecta con algo mayor. Diseñamos espacios para esa conexión.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9a2 2 0 0 1-2 2H7a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Innovación Continua',
        text: 'Integramos tecnología de vanguardia para elevar la experiencia sin perder el toque humano.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Sostenibilidad',
        text: 'Protegemos los entornos que nos albergan. Operaciones carbono-neutral y conservación activa.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16t-2-2V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2v6a2 2 0 0 0 2 2h2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Wellness Integral',
        text: 'Cuerpo, mente y espíritu. Nuestros programas de wellness nutren todas las dimensiones del ser.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Comunidad Global',
        text: 'Creamos una familia de viajeros que comparten la pasión por explorar lo desconocido.'
    }
];

const teamData = [
    {
        name: 'Elena Varga',
        role: 'Fundadora & CEO',
        bio: 'Astrónoma y emprendedora visionaria. 20 años en hospitalidad de lujo y observatorios internacionales.',
        initial: 'EV'
    },
    {
        name: 'Marcus Chen',
        role: 'Fundador & CTO',
        bio: 'Ingeniero aeroespacial convertido en hotelero. Pionero en tecnología de experiencias inmersivas.',
        initial: 'MC'
    },
    {
        name: 'Dra. Sofia Nilsson',
        role: 'Directora de Experiencia',
        bio: 'Astrofísica especializada en divulgación. Diseña programas de observación para todos los niveles.',
        initial: 'SN'
    },
    {
        name: 'Chef Antonio Rossi',
        role: 'Director Gastronómico',
        bio: 'Estrella Michelin. Creador de menús gourmet con ingredientes de cultivo hidropónico local.',
        initial: 'AR'
    },
    {
        name: 'Luna Patel',
        role: 'Directora de Wellness',
        bio: 'Experta en medicina integrativa y terapias relajantes. Desarrolló el protocolo "Wellness & Spa".',
        initial: 'LP'
    },
    {
        name: 'Carlos Mendoza',
        role: 'Director de Operaciones',
        bio: 'Ex-Ritz Carlton. Garantiza que cada detalle operativo alcance la perfección.',
        initial: 'CM'
    }
];

const statsData = [
    { number: '50000+', label: 'Huéspedes Satisfechos' },
    { number: '4', label: 'Destinos Únicos' },
    { number: '150+', label: 'Experiencias Exclusivas' },
    { number: '98%', label: 'Satisfacción' },
    { number: '24/7', label: 'Soporte Premium' },
    { number: '2030', label: 'Carbono Neutral' }
];

const missionVisionData = [
    {
        type: 'Misión',
        text: 'Inspirar asombro y conexión humana a través de experiencias de lujo en la naturaleza, combinando hospitalidad excepcional, innovación tecnológica y respeto por el mundo que nos rodea.',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H21L13 12L16 18L12 14L8 18L11 12L3 8H9L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
    },
    {
        type: 'Visión',
        text: 'Ser la marca de hospitalidad más inspiradora del mundo, donde cada estancia transforma la perspectiva del huésped sobre su lugar en el mundo, creando recuerdos que duran toda una vida.',
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 20C7.59 18.76 4.5 15.22 4.5 10.5C4.5 6.91 7.17 3.5 11 3.5C14.83 3.5 17.5 6.91 17.5 10.5C17.5 15.22 14.41 18.76 12 20Z" fill="currentColor"/></svg>`
    }
];

// ===== RENDER FUNCTIONS =====
function renderTimeline() {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    container.innerHTML = timelineData.map((item, index) => `
        <article class="timeline-item reveal" style="animation-delay: ${index * 150}ms">
            <div class="timeline-item__marker" aria-hidden="true"></div>
            <div class="timeline-item__content">
                <span class="timeline-item__year">${item.year}</span>
                <h3 class="timeline-item__title">${item.title}</h3>
                <p class="timeline-item__text">${item.text}</p>
            </div>
        </article>
    `).join('');
}

function renderValues() {
    const container = document.getElementById('valuesGrid');
    if (!container) return;

    // Render Mission & Vision first
    const mvHTML = missionVisionData.map((item, index) => `
        <article class="card value-card reveal" style="animation-delay: ${index * 100}ms">
            <div class="value-card__icon icon icon--lg" aria-hidden="true">${item.icon}</div>
            <h3 class="value-card__title">${item.type}</h3>
            <p class="value-card__text">${item.text}</p>
        </article>
    `).join('');

    // Render Values
    const valuesHTML = valuesData.map((item, index) => `
        <article class="card value-card reveal" style="animation-delay: ${(index + 2) * 100}ms">
            <div class="value-card__icon icon icon--lg" aria-hidden="true">${item.icon}</div>
            <h3 class="value-card__title">${item.title}</h3>
            <p class="value-card__text">${item.text}</p>
        </article>
    `).join('');

    container.innerHTML = mvHTML + valuesHTML;
}

function renderTeam() {
    const container = document.getElementById('teamGrid');
    if (!container) return;

    container.innerHTML = teamData.map((member, index) => `
        <article class="card team-card reveal" style="animation-delay: ${index * 100}ms">
            <div class="team-card__image" aria-hidden="true">${member.initial}</div>
            <h3 class="team-card__name">${member.name}</h3>
            <p class="team-card__role">${member.role}</p>
            <p class="team-card__bio">${member.bio}</p>
        </article>
    `).join('');
}

function renderStats() {
    const container = document.getElementById('statsGrid');
    if (!container) return;

    container.innerHTML = statsData.map((stat, index) => `
        <div class="stat-card reveal" style="animation-delay: ${index * 100}ms">
            <div class="stat-card__number" data-target="${stat.number.replace(/[^\d]/g, '')}">${stat.number}</div>
            <div class="stat-card__label">${stat.label}</div>
        </div>
    `).join('');

    // Animate numbers
    animateStats();
}

function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-card__number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const suffix = el.textContent.replace(/[\d,]/g, '');
                animateNumber(el, target, suffix);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => observer.observe(el));
}

function animateNumber(element, target, suffix = '') {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(start + (target - start) * eased);
        
        element.textContent = current.toLocaleString() + suffix;
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
}

// ===== INTERSECTION OBSERVER FOR REVEAL ANIMATIONS =====
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

// ===== MOBILE NAVIGATION =====
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navList = document.getElementById('navList');

    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('nav__list--open');
        navToggle.setAttribute('aria-expanded', isOpen);
        navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });

    navList.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('nav__list--open')) {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            navToggle.focus();
        }
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(253, 251, 247, 0.95)';
            header.style.borderBottomColor = 'rgba(196, 168, 130, 0.3)';
        } else {
            header.style.background = 'rgba(253, 251, 247, 0.85)';
            header.style.borderBottomColor = 'rgba(196, 168, 130, 0.15)';
        }
    }, { passive: true });
}

// ===== ACTIVE NAV LINK =====
function initActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// ===== PARALLAX EFFECT FOR HERO =====
function initParallax() {
    const hero = document.querySelector('.about-hero');
    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }, { passive: true });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderValues();
    renderTeam();
    renderStats();
    initRevealAnimations();
    initMobileNav();
    initHeaderScroll();
    initActiveNav();
    initParallax();
    
    // Trigger initial reveal check
    setTimeout(() => {
        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                el.classList.add('reveal--visible');
            }
        });
    }, 100);
});

// ===== PERFORMANCE: Preload next page =====
function preloadPage(href) {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
}

document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('.nav__link, .card__link, .footer__list a, .btn');
    if (link && link.href) {
        preloadPage(link.href);
    }
}, { passive: true });
