import React, { useState } from 'react';
import { Sparkles, LayoutGrid, BarChart2, Receipt, ArrowRight } from 'lucide-react';
import { AndroidDeviceMockup, ScreenType } from './AndroidDeviceMockup';

export const ProductPreviewSection: React.FC = () => {
  const [mobileActiveScreen, setMobileActiveScreen] = useState<ScreenType>('dashboard');

  const screensInfo = [
    {
      id: 'expenses' as ScreenType,
      title: 'Real-time Expenses & Search',
      tagline: 'Filtered, categorized and clean',
      description:
        'Every debit from WhatsApp Pay, Federal Bank, or UPI is parsed with exact timestamps, merchant tags, and editable purpose notes.',
    },
    {
      id: 'dashboard' as ScreenType,
      title: 'Daily & Monthly Command Center',
      tagline: 'Instant financial clarity',
      description:
        "Know today's spend at a glance (₹25,808), monthly totals (₹86,704), and bank allocations without logging into separate banking portals.",
    },
    {
      id: 'reports' as ScreenType,
      title: 'Interactive Visual Analytics',
      tagline: 'Category & trend breakdown',
      description:
        '7-day spend distributions, donut category splits, multi-account allocations, and top merchants automatically calculated.',
    },
  ];

  return (
    <section id="preview" className="py-20 md:py-28 relative overflow-hidden bg-[#060a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Interface</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            Your money, finally in one place.
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Reimagined for the speed of modern mobile transactions in India. Explore the exact screens running in the
            Android application.
          </p>

          {/* Mobile Screen Selector Tabs */}
          <div className="flex md:hidden items-center justify-center gap-1 p-1 bg-slate-900/90 rounded-xl border border-slate-800 max-w-xs mx-auto mt-6">
            <button
              onClick={() => setMobileActiveScreen('expenses')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                mobileActiveScreen === 'expenses'
                  ? 'bg-teal-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Expenses
            </button>
            <button
              onClick={() => setMobileActiveScreen('dashboard')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                mobileActiveScreen === 'dashboard'
                  ? 'bg-teal-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setMobileActiveScreen('reports')}
              className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-medium transition-all ${
                mobileActiveScreen === 'reports'
                  ? 'bg-teal-500 text-slate-950 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Reports
            </button>
          </div>
        </div>

        {/* Desktop 3-Phone Showcase (Center Dashboard elevated, Left Expenses, Right Reports) */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-center max-w-6xl mx-auto">
          {/* Left: Expenses List Phone */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2">
            <div className="text-center mb-4 space-y-1">
              <span className="text-xs font-medium text-teal-400">01 · Smart Search</span>
              <h3 className="text-base font-semibold text-slate-100">Expenses & Filter</h3>
            </div>
            <div className="w-full max-w-[300px] scale-95 opacity-85 hover:opacity-100 transition-opacity">
              <AndroidDeviceMockup screen="expenses" interactive={false} />
            </div>
          </div>

          {/* Center: Hero Dashboard Phone (Larger, Elevated) */}
          <div className="flex flex-col items-center group relative z-10">
            <div className="text-center mb-4 space-y-1">
              <span className="text-xs font-semibold text-teal-300">02 · Central Hub</span>
              <h3 className="text-lg font-bold text-white">Live Overview</h3>
            </div>
            <div className="w-full max-w-[330px] transform hover:scale-[1.02] transition-transform duration-300">
              <AndroidDeviceMockup screen="dashboard" interactive={true} />
            </div>
          </div>

          {/* Right: Reports & Visual Analytics Phone */}
          <div className="flex flex-col items-center group transition-transform duration-300 hover:-translate-y-2">
            <div className="text-center mb-4 space-y-1">
              <span className="text-xs font-medium text-teal-400">03 · Analytics</span>
              <h3 className="text-base font-semibold text-slate-100">Weekly & Monthly Reports</h3>
            </div>
            <div className="w-full max-w-[300px] scale-95 opacity-85 hover:opacity-100 transition-opacity">
              <AndroidDeviceMockup screen="reports" interactive={false} />
            </div>
          </div>
        </div>

        {/* Mobile Single Device View with active tab */}
        <div className="md:hidden flex flex-col items-center">
          <div className="text-center mb-4">
            <h3 className="text-base font-bold text-slate-100">
              {screensInfo.find((s) => s.id === mobileActiveScreen)?.title}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs mx-auto">
              {screensInfo.find((s) => s.id === mobileActiveScreen)?.description}
            </p>
          </div>
          <div className="w-full max-w-[320px]">
            <AndroidDeviceMockup screen={mobileActiveScreen} interactive={true} />
          </div>
        </div>

        {/* Bottom Feature Pill Row */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto border-t border-slate-800/80 pt-8 text-center sm:text-left">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Receipt className="w-4 h-4 text-teal-400" />
              <span>Full SMS & App Integration</span>
            </div>
            <p className="text-xs text-slate-400">Captures details directly from bank SMS and UPI payment notices.</p>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Voice & Conversational AI</span>
            </div>
            <p className="text-xs text-slate-400">Talk naturally to log coffee runs, split restaurant bills, or audit trends.</p>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-semibold text-white flex items-center justify-center sm:justify-start gap-1.5">
              <BarChart2 className="w-4 h-4 text-teal-400" />
              <span>Instant Data Visualization</span>
            </div>
            <p className="text-xs text-slate-400">Always know your largest merchants and bank balances in real time.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
