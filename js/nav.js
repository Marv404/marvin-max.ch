const header = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

if (header && toggle) {
    toggle.addEventListener('click', () => {
        const open = header.classList.toggle('nav-open');
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Menü schliessen' : 'Menü öffnen');
    });
}
