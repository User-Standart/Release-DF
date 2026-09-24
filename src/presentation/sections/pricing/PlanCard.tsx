import type { BillingPeriod, Plan } from '../../../domain';
import { cn } from '../../../shared/lib/cn';
import { formatAmount } from '../../../shared/lib/format';
import { Icon } from '../../components/ui/Icon';

const periodSuffix: Record<BillingPeriod, string> = {
  month: '/mês',
  quarter: '/trimestre',
  year: '/ano',
};

interface PlanCardProps {
  plan: Plan;
  ctaHref: string;
}

export function PlanCard({ plan, ctaHref }: PlanCardProps) {
  const isFeatured = plan.featured !== undefined;

  return (
    <li
      className={cn(
        'relative flex flex-col justify-between rounded-2xl bg-surface-container-lowest p-6 transition-all',
        isFeatured
          ? 'tactile-shadow-founder border-2 border-founder lg:-translate-y-2'
          : 'border border-outline-variant hover:border-outline',
      )}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-founder px-4 py-1 text-center text-label-caps whitespace-nowrap uppercase text-surface-container-lowest shadow">
          {plan.featured.ribbon}
        </span>
      )}

      <div>
        <span className={cn('text-label-caps uppercase', isFeatured ? 'text-founder' : 'text-on-surface-variant')}>
          {plan.tagline}
        </span>
        <h3 className="mt-1 flex items-center gap-1.5 text-headline-md font-bold text-on-surface">
          {plan.name}
          {isFeatured && <Icon name="verified" filled className="text-xl text-founder" />}
        </h3>

        <p className="mt-4 flex items-baseline gap-1">
          <span className="text-headline-sm font-bold text-on-surface">R$</span>
          <span className={cn('numeric text-numeric-hero', isFeatured ? 'text-founder' : 'text-on-surface')}>
            {formatAmount(plan.priceInCents)}
          </span>
          <span className="text-body-sm text-on-surface-variant">{periodSuffix[plan.billingPeriod]}</span>
        </p>

        <p
          className={cn(
            'text-body-sm',
            isFeatured
              ? 'mt-1 font-bold text-secondary'
              : 'mt-3 border-t border-outline-variant pt-3 text-on-surface-variant',
          )}
        >
          {plan.summary}
        </p>

        <ul
          className={cn(
            'mt-4 space-y-2 text-body-sm text-on-surface',
            isFeatured && 'mt-5 space-y-2.5 border-t border-outline-variant pt-4',
          )}
        >
          {plan.perks.map((perk) => (
            <li key={perk.label} className={cn('flex items-center gap-2', perk.isHighlighted && 'font-bold')}>
              <Icon
                name={perk.isHighlighted ? 'check_circle' : 'check'}
                filled={perk.isHighlighted ?? false}
                className={cn('text-base font-bold', perk.isHighlighted ? 'text-founder' : 'text-secondary')}
              />
              {perk.label}
            </li>
          ))}
        </ul>
      </div>

      <a
        href={ctaHref}
        className={cn(
          'mt-8 block rounded-xl px-4 text-center font-bold transition-all',
          isFeatured
            ? 'bg-founder py-3.5 text-headline-md text-surface-container-lowest shadow-md hover:brightness-110 active:translate-y-0.5'
            : 'border border-outline-variant py-3 text-headline-sm text-on-surface hover:bg-surface-container-high',
        )}
      >
        {plan.ctaLabel}
      </a>
    </li>
  );
}
