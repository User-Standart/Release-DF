import type { Screenshot } from '../../../application';
import { formatPercent } from '../../../shared/lib/format';
import { Icon } from '../../components/ui/Icon';

interface PhonePreviewProps {
  screenshot: Screenshot;
  netMargin: number;
}

export function PhonePreview({ screenshot, netMargin }: PhonePreviewProps) {
  return (
    <div className="phone-frame-shadow absolute -right-2 -bottom-10 z-20 w-40 rounded-[36px] border-2 border-outline bg-primary-container p-2.5 sm:-right-4 sm:-bottom-12 sm:w-72">
      <div className="relative overflow-hidden rounded-[28px] border border-outline-variant bg-surface">
        <div className="absolute top-2 left-1/2 z-30 h-4 w-20 -translate-x-1/2 rounded-full bg-primary" />
        <img src={screenshot.src} alt={screenshot.alt} className="block h-auto w-full object-cover" />
      </div>

      <div className="absolute top-1/3 -left-6 z-30 flex items-center gap-3 rounded-2xl border border-outline-variant bg-surface-container-lowest p-3 shadow-xl">
        <div className="flex size-10 items-center justify-center rounded-xl bg-secondary-fixed text-on-secondary-fixed">
          <Icon name="price_check" className="text-2xl" />
        </div>
        <div>
          <span className="block text-label-caps text-on-surface-variant">MARGEM LÍQUIDA</span>
          <span className="numeric text-numeric-md font-bold text-secondary">{formatPercent(netMargin)} Limpo</span>
        </div>
      </div>
    </div>
  );
}
