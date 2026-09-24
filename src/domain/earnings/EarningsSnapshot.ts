/** A single cost deducted from a driver's gross income. */
export interface Expense {
  readonly label: string;
  readonly amountInCents: number;
  /** Costs drivers rarely notice, like tyre and oil wear per kilometre. */
  readonly isHiddenCost?: boolean;
}

/** Raw figures for a work period (a shift, a day or a month). */
export interface EarningsSnapshot {
  readonly grossInCents: number;
  readonly expenses: readonly Expense[];
  readonly hoursWorked?: number;
}
