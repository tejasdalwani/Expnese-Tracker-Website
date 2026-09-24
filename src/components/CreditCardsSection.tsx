import React from 'react';
import { CreditCard, Sparkles, ShieldAlert, Check, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const CreditCardsSection: React.FC = () => {
  return (
    <section id="cards" className="py-20 md:py-28 relative bg-[#070d17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <CreditCard className="w-3.5 h-3.5" />
            <span>Smart Card Optimization</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            Find cards that fit the way you spend.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            By analyzing your transaction categories—dining, utilities, online shopping, or grocery spends—Expense
            Tracker helps identify cards with reward structures that match your actual everyday habits.
          </p>
        </div>

        {/* 3 Sample Credit Cards Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {SITE_CONFIG.SAMPLE_CREDIT_CARDS.map((card) => (
            <div
              key={card.id}
              className="relative rounded-2xl p-6 bg-[#0c1422] border border-slate-800/90 hover:border-teal-500/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Card Replica Mini-Header */}
                <div
                  className={`h-36 rounded-xl p-4 bg-gradient-to-br ${card.colorGradient} border border-slate-700/60 flex flex-col justify-between mb-5 relative overflow-hidden`}
                >
                  <div className="flex justify-between items-start">
                    <div className="font-display font-bold text-white text-sm">{card.name}</div>
                    <span className="text-[10px] font-mono text-slate-300 px-2 py-0.5 rounded bg-black/40 border border-white/10">
                      {card.network}
                    </span>
                  </div>

                  <div className="text-[11px] font-mono text-teal-300 font-semibold tracking-wider">
                    •••• •••• •••• 9240
                  </div>

                  <div className="flex justify-between items-end text-[10px] text-slate-300">
                    <div>
                      <div className="text-[8px] uppercase tracking-widest text-slate-400">Best For</div>
                      <div className="font-semibold text-white">{card.bestFor}</div>
                    </div>
                    <div className="font-mono text-slate-300">{card.annualFee}</div>
                  </div>
                </div>

                {/* Card Specs */}
                <h3 className="text-lg font-semibold text-white group-hover:text-teal-200 transition-colors">
                  {card.name}
                </h3>

                <div className="mt-3 space-y-2 text-xs">
                  <div className="flex items-start gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Primary Perk:</strong> {card.highlightBenefit}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-300">
                    <Check className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Focus Category:</strong> {card.rewardCategory}
                    </span>
                  </div>
                </div>
              </div>

              {/* Discovery CTA (Section 15: Tasteful, no fake affiliate URLs, placeholder button) */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <div className="text-[10px] text-teal-400 font-medium mb-2">Recommended for your spending</div>
                <button
                  disabled
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-400 text-xs font-medium flex items-center justify-center gap-1.5 cursor-not-allowed"
                >
                  <span>Explore card (Coming Soon)</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 15 & 39: Transparent Disclosure & Financial Disclaimer */}
        <div className="mt-12 max-w-3xl mx-auto rounded-2xl p-5 bg-[#09111c] border border-slate-800/80 text-xs text-slate-400 space-y-2">
          <div className="flex items-start gap-2">
            <ShieldAlert className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="text-slate-300">Financial & Card Disclaimer:</strong> {SITE_CONFIG.FINANCIAL_DISCLAIMER}
            </p>
          </div>
          <p className="text-[11px] text-slate-500 pl-6 leading-relaxed">
            <strong className="text-slate-400">Offer Transparency:</strong> {SITE_CONFIG.AFFILIATE_DISCLOSURE}
          </p>
        </div>
      </div>
    </section>
  );
};
