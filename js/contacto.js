const contactForm = document.getElementById('contactForm');
const contactSuccess = document.getElementById('contactSuccess');
const openSupport = document.getElementById('openSupport');
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');
const anonymousCheck = document.getElementById('anonymousCheck');

function initReveal() {
    const revealElements = document.querySelectorAll('.reveal:not(.reveal--visible)');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal--visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

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

function initAnonymousToggle() {
    if (!anonymousCheck) return;

    const fieldsToToggle = [
        { input: document.getElementById('contactName'), group: document.getElementById('groupName') },
        { input: document.getElementById('contactEmail'), group: document.getElementById('groupEmail') },
        { input: document.getElementById('contactPhone'), group: document.getElementById('groupPhone') }
    ];

    anonymousCheck.addEventListener('change', () => {
        const isAnon = anonymousCheck.checked;

        fieldsToToggle.forEach(({ input, group }) => {
            if (!input || !group) return;

            input.disabled = isAnon;
            group.classList.toggle('is-disabled', isAnon);
            group.classList.remove('has-error');

            if (isAnon) {
                input.value = '';
                input.removeAttribute('required');
            } else {
                if (input.id !== 'contactPhone') {
                    input.setAttribute('required', 'true');
                }
            }
        });
    });
}

function initContactForm() {
    if (!contactForm) return;

    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const requiredFields = contactForm.querySelectorAll('[required]:not([disabled])');
        let isValid = true;

        requiredFields.forEach(field => {
            const group = field.closest('.form-group');
            const filled = field.value.trim() !== '';
            const emailOk = field.type !== 'email' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value);
            const fieldOk = filled && emailOk;

            if (group) {
                group.classList.toggle('has-error', !fieldOk);
            }
            if (!fieldOk) isValid = false;
        });

        if (!isValid) {
            const firstError = contactForm.querySelector('.has-error input, .has-error select, .has-error textarea');
            if (firstError) firstError.focus();
            return;
        }

        const submitButton = contactForm.querySelector('[type="submit"]');
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando solicitud...';

        setTimeout(() => {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar Solicitud';
            if (contactSuccess) {
                contactSuccess.classList.add('is-visible');
            }

            contactForm.reset();
            if (anonymousCheck && anonymousCheck.checked) {
                anonymousCheck.checked = false;
                anonymousCheck.dispatchEvent(new Event('change'));
            }

            setTimeout(() => {
                if (contactSuccess) contactSuccess.classList.remove('is-visible');
            }, 6000);
        }, 1200);
    });

    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', () => {
            const group = field.closest('.form-group');
            if (group) group.classList.remove('has-error');
        });
    });
}

function initSupportChat() {
    if (!openSupport) return;

    openSupport.addEventListener('click', () => {
        alert('Abriendo ventana de chat en vivo con un agente de Astro Resorts...');
    });
}

initReveal();
initMobileNav();
initHeader();
initAnonymousToggle();
initContactForm();
initSupportChat();