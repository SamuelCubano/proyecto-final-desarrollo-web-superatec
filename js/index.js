/* ===== INDEX.JS - ASTRO RESORTS HOME ===== */

// ===== DATA =====
const destinosData = [
    {
        id: 'maldivas',
        title: 'Maldivas del Norte',
        description: 'Villa flotante privada con vistas a la aurora boreal.',
        image: '../img/destino-1.svg',
        link: 'paquetes.html#maldivas'
    },
    {
        id: 'andino',
        title: 'Santuario Andino',
        description: 'Refugio de montaña con spa de tierras termales galácticas.',
        image: '../img/destino-2.svg',
        link: 'paquetes.html#andino'
    },
    {
        id: 'desierto',
        title: 'Oasis del Desierto',
        description: 'Palmeras de cristal y lagos de sal bajo el sol de medianoche.',
        image: '../img/destino-3.svg',
        link: 'paquetes.html#desierto'
    }
];

const experienciasData = [
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L15 8H21L13 12L16 18L12 14L8 18L11 12L3 8H9L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Estrellas de Lujo',
        description: 'Suites con techos de cristal que se abren al cosmos.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM12 20C7.59 18.76 4.5 15.22 4.5 10.5C4.5 6.91 7.17 3.5 11 3.5C14.83 3.5 17.5 6.91 17.5 10.5C17.5 15.22 14.41 18.76 12 20Z" fill="currentColor"/></svg>`,
        title: 'Observatorio Premium',
        description: 'Telescopios profesionales con guía de astrónomos galácticos.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M21 9a2 2 0 0 1-2 2H7a2 2 0 0 1 0-4h14a2 2 0 0 1 2 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Cocina Estelar',
        description: 'Menús creados por chefs con ingredientes de múltiples mundos.'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16t-2-2V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2v6a2 2 0 0 0 2 2h2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Wellness Cósmico',
        description: 'Spas con terapias de energía estelar y vibraciones galácticas.'
    }
];

const testimoniosData = [
    {
        text: '"Una experiencia que trasciende la tierra. Dormir bajo el cosmos fue mágico, y el servicio impecable superó todas mis expectativas."',
        name: 'María Elena R.',
        role: 'Viajera Frecuente',
        avatar: 'M'
    },
    {
        text: '"Las suites con techos de cristal abiertos al cosmos fueron simplemente espectaculares. Nunca había visto tanto asombro en una sola noche."',
        name: 'Carlos D.',
        role: 'Astrónomo Profesional',
        avatar: 'C'
    },
    {
        text: '"El wellness cósmico mejoró mi bienestar más de lo que imaginaba. Cualquier viaje futuro debe incluir Astro Resorts."',
        name: 'Sofía M.',
        role: 'Influencer de Viajes',
        avatar: 'S'
    }
];

const quickLinksData = [
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="9 22 9 12 15 12 15 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Paquetes Exclusivos',
        description: 'Descubre nuestros paquetes todo incluido para una experiencia cósmica completa.',
        link: 'paquetes.html'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 16t-2-2V6a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 1 2-2v6a2 2 0 0 0 2 2h2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M10 16V9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Servicios Premium',
        description: 'Desde observatorios hasta spa cósmico, todo lo que necesitas para tu estancia perfecta.',
        link: 'servicios.html'
    },
    {
        icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        title: 'Nuestras Ubicaciones',
        description: 'Encuentra tu destino ideal en nuestras localizaciones alrededor del mundo.',
        link: 'localizacion.html'
    }
];

