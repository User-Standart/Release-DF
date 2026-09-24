import type { FinalCtaContent, SiteLinks } from '../../application';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Icon } from '../components/ui/Icon';

interface FinalCtaSectionProps {
  content: FinalCtaContent;
  links: SiteLinks;
}

export function FinalCtaSection({ content, links }: FinalCtaSectionProps) {
  return (
    <section id="baixar" className="scroll-mt-16 bg-surface py-16">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border-2 border-outline bg-primary-container p-8 text-surface shadow-2xl md:p-16">
          <div className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-secondary/30 blur-3xl" />

          <div className="relative z-10 max-w-3xl">
            <Eyebrow className="bg-secondary-fixed tracking-wider text-on-secondary-fixed">{content.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-display-lg-mobile text-surface md:text-display-lg">
              {content.title} <br />
              <span className="text-secondary-fixed">{content.highlight}</span>
            </h2>
            <p className="mt-4 max-w-xl text-body-lg text-surface-variant">{content.description}</p>

            <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <ButtonLink href={links.download} size="lg" className="px-8">
                <Icon name="download" className="text-2xl" />
                <span>{content.cta}</span>
              </ButtonLink>
              <p className="flex items-center gap-2 px-2 text-body-sm text-surface-variant">
                <Icon name="security" className="text-lg text-secondary-fixed" />
                <span>{content.trustNote}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
