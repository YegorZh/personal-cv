"use strict";
const showMenu = (toggleId, navId, toggleIconId) => {
    const toggle = document.getElementById(toggleId), nav = document.getElementById(navId), icon = document.getElementById(toggleIconId);
    if (toggle && nav && icon) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            icon.classList.toggle('rotate-toggle');
        });
    }
};
showMenu('nav-toggle', 'nav-menu', 'toggle-icon');
const linkAction = (navId, toggleIconId) => {
    const navMenu = document.getElementById(navId), icon = document.getElementById(toggleIconId);
    navMenu === null || navMenu === void 0 ? void 0 : navMenu.classList.remove('show-menu');
    icon === null || icon === void 0 ? void 0 : icon.classList.remove('rotate-toggle');
};
document.querySelectorAll('.nav__link')
    .forEach(n => n.addEventListener('click', () => linkAction('nav-menu', 'toggle-icon')));
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    document.querySelectorAll('section[id]').forEach(current => {
        var _a, _b;
        const section = current;
        const sectionHeight = section.offsetHeight, sectionTop = section.offsetTop - 50, sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            (_a = document.querySelector('nav__menu a[href*=' + sectionId + ']')) === null || _a === void 0 ? void 0 : _a.classList.add('active-link');
        else
            (_b = document.querySelector('nav__menu a[href*=' + sectionId + ']')) === null || _b === void 0 ? void 0 : _b.classList.remove('active-link');
    });
};
window.addEventListener('scroll', scrollActive);
