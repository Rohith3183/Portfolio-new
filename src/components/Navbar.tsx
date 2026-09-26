import React, { useState, useEffect } from 'react';
import { Menu, X, HeartPulse } from 'lucide-react';
import { DoctorProfile } from '../data/doctor';

interface NavbarProps {
  doctor: DoctorProfile;
}

export const Navbar: React.FC<NavbarProps> = ({ doctor }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'education', 'publications', 'experience', 'cases', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'ABOUT', href: '#about', id: 'about' },
    { label: 'Education', href: '#education', id: 'education' },
    { label: 'Publications', href: '#publications', id: 'publications' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Cases', href: '#cases', id: 'cases' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
          : 'bg-white/90 backdrop-blur-xs border-b border-slate-200/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <a
            href="#home"
            className="flex items-center gap-2.5 text-slate-900 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-600 text-white flex items-center justify-center shadow-xs group-hover:bg-sky-700 transition-colors">
              <HeartPulse className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-base md:text-lg font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                {doctor.prefix} {doctor.name}
              </span>
              <span className="block text-[11px] font-medium text-slate-500 leading-none">
                Consultant Cardiologist · Apollo
              </span>
            </div>
          </a>

          {/* Navigation Links matching wireframe: Home ABOUT Education Publications Experience Cases Contact */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-2 xl:gap-3 text-sm font-medium text-slate-600"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg transition-colors relative ${
                    isActive
                      ? 'text-sky-700 font-semibold bg-sky-50'
                      : 'hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-sky-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-hidden"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-sky-700 bg-sky-50 font-semibold'
                    : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
