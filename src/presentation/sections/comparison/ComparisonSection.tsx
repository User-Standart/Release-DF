import type { ComparisonContent, EarningsReport } from '../../../application';
import { Container } from '../../components/ui/Container';
import { Eyebrow } from '../../components/ui/Eyebrow';
import { Icon } from '../../components/ui/Icon';
import { SectionHeader } from '../../components/ui/SectionHeader';
import { ClarityCard } from './ClarityCard';
import { IllusionCard } from './IllusionCard';

interface ComparisonSectionProps {
  content: ComparisonContent<EarningsReport>;
}

export function ComparisonSection({ content }: ComparisonSectionProps) {
  return (
    <section id="comparativo" className="scroll-mt-16 bg-surface py-20">
      <Container>
        <SectionHeader
          eyebrow={<Eyebrow>{content.eyebrow}</Eyebrow>}
          title={content.title}
          description={content.description}
        />

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          <IllusionCard content={content.illusion} />

          <div className="flex flex-col items-center justify-center text-center lg:col-span-2">
            <span className="flex size-14 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-lg">
              <Icon name="compare_arrows" className="text-3xl" />
            </span>
            <span className="mt-2 text-label-caps uppercase tracking-wider text-on-surface-variant">
              {content.dividerLabel}
            </span>
          </div>

          <ClarityCard content={content.clarity} />
        </div>
      </Container>
    </section>
  );
}
