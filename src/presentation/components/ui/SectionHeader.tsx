import type { ReactNode } from 'react';
import { cn } from '../../../shared/lib/cn';

interface SectionHeaderProps {
  eyebrow: ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className }: SectionHeaderProps) {
  return (
    <header className={cn('mx-auto mb-16 max-w-3xl text-center', className)}>
      {eyebrow}
      <h2 className="mt-3 text-display-lg-mobile text-on-surface md:text-headline-lg">{title}</h2>
      {description && <p className="mt-3 text-body-lg text-on-surface-variant">{description}</p>}
    </header>
  );
}
