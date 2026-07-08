/**
 * navigation.js — أبو رضا للمقاولات
 * Handles mobile navigation toggle and active page link highlighting.
 */

/**
 * Initializes mobile nav toggle.
 * Toggles 'nav-open' on <body> when the hamburger button is clicked.
 * Closes nav when a link inside it is clicked or when overlay is tapped.
 */
export function initNavigation() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    menuBtn.setAttribute('aria-expanded', isOpen);
    menuBtn.querySelector('.menu-icon').textContent = isOpen ? 'close' : 'menu';
  });

  // Close nav when any nav link is clicked
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.querySelector('.menu-icon').textContent = 'menu';
    });
  });
}

/**
 * Highlights the current page's nav link by matching href to current pathname.
 * Adds the active class to the matching link in both desktop and mobile navs.
 */
export function highlightActiveLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('a[data-nav]').forEach((link) => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPath) {
      link.classList.add('nav-active');
    } else {
      link.classList.remove('nav-active');
    }
  });
}

/**
 * Adds a subtle background to the navbar when scrolled past threshold.
 */
export function initStickyNav() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const THRESHOLD = 10;
  const onScroll = () => {
    if (window.scrollY > THRESHOLD) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
}
