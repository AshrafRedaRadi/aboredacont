/**
 * projects-render.js — أبو رضا للمقاولات
 * Renders project cards from /data/projects.js into HTML containers.
 *
 * Usage:
 *   - Homepage: renders featured projects into #projects-grid-home
 *   - Projects page: renders all projects into #projects-grid with filter support
 */

import { projects, getFeaturedProjects, getProjectsByCategory } from '../data/projects.js';

/** Category color mapping for category label chips */
const categoryColors = {
  'فلل':      'text-accent-orange',
  'عمائر':    'text-secondary',
  'ترميم':    'text-[#2D7D46]',
  'إنشاءات':  'text-primary-fixed-dim',
  'ملاحق':    'text-[#5B6FA6]',
};

/**
 * Builds the HTML string for a single project card.
 * @param {Object} project - Project data object from projects.js
 * @returns {string} HTML string
 */
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
        <!-- Category chip -->
        <div class="absolute top-4 right-4 z-10">
          <span class="bg-white/95 backdrop-blur text-[#191c1d] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm border border-[#c5c6cd]/20">
            ${project.category}
          </span>
        </div>
        <!-- Status chip -->
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

/**
 * Renders featured projects into the homepage preview grid.
 */
export function renderHomepageProjects() {
  const grid = document.getElementById('projects-grid-home');
  if (!grid) return;

  const featured = getFeaturedProjects();
  grid.innerHTML = featured.map(buildProjectCard).join('');
}

/**
 * Renders all projects into the full projects page grid.
 * Also sets up the category filter buttons.
 */
export function renderAllProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  // Initial render: all projects
  renderProjectsInGrid(grid, projects);

  // Wire up filter buttons
  const filterBtns = document.querySelectorAll('[data-filter]');
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-filter');

      // Update active button styles
      filterBtns.forEach((b) => {
        b.classList.remove('bg-[#191c1d]', 'text-white');
        b.classList.add('bg-white', 'border', 'border-[#c5c6cd]/40', 'text-[#44474d]');
      });
      btn.classList.add('bg-[#191c1d]', 'text-white');
      btn.classList.remove('bg-white', 'border', 'border-[#c5c6cd]/40', 'text-[#44474d]');

      // Filter and re-render
      const filtered = getProjectsByCategory(cat);
      renderProjectsInGrid(grid, filtered);
    });
  });
}

/**
 * Helper: clears and refills a grid container with project cards.
 * Re-triggers scroll reveal for newly rendered cards.
 */
function renderProjectsInGrid(grid, projectList) {
  grid.innerHTML = projectList.map(buildProjectCard).join('');

  // Trigger animation for newly injected cards
  requestAnimationFrame(() => {
    grid.querySelectorAll('[data-animate]').forEach((el) => {
      el.classList.add('is-visible');
    });
  });
}
