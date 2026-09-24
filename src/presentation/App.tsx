import type { LandingPage } from '../application';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { BenefitsBar } from './sections/BenefitsBar';
import { ComparisonSection } from './sections/comparison/ComparisonSection';
import { FaqSection } from './sections/FaqSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { FinalCtaSection } from './sections/FinalCtaSection';
import { HeroSection } from './sections/hero/HeroSection';
import { InstallSection } from './sections/InstallSection';
import { PricingSection } from './sections/pricing/PricingSection';

interface AppProps {
  page: LandingPage;
}

export function App({ page }: AppProps) {
  const { links } = page;

  return (
    <div id="top" className="min-h-screen">
      <Header navigation={page.navigation} links={links} />
      <main>
        <HeroSection content={page.hero} links={links} />
        <BenefitsBar benefits={page.benefits} />
        <ComparisonSection content={page.comparison} />
        <FeaturesSection content={page.features} links={links} />
        <PricingSection content={page.pricing} links={links} />
        <InstallSection content={page.install} links={links} />
        <FaqSection content={page.faq} />
        <FinalCtaSection content={page.finalCta} links={links} />
      </main>
      <Footer content={page.footer} />
    </div>
  );
}
