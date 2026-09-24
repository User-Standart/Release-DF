import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '../../../shared/lib/cn';

type Variant = 'income' | 'paper' | 'ink';
type Size = 'sm' | 'md' | 'lg';

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  income: 'bg-secondary text-on-secondary hover:bg-secondary/90 tactile-shadow active:translate-y-1',
  paper:
    'border border-outline-variant bg-surface-container-lowest text-on-surface hover:bg-surface-container-high',
  ink: 'bg-primary-container text-surface hover:bg-black',
};

const sizeClasses: Record<Size, string> = {
  sm: 'gap-2 px-5 py-2.5 text-headline-sm',
  md: 'gap-2 px-6 py-3 text-headline-sm',
  lg: 'gap-3 px-7 py-4 text-headline-md font-bold',
};

/** Navigation styled as a button; the site only links, it never submits. */
export function ButtonLink({
  variant = 'income',
  size = 'md',
  className,
  children,
  ...anchorProps
}: ButtonLinkProps) {
  const isExternal = anchorProps.href.startsWith('http');

  return (
    <a
      {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
      {...anchorProps}
      className={cn(
        'inline-flex items-center justify-center rounded-full transition-all',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
