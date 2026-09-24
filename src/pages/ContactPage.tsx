import React, { useState } from 'react';
import { ArrowLeft, Mail, MessageSquare, Send, AlertCircle, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ContactPageProps {
  onNavigate?: (path: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [category, setCategory] = useState('General');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = ['General', 'Bug Report', 'Account', 'Privacy', 'Payments', 'Feedback'];

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Prompt instruction: Clearly indicate that form submission requires backend integration
    // Do not fake successful message delivery.
    setIsSubmitted(true);
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-slate-300 space-y-10">
      {/* Back button */}
      <div>
        <a
          href="/"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </a>
      </div>

      {/* Header */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Product Support</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Contact {SITE_CONFIG.APP_NAME} Team
        </h1>
        <p className="text-slate-300 text-sm max-w-xl">
          Have feedback on the Android app, inquiries about privacy controls, or partnership requests? Reach out to our
          engineering and product team.
        </p>
      </div>

      {/* Direct Email Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-[#0c1422] border border-slate-800 space-y-1.5">
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Direct Email</div>
          <div className="text-white font-medium text-sm">
            <a href={`mailto:${SITE_CONFIG.SUPPORT_EMAIL}`} className="hover:underline">
              {SITE_CONFIG.SUPPORT_EMAIL}
            </a>
          </div>
          <p className="text-[11px] text-slate-400">Response time within 24–48 business hours</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0c1422] border border-slate-800 space-y-1.5">
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Privacy Officer</div>
          <div className="text-white font-medium text-sm">
            <a href={`mailto:${SITE_CONFIG.DATA_CONTROLLER_EMAIL}`} className="hover:underline">
              {SITE_CONFIG.DATA_CONTROLLER_EMAIL}
            </a>
          </div>
          <p className="text-[11px] text-slate-400">Data deletion, compliance & permissions</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#0c1422] border border-slate-800 space-y-1.5">
          <div className="text-xs font-semibold text-teal-400 uppercase tracking-wider">Android Build Status</div>
          <div className="text-white font-medium text-sm">Early Access Queue</div>
          <p className="text-[11px] text-slate-400">Internal testing track on Google Play</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="rounded-3xl p-6 sm:p-8 bg-[#0a111d] border border-slate-800">
        <h2 className="text-xl font-display font-semibold text-white mb-2">Send a Message</h2>
        <p className="text-xs text-slate-400 mb-6">
          Fill out the details below. We read every bug report and feature suggestion.
        </p>

        {isSubmitted ? (
          <div className="p-6 rounded-2xl bg-[#0c1828] border border-teal-500/40 space-y-3">
            <div className="flex items-center gap-2.5 text-teal-300 font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 text-teal-400" />
              <span>Form Ready for Server Endpoint</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Thank you, <strong className="text-white">{name}</strong>. Because this is a static marketing website,
              your message has been validated client-side. To reach us immediately while the server mailbox API is
              being provisioned, please email our support address directly at{' '}
              <a href={`mailto:${SITE_CONFIG.SUPPORT_EMAIL}`} className="text-teal-400 underline font-semibold">
                {SITE_CONFIG.SUPPORT_EMAIL}
              </a>
              .
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-2 text-xs text-slate-400 hover:text-white underline cursor-pointer"
            >
              Submit another inquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Category Select */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Inquiry Category</label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border transition-colors text-center cursor-pointer ${
                      category === cat
                        ? 'bg-teal-500/20 text-teal-300 border-teal-500/50'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors"
                />
              </div>
            </div>

            {/* Message Body */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Message / Inquiry Details</label>
              <textarea
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your question, feature request, or feedback..."
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-teal-400 transition-colors resize-none"
              />
            </div>

            {/* Notice per user prompt */}
            <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Note: This form demonstrates the contact workflow. Actual automated email forwarding requires your email
                webhook endpoint to be configured in production.
              </span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>

      {/* Back to Home button */}
      <div className="pt-4 border-t border-slate-800">
        <a
          href="/"
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-teal-300 text-xs font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </a>
      </div>
    </div>
  );
};
