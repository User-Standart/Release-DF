import type { IconLabel } from '../../application';
import { Container } from '../components/ui/Container';
import { Icon } from '../components/ui/Icon';

interface BenefitsBarProps {
  benefits: readonly IconLabel[];
}

export function BenefitsBar({ benefits }: BenefitsBarProps) {
  return (
    <section aria-label="Benefícios" className="border-y border-outline-variant bg-surface-container-high py-4">
      <Container>
        <ul className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
          {benefits.map((benefit) => (
            <li
              key={benefit.label}
              className="flex items-center justify-center gap-2.5 py-1 md:not-first:border-l md:not-first:border-outline-variant/60"
            >
              <Icon name={benefit.icon} className="text-xl text-secondary" />
              <span className="text-headline-sm font-bold text-on-surface">{benefit.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
