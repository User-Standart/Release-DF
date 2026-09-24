import { cn } from '../../../shared/lib/cn';

interface IconProps {
  /** A Material Symbols name, e.g. "arrow_forward". */
  name: string;
  filled?: boolean;
  className?: string;
}

/** Decorative icon; the surrounding text always carries the meaning. */
export function Icon({ name, filled = false, className }: IconProps) {
  return (
    <span aria-hidden="true" className={cn('material-symbols-outlined', filled && 'icon-filled', className)}>
      {name}
    </span>
  );
}
