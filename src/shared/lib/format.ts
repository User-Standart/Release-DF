const LOCALE = 'pt-BR';

const currency = new Intl.NumberFormat(LOCALE, { style: 'currency', currency: 'BRL' });
const decimal = new Intl.NumberFormat(LOCALE, {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const percent = new Intl.NumberFormat(LOCALE, {
  style: 'percent',
  minimumFractionDigits: 1,
  maximumFractionDigits: 1,
});

/** 35000 → "R$ 350,00" */
export function formatCurrency(cents: number): string {
  return currency.format(cents / 100);
}

/** 990 → "9,90" (for layouts that render the "R$" prefix separately) */
export function formatAmount(cents: number): string {
  return decimal.format(cents / 100);
}

/** 0.564 → "56,4%" */
export function formatPercent(ratio: number): string {
  return percent.format(ratio);
}