// ===== UTILITY FUNCTIONS =====
function createStarfield() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const starCount = 120;
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('hero__star');

        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const opacity = Math.random() * 0.6 + 0.2;
        const animDelay = Math.random() * 4;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}%`;
        star.style.top = `${posY}%`;
        star.style.opacity = `${opacity}`;
        star.style.animationDelay = `${animDelay}s`;

        fragment.appendChild(star);
    }

    hero.appendChild(fragment);
}

// ===== RENDER FUNCTIONS =====
function renderDestinos() {
    const grid = document.getElementById('destinosGrid');
    if (!grid) return;

    grid.innerHTML = destinosData.map((destino, index) => `
        <article class="card reveal" style="animation-delay: ${index * 100}ms">
            <div class="card__image" style="background-image: url('${destino.image}')" aria-hidden="true"></div>
            <div class="card__content">
                <h3 class="card__title">${destino.title}</h3>
                <p class="card__text">${destino.description}</p>
                <a href="${destino.link}" class="card__link">
                    Explorar
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </a>
            </div>
        </article>
    `).join('');
}

function renderExperiencias() {
    const grid = document.getElementById('experienciaGrid');
    if (!grid) return;

    grid.innerHTML = experienciasData.map((exp, index) => `
        <div class="card reveal text-center" style="animation-delay: ${index * 100}ms; padding: var(--space-8);">
            <div class="icon icon--lg" aria-hidden="true">${exp.icon}</div>
            <h3 class="card__title">${exp.title}</h3>
            <p class="card__text">${exp.description}</p>
        </div>
    `).join('');
}

function renderTestimonios() {
    const slider = document.getElementById('testimoniosSlider');
    const dotsContainer = document.getElementById('testimoniosDots');
    if (!slider || !dotsContainer) return;

    let currentIndex = 0;

    function renderSlide(index) {
        const t = testimoniosData[index];
        slider.innerHTML = `
            <div class="testimonio active" role="group" aria-roledescription="slide" aria-label="${index + 1} de ${testimoniosData.length}">
                <div class="testimonio__content">
                    <p class="testimonio__text">${t.text}</p>
                </div>
                <div class="testimonio__author">
                    <div class="testimonio__avatar" aria-hidden="true">${t.avatar}</div>
                    <div class="testimonio__info">
                        <span class="testimonio__name">${t.name}</span>
                        <span class="testimonio__role">${t.role}</span>
                    </div>
                </div>
            </div>
        `;
    }

    function renderDots() {
        dotsContainer.innerHTML = testimoniosData.map((_, i) => 
            `<button class="dot ${i === 0 ? 'dot--active' : ''}" data-dot="${i}" aria-label="Ir al testimonio ${i + 1}" ${i === 0 ? 'aria-current="true"' : ''}></button>`
        ).join('');

        dotsContainer.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                currentIndex = parseInt(dot.dataset.dot, 10);
                updateSlider();
            });
        });
    }

    function updateSlider() {
        renderSlide(currentIndex);
        dotsContainer.querySelectorAll('.dot').forEach((dot, i) => {
            dot.classList.toggle('dot--active', i === currentIndex);
            dot.setAttribute('aria-current', i === currentIndex ? 'true' : 'false');
        });
    }

    // Auto-advance
    let autoAdvance = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimoniosData.length;
        updateSlider();
    }, 5000);

    // Pause on hover
    slider.addEventListener('mouseenter', () => clearInterval(autoAdvance));
    slider.addEventListener('mouseleave', () => {
        autoAdvance = setInterval(() => {
            currentIndex = (currentIndex + 1) % testimoniosData.length;
            updateSlider();
        }, 5000);
    });

    renderSlide(0);
    renderDots();
}

function renderQuickLinks() {
    const grid = document.getElementById('quickLinksGrid');
    if (!grid) return;

    grid.innerHTML = quickLinksData.map((link, index) => `
        <a href="${link.link}" class="card reveal" style="animation-delay: ${index * 100}ms; text-align: center; padding: var(--space-8);">
            <div class="icon icon--lg" aria-hidden="true">${link.icon}</div>
            <h3 class="card__title">${link.title}</h3>
            <p class="card__text">${link.description}</p>
            <span class="card__link">Explorar <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        </a>
    `).join('');
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

    // Close on link click
    navList.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navList.classList.contains('nav__list--open')) {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
            navToggle.focus();
        }
    });
}

// ===== HERO SCROLL DOWN =====
function initHeroScroll() {
    const scrollDownBtn = document.querySelector('.hero__scroll-down');
    if (!scrollDownBtn) return;

    scrollDownBtn.addEventListener('click', () => {
        const target = document.querySelector('.section--light');
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// ===== NEWSLETTER FORM =====
function initNewsletterForm() {
    const form = document.getElementById('newsletterForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = form.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        const formGroup = emailInput.closest('.form-group');
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Remove previous states
        formGroup.classList.remove('has-error', 'has-success');
        
        // Validate
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            formGroup.classList.add('has-error');
            emailInput.focus();
            return;
        }

        // Simulate submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Suscribiendo...';
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            formGroup.classList.add('has-success');
            form.reset();
            submitBtn.textContent = '¡Suscrito!';
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Suscribirme';
                formGroup.classList.remove('has-success');
            }, 3000);
        } catch {
            formGroup.classList.add('has-error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Suscribirme';
        }
    });
}

// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    let lastScroll = 0;
    const threshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > threshold) {
            header.style.background = 'rgba(10, 10, 18, 0.95)';
            header.style.borderBottomColor = 'rgba(139, 92, 246, 0.3)';
        } else {
            header.style.background = 'rgba(10, 10, 18, 0.85)';
            header.style.borderBottomColor = 'rgba(139, 92, 246, 0.15)';
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ===== ACTIVE NAV LINK =====
function initActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav__link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '' && href === 'index.html')) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
        }
    });
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    createStarfield();
    renderDestinos();
    renderExperiencias();
    renderTestimonios();
    renderQuickLinks();
    initRevealAnimations();
    initMobileNav();
    initHeroScroll();
    initNewsletterForm();
    initHeaderScroll();
    initActiveNav();
    
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

// Prefetch on hover
document.addEventListener('mouseover', (e) => {
    const link = e.target.closest('.nav__link, .card__link, .footer__list a');
    if (link && link.href) {
        preloadPage(link.href);
    }
}, { passive: true });