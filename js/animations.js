/**
 * animations.js — أبو رضا للمقاولات
 * IntersectionObserver-based scroll reveal for [data-animate] elements.
 * Works with CSS transitions defined in site.css.
 */

export function initScrollReveal() {
  // ── Step 1: Activate the CSS animation system ──────────────────
  // Adding 'js-ready' to <html> switches [data-animate] elements from
  // "visible by default" to "hidden, ready to reveal on scroll".
  // This must happen BEFORE we set up the observer.
  document.documentElement.classList.add('js-ready');

  // If user prefers reduced motion, reveal all immediately and exit
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once revealed, stop observing to save resources
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.08,         // Trigger when 8% visible
      rootMargin: '0px 0px -32px 0px',
    }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });
}

/**
 * Immediately reveals all animatable elements above the fold
 * so users don't see blank content on page load.
 */
export function revealAboveFold() {
  const viewportHeight = window.innerHeight;
  document.querySelectorAll('[data-animate]').forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight) {
      el.classList.add('is-visible');
    }
  });
}
