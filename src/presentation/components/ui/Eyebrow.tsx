import type { ReactNode } from 'react';
import { cn } from '../../../shared/lib/cn';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
}

/** Small uppercase pill that introduces a section. */
export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-label-caps uppercase',
        className ?? 'bg-surface-container-highest text-on-surface-variant',
      )}
    >
      {children}
    </span>
  );
}
