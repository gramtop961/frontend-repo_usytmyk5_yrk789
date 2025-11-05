import React from 'react';

const projects = [
  {
    title: 'Systems Monitor',
    description: 'Lightweight cross-platform resource monitor with native UI and efficient sampling.',
    tags: ['C++', 'Electron', 'WASM'],
  },
  {
    title: 'Edge API Gateway',
    description: 'Fast, extensible gateway with rate limiting, JWT auth, and plugin architecture.',
    tags: ['Go', 'Redis', 'Docker'],
  },
  {
    title: 'Portfolio Site',
    description: 'Minimal, dark-themed personal site with 3D hero and accessible UI components.',
    tags: ['React', 'Tailwind', 'Spline'],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Projects</h2>
          <a href="#contact" className="hidden sm:inline-block text-sm text-neutral-300 hover:text-white transition">Work with me →</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden">
              {/* Replace the div below with a project image */}
              <div className="aspect-video bg-neutral-900/80" />
              <div className="p-5">
                <h3 className="text-lg font-medium group-hover:text-white/95">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-300 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[11px] rounded-full border border-white/15 bg-neutral-900 px-2.5 py-1 text-neutral-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
