(function () {
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    root.setAttribute('data-theme', stored || (prefersLight ? 'light' : 'dark'));

    document.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelector('.theme-toggle');
        if (!button) return;

        const update = () => {
            const light = root.getAttribute('data-theme') === 'light';
            button.setAttribute('aria-pressed', String(light));
            button.setAttribute('aria-label', light ? 'Dunkles Design aktivieren' : 'Helles Design aktivieren');
        };
        update();

        button.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            update();
        });
    });
})();
