import type { EarningsReport, HeroContent, SiteLinks } from '../../../application';
import { ButtonLink } from '../../components/ui/ButtonLink';
import { Container } from '../../components/ui/Container';
import { Icon } from '../../components/ui/Icon';
import { DashboardPreview } from './DashboardPreview';
import { PhonePreview } from './PhonePreview';

interface HeroSectionProps {
  content: HeroContent<EarningsReport>;
  links: SiteLinks;
}

export function HeroSection({ content, links }: HeroSectionProps) {
  const { dashboard } = content;

  return (
    <section className="bg-grid-paper relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28">
      <div className="pointer-events-none absolute top-1/4 right-0 -z-10 size-[550px] translate-x-1/3 rounded-full bg-secondary-fixed/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 size-[400px] rounded-full bg-surface-container-high/60 blur-2xl" />

      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col items-start space-y-6 lg:col-span-6">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-outline-variant bg-surface-container-lowest px-3.5 py-1.5 shadow-sm">
            <span className="flex items-center gap-1 text-lg">
              <Icon name="local_taxi" filled className="text-secondary" />
              <Icon name="two_wheeler" filled className="text-on-surface-variant" />
              <Icon name="local_shipping" filled className="text-secondary" />
            </span>
            <span className="h-3 w-px bg-outline-variant" />
            <span className="text-body-sm font-bold tracking-wide text-on-surface">{content.badge}</span>
          </div>

          <h1 className="text-display-lg-mobile text-on-surface md:text-display-lg">
            {content.title} <br />
            <span className="font-extrabold text-secondary underline decoration-secondary-fixed decoration-4 underline-offset-8">
              {content.highlight}
            </span>
          </h1>

          <p className="max-w-xl text-body-lg text-on-surface-variant">{content.description}</p>

          <div className="flex w-full flex-col items-stretch gap-4 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <ButtonLink href={links.download} size="lg">
              <Icon name="download" className="text-xl" />
              <span>{content.primaryCta}</span>
              <Icon name="arrow_forward" className="text-lg" />
            </ButtonLink>
            <ButtonLink href="#comparativo" variant="paper" size="lg">
              <Icon name="play_circle" className="text-xl text-on-surface-variant" />
              <span>{content.secondaryCta}</span>
            </ButtonLink>
          </div>

          <ul className="grid w-full grid-cols-2 gap-4 pt-4 sm:w-auto">
            {content.highlights.map((highlight, index) => (
              <li
                key={highlight.title}
                className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-container-lowest p-2.5"
              >
                <span
                  className={
                    index === 0
                      ? 'flex size-8 items-center justify-center rounded-lg bg-secondary-fixed text-on-secondary-fixed'
                      : 'flex size-8 items-center justify-center rounded-lg bg-surface-container-high text-on-surface'
                  }
                >
                  <Icon name={highlight.icon} className="text-lg" />
                </span>
                <span className="flex flex-col">
                  <span className="text-headline-sm font-bold text-on-surface">{highlight.title}</span>
                  <span className="text-body-sm text-on-surface-variant">{highlight.caption}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex items-center justify-center lg:col-span-6">
          <DashboardPreview
            today={dashboard.today}
            averagePerHourInCents={dashboard.averagePerHourInCents}
            chartHours={dashboard.chartHours}
          />
          <PhonePreview screenshot={content.phoneScreenshot} netMargin={dashboard.today.summary.netMargin} />
        </div>
      </Container>
    </section>
  );
}
