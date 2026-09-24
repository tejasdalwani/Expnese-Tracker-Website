import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FinalCtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubscribed(true);
    }
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 relative overflow-hidden bg-[#070d17]">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-b from-[#0c1827] to-[#070f1a] border border-teal-500/30 shadow-2xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Early Android Access</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight text-balance">
            Take control of your spending.
          </h2>

          <div className="space-y-1 text-slate-300 text-base sm:text-lg font-medium">
            <p className="text-slate-200">Track less.</p>
            <p className="text-teal-300">Understand more.</p>
            <p className="text-emerald-400 font-semibold">Make every rupee count.</p>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
            The Android application is completing private build verification. Leave your email to receive early access
            invitation when the Google Play test track opens.
          </p>

          {/* Email Notify Input Form */}
          <div className="pt-2 max-w-md mx-auto">
            {isSubscribed ? (
              <div className="p-4 rounded-xl bg-teal-950/60 border border-teal-500/40 text-teal-200 text-xs flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Thank you! We will notify {email} when Android early access opens.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email for Android early access..."
                    className="w-full pl-10 pr-3 py-3 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-all shadow-md flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer"
                >
                  <span>Coming Soon</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Secondary Actions & Microcopy */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-400">
            <a href="#preview" className="text-teal-400 hover:text-teal-300 underline underline-offset-4">
              Explore the Product Screens ↑
            </a>
            <span className="hidden sm:inline text-slate-600">·</span>
            <div className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>No spam. Strict privacy. Revoke anytime.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
