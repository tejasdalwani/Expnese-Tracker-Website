import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface TermsPageProps {
  onNavigate?: (path: string) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({ onNavigate }) => {
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

      {/* Page Title */}
      <div className="space-y-3 border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-medium">
          <FileText className="w-3.5 h-3.5" />
          <span>Legal Agreement</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
          Terms of Service for {SITE_CONFIG.APP_NAME}
        </h1>
        <div className="text-xs text-slate-400 flex flex-wrap gap-4">
          <span>Effective Date: September 24, 2026</span>
          <span>·</span>
          <span>Last Revised: September 24, 2026</span>
        </div>
      </div>

      {/* Structured Sections */}
      <div className="space-y-8 text-xs sm:text-sm leading-relaxed text-slate-300 divide-y divide-slate-800/80">
        <section className="space-y-2">
          <h2 className="text-lg font-semibold text-white">1. Acceptable Use</h2>
          <p>
            By downloading, accessing, or using {SITE_CONFIG.APP_NAME}, you agree to abide by these Terms of Service.
            You agree to utilize the application solely for personal, non-commercial financial record-keeping in
            compliance with all applicable laws and regulations.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">2. User Responsibility & Device Access</h2>
          <p>
            You are responsible for securing physical and biometric access to your Android device. Because the
            application parses local device notifications, you agree to ensure that permissions granted to{' '}
            {SITE_CONFIG.APP_NAME} reflect your intended tracking preferences.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">3. AI Capabilities & Limitations</h2>
          <p>
            The built-in AI Expense Agent relies on statistical natural language processing to assist in categorizing
            transactions, computing summaries, and answering expense queries.
          </p>
          <p>
            AI outputs are informational aids. They may occasionally misinterpret colloquial speech or unusual receipt
            formatting. You should review critical expense classifications and manually correct any discrepancies.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">4. Financial Information Disclaimer</h2>
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs">
            <p className="font-semibold text-white mb-1 flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Not Financial or Investment Advice
            </p>
            {SITE_CONFIG.FINANCIAL_DISCLAIMER}
          </div>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">5. Card Recommendation Disclaimer</h2>
          <p>
            Any credit card suggestions provided in the app are generated based on category spend distributions. We do
            not guarantee card approval, credit line size, ongoing interest rates, or continuous reward tier viability.
            Issuing banks maintain independent underwriting criteria.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">6. Affiliate & Commercial Disclosure</h2>
          <p>
            {SITE_CONFIG.AFFILIATE_DISCLOSURE} When you choose to apply for third-party financial products via external
            links provided within the service, we may receive compensation from the issuing partner.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">7. Subscriptions & Pricing</h2>
          <p>
            {SITE_CONFIG.APP_NAME} offers both free and premium subscription tiers (Silver and Premium). Features,
            query allowances, and fees are clearly presented within the application and website. All fees are quoted in
            Indian Rupees (INR) and are subject to change with advance notice.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">8. Payment & Refund Terms</h2>
          <p>
            Premium subscriptions billed via the Google Play Store are subject to Google Play billing policies and
            refund procedures. You can manage, upgrade, or cancel active subscriptions at any time via your Google Play
            Account settings.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">9. Termination</h2>
          <p>
            You may terminate your relationship with {SITE_CONFIG.APP_NAME} at any time by uninstalling the app and
            deleting local application records. We reserve the right to suspend access in cases of abusive or fraudulent
            activity.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">10. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by applicable law, {SITE_CONFIG.LEGAL_BUSINESS_NAME} and its officers shall
            not be liable for any indirect, incidental, punitive, or consequential damages resulting from missed
            notifications, miscategorized transactions, or third-party banking delays.
          </p>
        </section>

        <section className="pt-6 space-y-2">
          <h2 className="text-lg font-semibold text-white">11. Contact Information</h2>
          <p>Questions regarding these Terms should be addressed to our legal department:</p>
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
            <div>
              <strong>Entity:</strong> {SITE_CONFIG.LEGAL_BUSINESS_NAME}
            </div>
            <div>
              <strong>Location:</strong> {SITE_CONFIG.REGISTERED_ADDRESS}
            </div>
            <div>
              <strong>Email:</strong> {SITE_CONFIG.SUPPORT_EMAIL}
            </div>
          </div>
        </section>
      </div>

      {/* Back to Home Button */}
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
