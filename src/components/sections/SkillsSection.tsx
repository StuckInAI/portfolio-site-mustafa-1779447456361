import { useState } from 'react';
import clsx from 'clsx';
import { skills } from '@/data/portfolio';

type Category = 'all' | 'frontend' | 'backend' | 'tools';

const categoryLabels: Record<Category, string> = {
  all: 'All Skills',
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & Design',
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6 bg-[#16162a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="text-4xl font-bold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {(Object.keys(categoryLabels) as Category[]).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat
                  ? 'bg-[#6c63ff] text-white'
                  : 'bg-[#1e1e35] text-[#8888aa] hover:text-white border border-white/5'
              )}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(skill => (
            <div
              key={skill.name}
              className="bg-[#1e1e35] border border-white/5 rounded-xl p-5 card-hover"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-semibold">{skill.name}</span>
                <span className="text-[#6c63ff] text-sm font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${skill.level}%`,
                    background: 'linear-gradient(90deg, #6c63ff, #ff6584)',
                  }}
                />
              </div>
              <span
                className={clsx(
                  'mt-3 inline-block text-xs px-2 py-0.5 rounded-full font-medium',
                  skill.category === 'frontend' && 'bg-purple-500/10 text-purple-400',
                  skill.category === 'backend' && 'bg-blue-500/10 text-blue-400',
                  skill.category === 'tools' && 'bg-pink-500/10 text-pink-400'
                )}
              >
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
