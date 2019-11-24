import ScrollNav from './ScrollNav.js'

/**
 * Init
 * @requires {class} ScrollNav
 */
let anchorLinks = document.querySelectorAll('.js-page-nav a[href^="#"]');
let mqMed = window.matchMedia('(min-width: 32em)');
let anchorOffset = 200;

if (mqMed.matches) {
  let anchorOffset = 270;
}

let PageNav = new ScrollNav(anchorLinks, anchorOffset);

PageNav.init()
