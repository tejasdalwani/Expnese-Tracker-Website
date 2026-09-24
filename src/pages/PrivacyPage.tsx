import React from 'react';
import { ArrowLeft, Shield, Lock, FileText, Mail, Building } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface PrivacyPageProps {
  onNavigate?: (path: string) => void;
}

export const PrivacyPage: React.FC<PrivacyPageProps> = ({ onNavigate }) => {
  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) onNavigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Page Title & Meta */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
          <Shield className="w-3.5 h-3.5" />
          <span>Privacy Policy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Privacy Policy for {SITE_CONFIG.APP_NAME}
        </h1>
        <div className="text-xs text-slate-400 flex flex-wrap gap-4">
          <span>Effective Date: September 24, 2026</span>
          <span>·</span>
          <span>Last Updated: September 24, 2026</span>
          <span>·</span>
          <span>Platform: Android</span>
        </div>
      </div>

      {/* Summary Box */}
      <div className="p-5 rounded-2xl bg-[#0c1524] border border-teal-500/30 text-xs leading-relaxed space-y-2">
        <p className="font-semibold text-white">Summary of Core Privacy Commitments:</p>
        <p className="text-slate-300">
          {SITE_CONFIG.APP_NAME} ("we", "our", or "the app") is committed to respecting your privacy. This policy
          explains how our Android application handles transactional information, device permissions, and AI
          processing. We do not sell your personal financial records to advertising brokers.
        </p>
      </div>

      {/* Structured 14 Sections */}
      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-slate-300 divide-y divide-slate-800/80">
        {/* Section 1 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">1. Information Collected</h2>
          <p>
            When you use {SITE_CONFIG.APP_NAME}, we may collect or process the following categories of information:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-300">
            <li>
              <strong>Transactional Data:</strong> Amounts, timestamps, merchant strings, and account designations
              parsed from eligible financial alert notifications.
            </li>
            <li>
              <strong>User-Provided Information:</strong> Manual expenses, custom tags, split bill allocations, and
              notes you voluntarily input.
            </li>
            <li>
              <strong>Conversational Inputs:</strong> Queries or instructions sent to the AI Expense Agent (text or
              voice transcripts).
            </li>
            <li>
              <strong>Technical Diagnostics:</strong> App version, device model, operating system version, and crash
              logs for stability maintenance.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">2. SMS & Notification Permissions</h2>
          <p>
            The Android operating system requires explicit user permission to read incoming messages and notification
            events.
          </p>
          <p>
            <strong>Notification Listener Access:</strong> Used exclusively to evaluate notification text from supported
            banking, UPI, and payment applications to identify debit events in real-time.
          </p>
          <p>
            <strong>SMS Permission:</strong> If enabled by you, used to parse structured bank debit SMS messages. You
            can revoke these permissions at any time via Android Settings &gt; Apps &gt; {SITE_CONFIG.APP_NAME} &gt;
            Permissions.
          </p>
        </section>

        {/* Section 3 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">3. Financial Transaction Data</h2>
          <p>
            We process transaction text solely to categorize expenses, compute weekly/monthly reports, and enable
            conversational search.
          </p>
          <p>
            <strong>Promotional Message Filtering:</strong> The app distinguishes between genuine debits and promotional
            alerts (e.g. coupon codes, deal notifications). Promotional content is discarded and not recorded as
            expenses.
          </p>
        </section>

        {/* Section 4 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">4. Account Information & Credentials</h2>
          <p>
            {SITE_CONFIG.APP_NAME} does <strong>not</strong> require, request, or store your net-banking passwords, UPI
            PINs, ATM PINs, OTP codes, or full debit/credit card numbers. Transaction information is parsed purely from
            publicly broadcast notification text sent to your device by third-party apps.
          </p>
        </section>

        {/* Section 5 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">5. AI Processing</h2>
          <p>
            When you interact with the AI Expense Agent (e.g., asking "How much did I spend on food this month?"), your
            prompt and the relevant aggregated context necessary to resolve the query are processed securely to generate
            conversational answers.
          </p>
          <p>
            AI processing is scoped strictly to executing your explicit user instructions. Your inputs are not used to
            serve third-party targeted advertisements.
          </p>
        </section>

        {/* Section 6 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">6. Analytics</h2>
          <p>
            We may aggregate anonymized product telemetry (e.g. screens viewed, button clicks, error frequencies) to
            improve user experience and optimize app responsiveness. Analytics data is stripped of personal identifiers
            and is never sold to marketing data brokers.
          </p>
        </section>

        {/* Section 7 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">7. Affiliate Links & Commercial Relationships</h2>
          <p>
            The app may display credit-card or financial product discovery recommendations. If you choose to explore an
            issuer's offering through an external link when available, we may earn a referral commission.
          </p>
          <p>
            Recommendations are based on objective spending categorization patterns rather than highest-bidder
            advertising auctions. We disclose these relationships transparently within the product.
          </p>
        </section>

        {/* Section 8 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">8. Data Retention</h2>
          <p>
            Your transaction logs are stored primarily within your local application sandbox on your Android device. Any
            telemetry or diagnostics are retained only for the minimal period required to diagnose crashes and
            operational issues.
          </p>
        </section>

        {/* Section 9 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">9. Data Deletion</h2>
          <p>
            You retain absolute ownership over your data. You can delete individual transactions, purge categorized
            history, or clear all stored data directly through the in-app settings menu or by clearing the application
            data in Android Settings.
          </p>
          <p>
            You may also contact <code className="text-teal-300">{SITE_CONFIG.SUPPORT_EMAIL}</code> to request complete
            erasure of any associated records.
          </p>
        </section>

        {/* Section 10 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">10. Security</h2>
          <p>
            We implement industry-standard safeguards, including device-level sandboxing, HTTPS/TLS for all encrypted
            network transmissions, and principle-of-least-privilege access. While we employ rigorous defenses, no digital
            system is completely invulnerable.
          </p>
        </section>

        {/* Section 11 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">11. Third-Party Services</h2>
          <p>
            The application may interface with foundational cloud infrastructure for backend diagnostics, Google Play
            services for app updates, and secure AI processing APIs. These services process data in compliance with their
            respective enterprise security standards.
          </p>
        </section>

        {/* Section 12 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">12. Children's Privacy</h2>
          <p>
            {SITE_CONFIG.APP_NAME} is intended for individuals of legal age capable of entering financial contracts (18
            years or older). We do not knowingly collect personal information from children under 13.
          </p>
        </section>

        {/* Section 13 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">13. Changes to this Privacy Policy</h2>
          <p>
            We may update this policy periodically to reflect feature additions or regulatory revisions. We will notify
            users of material changes via an in-app notice or website update. Continued use following changes signifies
            acceptance.
          </p>
        </section>

        {/* Section 14 */}
        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">14. Contact & Legal Entity</h2>
          <p>For questions or privacy inquiries, please contact our designated privacy officer:</p>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
            <div>
              <strong>Legal Entity:</strong> {SITE_CONFIG.LEGAL_BUSINESS_NAME}
            </div>
            <div>
              <strong>Registered Address:</strong> {SITE_CONFIG.REGISTERED_ADDRESS}
            </div>
            <div>
              <strong>Support Email:</strong>{' '}
              <a href={`mailto:${SITE_CONFIG.SUPPORT_EMAIL}`} className="text-teal-400 hover:underline">
                {SITE_CONFIG.SUPPORT_EMAIL}
              </a>
            </div>
            <div>
              <strong>Data Protection Contact:</strong> {SITE_CONFIG.DATA_CONTROLLER_EMAIL}
            </div>
          </div>
        </section>
      </div>

      {/* Back to Home Button at bottom */}
      <div className="pt-8 border-t border-slate-800">
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
