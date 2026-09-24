import type { ComparisonContent, EarningsReport } from '../../../application';
import type { Expense } from '../../../domain';
import { cn } from '../../../shared/lib/cn';
import { formatCurrency } from '../../../shared/lib/format';
import { Icon } from '../../components/ui/Icon';

interface IllusionCardProps {
  content: ComparisonContent<EarningsReport>['illusion'];
}

export function IllusionCard({ content }: IllusionCardProps) {
  const { snapshot, summary } = content.earnings;

  return (
    <article className="relative rounded-2xl border border-outline-variant bg-surface-container-low p-6 lg:col-span-5">
      <header className="mb-4 flex items-center justify-between border-b border-outline-variant pb-4">
        <h3 className="flex items-center gap-2 text-headline-md font-bold text-on-surface">
          <Icon name="warning" className="text-2xl text-error" />
          {content.title}
        </h3>
        <span className="rounded bg-error-container px-2.5 py-1 text-body-sm font-bold text-error">
          {content.badge}
        </span>
      </header>

      <dl className="space-y-3">
        <Row label={content.grossLabel} value={formatCurrency(summary.grossInCents)} />
        {snapshot.expenses.map((expense) => (
          <ExpenseRow key={expense.label} expense={expense} />
        ))}
      </dl>

      <div className="mt-6 rounded-xl border border-outline-variant bg-surface-container-highest p-4">
        <div className="flex items-center justify-between">
          <span className="text-label-caps uppercase text-on-surface-variant">{content.resultLabel}</span>
          <span className="numeric text-numeric-lg font-bold text-error">{formatCurrency(summary.netInCents)}</span>
        </div>
        {summary.netPerHourInCents !== null && snapshot.hoursWorked && (
          <p className="mt-2 text-body-sm text-on-surface-variant">
            Você rodou {snapshot.hoursWorked} horas achando que ganhou {formatCurrency(summary.grossInCents)}, mas
            sua hora líquida foi de apenas <strong>{formatCurrency(summary.netPerHourInCents)}/h</strong>.
          </p>
        )}
      </div>
    </article>
  );
}

function ExpenseRow({ expense }: { expense: Expense }) {
  return (
    <Row
      label={expense.label}
      value={`- ${formatCurrency(expense.amountInCents)}`}
      tone={expense.isHiddenCost ? 'hidden' : 'expense'}
    />
  );
}

type RowTone = 'income' | 'expense' | 'hidden';

const rowToneClasses: Record<RowTone, { label: string; value: string }> = {
  income: { label: 'text-on-surface-variant', value: 'text-on-surface' },
  expense: { label: 'text-error', value: 'text-error' },
  hidden: { label: 'text-outline', value: 'text-outline' },
};

interface RowProps {
  label: string;
  value: string;
  tone?: RowTone;
}

function Row({ label, value, tone = 'income' }: RowProps) {
  const classes = rowToneClasses[tone];

  return (
    <div className="flex justify-between gap-4 border-b border-outline-variant/50 py-2 text-body-md">
      <dt className={classes.label}>{label}</dt>
      <dd className={cn('numeric shrink-0 text-numeric-md font-bold', classes.value)}>{value}</dd>
    </div>
  );
}
