import type { PricingContent, SiteLinks } from '../../../application';
import { Container } from '../../components/ui/Container';
import { Eyebrow } from '../../components/ui/Eyebrow';
import { Icon } from '../../components/ui/Icon';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { PlanCard } from './PlanCard';

interface PricingSectionProps {
  content: PricingContent;
  links: SiteLinks;
}

export function PricingSection({ content, links }: PricingSectionProps) {
  return (
    <section id="planos" className="scroll-mt-16 bg-surface py-24">
      <Container>
        <SectionHeader
          className="max-w-2xl"
          eyebrow={
            <Eyebrow className="border border-founder-line bg-founder-soft text-on-surface">
              <Icon name="star" filled className="text-sm text-founder" />
              {content.eyebrow}
            </Eyebrow>
          }
          title={content.title}
          description={content.description}
        />

        <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.plans.map((plan) => (
            <PlanCard key={plan.id} plan={plan} ctaHref={links.download} />
          ))}
        </ul>

        <p className="mt-12 flex items-center justify-center gap-2 text-center text-body-md text-on-surface-variant">
          <Icon name="shield" className="text-xl text-secondary" />
          <span>{content.guarantee}</span>
        </p>
      </Container>
    </section>
  );
}
