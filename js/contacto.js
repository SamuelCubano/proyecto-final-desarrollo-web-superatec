const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');
const openSupport = document.getElementById('openSupport');
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

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

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && navList.classList.contains('nav__list--open')) {
            navList.classList.remove('nav__list--open');
            navToggle.setAttribute('aria-expanded', 'false');
            navToggle.focus();
        }
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

function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const required = contactForm.querySelectorAll('[required]');
        let isValid = true;

        required.forEach(field => {
            const group = field.closest('.form-group');
            const filled = field.value.trim() !== '';
            const emailOk = field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
            const fieldOk = filled && emailOk;
            group.classList.toggle('has-error', !fieldOk);
            if (!fieldOk) isValid = false;
        });

        if (!isValid) {
            contactForm.querySelector('.has-error input, .has-error select, .has-error textarea')?.focus();
            return;
        }

        const submitButton = contactForm.querySelector('[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar mensaje';
            contactSuccess.classList.add('is-visible');
            contactForm.reset();
            setTimeout(() => contactSuccess.classList.remove('is-visible'), 5000);
        }, 1200);
    });

    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => field.closest('.form-group')?.classList.remove('has-error'));
    });
}

function initSupportChat() {
    if (!openSupport) return;

    openSupport.addEventListener('click', () => {
        alert('Chat de soporte: conéctate en menos de 5 minutos por este medio. Soporte 24/7.');
    });
}

initReveal();
initMobileNav();
initHeader();
initContactForm();
initSupportChat();
