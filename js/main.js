document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const nav = document.querySelector('#siteNav');
    const backdrop = document.querySelector('.menu-backdrop');

    const closeMenu = () => {
        document.body.classList.remove('menu-open');
        if (burger) burger.setAttribute('aria-expanded', 'false');
    };

    if (burger && nav) {
        burger.addEventListener('click', () => {
            const isOpen = document.body.classList.toggle('menu-open');
            burger.setAttribute('aria-expanded', String(isOpen));
        });

        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeMenu();
    });

    const animatedSelectors = [
        '.hero-content h1', '.hero-content p', '.hero-buttons',
        '.quote-content', '.services h2', '.projects h2', '.title-line',
        '.card', '.project-card', '.why-text', '.why-img', '.service-box',
        '.team-member', '.contact-form', '.contact-info', '.footer-col'
    ];

    const animatedElements = document.querySelectorAll(animatedSelectors.join(','));
    animatedElements.forEach((el, index) => {
        el.classList.add('reveal-on-scroll');
        el.style.setProperty('--delay', `${Math.min(index * 60, 420)}ms`);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    animatedElements.forEach(el => observer.observe(el));

    const contactForm = document.querySelector('.contact-form form');
    const successMessage = document.querySelector('.form-success-message');

    if (contactForm && successMessage) {
        contactForm.addEventListener('submit', (event) => {
            successMessage.classList.add('show');
        });
    }
});
