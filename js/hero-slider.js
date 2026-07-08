/**
 * hero-slider.js — أبو رضا للمقاولات
 * Auto-rotating hero image slider with dot navigation.
 * Supports keyboard navigation and reduced-motion preference.
 */

export function initHeroSlider() {
  const container = document.getElementById('hero-slider');
  if (!container) return;

  const slides = container.querySelectorAll('.slide');
  const dots = container.querySelectorAll('.slider-dot');

  if (slides.length === 0) return;

  let currentIndex = 0;
  let intervalId = null;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /** Transition to a specific slide index */
  const goToSlide = (targetIndex) => {
    // Deactivate current
    slides[currentIndex].classList.remove('opacity-100', 'z-10');
    slides[currentIndex].classList.add('opacity-0', 'z-0');
    dots[currentIndex]?.classList.remove('dot-active');
    dots[currentIndex]?.classList.add('dot-inactive');

    // Activate target
    currentIndex = ((targetIndex % slides.length) + slides.length) % slides.length;
    slides[currentIndex].classList.remove('opacity-0', 'z-0');
    slides[currentIndex].classList.add('opacity-100', 'z-10');
    dots[currentIndex]?.classList.add('dot-active');
    dots[currentIndex]?.classList.remove('dot-inactive');
  };

  const nextSlide = () => goToSlide(currentIndex + 1);

  const startAutoplay = () => {
    if (prefersReducedMotion) return;
    intervalId = setInterval(nextSlide, 6000);
  };

  const resetAutoplay = () => {
    clearInterval(intervalId);
    startAutoplay();
  };

  // Wire dot buttons
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      goToSlide(i);
      resetAutoplay();
    });
  });

  // Pause on hover / focus (accessibility)
  container.addEventListener('mouseenter', () => clearInterval(intervalId));
  container.addEventListener('mouseleave', startAutoplay);
  container.addEventListener('focusin', () => clearInterval(intervalId));
  container.addEventListener('focusout', startAutoplay);

  // Keyboard: left/right arrows (works in RTL context too)
  container.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { nextSlide(); resetAutoplay(); }
    if (e.key === 'ArrowRight') { goToSlide(currentIndex - 1); resetAutoplay(); }
  });

  // Initialize state
  goToSlide(0);
  startAutoplay();
}
