import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Mic, QrCode, ArrowRight, CornerDownLeft } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  qrCode?: boolean;
  amount?: string;
  badge?: string;
}

export const AiAgentSection: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'user',
      text: 'How much did I spend on food this month?',
      timestamp: 'Just now',
    },
    {
      id: '2',
      sender: 'assistant',
      text: 'You spent ₹8,420 on food this month, which is 12% higher than last month.',
      timestamp: 'Just now',
      amount: '₹8,420',
      badge: '+12% vs last month',
    },
    {
      id: '3',
      sender: 'user',
      text: 'Find my biggest expenses.',
      timestamp: 'Just now',
    },
    {
      id: '4',
      sender: 'assistant',
      text: 'Your largest expenses this month are:\n1. WhatsApp Pay: ₹25,000 (Shopping / Transfer)\n2. Payment Notification: ₹12,575 (Electronics)\n3. SIP Mutual Fund: ₹10,000 (Investment)',
      timestamp: 'Just now',
    },
    {
      id: '5',
      sender: 'user',
      text: 'Add ₹450 spent at Starbucks for coffee.',
      timestamp: 'Just now',
    },
    {
      id: '6',
      sender: 'assistant',
      text: 'Added ₹450 to Dining (Starbucks). Your updated dining total is ₹8,870 across 14 transactions.',
      timestamp: 'Just now',
      badge: '✓ Logged to Dining',
    },
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const samplePrompts = [
    'Split ₹2,400 dinner with 3 friends',
    'How much did I spend on Uber this week?',
    'Show recurring subscription charges',
  ];

  const handleSendPrompt = (text: string) => {
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: text.trim(),
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let replyText = '';
      let showQr = false;
      const lower = text.toLowerCase();

      if (lower.includes('split')) {
        replyText =
          'Split calculated: ₹600 per person (4 ways). Here is your generated instant UPI QR code for friends to scan.';
        showQr = true;
      } else if (lower.includes('uber') || lower.includes('travel')) {
        replyText =
          'You spent ₹1,420 across 4 Uber rides this week. That is 20% lower than your weekly average.';
      } else if (lower.includes('recurring') || lower.includes('sub')) {
        replyText =
          'Identified 4 active subscriptions: Netflix (₹649/mo), Spotify (₹119/mo), Cloud Storage (₹130/mo), and Gym SIP (₹2,500/mo). Total: ₹3,398/month.';
      } else {
        replyText = `Understood. Analyzing your spend data for "${text}". Found 3 matching records totalling ₹1,850.`;
      }

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'assistant',
        text: replyText,
        timestamp: 'Just now',
        qrCode: showQr,
      };

      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <section id="ai-agent" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Context & Value Props */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/60 border border-teal-500/20 text-teal-300 text-xs font-medium">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>AI Financial Assistant</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight text-balance">
              Talk to your <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400">
                finances.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              No complicated spreadsheets or tedious manual typing. Query past purchases, log cash spent on the go,
              split restaurant checks, and receive context-aware answers in natural language.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-semibold text-white">Voice & Text Input:</span>
                  <span className="text-slate-400 block text-xs mt-0.5">
                    Speak directly into the app while on the move or type when in quiet spaces.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-semibold text-white">Expense Splitting & UPI QR:</span>
                  <span className="text-slate-400 block text-xs mt-0.5">
                    Ask to divide any transaction among peers and generate a payment QR on the fly.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-sm text-slate-300">
                <div className="w-6 h-6 rounded-lg bg-teal-500/15 border border-teal-500/30 flex items-center justify-center text-teal-300 shrink-0 mt-0.5">
                  ✓
                </div>
                <div>
                  <span className="font-semibold text-white">Natural Modifications:</span>
                  <span className="text-slate-400 block text-xs mt-0.5">
                    Correct categories, update notes, or recalculate monthly totals effortlessly.
                  </span>
                </div>
              </div>
            </div>

            {/* Micro Demo Disclaimer required by prompt */}
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
              <span className="text-slate-300 font-medium">Interactive Demo:</span> The conversation on the right
              demonstrates live assistant interaction with fixed sample data. Numbers are for demonstration purposes.
            </div>
          </div>

          {/* Right Column: Realistic Chat UI Simulation */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl bg-[#09101c] border border-slate-800 shadow-2xl shadow-black/60 overflow-hidden flex flex-col h-[520px]">
              {/* Chat Header */}
              <div className="px-5 py-3.5 bg-[#0d1624] border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-300 border border-teal-500/30 flex items-center justify-center">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span>Expense Tracker Assistant</span>
                      <span className="px-1.5 py-0.2 rounded text-[9px] bg-teal-500/20 text-teal-300 font-mono">
                        DEMO
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">Natural language personal finance engine</div>
                  </div>
                </div>

                <div className="text-[11px] text-teal-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
                  <span>Interactive</span>
                </div>
              </div>

              {/* Messages Container */}
              <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5 text-xs scrollbar-none">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-teal-600 text-white rounded-tr-xs shadow-sm font-medium'
                          : 'bg-[#101c2d] border border-slate-800 text-slate-200 rounded-tl-xs shadow-sm whitespace-pre-line'
                      }`}
                    >
                      {msg.text}

                      {/* Optional QR Code Demonstration */}
                      {msg.qrCode && (
                        <div className="mt-3 p-3 bg-white rounded-xl w-36 mx-auto flex flex-col items-center">
                          <QrCode className="w-28 h-28 text-slate-900" />
                          <span className="text-[9px] text-slate-700 font-mono mt-1 font-semibold">
                            UPI QR Code (Demo)
                          </span>
                        </div>
                      )}

                      {/* Optional badge */}
                      {msg.badge && (
                        <div className="mt-2 inline-block px-2 py-0.5 rounded text-[10px] bg-teal-500/20 text-teal-300 border border-teal-500/30">
                          {msg.badge}
                        </div>
                      )}
                    </div>
                    <span className="text-[9px] text-slate-500 mt-1 px-1">{msg.timestamp}</span>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-1.5 text-slate-400 px-3 py-2 bg-[#101c2d] rounded-2xl w-24 border border-slate-800">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
              </div>

              {/* Sample Prompts Chips */}
              <div className="px-4 py-2 bg-[#0b121e] border-t border-slate-800/60 flex items-center gap-1.5 overflow-x-auto text-[10px] scrollbar-none">
                <span className="text-slate-500 shrink-0">Try:</span>
                {samplePrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendPrompt(prompt)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800/80 hover:bg-teal-950/80 text-slate-300 hover:text-teal-300 border border-slate-700/60 hover:border-teal-500/40 shrink-0 transition-colors cursor-pointer"
                  >
                    "{prompt}"
                  </button>
                ))}
              </div>

              {/* Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendPrompt(inputVal);
                }}
                className="p-3 bg-[#0d1624] border-t border-slate-800 flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => setInputVal(e.target.value)}
                    placeholder="Ask or tell your financial assistant..."
                    className="w-full bg-[#070d16] border border-slate-700/80 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  aria-label="Send test query"
                  className="p-2.5 rounded-xl bg-teal-500 text-slate-950 hover:bg-teal-400 transition-colors shadow-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
