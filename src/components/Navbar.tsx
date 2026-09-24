import React, { useState, useEffect } from 'react';
import { Menu, X, Smartphone, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath = '/', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (currentPath !== '/') {
        e.preventDefault();
        if (onNavigate) onNavigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Normal anchor behavior on home page
        setIsMobileMenuOpen(false);
      }
    } else {
      e.preventDefault();
      if (onNavigate) onNavigate(href);
      setIsMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Product', href: '#preview' },
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Reports', href: '#reports' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Privacy', href: '/privacy' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070d16]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5'
          : 'bg-[#080c14]/60 backdrop-blur-sm border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark with icon */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white group"
        >
          <div className="w-8 h-8 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-400 group-hover:scale-105 transition-transform">
            <Smartphone className="w-4 h-4 text-teal-300" />
          </div>
          <span className="font-display font-semibold tracking-tight text-slate-100 group-hover:text-teal-300 transition-colors">
            {SITE_CONFIG.APP_NAME}
          </span>
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-teal-300 transition-colors relative py-1 text-slate-300/90 hover:opacity-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#pricing"
            onClick={(e) => handleLinkClick(e, '#pricing')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-500/10 text-teal-300 border border-teal-500/30 hover:bg-teal-500/20 hover:border-teal-400/40 transition-all whitespace-nowrap"
          >
            Pricing
          </a>
          <a
            href="#waitlist"
            onClick={(e) => handleLinkClick(e, '#waitlist')}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400 transition-all shadow-sm hover:shadow-teal-500/20 whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Coming Soon</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          className="lg:hidden p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 rounded-lg transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0a111c] border-b border-slate-800/80 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              onClick={(e) => handleLinkClick(e, '/contact')}
              className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-300 hover:bg-slate-800/50 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#waitlist"
              onClick={(e) => handleLinkClick(e, '#waitlist')}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold rounded-lg bg-teal-500 text-slate-950 hover:bg-teal-400 transition-colors shadow-sm"
            >
              Coming Soon on Android
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
