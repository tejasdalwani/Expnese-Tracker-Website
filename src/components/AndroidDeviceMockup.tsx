import React, { useState } from 'react';
import {
  Sparkles,
  TrendingDown,
  TrendingUp,
  Mic,
  Plus,
  Search,
  SlidersHorizontal,
  ChevronDown,
  Building2,
  Wallet,
  Receipt,
  LayoutGrid,
  BarChart2,
  Settings,
  QrCode,
  Check,
  Send,
  ArrowRight,
  Split,
} from 'lucide-react';

export type ScreenType = 'dashboard' | 'expenses' | 'reports' | 'ai-chat';

interface AndroidDeviceMockupProps {
  screen?: ScreenType;
  interactive?: boolean;
  className?: string;
  onScreenChange?: (screen: ScreenType) => void;
}

export const AndroidDeviceMockup: React.FC<AndroidDeviceMockupProps> = ({
  screen = 'dashboard',
  interactive = true,
  className = '',
  onScreenChange,
}) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>(screen);

  const handleScreenSwitch = (newScreen: ScreenType) => {
    setCurrentScreen(newScreen);
    if (onScreenChange) {
      onScreenChange(newScreen);
    }
  };

  return (
    <div
      className={`relative mx-auto w-full max-w-[320px] sm:max-w-[340px] md:max-w-[350px] aspect-[9/18.5] rounded-[42px] p-[10px] bg-gradient-to-b from-slate-700/80 via-slate-800 to-slate-950 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85),0_0_30px_rgba(20,184,166,0.15)] border border-slate-700/50 backdrop-blur-xl ${className}`}
    >
      {/* Device Side Buttons Illusion */}
      <div className="absolute -left-[12px] top-[100px] w-[3px] h-[32px] bg-slate-700 rounded-l-sm" />
      <div className="absolute -left-[12px] top-[145px] w-[3px] h-[32px] bg-slate-700 rounded-l-sm" />
      <div className="absolute -right-[12px] top-[120px] w-[3px] h-[48px] bg-slate-700 rounded-r-sm" />

      {/* Screen Inner Frame */}
      <div className="relative w-full h-full rounded-[34px] bg-[#070e17] overflow-hidden flex flex-col text-slate-100 select-none border border-slate-900/80">
        {/* Status Bar */}
        <div className="shrink-0 h-9 px-5 pt-1.5 flex items-center justify-between text-[11px] font-medium text-slate-400 bg-[#070e17] z-20">
          <div className="flex items-center gap-1.5 font-mono">
            <span>21:50</span>
            <span className="text-[10px] text-teal-400 font-sans font-semibold">VoLTE</span>
          </div>
          {/* Camera punch-hole */}
          <div className="w-3.5 h-3.5 rounded-full bg-black ring-1 ring-slate-800/80 flex items-center justify-center">
            <div className="w-1 h-1 rounded-full bg-teal-950" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px]">
            <span>5G</span>
            <span>76%</span>
          </div>
        </div>

        {/* Dynamic Screen Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden px-3.5 pb-16 pt-1 text-xs scrollbar-none">
          {currentScreen === 'dashboard' && <DashboardScreen onSwitch={handleScreenSwitch} />}
          {currentScreen === 'expenses' && <ExpensesScreen />}
          {currentScreen === 'reports' && <ReportsScreen />}
          {currentScreen === 'ai-chat' && <AiChatScreen />}
        </div>

        {/* Floating Action Button (for dashboard & expenses) */}
        {(currentScreen === 'dashboard' || currentScreen === 'expenses') && (
          <button
            onClick={() => handleScreenSwitch('ai-chat')}
            aria-label="Add Expense or Open Assistant"
            className="absolute bottom-16 right-5 w-11 h-11 rounded-2xl bg-[#00d2aa] text-[#071318] shadow-lg shadow-teal-500/25 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform z-20 font-bold"
          >
            <Plus className="w-6 h-6" />
          </button>
        )}

        {/* Android Bottom Navigation Bar */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-[#0a121d]/95 backdrop-blur-md border-t border-slate-800/60 flex items-center justify-around px-2 z-30">
          <button
            onClick={() => interactive && handleScreenSwitch('dashboard')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentScreen === 'dashboard' ? 'text-teal-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentScreen === 'dashboard' ? 'bg-teal-950/60' : ''}`}>
              <LayoutGrid className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-medium tracking-tight">Dashboard</span>
          </button>

          <button
            onClick={() => interactive && handleScreenSwitch('expenses')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentScreen === 'expenses' ? 'text-teal-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentScreen === 'expenses' ? 'bg-teal-950/60' : ''}`}>
              <Receipt className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-medium tracking-tight">Expenses</span>
          </button>

          <button
            onClick={() => interactive && handleScreenSwitch('ai-chat')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentScreen === 'ai-chat' ? 'text-teal-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentScreen === 'ai-chat' ? 'bg-teal-950/60' : ''}`}>
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-medium tracking-tight">AI Agent</span>
          </button>

          <button
            onClick={() => interactive && handleScreenSwitch('reports')}
            className={`flex flex-col items-center gap-0.5 transition-colors ${
              currentScreen === 'reports' ? 'text-teal-400' : 'text-slate-500 hover:text-slate-300'
            }`}
          >
            <div className={`p-1 rounded-lg ${currentScreen === 'reports' ? 'bg-teal-950/60' : ''}`}>
              <BarChart2 className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-medium tracking-tight">Reports</span>
          </button>

          <div className="flex flex-col items-center gap-0.5 text-slate-500">
            <div className="p-1">
              <Settings className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-medium tracking-tight">Settings</span>
          </div>
        </div>

        {/* Android Navigation Gesture Bar */}
        <div className="absolute bottom-1 inset-x-0 flex justify-center pointer-events-none z-40">
          <div className="w-24 h-1 rounded-full bg-slate-600/50" />
        </div>
      </div>
    </div>
  );
};

/* --- SUB-SCREENS MATCHING USER'S ANDROID APP SCREENSHOTS --- */

function DashboardScreen({ onSwitch }: { onSwitch: (s: ScreenType) => void }) {
  return (
    <div className="space-y-3 pt-1">
      {/* Today's Spending Hero Card (from Screenshot 1) */}
      <div className="relative rounded-2xl p-3.5 bg-gradient-to-br from-[#0c5348] via-[#094138] to-[#062c26] border border-teal-600/30 text-white shadow-md">
        <div className="flex justify-between items-start">
          <span className="text-[11px] font-medium text-teal-100">Today's Spending</span>
          <div className="w-6 h-6 rounded-full bg-teal-800/60 flex items-center justify-center text-teal-200">
            <TrendingDown className="w-3.5 h-3.5" />
          </div>
        </div>
        <div className="mt-1">
          <span className="text-xl font-bold tracking-tight text-white font-mono">₹25,808.00</span>
        </div>
        <div className="mt-3.5 pt-2.5 border-t border-teal-700/50 flex justify-between text-[10px]">
          <div>
            <div className="text-teal-200/80">This Month</div>
            <div className="font-semibold text-white font-mono mt-0.5">₹86,704</div>
          </div>
          <div className="text-right">
            <div className="text-teal-200/80">Transactions</div>
            <div className="font-semibold text-white font-mono mt-0.5">76 total</div>
          </div>
        </div>
      </div>

      {/* AI Expense Agent Banner (from Screenshot 1) */}
      <button
        onClick={() => onSwitch('ai-chat')}
        className="w-full rounded-2xl p-3 bg-[#0a2327] border border-teal-500/30 flex items-center justify-between text-left hover:border-teal-400/50 transition-colors group cursor-pointer"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-slate-100 text-[11px]">AI Expense Agent</span>
              <span className="bg-teal-400/20 text-teal-300 px-1.5 py-0.2 rounded text-[8px] font-medium border border-teal-400/30">
                Voice & Split
              </span>
            </div>
            <p className="text-[9px] text-slate-400 mt-0.5 line-clamp-1">
              Speak to log spends, split bills via UPI QR, or get advice
            </p>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform">
          <Mic className="w-3.5 h-3.5" />
        </div>
      </button>

      {/* Bank Accounts & Cards (from Screenshot 1) */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] font-semibold text-slate-200">Bank Accounts & Cards</span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-[#0e1724] border border-slate-800/80 rounded-xl p-2.5">
            <div className="flex items-center gap-1.5 text-teal-400 text-[10px]">
              <Building2 className="w-3.5 h-3.5" />
              <span className="font-medium text-slate-300 truncate">Payment</span>
            </div>
            <div className="text-[13px] font-bold text-slate-100 font-mono mt-1">₹33,692</div>
            <div className="text-[9px] text-slate-500 mt-0.5">26 debits this month</div>
          </div>
          <div className="bg-[#0e1724] border border-slate-800/80 rounded-xl p-2.5">
            <div className="flex items-center gap-1.5 text-teal-400 text-[10px]">
              <Wallet className="w-3.5 h-3.5" />
              <span className="font-medium text-slate-300 truncate">WhatsApp Pay</span>
            </div>
            <div className="text-[13px] font-bold text-slate-100 font-mono mt-1">₹25,298</div>
            <div className="text-[9px] text-slate-500 mt-0.5">12 debits this month</div>
          </div>
        </div>
      </div>

      {/* Recent Expenses List (from Screenshot 1) */}
      <div>
        <div className="flex justify-between items-center mb-1.5">
          <span className="text-[11px] font-semibold text-slate-200">Recent Expenses</span>
          <button
            onClick={() => onSwitch('expenses')}
            className="text-[10px] text-teal-400 font-medium flex items-center gap-0.5 hover:underline"
          >
            View All →
          </button>
        </div>

        <div className="space-y-1.5">
          {/* Item 1 */}
          <div className="bg-[#0e1724] border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-900/40 text-teal-400 flex items-center justify-center font-bold text-[10px]">
                ▲
              </div>
              <div>
                <div className="font-medium text-slate-100 text-[11px]">WhatsApp Pay</div>
                <div className="text-[9px] text-slate-500">Other · WhatsApp Pay</div>
                <span className="inline-block mt-0.5 text-[8px] bg-amber-500/10 text-amber-300/90 px-1 py-0.2 rounded border border-amber-500/20">
                  Purpose not specified
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-100 font-mono text-[11px]">₹25,000</div>
              <div className="text-[8px] text-slate-500">24 Sept 2026</div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-[#0e1724] border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-900/40 text-teal-400 flex items-center justify-center font-bold text-[10px]">
                ▲
              </div>
              <div>
                <div className="font-medium text-slate-100 text-[11px]">200ml</div>
                <div className="text-[9px] text-slate-500">Other · Payment Notification</div>
                <span className="inline-block mt-0.5 text-[8px] bg-amber-500/10 text-amber-300/90 px-1 py-0.2 rounded border border-amber-500/20">
                  Purpose not specified
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-100 font-mono text-[11px]">₹149</div>
              <div className="text-[8px] text-slate-500">24 Sept 2026</div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-[#0e1724] border border-slate-800/80 rounded-xl p-2.5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-900/40 text-teal-400 flex items-center justify-center font-bold text-[10px]">
                ▲
              </div>
              <div>
                <div className="font-medium text-slate-100 text-[11px]">50g each</div>
                <div className="text-[9px] text-slate-500">Other · Payment Notification</div>
                <span className="inline-block mt-0.5 text-[8px] bg-amber-500/10 text-amber-300/90 px-1 py-0.2 rounded border border-amber-500/20">
                  Purpose not specified
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="font-bold text-slate-100 font-mono text-[11px]">₹70</div>
              <div className="text-[8px] text-slate-500">24 Sept 2026</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExpensesScreen() {
  return (
    <div className="space-y-2.5 pt-1">
      {/* Search Bar (from Screenshot 2) */}
      <div className="relative">
        <div className="flex items-center gap-2 bg-[#0e1724] border border-slate-800 rounded-xl px-2.5 py-2 text-slate-400">
          <Search className="w-3.5 h-3.5 text-slate-500" />
          <span className="text-[10px] text-slate-400 truncate">Search merchant, purpose, bank...</span>
        </div>
      </div>

      {/* Filter Chips (from Screenshot 2) */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-[9px] scrollbar-none">
        <div className="px-2 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/60 flex items-center gap-1 shrink-0 font-medium">
          <SlidersHorizontal className="w-2.5 h-2.5" />
          <span>Filters</span>
        </div>
        <div className="px-2 py-1 rounded-lg bg-slate-800/90 text-slate-200 border border-slate-700/60 flex items-center gap-1 shrink-0 font-medium">
          <span>Sort: Newest</span>
        </div>
        <div className="px-2 py-1 rounded-lg bg-teal-950/80 text-teal-300 border border-teal-800/80 shrink-0 font-medium">
          <span>Federal Bank</span>
        </div>
      </div>

      <div className="text-[10px] font-semibold text-slate-400 pt-0.5">76 expenses found</div>

      {/* Expense Items with editable purpose banner (from Screenshot 2) */}
      <div className="space-y-2">
        <div className="bg-[#0e1724] border border-slate-800/90 rounded-xl p-2.5">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-900/40 text-teal-400 flex items-center justify-center font-bold text-[10px]">
                ▲
              </div>
              <div>
                <div className="font-semibold text-slate-100 text-[11px]">WhatsApp Pay</div>
                <div className="text-[9px] text-slate-500">Other · WhatsApp Pay</div>
              </div>
            </div>
            <div className="text-[12px] font-bold text-slate-100 font-mono">₹25,000.00</div>
          </div>
          <div className="mt-1.5 flex justify-between items-center text-[8px] text-slate-500">
            <span>24 Sept 2026 · 09:18 pm</span>
          </div>
          <div className="mt-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-2 py-1 flex items-center gap-1.5 text-amber-200 text-[9px]">
            <span>✏️ Purpose not specified — tap to add</span>
          </div>
        </div>

        <div className="bg-[#0e1724] border border-slate-800/90 rounded-xl p-2.5">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-900/40 text-teal-400 flex items-center justify-center font-bold text-[10px]">
                ▲
              </div>
              <div>
                <div className="font-semibold text-slate-100 text-[11px]">200ml</div>
                <div className="text-[9px] text-slate-500">Other · Payment Notification</div>
              </div>
            </div>
            <div className="text-[12px] font-bold text-slate-100 font-mono">₹149.00</div>
          </div>
          <div className="mt-1.5 flex justify-between items-center text-[8px] text-slate-500">
            <span>24 Sept 2026 · 08:16 pm</span>
          </div>
          <div className="mt-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-2 py-1 flex items-center gap-1.5 text-amber-200 text-[9px]">
            <span>✏️ Purpose not specified — tap to add</span>
          </div>
        </div>

        <div className="bg-[#0e1724] border border-slate-800/90 rounded-xl p-2.5">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-900/40 text-teal-400 flex items-center justify-center font-bold text-[10px]">
                ▲
              </div>
              <div>
                <div className="font-semibold text-slate-100 text-[11px]">50g each</div>
                <div className="text-[9px] text-slate-500">Other · Payment Notification</div>
              </div>
            </div>
            <div className="text-[12px] font-bold text-slate-100 font-mono">₹70.00</div>
          </div>
          <div className="mt-1.5 flex justify-between items-center text-[8px] text-slate-500">
            <span>24 Sept 2026 · 08:14 pm</span>
          </div>
          <div className="mt-2 bg-amber-500/10 border border-amber-500/30 rounded-lg px-2 py-1 flex items-center gap-1.5 text-amber-200 text-[9px]">
            <span>✏️ Purpose not specified — tap to add</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReportsScreen() {
  return (
    <div className="space-y-3 pt-1">
      {/* Monthly Summary Header (from Screenshot 3) */}
      <div className="rounded-2xl p-3 bg-gradient-to-br from-[#0c5348] via-[#094138] to-[#062c26] border border-teal-600/30 text-white">
        <span className="text-[10px] text-teal-100">Monthly Spending Summary</span>
        <div className="text-lg font-bold font-mono text-white mt-0.5">₹86,704.00</div>
        <div className="text-[9px] text-teal-200/80 mt-1">76 total transactions recorded this month</div>
      </div>

      {/* Category Distribution Donut (from Screenshot 3) */}
      <div className="bg-[#0e1724] border border-slate-800 rounded-2xl p-3">
        <div className="flex items-center gap-1.5 text-teal-400 text-[10px] font-semibold mb-2">
          <div className="w-3.5 h-3.5 rounded-full border border-teal-400 flex items-center justify-center text-[8px]">
            ◐
          </div>
          <span>Category Distribution Graph</span>
        </div>

        {/* Donut Chart Visual */}
        <div className="flex items-center justify-center my-1 relative">
          <svg className="w-28 h-28 transform -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="38" stroke="#1e293b" strokeWidth="11" fill="transparent" />
            {/* Main teal/green segment (98% other) */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#00d2aa"
              strokeWidth="11"
              fill="transparent"
              strokeDasharray="220 240"
              strokeDashoffset="0"
            />
            {/* Pink segment (Transport 1%) */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#ec4899"
              strokeWidth="11"
              fill="transparent"
              strokeDasharray="14 240"
              strokeDashoffset="-222"
            />
            {/* Blue segment (Groceries 1%) */}
            <circle
              cx="50"
              cy="50"
              r="38"
              stroke="#3b82f6"
              strokeWidth="11"
              fill="transparent"
              strokeDasharray="6 240"
              strokeDashoffset="-236"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-[8px] text-slate-400">Total Spent</span>
            <span className="text-[11px] font-bold text-white font-mono">₹86,704</span>
            <span className="text-[7px] text-slate-400">5 categories</span>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-2 pt-1 text-[8px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2aa]" /> Other 98%
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ec4899]" /> Transport 1%
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3b82f6]" /> Groceries
          </span>
        </div>
      </div>

      {/* 7-Day Spending Trend (from Screenshot 3) */}
      <div className="bg-[#0e1724] border border-slate-800 rounded-2xl p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[10px] font-semibold text-slate-200 flex items-center gap-1">
            <span className="text-teal-400">📊</span> 7-Day Spending Trend
          </span>
          <TrendingUp className="w-3.5 h-3.5 text-teal-400" />
        </div>

        {/* Bar chart */}
        <div className="h-20 flex items-end justify-between gap-1 pt-4 pb-1 border-b border-slate-800">
          {/* Fri ₹10k */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-slate-400 font-mono">₹10k</span>
            <div className="w-full bg-teal-800/70 rounded-t h-7" />
            <span className="text-[7px] text-slate-400">Fri</span>
          </div>
          {/* Sat ₹70 */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-slate-400 font-mono">₹70</span>
            <div className="w-full bg-teal-800/40 rounded-t h-1.5" />
            <span className="text-[7px] text-slate-400">Sat</span>
          </div>
          {/* Sun ₹765 */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-slate-400 font-mono">₹765</span>
            <div className="w-full bg-teal-800/50 rounded-t h-2.5" />
            <span className="text-[7px] text-slate-400">Sun</span>
          </div>
          {/* Mon ₹520 */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-slate-400 font-mono">₹520</span>
            <div className="w-full bg-teal-800/45 rounded-t h-2" />
            <span className="text-[7px] text-slate-400">Mon</span>
          </div>
          {/* Tue ₹0 */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-slate-400 font-mono">₹0</span>
            <div className="w-full bg-slate-800 rounded-t h-0.5" />
            <span className="text-[7px] text-slate-400">Tue</span>
          </div>
          {/* Wed ₹38k */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-teal-300 font-mono font-bold">₹38k</span>
            <div className="w-full bg-teal-400 rounded-t h-16 shadow-[0_0_8px_rgba(45,212,191,0.4)]" />
            <span className="text-[7px] text-teal-300 font-medium">Wed</span>
          </div>
          {/* Thu ₹25k */}
          <div className="flex-1 flex flex-col items-center gap-1">
            <span className="text-[7px] text-teal-400 font-mono font-bold">₹25k</span>
            <div className="w-full bg-teal-500/80 rounded-t h-12" />
            <span className="text-[7px] text-teal-400 font-bold">Thu</span>
          </div>
        </div>
      </div>

      {/* Bank & Account Allocation (from Screenshot 3) */}
      <div className="bg-[#0e1724] border border-slate-800 rounded-2xl p-3">
        <div className="flex items-center gap-1 text-[10px] font-semibold text-slate-200 mb-2">
          <Building2 className="w-3 h-3 text-teal-400" />
          <span>Bank & Account Allocation</span>
        </div>

        {/* Multi-segment bar */}
        <div className="w-full h-2 rounded-full overflow-hidden flex mb-2.5">
          <div className="bg-purple-500 w-[38%]" />
          <div className="bg-pink-500 w-[29%]" />
          <div className="bg-teal-400 w-[12%]" />
          <div className="bg-amber-500 w-[11%]" />
          <div className="bg-indigo-500 w-[5%]" />
          <div className="bg-emerald-500 w-[2%]" />
        </div>

        <div className="space-y-1.5 text-[9px]">
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Payment Notification (38%)
            </span>
            <span className="font-mono font-semibold text-slate-200">₹33,692</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> WhatsApp Pay (29%)
            </span>
            <span className="font-mono font-semibold text-slate-200">₹25,298</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" /> ICICI Bank (12%)
            </span>
            <span className="font-mono font-semibold text-slate-200">₹10,714</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="flex items-center gap-1 text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Federal Bank (11%)
            </span>
            <span className="font-mono font-semibold text-slate-200">₹10,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AiChatScreen() {
  return (
    <div className="space-y-2.5 pt-1">
      <div className="rounded-xl p-2 bg-teal-950/40 border border-teal-500/20 text-[9px] text-teal-300 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-teal-400" /> AI Assistant Interactive Demo
        </span>
        <span className="text-[8px] text-teal-400/80">Online</span>
      </div>

      <div className="space-y-2 text-[10px]">
        {/* User 1 */}
        <div className="flex justify-end">
          <div className="bg-teal-700/80 text-white rounded-2xl rounded-tr-xs px-2.5 py-1.5 max-w-[80%]">
            How much did I spend on food this month?
          </div>
        </div>

        {/* AI 1 */}
        <div className="flex justify-start">
          <div className="bg-[#0e1724] border border-teal-500/30 text-slate-200 rounded-2xl rounded-tl-xs px-2.5 py-1.5 max-w-[85%]">
            <p className="text-[9px]">
              You spent <span className="font-bold text-teal-300 font-mono">₹8,420</span> on food this month, which is{' '}
              <span className="text-amber-300">12% higher</span> than last month.
            </p>
          </div>
        </div>

        {/* User 2 */}
        <div className="flex justify-end">
          <div className="bg-teal-700/80 text-white rounded-2xl rounded-tr-xs px-2.5 py-1.5 max-w-[80%]">
            Split ₹1,800 dinner bill with Rahul & Priya and make a QR
          </div>
        </div>

        {/* AI 2 */}
        <div className="flex justify-start">
          <div className="bg-[#0e1724] border border-teal-500/30 text-slate-200 rounded-2xl rounded-tl-xs px-2.5 py-2 max-w-[90%] space-y-1.5">
            <p className="text-[9px]">
              Split 3 ways: <span className="font-bold text-teal-300 font-mono">₹600</span> per person. Here is your
              UPI payment QR:
            </p>
            <div className="bg-white p-1.5 rounded-lg w-20 h-20 mx-auto flex items-center justify-center">
              <QrCode className="w-16 h-16 text-slate-900" />
            </div>
            <div className="text-[8px] text-center text-slate-400">Scan to pay ₹600 via any UPI app</div>
          </div>
        </div>

        {/* User 3 */}
        <div className="flex justify-end">
          <div className="bg-teal-700/80 text-white rounded-2xl rounded-tr-xs px-2.5 py-1.5 max-w-[80%]">
            Add ₹450 spent at Starbucks for coffee
          </div>
        </div>

        {/* AI 3 */}
        <div className="flex justify-start">
          <div className="bg-[#0e1724] border border-teal-500/30 text-slate-200 rounded-2xl rounded-tl-xs px-2.5 py-1.5 max-w-[85%]">
            <p className="text-[9px]">
              ✓ Added <span className="font-bold text-teal-300 font-mono">₹450</span> to{' '}
              <span className="font-semibold text-slate-100">Dining</span> (Starbucks).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
