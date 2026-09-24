import type { FaqContent } from '../../application';
import { Eyebrow } from '../components/ui/Eyebrow';
import { Icon } from '../components/ui/Icon';
import { SectionHeader } from '../components/ui/SectionHeader';

interface FaqSectionProps {
  content: FaqContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  return (
    <section aria-label={content.eyebrow} className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-margin-md">
        <SectionHeader className="mb-12" eyebrow={<Eyebrow>{content.eyebrow}</Eyebrow>} title={content.title} />

        <div className="space-y-4">
          {content.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-outline-variant bg-surface-container-lowest p-5 transition-colors open:bg-surface-container-low"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-headline-sm font-bold text-on-surface">
                <span>{item.question}</span>
                <Icon name="expand_more" className="transition-transform group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-body-md leading-relaxed text-on-surface-variant">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
