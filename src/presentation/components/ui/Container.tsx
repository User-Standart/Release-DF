import type { ReactNode } from 'react';
import { cn } from '../../../shared/lib/cn';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-7xl px-margin sm:px-margin-md', className)}>{children}</div>;
}
