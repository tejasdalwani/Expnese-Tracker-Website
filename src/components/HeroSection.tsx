import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { AndroidDeviceMockup } from './AndroidDeviceMockup';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background Subtle Ambience (Restrained, no loud cyberpunk neons) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-teal-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Context tag (anti-pill clean metadata) */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/20 text-teal-300 text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
              <span>Native Android Personal Finance</span>
              <span className="text-teal-500/60">·</span>
              <span>Coming to Android</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Know Where <br className="hidden sm:inline" />
              Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-emerald-400">Money Goes.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {SITE_CONFIG.SUBTITLE}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#waitlist"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-sm transition-all shadow-[0_4px_20px_rgba(20,184,166,0.3)] hover:shadow-[0_4px_28px_rgba(20,184,166,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group"
              >
                <span>Coming Soon on Android</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#features"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-slate-700/70 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Features</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Section 7: Trust Microcopy (clean unboxed text row) */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Built for everyday spending</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Designed with privacy in mind</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                  <span>Your finances, your control</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Android Device Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            {/* Subtle glow disk behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-teal-500/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative group transition-transform duration-500 hover:scale-[1.01]">
              {/* Interactive badge hinting clickability */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-3 py-1 rounded-full bg-[#0a1824]/90 border border-teal-500/40 text-teal-300 text-[10px] font-medium shadow-md backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
                <Sparkles className="w-3 h-3 text-teal-400" />
                <span>Interactive Live Mockup · Tap tabs below</span>
              </div>

              <AndroidDeviceMockup screen="dashboard" interactive={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
