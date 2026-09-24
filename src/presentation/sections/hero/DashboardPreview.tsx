import type { EarningsReport } from '../../../application';
import { formatCurrency } from '../../../shared/lib/format';

interface DashboardPreviewProps {
  today: EarningsReport;
  averagePerHourInCents: number;
  chartHours: readonly string[];
}

/** Illustrative mock of the app's daily panel. */
export function DashboardPreview({ today, averagePerHourInCents, chartHours }: DashboardPreviewProps) {
  const { summary } = today;

  return (
    <div className="relative w-full max-w-lg rounded-2xl border border-outline-variant bg-surface-container-lowest p-5 shadow-2xl">
      <div className="mb-4 flex items-center justify-between border-b border-outline-variant pb-3">
        <div className="flex items-center gap-2">
          <span className="size-3 rounded-full bg-error" />
          <span className="size-3 rounded-full bg-surface-tint" />
          <span className="size-3 rounded-full bg-secondary" />
          <span className="ml-2 text-label-caps text-on-surface-variant">PAINEL DE CONTROLE DIÁRIO</span>
        </div>
        <span className="rounded bg-secondary-fixed px-2 py-0.5 text-body-sm font-bold text-on-secondary-fixed">
          Hoje • Em tempo real
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between rounded-xl bg-primary-container p-4 text-surface">
          <div>
            <span className="block text-label-caps uppercase tracking-wider text-on-primary-container">
              Líquido de Hoje
            </span>
            <span className="numeric text-numeric-hero text-surface">{formatCurrency(summary.netInCents)}</span>
          </div>
          <div className="numeric text-right text-body-sm font-bold">
            <span className="block text-secondary-fixed">+ {formatCurrency(summary.grossInCents)} Entrou</span>
            <span className="block text-tertiary-fixed-dim">- {formatCurrency(summary.totalExpensesInCents)} Custos</span>
          </div>
        </div>

        <div className="rounded-xl border border-outline-variant bg-surface-container-low p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-headline-sm font-bold text-on-surface">Desempenho por Hora</span>
            <span className="numeric text-body-sm font-bold text-secondary">
              Média: {formatCurrency(averagePerHourInCents)}/h
            </span>
          </div>
          <HourlyChart />
          <div className="numeric flex justify-between pt-2 text-body-sm text-on-surface-variant">
            {chartHours.map((hour) => (
              <span key={hour}>{hour}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function HourlyChart() {
  const line = 'M 0,65 Q 40,55 70,30 T 140,40 T 210,15 T 280,20 L 300,10';

  return (
    <svg className="h-24 w-full" viewBox="0 0 300 80" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="hourly-chart-fill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--color-secondary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-secondary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L 300,80 L 0,80 Z`} fill="url(#hourly-chart-fill)" />
      <path d={line} stroke="var(--color-secondary)" strokeLinecap="round" strokeWidth="3" />
      <circle cx="210" cy="15" r="4" fill="var(--color-secondary)" stroke="#ffffff" strokeWidth="2" />
    </svg>
  );
}
