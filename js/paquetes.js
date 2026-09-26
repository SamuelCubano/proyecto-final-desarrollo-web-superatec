const packageData = [
    {
        id: 'aurora',
        tag: 'Más vendido',
        title: 'Aurora Privada',
        location: 'Archipiélago Helado',
        category: 'romance',
        description: 'Una escapada íntima con cena privada, spa y suite panorámica de cristal.',
        features: ['3 noches en suite aurora', 'Cena privada romántica', 'Spa para dos', 'Traslados privados'],
        price: '$2.850',
        cta: 'Reservar experiencia'
    },
    {
        id: 'andino',
        tag: 'Aventura',
        title: 'Ruta Andina',
        location: 'Santuario Andino',
        category: 'adventure',
        description: 'Senderos de altura, aguas termales y noches de observación guiada en el corazón de los Andes.',
        features: ['4 noches de montaña', 'Observación premium', 'Termas naturales', 'Guía especializado'],
        price: '$1.980',
        cta: 'Reservar aventura'
    },
    {
        id: 'oasis',
        tag: 'Relax',
        title: 'Silencio del Desierto',
        location: 'Oasis del Desierto',
        category: 'relax',
        description: 'Desconecta en un refugio minimalista entre dunas, con yoga al amanecer y piscinas de sal.',
        features: ['5 noches todo incluido', 'Yoga y meditación', 'Piscinas de sal', 'Ritual de bienestar'],
        price: '$2.240',
        cta: 'Reservar descanso'
    },
    {
        id: 'maldivas',
        tag: 'Premium',
        title: 'Villa sobre el Mar',
        location: 'Maldivas del Norte',
        category: 'romance',
        description: 'Villa flotante, mayordomo personal y una noche de cine privado.',
        features: ['5 noches en villa flotante', 'Mayordomo personal', 'Cena en el agua', 'Snorkel guiado'],
        price: '$4.120',
        cta: 'Reservar lujo'
    },
    {
        id: 'cosmos',
        tag: 'Expedición',
        title: 'Expedición Andina',
        location: 'Santuario Andino',
        category: 'adventure',
        description: 'Telescopios, charlas y campamento premium para amantes de la naturaleza.',
        features: ['6 noches de expedición', 'Telescopio robótico', 'Campamento premium', 'Fotografía nocturna'],
        price: '$3.360',
        cta: 'Unirme a la expedición'
    },
    {
        id: 'wellness',
        tag: 'Bienestar',
        title: 'Reset Wellness',
        location: 'Oasis del Desierto',
        category: 'relax',
        description: 'Programa de bienestar integral con terapias, nutrición y silencios al atardecer.',
        features: ['7 noches de bienestar', 'Programa personalizado', 'Terapias relajantes', 'Chef nutricional'],
        price: '$3.780',
        cta: 'Empezar el reset'
    }
];

const packagesGrid = document.getElementById('packagesGrid');
const filters = document.querySelectorAll('.package-filter');
const emptyState = document.getElementById('emptyState');
const modal = document.getElementById('bookingModal');
const openBooking = document.getElementById('openBooking');
const closeButtons = document.querySelectorAll('[data-close-modal]');
const bookingForm = document.getElementById('bookingForm');
const bookingSuccess = document.getElementById('bookingSuccess');
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

function renderPackages() {
    if (!packagesGrid) return;

    packagesGrid.innerHTML = packageData.map((item, index) => `
        <article class="package-card reveal" data-category="${item.category}" style="animation-delay: ${index * 80}ms">
            <span class="package-card__tag">${item.tag}</span>
            <p class="package-card__location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${item.location}
            </p>
            <h3 class="package-card__title">${item.title}</h3>
            <p class="package-card__description">${item.description}</p>
            <ul class="package-card__features">
                ${item.features.map(feature => `
                    <li class="package-card__feature">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
            <div class="package-card__footer">
                <div class="package-card__price">Desde<strong>${item.price}</strong></div>
                <button class="package-card__button" type="button" data-package="${item.title}">${item.cta}<span aria-hidden="true">→</span></button>
            </div>
        </article>
    `).join('');

    packagesGrid.querySelectorAll('[data-package]').forEach(button => {
        button.addEventListener('click', () => openModal(button.dataset.package));
    });

    initReveal();
}

function filterPackages(category) {
    const cards = packagesGrid.querySelectorAll('.package-card');
    let visibleCount = 0;

    cards.forEach(card => {
        const isVisible = category === 'all' || card.dataset.category === category;
        card.classList.toggle('is-hidden', !isVisible);
        if (isVisible) {
            visibleCount += 1;
            card.classList.add('reveal--visible');
        }
    });

    emptyState.hidden = visibleCount !== 0;
}

function initFilters() {
    filters.forEach(filter => {
        filter.addEventListener('click', () => {
            filters.forEach(item => {
                const isActive = item === filter;
                item.classList.toggle('is-active', isActive);
                item.setAttribute('aria-pressed', String(isActive));
            });
            filterPackages(filter.dataset.filter);
        });
    });
}

function openModal(packageName = '') {
    if (!modal) return;

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    if (packageName) {
        const notes = document.getElementById('bookingNotes');
        if (notes) {
            notes.value = `Me interesa el paquete: ${packageName}`;
        }
    }

    setTimeout(() => document.getElementById('bookingName')?.focus(), 100);
}

function closeModal() {
    if (!modal) return;

    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    openBooking?.focus();
}

function initModal() {
    openBooking?.addEventListener('click', () => openModal());
    closeButtons.forEach(button => button.addEventListener('click', closeModal));

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && modal?.classList.contains('is-open')) {
            closeModal();
        }
    });
}

function initBookingForm() {
    if (!bookingForm) return;

    bookingForm.addEventListener('submit', event => {
        event.preventDefault();
        const requiredFields = bookingForm.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            const group = field.closest('.form-group');
            const isFilled = field.value.trim() !== '';
            const isEmail = field.type === 'email';
            const emailIsValid = !isEmail || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
            const fieldIsValid = isFilled && emailIsValid;

            group?.classList.toggle('has-error', !fieldIsValid);
            if (!fieldIsValid) isValid = false;
        });

        if (!isValid) {
            bookingForm.querySelector('.has-error input, .has-error select')?.focus();
            return;
        }

        const submitButton = bookingForm.querySelector('[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar solicitud';
            bookingSuccess.classList.add('is-visible');
            bookingForm.reset();
            setTimeout(() => bookingSuccess.classList.remove('is-visible'), 5000);
        }, 1200);
    });

    bookingForm.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('input', () => field.closest('.form-group')?.classList.remove('has-error'));
    });
}

function initMobileNav() {
    if (!navToggle || !navList) return;

    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('nav__list--open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
    });

    navList.querySelectorAll('.nav__link').forEach(link => {
        link.addEventListener('click', () => {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
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

    revealElements.forEach(element => observer.observe(element));
}

function initHeader() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 80;
        header.style.background = isScrolled ? 'rgba(253, 251, 247, .96)' : '';
        header.style.borderBottomColor = isScrolled ? 'rgba(196, 168, 130, .3)' : '';
    }, { passive: true });
}

renderPackages();
initFilters();
initModal();
initBookingForm();
initMobileNav();
initHeader();
initReveal();
