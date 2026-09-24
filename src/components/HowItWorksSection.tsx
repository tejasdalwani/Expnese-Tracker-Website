import React from 'react';
import { Smartphone, Receipt, MessageSquare, LineChart, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const HowItWorksSection: React.FC = () => {
  const stepIcons = [
    <Smartphone className="w-6 h-6 text-teal-400" />,
    <Receipt className="w-6 h-6 text-teal-400" />,
    <MessageSquare className="w-6 h-6 text-teal-400" />,
    <LineChart className="w-6 h-6 text-teal-400" />,
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-[#070b13] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <span>Workflow</span>
            <span className="text-slate-600">·</span>
            <span>Simple Setup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            How Expense Tracker Works.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            From notification capture to AI-driven financial insights in four effortless steps.
          </p>
        </div>

        {/* 4 Steps Row with Connecting Progress Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-teal-500/20 via-teal-400/40 to-teal-500/20 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {SITE_CONFIG.HOW_IT_WORKS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative bg-[#0c1422] border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-teal-500/40 transition-all group"
              >
                <div>
                  {/* Step Header with Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {stepIcons[idx]}
                    </div>
                    <span className="font-mono text-2xl font-bold text-teal-400/70">{step.step}</span>
                  </div>

                  <h3 className="text-lg font-display font-semibold text-white group-hover:text-teal-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">{step.description}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center gap-1 text-xs text-teal-400/90 font-medium">
                  <span>Step {step.step} of 04</span>
                  {idx < 3 && <ArrowRight className="w-3 h-3 text-slate-500 ml-auto hidden lg:inline" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-14 max-w-2xl mx-auto rounded-2xl p-4 bg-teal-950/20 border border-teal-500/20 text-center text-xs text-slate-300">
          <span className="text-teal-400 font-semibold">Privacy isolated:</span> Expense Tracker functions locally on
          your Android device. Your banking credentials and passwords are never requested or stored.
        </div>
      </div>
    </section>
  );
};
