import { Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#16162a] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[#8888aa] text-sm">
          © 2024 Alex Morgan. Made with{' '}
          <Heart size={12} className="inline text-[#ff6584]" fill="#ff6584" />{' '}
          using React & Tailwind
        </p>
        <div className="flex items-center gap-4">
          {[
            { icon: Github, href: '#', label: 'GitHub' },
            { icon: Twitter, href: '#', label: 'Twitter' },
            { icon: Linkedin, href: '#', label: 'LinkedIn' },
            { icon: Mail, href: '#', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-[#8888aa] hover:text-[#6c63ff] transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
