import { describe, expect, it } from 'vitest';
import { InvalidEarningsError, summarizeEarnings } from './summarizeEarnings';

describe('summarizeEarnings', () => {
  const dayOnTheRoad = {
    grossInCents: 35_000,
    hoursWorked: 11,
    expenses: [
      { label: 'Combustível', amountInCents: 11_500 },
      { label: 'Almoço', amountInCents: 2_800 },
      { label: 'Pedágio', amountInCents: 955 },
      { label: 'Desgaste', amountInCents: 3_600, isHiddenCost: true },
    ],
  };

  it('deducts every expense from the gross income', () => {
    const summary = summarizeEarnings(dayOnTheRoad);

    expect(summary.totalExpensesInCents).toBe(18_855);
    expect(summary.netInCents).toBe(16_145);
  });

  it('computes the net margin as a ratio of the gross income', () => {
    expect(summarizeEarnings(dayOnTheRoad).netMargin).toBeCloseTo(0.4613, 4);
  });

  it('computes the net profit per hour, rounded to the cent', () => {
    expect(summarizeEarnings(dayOnTheRoad).netPerHourInCents).toBe(1_468);
  });

  it('returns null per hour when hours worked are unknown', () => {
    const withoutHours = { grossInCents: dayOnTheRoad.grossInCents, expenses: dayOnTheRoad.expenses };

    expect(summarizeEarnings(withoutHours).netPerHourInCents).toBeNull();
  });

  it('reports a zero margin when nothing was earned', () => {
    expect(summarizeEarnings({ grossInCents: 0, expenses: [] }).netMargin).toBe(0);
  });

  it('allows a negative net result when costs exceed income', () => {
    const summary = summarizeEarnings({
      grossInCents: 5_000,
      expenses: [{ label: 'Combustível', amountInCents: 8_000 }],
    });

    expect(summary.netInCents).toBe(-3_000);
  });

  it.each([
    { grossInCents: -1, expenses: [] },
    { grossInCents: 10.5, expenses: [] },
    { grossInCents: 100, expenses: [{ label: 'x', amountInCents: -5 }] },
    { grossInCents: 100, expenses: [], hoursWorked: 0 },
  ])('rejects invalid input %o', (snapshot) => {
    expect(() => summarizeEarnings(snapshot)).toThrow(InvalidEarningsError);
  });
});
