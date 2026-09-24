import type { EarningsSnapshot, Plan } from '../../domain';

/**
 * Everything the landing page shows. `TEarnings` lets the same shape carry
 * raw snapshots (from a data source) or computed reports (for the view).
 */
export interface LandingContent<TEarnings = EarningsSnapshot> {
  readonly links: SiteLinks;
  readonly navigation: readonly NavLink[];
  readonly hero: HeroContent<TEarnings>;
  readonly benefits: readonly IconLabel[];
  readonly comparison: ComparisonContent<TEarnings>;
  readonly features: FeaturesContent;
  readonly pricing: PricingContent;
  readonly install: InstallContent;
  readonly faq: FaqContent;
  readonly finalCta: FinalCtaContent;
  readonly footer: FooterContent;
}

export interface SiteLinks {
  readonly download: string;
  readonly support: string;
}

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export interface IconLabel {
  readonly icon: string;
  readonly label: string;
}

export interface Screenshot {
  readonly src: string;
  readonly alt: string;
}

export interface SectionIntro {
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
}

export interface HeroContent<TEarnings> {
  readonly badge: string;
  readonly title: string;
  readonly highlight: string;
  readonly description: string;
  readonly primaryCta: string;
  readonly secondaryCta: string;
  readonly highlights: readonly { readonly icon: string; readonly title: string; readonly caption: string }[];
  readonly dashboard: {
    readonly today: TEarnings;
    readonly averagePerHourInCents: number;
    readonly chartHours: readonly string[];
  };
  readonly phoneScreenshot: Screenshot;
}

export interface ComparisonContent<TEarnings> extends SectionIntro {
  readonly dividerLabel: string;
  readonly illusion: {
    readonly title: string;
    readonly badge: string;
    readonly grossLabel: string;
    readonly resultLabel: string;
    readonly earnings: TEarnings;
  };
  readonly clarity: {
    readonly ribbon: string;
    readonly title: string;
    readonly periodLabel: string;
    readonly periodName: string;
    readonly costPerKmInCents: number;
    readonly exportHint: string;
    readonly exportAction: string;
    readonly earnings: TEarnings;
  };
}

export type FeatureTone = 'income' | 'ink' | 'expense' | 'neutral';

export interface Feature {
  readonly icon: string;
  readonly tone: FeatureTone;
  readonly title: string;
  readonly description: string;
  readonly screenshot: Screenshot;
}

export interface FeaturesContent extends SectionIntro {
  readonly items: readonly Feature[];
  readonly spotlight: {
    readonly icon: string;
    readonly title: string;
    readonly description: string;
    readonly cta: string;
  };
}

export interface PricingContent extends SectionIntro {
  readonly plans: readonly Plan[];
  readonly guarantee: string;
}

export interface InstallStep {
  readonly title: string;
  readonly description: string;
}

export interface InstallContent extends SectionIntro {
  readonly steps: readonly InstallStep[];
  readonly help: {
    readonly title: string;
    readonly description: string;
    readonly cta: string;
  };
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface FaqContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly items: readonly FaqItem[];
}

export interface FinalCtaContent extends SectionIntro {
  readonly highlight: string;
  readonly cta: string;
  readonly trustNote: string;
}

export interface FooterContent {
  readonly copyright: string;
  readonly links: readonly NavLink[];
}
