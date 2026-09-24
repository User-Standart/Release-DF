import type { ComparisonContent, EarningsReport } from '../../../application';
import { formatCurrency, formatPercent } from '../../../shared/lib/format';
import { Icon } from '../../components/ui/Icon';

interface ClarityCardProps {
  content: ComparisonContent<EarningsReport>['clarity'];
}

export function ClarityCard({ content }: ClarityCardProps) {
  const { summary } = content.earnings;

  return (
    <article className="relative rounded-2xl border-2 border-secondary bg-surface-container-lowest p-6 shadow-xl lg:col-span-5">
      <span className="absolute -top-3.5 right-6 rounded-full bg-secondary px-3 py-1 text-label-caps uppercase text-on-secondary">
        {content.ribbon}
      </span>

      <h3 className="mb-4 flex items-center gap-2 border-b border-outline-variant pb-4 text-headline-md font-bold text-on-surface">
        <Icon name="verified" filled className="text-2xl text-secondary" />
        {content.title}
      </h3>

      <div className="mb-4 rounded-xl bg-primary-container p-4 text-surface">
        <div className="flex items-center justify-between">
          <span className="text-label-caps uppercase text-secondary-fixed">{content.periodLabel}</span>
          <span className="text-body-sm text-surface-variant">{content.periodName}</span>
        </div>
        <p className="numeric mt-1 text-numeric-hero text-surface">{formatCurrency(summary.netInCents)}</p>
        <div className="numeric mt-3 flex justify-between border-t border-outline pt-2 text-body-sm">
          <span className="text-secondary-fixed">● Entrou: {formatCurrency(summary.grossInCents)}</span>
          <span className="text-tertiary-fixed-dim">● Saiu: {formatCurrency(summary.totalExpensesInCents)}</span>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 text-body-sm">
        <div className="rounded-lg bg-surface-container-high p-3">
          <dt className="text-label-caps text-on-surface-variant">CUSTO POR KM</dt>
          <dd className="numeric text-numeric-md font-bold text-on-surface">
            {formatCurrency(content.costPerKmInCents)} / km
          </dd>
        </div>
        <div className="rounded-lg bg-secondary-fixed/50 p-3">
          <dt className="text-label-caps text-on-secondary-fixed">MARGEM LÍQUIDA</dt>
          <dd className="numeric text-numeric-md font-bold text-secondary">
            {formatPercent(summary.netMargin)} no Bolso
          </dd>
        </div>
      </dl>

      <footer className="mt-4 flex items-center justify-between border-t border-outline-variant pt-4">
        <span className="text-body-sm text-on-surface-variant">{content.exportHint}</span>
        <span className="inline-flex items-center gap-1 text-headline-sm font-bold text-secondary">
          <Icon name="content_copy" className="text-base" />
          {content.exportAction}
        </span>
      </footer>
    </article>
  );
}
