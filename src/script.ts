const showMenu = (toggleId: string, navId: string, toggleIconId: string) => {
    const
        toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId),
        icon = document.getElementById(toggleIconId);

    if (toggle && nav && icon) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu');
            icon.classList.toggle('rotate-toggle');
        })
    }
}
showMenu('nav-toggle', 'nav-menu', 'toggle-icon');


const linkAction = (navId: string, toggleIconId: string) => {
    const navMenu = document.getElementById(navId),
        icon = document.getElementById(toggleIconId);

    navMenu?.classList.remove('show-menu');
    icon?.classList.remove('rotate-toggle');
}
document.querySelectorAll('.nav__link')
    .forEach(n => n.addEventListener('click', () => linkAction('nav-menu', 'toggle-icon')));

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    document.querySelectorAll('section[id]').forEach(current => {
        const section = current as HTMLDivElement;
        const
            sectionHeight = section.offsetHeight,
            sectionTop = section.offsetTop - 50,
            sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector(`.nav__menu a[href*="#${sectionId}"]`)?.classList.add('active-link');
        else
            document.querySelector(`.nav__menu a[href*="#${sectionId}"]`)?.classList.remove('active-link');
    })
}
window.addEventListener('scroll', scrollActive);