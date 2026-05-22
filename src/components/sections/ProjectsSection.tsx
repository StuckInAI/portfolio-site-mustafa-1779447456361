import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import clsx from 'clsx';
import { projects } from '@/data/portfolio';

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">My Work</p>
          <h2 className="text-4xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#8888aa] mt-4 max-w-xl mx-auto">
            A selection of projects I've built — from side experiments to production systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map(project => (
            <div
              key={project.id}
              className="group bg-[#16162a] border border-white/5 rounded-2xl overflow-hidden card-hover"
            >
              {/* Project header gradient */}
              <div
                className={clsx('h-40 flex items-center justify-center relative overflow-hidden', `bg-gradient-to-br ${project.gradient}`)}
              >
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.15\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
                <span className="text-white font-bold text-2xl relative z-10">{project.title[0]}</span>
                {project.featured && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-full text-yellow-400 text-xs">
                    <Star size={10} fill="currentColor" /> Featured
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-[#6c63ff]/10 text-[#6c63ff] rounded-md border border-[#6c63ff]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex-1 flex items-center justify-center gap-2 py-2 bg-[#6c63ff] hover:bg-[#574fd6] text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-lg transition-colors"
                  >
                    <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-200"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
          </button>
        </div>
      </div>
    </section>
  );
}
