import { useState } from 'react';
import { CheckCircle2, Briefcase } from 'lucide-react';
import clsx from 'clsx';
import { experiences } from '@/data/portfolio';

export default function ExperienceSection() {
  const [activeId, setActiveId] = useState(1);
  const active = experiences.find(e => e.id === activeId)!;

  return (
    <section id="experience" className="py-24 px-6 bg-[#16162a]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">Work History</p>
          <h2 className="text-4xl font-bold text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="flex flex-col gap-3">
            {experiences.map(exp => (
              <button
                key={exp.id}
                onClick={() => setActiveId(exp.id)}
                className={clsx(
                  'text-left p-4 rounded-xl border transition-all duration-200',
                  activeId === exp.id
                    ? 'bg-[#6c63ff]/10 border-[#6c63ff]/40 text-white'
                    : 'bg-[#1e1e35] border-white/5 text-[#8888aa] hover:border-white/20'
                )}
              >
                <p className="font-semibold text-sm">{exp.role}</p>
                <p className="text-xs mt-0.5 opacity-70">{exp.company}</p>
                <p className="text-xs mt-1 text-[#6c63ff]">{exp.period}</p>
              </button>
            ))}
          </div>

          {/* Detail */}
          <div className="md:col-span-2 bg-[#1e1e35] border border-white/5 rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-[#6c63ff]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Briefcase size={22} className="text-[#6c63ff]" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">{active.role}</h3>
                <p className="text-[#6c63ff] font-medium">{active.company}</p>
                <p className="text-[#8888aa] text-sm mt-0.5">{active.period}</p>
              </div>
            </div>

            <p className="text-[#8888aa] leading-relaxed mb-6">{active.description}</p>

            <h4 className="text-white font-semibold mb-4">Key Achievements</h4>
            <ul className="flex flex-col gap-3">
              {active.achievements.map((ach, i) => (
                <li key={i} className="flex items-start gap-3 text-[#8888aa] text-sm">
                  <CheckCircle2 size={16} className="text-[#6c63ff] flex-shrink-0 mt-0.5" />
                  {ach}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
