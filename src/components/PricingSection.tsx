import React, { useState } from 'react';
import { Check, X, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const PricingSection: React.FC = () => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('silver');

  return (
    <section id="pricing" className="py-20 md:py-28 relative bg-[#070c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <span>Product Tiers</span>
            <span className="text-slate-600">·</span>
            <span>Simple Pricing</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            Transparent plans for everyday clarity.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Start completely free. Upgrade when you want deeper conversational AI assistance and advanced portfolio card
            optimization.
          </p>

          <div className="inline-block text-xs text-slate-400">
            * All tiers are subject to early access rollout schedule. Pricing values are easily configurable.
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {SITE_CONFIG.PRICING_PLANS.map((plan) => {
            const isHighlighted = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-gradient-to-b from-[#0f2130] to-[#0a1522] border-2 border-teal-500/80 shadow-[0_0_40px_rgba(20,184,166,0.18)] scale-[1.02]'
                    : 'bg-[#0b121e] border border-slate-800/90 hover:border-slate-700'
                }`}
              >
                {/* Popular Pill */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-teal-500 text-slate-950 text-[11px] font-bold shadow-md uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="text-xl font-display font-bold text-white">{plan.name}</h3>
                    <span className="text-xs text-slate-400">{plan.period}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-3">
                    <span className="text-4xl sm:text-5xl font-display font-extrabold text-white font-mono">
                      {plan.price}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">/ month</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">{plan.description}</p>

                  {/* Feature Checklist */}
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      What's Included
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        {feature.included ? (
                          <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-slate-800 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                            <X className="w-3 h-3" />
                          </div>
                        )}
                        <span className={feature.included ? 'text-slate-200' : 'text-slate-500'}>
                          {feature.title}
                          {feature.note && (
                            <span className="block text-[10px] text-teal-400/90 font-mono mt-0.5">{feature.note}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-8 pt-6 border-t border-slate-800">
                  <a
                    href="#waitlist"
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      isHighlighted
                        ? 'bg-teal-500 hover:bg-teal-400 text-slate-950 shadow-md'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Microcopy */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-teal-400" />
          <span>No credit card required for Free tier · Cancel or switch anytime on Google Play</span>
        </div>
      </div>
    </section>
  );
};
