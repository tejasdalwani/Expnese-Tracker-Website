import React, { useState } from 'react';
import {
  Bell,
  ShieldCheck,
  Bot,
  BarChart3,
  QrCode,
  CreditCard,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { SITE_CONFIG, FeatureItem } from '../config/siteConfig';

export const FeaturesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredFeatures =
    activeCategory === 'all'
      ? SITE_CONFIG.FEATURES
      : SITE_CONFIG.FEATURES.filter((f) => f.category === activeCategory);

  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'auto-tracking':
        return <Bell className="w-5 h-5 text-teal-400" />;
      case 'smart-detection':
        return <ShieldCheck className="w-5 h-5 text-teal-400" />;
      case 'ai-agent':
        return <Bot className="w-5 h-5 text-teal-400" />;
      case 'interactive-reports':
        return <BarChart3 className="w-5 h-5 text-teal-400" />;
      case 'expense-splitting':
        return <QrCode className="w-5 h-5 text-teal-400" />;
      case 'credit-card-discovery':
        return <CreditCard className="w-5 h-5 text-teal-400" />;
      case 'recurring-expenses':
        return <RefreshCw className="w-5 h-5 text-teal-400" />;
      case 'personalized-insights':
        return <Sparkles className="w-5 h-5 text-teal-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-teal-400" />;
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <span>Capabilities</span>
            <span className="text-slate-600">/</span>
            <span>Fintech Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            More than an expense tracker.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Engineered from the ground up for high-velocity personal finances, automatic transaction classification, and
            intelligent assistance.
          </p>

          {/* Interactive Filter Controls (clean segmented buttons per constitution) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'all'
                  ? 'bg-teal-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              All Capabilities (8)
            </button>
            <button
              onClick={() => setActiveCategory('core')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'core'
                  ? 'bg-teal-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Tracking & Detection
            </button>
            <button
              onClick={() => setActiveCategory('ai')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'ai'
                  ? 'bg-teal-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              AI & Assistant
            </button>
            <button
              onClick={() => setActiveCategory('analytics')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'analytics'
                  ? 'bg-teal-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Reports & Cards
            </button>
            <button
              onClick={() => setActiveCategory('utility')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'utility'
                  ? 'bg-teal-500 text-slate-950 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              Splitting & UPI QR
            </button>
          </div>
        </div>

        {/* Feature Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, idx) => {
            const isMarquee = feature.id === 'auto-tracking' || feature.id === 'ai-agent';
            return (
              <div
                key={feature.id}
                className={`relative rounded-2xl p-6 bg-[#0c1320] border border-slate-800/90 hover:border-teal-500/40 transition-all duration-300 group flex flex-col justify-between ${
                  isMarquee ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#0e1828] to-[#0a111e]' : ''
                }`}
              >
                <div>
                  {/* Top Row: Human editorial numbering & Status text */}
                  <div className="flex items-center justify-between text-xs mb-4">
                    <span className="font-mono text-slate-400 font-semibold">{feature.number}.</span>
                    <div className="flex items-center gap-1.5">
                      {feature.isLiveInApp ? (
                        <span className="text-[11px] text-teal-300/90 font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-teal-400" />
                          <span>{feature.badge}</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-amber-300/90 font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-400" />
                          <span>{feature.badge}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    {getFeatureIcon(feature.id)}
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-lg font-display font-semibold text-white group-hover:text-teal-200 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-300 leading-relaxed font-normal">{feature.description}</p>
                </div>

                {/* Sub-note */}
                <div className="mt-5 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>{feature.shortDesc}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
