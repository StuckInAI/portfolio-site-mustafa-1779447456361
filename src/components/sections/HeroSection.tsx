import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'React Specialist', 'Open Source Contributor'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: any;
    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((roleIndex + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #6c63ff 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{
            background: 'radial-gradient(circle, #ff6584 0%, transparent 70%)',
            bottom: '100px',
            left: '-50px',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'linear-gradient(rgba(108,99,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(108,99,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#6c63ff]/10 border border-[#6c63ff]/20 rounded-full text-[#6c63ff] text-sm font-medium mb-8">
          <Sparkles size={14} />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="gradient-text">Alex Morgan</span>
        </h1>

        <div className="h-12 mb-6">
          <span className="text-2xl md:text-3xl font-semibold text-[#8888aa]">
            {displayed}
            <span className="animate-pulse text-[#6c63ff]">|</span>
          </span>
        </div>

        <p className="text-lg text-[#8888aa] max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft exceptional digital experiences with clean code and thoughtful design.
          Passionate about building products that make a real difference.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <button
            onClick={scrollToContact}
            className="px-8 py-3 bg-[#6c63ff] hover:bg-[#574fd6] text-white font-semibold rounded-xl transition-all duration-200 glow"
          >
            Get In Touch
          </button>
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl transition-all duration-200"
          >
            View Projects
          </button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-16">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Twitter, href: '#', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#8888aa] hover:text-[#6c63ff] hover:border-[#6c63ff]/50 transition-all duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="flex flex-col items-center gap-2 text-[#8888aa] animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={16} />
        </div>
      </div>
    </section>
  );
}
