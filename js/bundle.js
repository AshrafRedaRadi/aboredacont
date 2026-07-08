/**
 * bundle.js — أبو رضا للمقاولات
 * Bundled version of all modules to run directly on file:// without CORS issues.
 */
(function() {
  // --- data/projects.js ---
  const projects = [
    {
      id: 1, title: "بناء فيلا سكنية – مرحلة العظم", category: "فلل", categoryType: "villas",
      status: "مرحلة العظم", location: "بريدة، القصيم", image: "assets/images/home/main-1.webp",
      alt: "صورة مشروع بناء فيلا سكنية في بريدة – أعمال هيكل إنشائي",
      description: "تنفيذ أعمال الهيكل الإنشائي لفيلا سكنية في القصيم، مع الالتزام الكامل بالمخططات الهندسية واستخدام أجود أنواع الخرسانة والحديد لضمان المتانة.",
      featured: true,
    },
    {
      id: 2, title: "إنشاء عمارة سكنية تجارية", category: "عمائر", categoryType: "buildings",
      status: "قيد الإنشاء", location: "طريق الملك عبدالعزيز، بريدة", image: "assets/images/home/hero-bg-2.webp",
      alt: "صورة مشروع إنشاء عمارة سكنية حديثة متعددة الأدوار في بريدة",
      description: "مشروع إنشاء عمارة متعددة الأدوار، نركز فيه على دقة صب الخرسانة وتسليح الأسقف وفق أعلى معايير السلامة الإنشائية في قلب مدينة بريدة.",
      featured: true,
    },
    {
      id: 3, title: "ترميم وتدعيم مبنى سكني", category: "ترميم", categoryType: "restoration",
      status: "تجديد إنشائي", location: "وسط بريدة، القصيم", image: "assets/images/services/service-3.webp",
      alt: "أعمال ترميم مبنى سكني في بريدة – تدعيم هيكل إنشائي وتجديد واجهات",
      description: "أعمال ترميم شاملة تشمل تدعيم الهيكل الإنشائي ومعالجة التصدعات وتجديد الواجهات الخارجية مع الحفاظ على الطابع المعماري الأصيل للمبنى.",
      featured: true,
    },
    {
      id: 4, title: "أعمال الهيكل الإنشائي والخرسانة", category: "إنشاءات", categoryType: "construction",
      status: "صب خرسانة", location: "المنطقة الصناعية، القصيم", image: "assets/images/services/service-4.webp",
      alt: "تنفيذ أعمال الهيكل الإنشائي والخرسانة المسلحة لمشروع تجاري في القصيم",
      description: "تنفيذ دقيق لأعمال النجارة والحدادة المسلحة وصب الخرسانة الجاهزة لمشروع تجاري ضخم، مع مراقبة جودة التنفيذ في كل مرحلة إنشائية.",
      featured: false,
    },
    {
      id: 5, title: "تطوير قصر سكني فاخر", category: "فلل", categoryType: "villas",
      status: "منجز", location: "بريدة، القصيم", image: "assets/images/home/main-2.webp",
      alt: "مشروع بناء وتشييد قصر سكني فاخر في بريدة لأبو رضا للمقاولات",
      description: "تنفيذ متكامل لقصر سكني فاخر من الأساس حتى التسليم، يشمل الهيكل الخرساني وجميع الأعمال الإنشائية بأعلى معايير الجودة.",
      featured: false,
    },
    {
      id: 6, title: "إنشاء ملحق سكني وتجاري", category: "ملاحق", categoryType: "annexes",
      status: "منجز", location: "القصيم", image: "assets/images/home/hero-bg-2.webp",
      alt: "مشروع إنشاء ملحق سكني وتجاري في القصيم – أعمال بناء وتشييد",
      description: "تصميم وتنفيذ ملحق سكني وتجاري متعدد الاستخدامات، مع الاهتمام بجودة التشطيب وضمان التوافق مع المبنى الأصلي.",
      featured: false,
    },
    {
      id: 7, title: "ترميم استراحة سكنية", category: "ترميم", categoryType: "restoration",
      status: "منجز", location: "بريدة، القصيم", image: "assets/images/services/service-5.webp",
      alt: "أعمال ترميم واسعة لاستراحة سكنية في بريدة – إصلاح وتأهيل",
      description: "إعادة تأهيل شاملة لاستراحة سكنية تشمل معالجة الأجزاء المتضررة ورفع الكفاءة الإنشائية وتجديد التشطيبات الداخلية والخارجية.",
      featured: false,
    },
    {
      id: 8, title: "مشروع بناء عمارة سكنية – عظم وتشطيب", category: "عمائر", categoryType: "buildings",
      status: "منجز", location: "شمال بريدة، القصيم", image: "assets/images/services/service-4.webp",
      alt: "مشروع بناء عمارة سكنية متعددة الطوابق في بريدة – أعمال عظم وتشطيب خارجي",
      description: "تنفيذ أعمال العظم الإنشائي والتشطيب الخارجي لعمارة سكنية متعددة الطوابق في شمال بريدة، وفق المخططات الهندسية المعتمدة.",
      featured: false,
    },
    {
      id: 9, title: "تشييد مجمع تجاري – القصيم", category: "إنشاءات", categoryType: "construction",
      status: "منجز", location: "القصيم", image: "assets/images/services/service-1.webp",
      alt: "مشروع تشييد مجمع تجاري في القصيم – أعمال بناء وتشييد متكاملة",
      description: "أعمال البناء والتشييد لمجمع تجاري متكامل تشمل الهيكل الخرساني والأعمال الإنشائية الكاملة، مع ضمان الجودة في كل مرحلة.",
      featured: false,
    }
  ];

  const getFeaturedProjects = () => projects.filter((p) => p.featured);
  const getProjectsByCategory = (categoryType) => categoryType === "all" ? projects : projects.filter((p) => p.categoryType === categoryType);

  // --- js/contact-buttons.js ---
  const PHONE = '+966547341260';
  const WHATSAPP_URL = 'https://wa.me/966547341260';
  const PHONE_URL = `tel:${PHONE}`;

  function initContactButtons() {
    const phoneBtn = document.getElementById('fab-phone');
    const waBtn = document.getElementById('fab-whatsapp');

    if (phoneBtn) {
      phoneBtn.setAttribute('href', PHONE_URL);
      phoneBtn.setAttribute('aria-label', `اتصل بأبو رضا للمقاولات: ${PHONE}`);
    }

    if (waBtn) {
      waBtn.setAttribute('href', WHATSAPP_URL);
      waBtn.setAttribute('aria-label', `تواصل عبر واتساب مع أبو رضا للمقاولات: ${PHONE}`);
    }
  }

  // --- js/navigation.js ---
  function initNavigation() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (!menuBtn || !mobileNav) return;

    menuBtn.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('nav-open');
      menuBtn.setAttribute('aria-expanded', isOpen);
      menuBtn.querySelector('.menu-icon').textContent = isOpen ? 'close' : 'menu';
    });

    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.querySelector('.menu-icon').textContent = 'menu';
      });
    });
  }

  function highlightActiveLink() {
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

  // --- js/animations.js ---
  function initScrollReveal() {
    document.documentElement.classList.add('js-ready');

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
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -32px 0px',
      }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });
  }

  function revealAboveFold() {
    const viewportHeight = window.innerHeight;
    document.querySelectorAll('[data-animate]').forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportHeight) {
        el.classList.add('is-visible');
      }
    });
  }

  // --- js/hero-slider.js ---
  function initHeroSlider() {
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

    const goToSlide = (targetIndex) => {
      slides[currentIndex].classList.remove('opacity-100', 'z-10');
      slides[currentIndex].classList.add('opacity-0', 'z-0');
      dots[currentIndex]?.classList.remove('dot-active');
      dots[currentIndex]?.classList.add('dot-inactive');

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

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        resetAutoplay();
      });
    });

    container.addEventListener('mouseenter', () => clearInterval(intervalId));
    container.addEventListener('mouseleave', startAutoplay);
    container.addEventListener('focusin', () => clearInterval(intervalId));
    container.addEventListener('focusout', startAutoplay);

    container.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') { nextSlide(); resetAutoplay(); }
      if (e.key === 'ArrowRight') { goToSlide(currentIndex - 1); resetAutoplay(); }
    });

    goToSlide(0);
    startAutoplay();
  }

  // --- js/projects-render.js ---
  const categoryColors = {
    'فلل':      'text-accent-orange',
    'عمائر':    'text-secondary',
    'ترميم':    'text-[#2D7D46]',
    'إنشاءات':  'text-primary-fixed-dim',
    'ملاحق':    'text-[#5B6FA6]',
  };

  function buildProjectCard(project) {
    const categoryColor = categoryColors[project.category] || 'text-accent-orange';

    return `
      <div class="project-card group rounded-xl overflow-hidden bg-white border border-[#c5c6cd]/20 shadow-sm flex flex-col h-full" data-animate data-category="${project.categoryType}">
        <div class="relative h-60 overflow-hidden bg-[#edeeef]">
          <img
            src="${project.image}"
            alt="${project.alt}"
            class="card-img w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          <div class="absolute top-4 right-4 z-10">
            <span class="bg-white/95 backdrop-blur text-[#191c1d] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#c5c6cd]/20">
              ${project.category}
            </span>
          </div>
          <div class="absolute top-4 left-4 z-10">
            <span class="bg-[#060D1A]/90 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm backdrop-blur">
              ${project.status}
            </span>
          </div>
        </div>
        <div class="p-6 flex flex-col flex-grow">
          <span class="text-sm font-semibold mb-2 block ${categoryColor}">${project.category}</span>
          <h3 class="text-xl font-bold text-[#191c1d] mb-3 group-hover:text-[#E67E22] transition-colors duration-300 line-clamp-1">
            ${project.title}
          </h3>
          <p class="text-[#44474d] text-base leading-relaxed mb-5 flex-grow line-clamp-3">
            ${project.description}
          </p>
          <div class="flex items-center justify-between text-sm text-[#44474d] border-t border-[#c5c6cd]/20 pt-4">
            <div class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-[#E67E22]" style="font-size:18px;">location_on</span>
              <span>${project.location}</span>
            </div>
            <span class="material-symbols-outlined text-[#c5c6cd] group-hover:text-[#E67E22] transition-colors group-hover:-translate-x-1 duration-300" style="font-size:20px; transform: scaleX(-1);">arrow_back</span>
          </div>
        </div>
      </div>
    `;
  }

  function renderHomepageProjects() {
    const grid = document.getElementById('projects-grid-home');
    if (!grid) return;

    const featured = getFeaturedProjects();
    grid.innerHTML = featured.map(buildProjectCard).join('');
  }

  function renderAllProjects() {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    renderProjectsInGrid(grid, projects);

    const filterBtns = document.querySelectorAll('[data-filter]');
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cat = btn.getAttribute('data-filter');

        filterBtns.forEach((b) => {
          b.classList.remove('bg-[#191c1d]', 'text-white');
          b.classList.add('bg-white', 'border', 'border-[#c5c6cd]/40', 'text-[#44474d]');
        });
        btn.classList.add('bg-[#191c1d]', 'text-white');
        btn.classList.remove('bg-white', 'border', 'border-[#c5c6cd]/40', 'text-[#44474d]');

        const filtered = getProjectsByCategory(cat);
        renderProjectsInGrid(grid, filtered);
      });
    });
  }

  function renderProjectsInGrid(grid, projectList) {
    grid.innerHTML = projectList.map(buildProjectCard).join('');

    requestAnimationFrame(() => {
      grid.querySelectorAll('[data-animate]').forEach((el) => {
        el.classList.add('is-visible');
      });
    });
  }

  function initStickyNav() {
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

  // --- js/main.js logic ---
  function initPage() {
    const page = document.body.getAttribute('data-page');

    initNavigation();
    highlightActiveLink();
    initStickyNav();
    initContactButtons();

    if (page === 'home') {
      initHeroSlider();
      renderHomepageProjects();
    }

    if (page === 'projects') {
      renderAllProjects();
    }

    initScrollReveal();
    revealAboveFold();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPage);
  } else {
    initPage();
  }
})();
