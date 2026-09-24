export type BillingPeriod = 'month' | 'quarter' | 'year';

export interface PlanPerk {
  readonly label: string;
  readonly isHighlighted?: boolean;
}

export interface Plan {
  readonly id: string;
  readonly name: string;
  readonly tagline: string;
  readonly priceInCents: number;
  readonly billingPeriod: BillingPeriod;
  readonly summary: string;
  readonly perks: readonly PlanPerk[];
  readonly ctaLabel: string;
  /** Present only on the plan promoted above the others. */
  readonly featured?: {
    readonly ribbon: string;
  };
}
