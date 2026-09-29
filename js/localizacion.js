const locationData = [
    {
        id: 'caracas',
        title: 'Astro Resort Caracas',
        text: 'Sede principal en Prados del Este. Disfruta del excelente clima de la capital, vistas impresionantes y máxima comodidad.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKFE9W-meIO8JSpGEy5XXJ_9Z5AxJtFgqp0ILuuL9ug&s=10',
        rating: 4.9,
        reviewsCount: 328,
        meta: ['Prados del Este', 'Traslado VIP', 'Gastronomía Gourmet'],
        gradient: 'linear-gradient(135deg, #10b981, #059669)'
    },
    {
        id: 'maldivas',
        title: 'Maldivas del Norte',
        text: 'Villas flotantes y agua cristalina todo el año para disfrutar del paisaje marino exclusivo.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJOcaqiCZvNFUwwJnk1sx3EP0dafOfHEYBXWKmjCEEQ&s=10',
        rating: 4.8,
        reviewsCount: 245,
        meta: ['Villas sobre el agua', 'Buceo VIP', 'Spa marino'],
        gradient: 'linear-gradient(135deg, #38bdf8, #8b5cf6)'
    },
    {
        id: 'andino',
        title: 'Santuario Andino',
        text: 'Un refugio de alta montaña con aire puro y cielos completamente despejados para la observación.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmPHV1aHG8aXha4U9eEHD2hXJOnUB7Mut1uUHWHIE7w&s=10',
        rating: 4.7,
        reviewsCount: 189,
        meta: ['Observatorio 24h', 'Aguas termales', 'Senderismo guiado'],
        gradient: 'linear-gradient(135deg, #8b5cf6, #38bdf8)'
    },
    {
        id: 'desierto',
        title: 'Oasis del Desierto',
        text: 'Silencio absoluto, dunas doradas y cielos estrellados sin contaminación lumínica.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdXRmiWOpJgLA6qcPct_3Tz4YB9rG2XsoY5o9DWWMJA&s=10',
        rating: 4.6,
        reviewsCount: 152,
        meta: ['Yoga en dunas', 'Piscinas térmicas', 'Cenas astronómicas'],
        gradient: 'linear-gradient(135deg, #fbbf24, #d97706)'
    }
];

const experienceData = [
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 2L15 8H21L13 12L16 18L12 14L8 18L11 12L3 8H9L12 2Z"/></svg>`,
        title: 'Ubicaciones estratégicas',
        text: 'Seleccionamos ubicaciones únicas como Caracas y paraísos naturales privilegiados.'
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
        title: 'Traslados privados',
        text: 'Desde el Aeropuerto Internacional Simón Bolívar (Maiquetía) u otros aeropuertos directo al resort.'
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        title: 'Atención personalizada',
        text: 'Servicio 5 estrellas, concierge exclusivo y seguridad garantizada 24/7.'
    }
];

// Generador de estrellas de puntuación
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let starsHtml = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += '<span class="star star--full">★</span>';
        } else if (i === fullStars && hasHalfStar) {
            starsHtml += '<span class="star star--half">★</span>';
        } else {
            starsHtml += '<span class="star star--empty">☆</span>';
        }
    }
    return starsHtml;
}

function renderLocations() {
    const container = document.getElementById('locationGrid');
    if (!container) return;

    container.innerHTML = locationData.map((loc, index) => `
        <article class="location-card reveal" style="--card-gradient: ${loc.gradient}; animation-delay: ${index * 80}ms">
            <div class="location-card__image-wrap">
                <img src="${loc.image}" alt="${loc.title}" class="location-card__img" loading="lazy">
                <div class="location-card__badge-rating">
                    <span class="star-icon">★</span> ${loc.rating}
                </div>
            </div>
            <div class="location-card__content">
                <div class="location-card__rating-row">
                    <div class="stars-inline">${renderStars(loc.rating)}</div>
                    <span class="rating-text">${loc.rating} / 5.0 (${loc.reviewsCount})</span>
                </div>
                <h3 class="location-card__title">${loc.title}</h3>
                <p class="location-card__text">${loc.text}</p>
                <div class="location-card__meta">
                    ${loc.meta.map(item => `<span class="meta-tag">${item}</span>`).join('')}
                </div>
            </div>
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
    if (!header) return;

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 80;
        header.style.background = isScrolled ? 'rgba(253, 251, 247, .96)' : '';
        header.style.borderBottomColor = isScrolled ? 'rgba(196, 168, 130, .3)' : '';
    }, { passive: true });
}

// Inicialización general tras cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    renderLocations();
    renderExperiences();
    initReveal();
    initMobileNav();
    initHeader();
});