"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
            (_a = document.querySelector(`.nav__menu a[href*="#${sectionId}"]`)) === null || _a === void 0 ? void 0 : _a.classList.add('active-link');
        else
            (_b = document.querySelector(`.nav__menu a[href*="#${sectionId}"]`)) === null || _b === void 0 ? void 0 : _b.classList.remove('active-link');
    });
};
window.addEventListener('scroll', scrollActive);
function scaleCv() {
    document.body.classList.add('scale-cv');
}
function removeScale() {
    document.body.classList.remove('scale-cv');
}
function downloadPDF(elem) {
    let opt = {
        margin: 0,
        filename: 'YegorZhukovskiyResume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { format: 'a4', orientation: 'portrait' }
    };
    //@ts-ignore
    return html2pdf(elem, opt);
}
let resumeButton = document.getElementById('button-pdf');
resumeButton === null || resumeButton === void 0 ? void 0 : resumeButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    let toPDF = document.getElementById('to-pdf');
    if (!toPDF)
        return;
    scaleCv();
    yield downloadPDF(toPDF);
    removeScale();
}));
