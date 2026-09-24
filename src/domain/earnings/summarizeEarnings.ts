import type { EarningsSnapshot } from './EarningsSnapshot';

export interface EarningsSummary {
  readonly grossInCents: number;
  readonly totalExpensesInCents: number;
  readonly netInCents: number;
  /** Share of the gross income that is left as profit, from 0 to 1. */
  readonly netMargin: number;
  /** Net profit per hour worked, or null when hours are unknown. */
  readonly netPerHourInCents: number | null;
}

export class InvalidEarningsError extends Error {
  override name = 'InvalidEarningsError';
}

/**
 * Turns the gross figure an app shows into the driver's real profit.
 * Amounts are integer cents so sums never suffer floating-point drift.
 */
export function summarizeEarnings(snapshot: EarningsSnapshot): EarningsSummary {
  assertValid(snapshot);

  const totalExpensesInCents = snapshot.expenses.reduce(
    (total, expense) => total + expense.amountInCents,
    0,
  );
  const netInCents = snapshot.grossInCents - totalExpensesInCents;

  return {
    grossInCents: snapshot.grossInCents,
    totalExpensesInCents,
    netInCents,
    netMargin: snapshot.grossInCents === 0 ? 0 : netInCents / snapshot.grossInCents,
    netPerHourInCents: snapshot.hoursWorked
      ? Math.round(netInCents / snapshot.hoursWorked)
      : null,
  };
}

function assertValid({ grossInCents, expenses, hoursWorked }: EarningsSnapshot): void {
  if (!isNonNegativeInteger(grossInCents)) {
    throw new InvalidEarningsError('Gross income must be a non-negative integer of cents.');
  }
  if (expenses.some((expense) => !isNonNegativeInteger(expense.amountInCents))) {
    throw new InvalidEarningsError('Expenses must be non-negative integers of cents.');
  }
  if (hoursWorked !== undefined && !(hoursWorked > 0)) {
    throw new InvalidEarningsError('Hours worked must be greater than zero.');
  }
}

function isNonNegativeInteger(value: number): boolean {
  return Number.isInteger(value) && value >= 0;
}
