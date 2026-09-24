import type { InstallContent, SiteLinks } from '../../application';
import { cn } from '../../shared/lib/cn';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Container } from '../components/ui/Container';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Icon } from '../components/ui/Icon';
import { SectionHeader } from '../components/ui/SectionHeader';

interface InstallSectionProps {
  content: InstallContent;
  links: SiteLinks;
}

export function InstallSection({ content, links }: InstallSectionProps) {
  const lastIndex = content.steps.length - 1;

  return (
    <section id="como-instalar" className="scroll-mt-16 border-y border-outline-variant bg-surface-container-high py-20">
      <Container>
        <SectionHeader
          className="max-w-2xl"
          eyebrow={
            <Eyebrow className="border border-outline-variant bg-surface-container-lowest text-on-surface">
              {content.eyebrow}
            </Eyebrow>
          }
          title={content.title}
          description={content.description}
        />

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {content.steps.map((step, index) => {
            const isLast = index === lastIndex;

            return (
              <li key={step.title} className="rounded-2xl border border-outline-variant bg-surface-container-lowest p-6">
                <span
                  aria-hidden="true"
                  className={cn(
                    'numeric mb-4 flex size-10 items-center justify-center rounded-full text-numeric-md font-bold',
                    isLast ? 'bg-secondary text-on-secondary' : 'bg-primary-container text-surface',
                  )}
                >
                  {isLast ? '✓' : index + 1}
                </span>
                <h3 className="text-headline-md font-bold text-on-surface">{step.title}</h3>
                <p className="mt-2 text-body-sm text-on-surface-variant">{step.description}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-secondary-fixed text-on-secondary-fixed">
              <Icon name="support_agent" className="text-2xl" />
            </span>
            <div>
              <h3 className="text-headline-sm font-bold text-on-surface">{content.help.title}</h3>
              <p className="text-body-sm text-on-surface-variant">{content.help.description}</p>
            </div>
          </div>
          <ButtonLink href={links.support} variant="paper" size="sm" className="bg-surface font-bold">
            <Icon name="chat" className="text-lg text-secondary" />
            <span>{content.help.cta}</span>
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
