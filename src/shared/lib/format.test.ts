import { describe, expect, it } from 'vitest';
import { formatAmount, formatCurrency, formatPercent } from './format';

// Intl separates "R$" and "%" with non-breaking spaces; normalise for readability.
const normalizeSpaces = (text: string) => text.replace(/\s/g, ' ');

describe('format', () => {
  it('formats cents as Brazilian reais', () => {
    expect(normalizeSpaces(formatCurrency(35_000))).toBe('R$ 350,00');
    expect(normalizeSpaces(formatCurrency(123_456))).toBe('R$ 1.234,56');
  });

  it('formats cents as a bare amount', () => {
    expect(formatAmount(990)).toBe('9,90');
  });

  it('formats a ratio as a one-decimal percentage', () => {
    expect(normalizeSpaces(formatPercent(0.5641))).toBe('56,4%');
  });
});
