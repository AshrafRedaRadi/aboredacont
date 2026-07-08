/**
 * main.js — أبو رضا للمقاولات
 * Main entry point. Uses static imports (no dynamic import()) so the
 * site works correctly on both file:// and http:// protocols.
 * Page-specific init is gated by the data-page attribute on <body>.
 */

import { initNavigation, highlightActiveLink, initStickyNav } from './navigation.js';
import { initScrollReveal, revealAboveFold } from './animations.js';
import { initContactButtons } from './contact-buttons.js';
import { initHeroSlider } from './hero-slider.js';
import { renderHomepageProjects, renderAllProjects } from './projects-render.js';

function initPage() {
  const page = document.body.getAttribute('data-page');

  // ── Always-on modules ──────────────────────────────────────────
  initNavigation();
  highlightActiveLink();
  initStickyNav();
  initContactButtons();

  // ── Page-specific modules ──────────────────────────────────────
  if (page === 'home') {
    initHeroSlider();
    renderHomepageProjects();
  }

  if (page === 'projects') {
    renderAllProjects();
  }

  // IMPORTANT: initScrollReveal() MUST run before revealAboveFold()
  // because it adds 'js-ready' to <html>, which activates the CSS
  // animation system. Without that class, revealAboveFold() adds
  // 'is-visible' to elements that the CSS isn't yet hiding — no-op.
  initScrollReveal();    // 1. Activate animation CSS + set up observer
  revealAboveFold();     // 2. Immediately reveal above-fold elements
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPage);
} else {
  initPage();
}
