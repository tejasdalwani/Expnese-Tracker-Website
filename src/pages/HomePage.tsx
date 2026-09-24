import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProductPreviewSection } from '../components/ProductPreviewSection';
import { FeaturesGrid } from '../components/FeaturesGrid';
import { HowItWorksSection } from '../components/HowItWorksSection';
import { AiAgentSection } from '../components/AiAgentSection';
import { SmartDetectionSection } from '../components/SmartDetectionSection';
import { ReportsPreviewSection } from '../components/ReportsPreviewSection';
import { CreditCardsSection } from '../components/CreditCardsSection';
import { PrivacyTrustSection } from '../components/PrivacyTrustSection';
import { PricingSection } from '../components/PricingSection';
import { FaqSection } from '../components/FaqSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main className="space-y-0">
      <HeroSection />
      <ProductPreviewSection />
      <FeaturesGrid />
      <HowItWorksSection />
      <AiAgentSection />
      <SmartDetectionSection />
      <ReportsPreviewSection />
      <CreditCardsSection />
      <PrivacyTrustSection onNavigate={onNavigate} />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
  );
};
