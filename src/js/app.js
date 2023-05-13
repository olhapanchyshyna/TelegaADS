import sliders from './modules/sliders';
import hamburger from './modules/hamburger';
import modals from './modules/modals';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () =>{
    hamburger('.navbar__open', '.navbar__close', '.navbar-collapse');
    modals();
    scrolling();
    sliders();
})
