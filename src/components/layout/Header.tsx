import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { navItems } from '@/data/portfolio';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map(item => item.href.replace('#', ''));
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-[#0f0f1a]/95 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo('#hero')}
          className="text-xl font-bold gradient-text"
        >
          Alex<span className="text-white">.</span>dev
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={clsx(
                'text-sm font-medium transition-colors duration-200',
                activeSection === item.href.replace('#', '')
                  ? 'text-[#6c63ff]'
                  : 'text-[#8888aa] hover:text-white'
              )}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contact')}
            className="px-4 py-2 bg-[#6c63ff] hover:bg-[#574fd6] text-white text-sm font-medium rounded-lg transition-colors duration-200"
          >
            Hire Me
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#16162a] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navItems.map(item => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className={clsx(
                'text-sm font-medium text-left transition-colors duration-200',
                activeSection === item.href.replace('#', '')
                  ? 'text-[#6c63ff]'
                  : 'text-[#8888aa]'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
