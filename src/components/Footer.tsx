import React from 'react';
import { Smartphone, ArrowUp, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (path: string, e: React.MouseEvent) => {
    if (path.startsWith('/')) {
      e.preventDefault();
      if (onNavigate) onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/90 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                <Smartphone className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base tracking-tight">
                {SITE_CONFIG.APP_NAME}
              </span>
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              AI-powered personal finance, built for everyday spending. Track expenses automatically, converse with your
              assistant, and make every rupee count.
            </p>

            <div className="pt-2 flex items-center gap-4 text-slate-400">
              <a
                href={SITE_CONFIG.X_URL}
                aria-label="X (formerly Twitter)"
                className="hover:text-teal-300 transition-colors"
              >
                X (Twitter)
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={SITE_CONFIG.INSTAGRAM_URL}
                aria-label="Instagram"
                className="hover:text-teal-300 transition-colors"
              >
                Instagram
              </a>
              <span className="text-slate-700">·</span>
              <a href={SITE_CONFIG.YOUTUBE_URL} aria-label="YouTube" className="hover:text-teal-300 transition-colors">
                YouTube
              </a>
            </div>
          </div>

          {/* Navigation Links Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Product</div>
            <ul className="space-y-2">
              <li>
                <a href="#preview" className="hover:text-teal-300 transition-colors">
                  Product Overview
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-teal-300 transition-colors">
                  Features & Bento Grid
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-teal-300 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#ai-agent" className="hover:text-teal-300 transition-colors">
                  AI Expense Assistant
                </a>
              </li>
              <li>
                <a href="#reports" className="hover:text-teal-300 transition-colors">
                  Financial Analytics
                </a>
              </li>
              <li>
                <a href="#cards" className="hover:text-teal-300 transition-colors">
                  Credit Card Discovery
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Governance Col */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">Legal & Trust</div>
            <ul className="space-y-2">
              <li>
                <a href="#pricing" className="hover:text-teal-300 transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  onClick={(e) => handleNav('/privacy', e)}
                  className="hover:text-teal-300 transition-colors text-slate-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  onClick={(e) => handleNav('/terms', e)}
                  className="hover:text-teal-300 transition-colors text-slate-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={(e) => handleNav('/contact', e)}
                  className="hover:text-teal-300 transition-colors text-slate-300"
                >
                  Contact & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Back to top Col */}
          <div className="md:col-span-2 flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 text-xs transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>

            <div className="mt-6 md:mt-0 text-left md:text-right">
              <span className="text-[11px] text-teal-400 font-medium block">Native Android App</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Google Play release in progress</span>
            </div>
          </div>
        </div>

        {/* Financial Disclaimer Banner (Section 38) */}
        <div className="mt-12 pt-6 border-t border-slate-900 text-[11px] text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-slate-300">Disclaimer:</strong> {SITE_CONFIG.FINANCIAL_DISCLAIMER}
          </p>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>© 2026 {SITE_CONFIG.APP_NAME}. All rights reserved.</div>
          <div className="flex items-center gap-2 text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
            <span>Built with privacy discipline for Android users</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
