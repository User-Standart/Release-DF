import type { NavLink, SiteLinks } from '../../../application';
import { ButtonLink } from '../ui/ButtonLink';
import { Icon } from '../ui/Icon';
import { Logo } from './Logo';

interface HeaderProps {
  navigation: readonly NavLink[];
  links: SiteLinks;
}

export function Header({ navigation, links }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant bg-surface/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-3 px-margin sm:px-margin-md">
        <a href="#top" aria-label="DirigeFácil — início">
          <Logo withTagline />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-medium text-on-surface-variant transition-colors duration-150 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink href={links.download} size="sm" className="whitespace-nowrap shadow-sm hover:brightness-105 active:translate-y-0.5">
            <span>Começar Grátis</span>
            <Icon name="arrow_forward" className="text-sm font-bold" />
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
