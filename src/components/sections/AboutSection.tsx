import { Code2, Coffee, Globe, Award } from 'lucide-react';

const stats = [
  { icon: Code2, value: '5+', label: 'Years Experience' },
  { icon: Globe, value: '30+', label: 'Projects Delivered' },
  { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
  { icon: Award, value: '8', label: 'Awards Won' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar / Visual */}
          <div className="relative flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Rotating border */}
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, #6c63ff, #ff6584)',
                  padding: '3px',
                  borderRadius: '24px',
                }}
              >
                <div className="w-full h-full bg-[#16162a] rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl font-bold"
                      style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)' }}
                    >
                      AM
                    </div>
                    <p className="text-white font-semibold">Alex Morgan</p>
                    <p className="text-[#8888aa] text-sm">Full Stack Dev</p>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#6c63ff] text-white text-xs font-bold px-3 py-2 rounded-xl glow-sm">
                5+ yrs
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#ff6584] text-white text-xs font-bold px-3 py-2 rounded-xl">
                Open to Work
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <p className="text-[#6c63ff] text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-white mb-6">
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-[#8888aa] leading-relaxed mb-4">
              I'm a passionate full-stack developer with over 5 years of experience building
              scalable web applications. I love turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>
            <p className="text-[#8888aa] leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or hiking in the mountains. I believe great software comes
              from a perfect blend of technical excellence and creative thinking.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-[#16162a] border border-white/5 rounded-xl p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#6c63ff]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-[#6c63ff]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-none">{value}</p>
                    <p className="text-[#8888aa] text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
