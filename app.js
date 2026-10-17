function __appInit() {
// ===== RENDER MODULES =====
    function renderModuleCard(m) {
      return `
        <article class="crystal-card rounded-xl p-5 hover:shadow-md transition group" data-module="${m.id}">
          <div class="flex items-start justify-between gap-2 mb-3">
            <span class="text-xs font-mono text-slate-400">[${String(m.id).padStart(2,'0')}]</span>
            <div class="flex flex-wrap gap-1 justify-end">
              ${m.stack.map(s => `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600">${s}</span>`).join('')}
            </div>
          </div>
          <div class="text-xs font-mono text-cobalt-600 mb-1">MÓDULO ${String(m.id).padStart(2,'0')} / AI ENGINEERING</div>
          <h3 class="font-bold text-slate-900 group-hover:text-cobalt-700 transition">${m.title}</h3>
          <p class="mt-2 text-sm text-slate-600 leading-relaxed">${m.desc}</p>
          <div class="mt-4 pt-3 border-t border-slate-100">
            <div class="text-[10px] font-mono text-slate-400 uppercase">Projeto ${String(m.id).padStart(2,'0')} / Preview</div>
            <div class="text-sm font-medium text-slate-800 mt-0.5">${m.project}</div>
          </div>
        </article>`;
    }

    document.querySelectorAll('[data-block]').forEach(el => {
      const block = el.dataset.block;
      el.innerHTML = modules.filter(m => m.block === block).map(renderModuleCard).join('');
    });

    const heroNodes = document.getElementById('hero-nodes');
    if (heroNodes) {
      heroNodes.innerHTML = modules.map(m => `
        <button class="module-node w-7 h-7 rounded-md bg-cobalt-100 hover:bg-cobalt-600 hover:text-white text-cobalt-700 text-xs font-mono font-medium flex items-center justify-center"
                data-id="${m.id}" title="${m.title}" aria-label="Módulo ${m.id}">
          ${String(m.id).padStart(2,'0')}
        </button>`).join('');

      heroNodes.addEventListener('click', e => {
        const btn = e.target.closest('[data-id]');
        if (!btn) return;
        const id = btn.dataset.id;
        document.querySelectorAll('.module-node').forEach(n => n.classList.remove('active','bg-cobalt-600','text-white'));
        btn.classList.add('active','bg-cobalt-600','text-white');
        const card = document.querySelector(`[data-module="${id}"]`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('ring-2','ring-cobalt-400');
          setTimeout(() => card.classList.remove('ring-2','ring-cobalt-400'), 2000);
        }
      });
    }

    const portfolioGrid = document.getElementById('portfolio-grid');
    if (portfolioGrid) {
      portfolioGrid.innerHTML = modules.map(m => `
        <article class="crystal-card rounded-xl p-5">
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-mono text-slate-400">PROJETO / ${String(m.id).padStart(2,'0')}</span>
            <span class="text-xs font-mono text-cobalt-600">SYS.${String(m.id).padStart(2,'0')}</span>
          </div>
          <div class="flex flex-wrap gap-1 mb-2">
            ${m.stack.map(s => `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600">${s}</span>`).join('')}
          </div>
          <h3 class="font-bold text-sm text-slate-900">${m.title}</h3>
          <p class="mt-2 text-sm font-medium text-cobalt-700">${m.project}</p>
          <p class="mt-1 text-xs text-slate-500">${m.meta}</p>
          <div class="mt-3 pt-2 border-t border-slate-100 text-[10px] font-mono text-slate-400">
            PROCESSO / ${m.stack.join(' → ')}
          </div>
        </article>`).join('');
    }

    const accordion = document.getElementById('grade-accordion');
    if (accordion) {
      accordion.innerHTML = modules.map(m => `
        <div class="crystal-card rounded-xl overflow-hidden">
          <button class="w-full flex items-center justify-between gap-4 p-4 text-left hover:bg-slate-50 transition" data-acc="${m.id}">
            <div class="flex items-center gap-3 min-w-0">
              <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-cobalt-50 text-cobalt-700 flex items-center justify-center text-xs font-mono font-bold">${String(m.id).padStart(2,'0')}</span>
              <div class="min-w-0">
                <div class="font-semibold text-sm text-slate-900 truncate">${m.title}</div>
                <div class="text-xs text-slate-500">${m.hours}h · ${m.cert}</div>
              </div>
            </div>
            <svg class="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform acc-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="hidden px-4 pb-4 border-t border-slate-100" data-panel="${m.id}">
            <div class="pt-4 grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <div class="text-xs font-mono text-slate-400 uppercase mb-1">Competências & Habilidades</div>
                <ul class="space-y-1 text-slate-700">${m.skills.map(s => `<li>• ${s}</li>`).join('')}</ul>
              </div>
              <div>
                <div class="text-xs font-mono text-slate-400 uppercase mb-1">Meta prática</div>
                <p class="text-slate-700">${m.meta}</p>
                <div class="mt-3 text-xs font-mono text-slate-400 uppercase mb-1">Carga / Certificação</div>
                <p class="text-slate-700">${m.hours}h · ${m.cert}</p>
                <div class="mt-3 text-xs font-mono text-slate-400 uppercase mb-1">Projeto</div>
                <p class="text-slate-700">${m.project}</p>
              </div>
            </div>
          </div>
        </div>`).join('');

      accordion.addEventListener('click', e => {
        const btn = e.target.closest('[data-acc]');
        if (!btn) return;
        const id = btn.dataset.acc;
        const panel = document.querySelector(`[data-panel="${id}"]`);
        const icon = btn.querySelector('.acc-icon');
        const open = !panel.classList.contains('hidden');
        document.querySelectorAll('[data-panel]').forEach(p => p.classList.add('hidden'));
        document.querySelectorAll('.acc-icon').forEach(i => i.classList.remove('rotate-180'));
        if (!open) {
          panel.classList.remove('hidden');
          icon.classList.add('rotate-180');
        }
      });
    }

    document.getElementById('menu-btn')?.addEventListener('click', () => {
      document.getElementById('mobile-menu').classList.toggle('hidden');
    });
    document.querySelectorAll('#mobile-menu a').forEach(a => {
      a.addEventListener('click', () => document.getElementById('mobile-menu').classList.add('hidden'));
    });

    const sections = ['hero','curriculum','portfolio','capstone','pricing','cycle','mentoring','coordinator','whatsapp'];
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
          const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
}
if (document.getElementById('curriculum') || document.querySelector('[data-block]')) {
  __appInit();
} else {
  window.__appInit = __appInit;
}
