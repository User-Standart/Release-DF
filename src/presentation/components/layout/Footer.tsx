import type { FooterContent } from '../../../application';
import { Logo } from './Logo';

interface FooterProps {
  content: FooterContent;
}

export function Footer({ content }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-surface-container">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-margin-md py-12 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <a href="#top">
            <Logo />
          </a>
          <p className="text-center text-body-sm text-on-surface-variant md:text-left">
            © {year} {content.copyright}
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-6 text-body-sm">
          {content.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
              className="text-on-surface-variant underline underline-offset-4 transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
