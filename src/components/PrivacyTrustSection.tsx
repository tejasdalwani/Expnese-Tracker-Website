import React from 'react';
import { ShieldCheck, Lock, Smartphone, RefreshCw, FileText, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface PrivacyTrustSectionProps {
  onNavigate?: (path: string) => void;
}

export const PrivacyTrustSection: React.FC<PrivacyTrustSectionProps> = ({ onNavigate }) => {
  const handleNav = (path: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const privacyPrinciples = [
    {
      icon: <Smartphone className="w-5 h-5 text-teal-400" />,
      title: 'Targeted Notification Parsing',
      description:
        'Android notification listener access is utilized exclusively to parse transactional alerts from supported banking and payment applications.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-teal-400" />,
      title: 'Marketing Messages Filtered',
      description:
        'Promotional marketing broadcasts, deal alerts, and product discounts are programmatically identified and rejected from expense logging.',
    },
    {
      icon: <Lock className="w-5 h-5 text-teal-400" />,
      title: 'Full User Control & Revocation',
      description:
        'You remain in direct control. Notification and SMS permissions can be toggled or permanently revoked anytime in your Android system settings.',
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-teal-400" />,
      title: 'Zero Account Password Access',
      description:
        'The application never asks for your internet banking passwords, UPI PINs, or direct API access to bank reserves.',
    },
  ];

  return (
    <section id="privacy-section" className="py-20 md:py-28 relative bg-[#060a12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Data Governance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
              Your financial data deserves care.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              We believe financial tracking tools must operate with complete transparency. We explain exactly what
              permissions are requested, how data is parsed, and how you maintain complete ownership.
            </p>

            <div className="p-4 rounded-2xl bg-[#0c1422] border border-slate-800 text-xs text-slate-300 space-y-2">
              <p>
                <strong>AI Processing Notice:</strong> When you converse with the AI assistant, messages are processed
                strictly to answer your financial query according to the app’s Privacy Policy.
              </p>
              <p className="text-slate-400 text-[11px]">
                Usage analytics are gathered strictly to ensure application stability and are not a substitute for
                official chartered banking records.
              </p>
            </div>

            {/* Links to Privacy Policy & Terms */}
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="/privacy"
                onClick={(e) => handleNav('/privacy', e)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-teal-300 hover:text-teal-200 text-xs font-semibold transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Read Full Privacy Policy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="/terms"
                onClick={(e) => handleNav('/terms', e)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
              >
                <span>Terms of Service</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Privacy Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {privacyPrinciples.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-6 bg-[#0c1322] border border-slate-800/90 hover:border-teal-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
