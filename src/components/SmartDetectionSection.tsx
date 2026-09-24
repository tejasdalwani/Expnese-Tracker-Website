import React from 'react';
import { ShieldCheck, XCircle, CheckCircle2, ArrowDown, Bell, Filter, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const SmartDetectionSection: React.FC = () => {
  return (
    <section id="smart-detection" className="py-20 md:py-28 relative bg-[#070c15]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <Filter className="w-3.5 h-3.5" />
            <span>Intelligent Filtering</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            Real debits in. Promotional clutter out.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Most expense trackers mistakenly record e-commerce coupons, deal alerts, and price drops as actual spending.
            Expense Tracker evaluates context to keep your records accurate.
          </p>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card A: Promotional Message (Filtered & Ignored) */}
          <div className="relative rounded-2xl p-6 sm:p-8 bg-[#0c1320] border border-slate-800/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                  Incoming Marketing Alert
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-red-500/10 text-red-400 border border-red-500/20 font-medium">
                  Ignored
                </span>
              </div>

              {/* Mock Notification Toast */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-700/80 shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-xs">Amazon Shopping</span>
                      <span className="text-[10px] text-slate-400">· Deal alert</span>
                    </div>
                    <p className="text-xs text-slate-200 mt-1 font-mono">
                      "Amazon Deal — only ₹1,999 on wireless headphones! Limited time offer."
                    </p>
                  </div>
                </div>
              </div>

              {/* Classification Arrow */}
              <div className="my-5 flex flex-col items-center justify-center gap-1 text-slate-500">
                <ArrowDown className="w-4 h-4 text-slate-500" />
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">
                  Classification: PROMOTIONAL
                </span>
                <ArrowDown className="w-4 h-4 text-slate-500" />
              </div>

              {/* Outcome Box */}
              <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-900/40 flex items-center gap-3 text-xs text-red-200">
                <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                <div>
                  <span className="font-semibold block text-red-300">Filtered out automatically</span>
                  <span className="text-[11px] text-red-200/70">
                    Zero expense created. No false entries in your weekly budget.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
              Filters promotional SMS keywords, deal broadcasts, and product recommendations.
            </div>
          </div>

          {/* Card B: Genuine Transaction (Recorded & Categorized) */}
          <div className="relative rounded-2xl p-6 sm:p-8 bg-[#0c1524] border border-teal-500/40 shadow-[0_0_30px_rgba(20,184,166,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs mb-4">
                <span className="font-semibold text-teal-400 uppercase tracking-wider text-[10px]">
                  Verified Debit Activity
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-teal-500/10 text-teal-300 border border-teal-500/30 font-medium">
                  Recorded
                </span>
              </div>

              {/* Mock Notification Toast */}
              <div className="p-4 rounded-xl bg-slate-900/90 border border-teal-500/30 shadow-md">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white text-xs">Bank Alert</span>
                      <span className="text-[10px] text-teal-400">· Debit SMS</span>
                    </div>
                    <p className="text-xs text-slate-200 mt-1 font-mono">
                      "₹1,999 debited from your account XX4902 for Amazon on 24-Sep-26. UPI Ref 938210."
                    </p>
                  </div>
                </div>
              </div>

              {/* Classification Arrow */}
              <div className="my-5 flex flex-col items-center justify-center gap-1 text-teal-400">
                <ArrowDown className="w-4 h-4 text-teal-400" />
                <span className="text-[10px] uppercase font-mono tracking-wider font-semibold">
                  Classification: TRANSACTION
                </span>
                <ArrowDown className="w-4 h-4 text-teal-400" />
              </div>

              {/* Outcome Box */}
              <div className="p-3.5 rounded-xl bg-teal-950/40 border border-teal-500/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Amazon</span>
                    <span className="text-[11px] text-teal-300">Category: Shopping · Auto-tagged</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="font-mono font-bold text-sm text-white">₹1,999</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-slate-400">
              Captures amount, merchant, timestamp, and account attribution instantly.
            </div>
          </div>
        </div>

        {/* Mandatory Disclaimer Note from Section 12 */}
        <div className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-400">
            {SITE_CONFIG.SMART_DETECTION_DISCLAIMER}
          </p>
        </div>
      </div>
    </section>
  );
};
