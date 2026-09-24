import React, { useState } from 'react';
import { BarChart2, TrendingUp, PieChart, Building2, Layers, Calendar, ChevronRight } from 'lucide-react';

interface WeeklyDayData {
  day: string;
  date: string;
  amount: number;
  label: string;
  heightPercent: number;
  highlight?: boolean;
}

export const ReportsPreviewSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<WeeklyDayData | null>({
    day: 'Wed',
    date: '23 Sept 2026',
    amount: 38000,
    label: '₹38,000',
    heightPercent: 100,
    highlight: true,
  });

  const weeklyData: WeeklyDayData[] = [
    { day: 'Fri', date: '18 Sept 2026', amount: 10000, label: '₹10k', heightPercent: 32 },
    { day: 'Sat', date: '19 Sept 2026', amount: 70, label: '₹70', heightPercent: 4 },
    { day: 'Sun', date: '20 Sept 2026', amount: 765, label: '₹765', heightPercent: 8 },
    { day: 'Mon', date: '21 Sept 2026', amount: 520, label: '₹520', heightPercent: 6 },
    { day: 'Tue', date: '22 Sept 2026', amount: 0, label: '₹0', heightPercent: 2 },
    { day: 'Wed', date: '23 Sept 2026', amount: 38000, label: '₹38k', heightPercent: 100, highlight: true },
    { day: 'Thu', date: '24 Sept 2026', amount: 25000, label: '₹25k', heightPercent: 68 },
  ];

  const categories = [
    { name: 'Other', percent: 98, amount: '₹84,972', color: '#00d2aa', txnCount: 72 },
    { name: 'Transportation', percent: 1, amount: '₹1,212', color: '#ec4899', txnCount: 3 },
    { name: 'Groceries', percent: 1, amount: '₹520', color: '#3b82f6', txnCount: 1 },
  ];

  const banks = [
    { name: 'Payment Notification', percent: 38, amount: '₹33,692', color: 'bg-purple-500' },
    { name: 'WhatsApp Pay', percent: 29, amount: '₹25,298', color: 'bg-pink-500' },
    { name: 'ICICI Bank', percent: 12, amount: '₹10,714', color: 'bg-teal-400' },
    { name: 'Federal Bank', percent: 11, amount: '₹10,000', color: 'bg-amber-500' },
    { name: 'Unknown Bank', percent: 5, amount: '₹5,000', color: 'bg-indigo-500' },
    { name: 'SBI', percent: 2, amount: '₹2,000', color: 'bg-emerald-500' },
  ];

  const topPayees = [
    { rank: 1, name: 'WhatsApp Pay', amount: '₹25,298', txns: '12 txns', tag: 'Transfers' },
    { rank: 2, name: 'Payment Notification', amount: '₹12,575', txns: '10 txns', tag: 'Shopping' },
    { rank: 3, name: 'your SIP will be debited', amount: '₹10,000', txns: '2 txns', tag: 'Investment' },
    { rank: 4, name: 'Vidya Deepak', amount: '₹10,000', txns: '1 txn', tag: 'Personal' },
    { rank: 5, name: '70% OFF', amount: '₹4,272', txns: '3 txns', tag: 'Discounts' },
  ];

  return (
    <section id="reports" className="py-20 md:py-28 relative bg-[#060a12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Financial Analytics</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
            Interactive Financial Reports.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Understand where your money goes with daily, weekly, monthly and category-based spending insights.
          </p>

          <div className="inline-block px-3 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 font-mono">
            DEMO DATA · Sourced from live Android app build demonstration
          </div>
        </div>

        {/* Big Dashboard Preview Surface */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#09111c] border border-slate-800/90 p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-8">
          {/* Top Row: Monthly Summary Banner */}
          <div className="rounded-2xl p-6 bg-gradient-to-r from-[#0d4f44] via-[#0a3a32] to-[#082b25] border border-teal-500/30 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-wider text-teal-200/90 font-semibold">
                Monthly Spending Summary
              </span>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-white mt-1">₹86,704.00</div>
              <div className="text-xs text-teal-100/80 mt-1">76 total transactions recorded this month</div>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 rounded-xl bg-teal-950/60 border border-teal-400/30 text-right">
                <div className="text-[10px] text-teal-200">Daily Average</div>
                <div className="text-base font-bold font-mono text-teal-300">₹2,890</div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-teal-950/60 border border-teal-400/30 text-right">
                <div className="text-[10px] text-teal-200">Active Accounts</div>
                <div className="text-base font-bold font-mono text-teal-300">6 Banks</div>
              </div>
            </div>
          </div>

          {/* Middle Row: Charts 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Chart 1: 7-Day Spending Trend (Interactive Bars) */}
            <div className="lg:col-span-7 rounded-2xl p-6 bg-[#0c1524] border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <BarChart2 className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-semibold text-white">7-Day Spending Trend</span>
                </div>
                {activeDay && (
                  <span className="text-xs text-teal-300 font-mono">
                    {activeDay.day} ({activeDay.date}): <strong className="text-white">{activeDay.label}</strong>
                  </span>
                )}
              </div>

              {/* Bar Chart Container */}
              <div className="h-44 pt-6 pb-2 border-b border-slate-800 flex items-end justify-between gap-2 sm:gap-3">
                {weeklyData.map((item) => {
                  const isSelected = activeDay?.day === item.day;
                  return (
                    <button
                      key={item.day}
                      onClick={() => setActiveDay(item)}
                      onMouseEnter={() => setActiveDay(item)}
                      className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer focus:outline-none"
                    >
                      <span
                        className={`text-[10px] font-mono transition-colors ${
                          isSelected ? 'text-teal-300 font-bold' : 'text-slate-500 group-hover:text-slate-300'
                        }`}
                      >
                        {item.label}
                      </span>
                      <div className="w-full h-28 flex items-end justify-center">
                        <div
                          style={{ height: `${item.heightPercent}%` }}
                          className={`w-full max-w-[28px] rounded-t-md transition-all duration-300 ${
                            isSelected
                              ? 'bg-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.6)]'
                              : 'bg-teal-800/50 group-hover:bg-teal-600/70'
                          }`}
                        />
                      </div>
                      <span
                        className={`text-xs transition-colors ${
                          isSelected ? 'text-teal-300 font-bold' : 'text-slate-400 group-hover:text-slate-200'
                        }`}
                      >
                        {item.day}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Tap or hover any day bar to inspect exact amount</span>
                <span className="text-teal-400 font-mono">Peak: Wed (₹38k)</span>
              </div>
            </div>

            {/* Chart 2: Category Donut & Interactive Selection */}
            <div className="lg:col-span-5 rounded-2xl p-6 bg-[#0c1524] border border-slate-800 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <PieChart className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-semibold text-white">Category Distribution</span>
                </div>
                <span className="text-[11px] text-slate-400">5 categories</span>
              </div>

              {/* Donut Graphic */}
              <div className="relative w-36 h-36 mx-auto my-2 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="38" stroke="#182333" strokeWidth="12" fill="transparent" />
                  {/* Other (98%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#00d2aa"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="228 240"
                    strokeDashoffset="0"
                    className="transition-all hover:opacity-90 cursor-pointer"
                  />
                  {/* Transport (1%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#ec4899"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="14 240"
                    strokeDashoffset="-228"
                  />
                  {/* Groceries (1%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray="6 240"
                    strokeDashoffset="-242"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] text-slate-400">Total Spent</span>
                  <span className="text-sm font-bold text-white font-mono">₹86,704</span>
                </div>
              </div>

              {/* Interactive Category List */}
              <div className="space-y-1.5 pt-2">
                {categories.map((cat) => (
                  <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                    className={`w-full flex items-center justify-between p-1.5 rounded-lg text-xs transition-colors cursor-pointer ${
                      selectedCategory === cat.name ? 'bg-slate-800' : 'hover:bg-slate-800/40'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                      <span className="text-slate-200">{cat.name}</span>
                      <span className="text-slate-500 text-[10px]">({cat.percent}%)</span>
                    </div>
                    <span className="font-mono text-slate-300 font-semibold">{cat.amount}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Bank Allocations & Top Payees */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            {/* Bank Allocations */}
            <div className="rounded-2xl p-6 bg-[#0c1524] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-semibold text-white">Bank & Account Allocation</span>
                </div>
                <span className="text-xs text-slate-400">6 sources</span>
              </div>

              {/* Multi-segment Progress Bar */}
              <div className="w-full h-2.5 rounded-full overflow-hidden flex mb-4">
                {banks.map((b) => (
                  <div
                    key={b.name}
                    className={`${b.color}`}
                    style={{ width: `${b.percent}%` }}
                    title={`${b.name} (${b.percent}%)`}
                  />
                ))}
              </div>

              <div className="space-y-2 text-xs">
                {banks.map((bank) => (
                  <div key={bank.name} className="flex justify-between items-center py-1 border-b border-slate-800/50">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${bank.color}`} />
                      <span className="text-slate-300">{bank.name}</span>
                      <span className="text-slate-500 text-[11px]">({bank.percent}%)</span>
                    </div>
                    <span className="font-mono font-semibold text-slate-200">{bank.amount}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Payees & Merchants */}
            <div className="rounded-2xl p-6 bg-[#0c1524] border border-slate-800">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-semibold text-white">Top Payees & Merchants</span>
                </div>
                <span className="text-xs text-slate-400">Ranked by volume</span>
              </div>

              <div className="space-y-2 text-xs">
                {topPayees.map((payee) => (
                  <div
                    key={payee.name}
                    className="flex justify-between items-center p-2 rounded-xl bg-slate-900/60 border border-slate-800/80"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-lg bg-teal-500/15 text-teal-300 flex items-center justify-center font-mono font-bold text-[10px]">
                        {payee.rank}
                      </span>
                      <div>
                        <div className="font-semibold text-white">{payee.name}</div>
                        <div className="text-[10px] text-slate-400">{payee.txns}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-slate-100">{payee.amount}</div>
                      <span className="text-[9px] text-teal-400/90">{payee.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
