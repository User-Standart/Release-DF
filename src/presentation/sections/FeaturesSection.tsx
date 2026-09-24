import type { Feature, FeatureTone, FeaturesContent, SiteLinks } from '../../application';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Icon } from '../components/ui/Icon';

interface FeaturesSectionProps {
  content: FeaturesContent;
  links: SiteLinks;
}

export function FeaturesSection({ content, links }: FeaturesSectionProps) {
  const { spotlight } = content;

  return (
    <section id="recursos" className="scroll-mt-16 bg-surface-container py-20">
      <Container>
        <header className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow className="border border-outline-variant bg-surface-container-lowest text-secondary">
              {content.eyebrow}
            </Eyebrow>
            <h2 className="mt-3 text-display-lg-mobile text-on-surface md:text-headline-lg">{content.title}</h2>
          </div>
          <p className="max-w-md text-body-md text-on-surface-variant">{content.description}</p>
        </header>

        <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.items.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </ul>

        <div className="mt-12 flex flex-col items-center justify-between gap-8 rounded-3xl border border-outline-variant bg-surface-container-lowest p-8 md:flex-row">
          <div className="flex items-center gap-5">
            <span className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-secondary-fixed text-on-secondary-fixed">
              <Icon name={spotlight.icon} className="text-3xl" />
            </span>
            <div>
              <h3 className="text-headline-md font-bold text-on-surface">{spotlight.title}</h3>
              <p className="mt-1 max-w-2xl text-body-md text-on-surface-variant">{spotlight.description}</p>
            </div>
          </div>
          <ButtonLink href={links.download} variant="ink" className="shrink-0">
            <span>{spotlight.cta}</span>
            <Icon name="chevron_right" className="text-sm" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

const toneClasses: Record<FeatureTone, string> = {
  income: 'bg-secondary-fixed text-on-secondary-fixed',
  ink: 'bg-primary-container text-secondary-fixed',
  expense: 'bg-error-container text-error',
  neutral: 'bg-surface-container-high text-on-surface',
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <li className="group flex flex-col justify-between rounded-2xl border border-outline-variant bg-surface-container-lowest p-4 shadow-sm transition-all hover:border-secondary">
      <div className="mb-4">
        <span className={`mb-3 flex size-10 items-center justify-center rounded-xl ${toneClasses[feature.tone]}`}>
          <Icon name={feature.icon} className="text-xl" />
        </span>
        <h3 className="text-headline-md font-bold text-on-surface">{feature.title}</h3>
        <p className="mt-1 text-body-sm text-on-surface-variant">{feature.description}</p>
      </div>
      <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface">
        <img
          src={feature.screenshot.src}
          alt={feature.screenshot.alt}
          loading="lazy"
          className="h-80 w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </li>
  );
}
