import { Icon } from '../ui/Icon';

interface LogoProps {
  withTagline?: boolean;
}

export function Logo({ withTagline = false }: LogoProps) {
  const wordmark = (
    <span className="flex items-center gap-1 text-headline-md font-bold uppercase tracking-tight text-on-surface">
      DirigeFácil
      <span className="inline-block size-2 rounded-full bg-secondary" />
    </span>
  );

  if (!withTagline) return wordmark;

  return (
    <span className="flex items-center gap-2.5">
      <span className="flex size-10 items-center justify-center rounded-xl border border-outline-variant bg-primary-container">
        <Icon name="sports_motorsports" filled className="text-2xl text-secondary-fixed" />
      </span>
      <span className="flex flex-col">
        {wordmark}
        <span className="-mt-1 hidden text-label-caps tracking-widest text-on-surface-variant sm:block">
          LUCRO REAL DO MOTORISTA
        </span>
      </span>
    </span>
  );
}
