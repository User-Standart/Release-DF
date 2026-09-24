import { summarizeEarnings } from '../../domain';
import type { EarningsSnapshot, EarningsSummary } from '../../domain';
import type { LandingContent } from '../content/LandingContent';
import type { LandingContentRepository } from '../ports/LandingContentRepository';

export interface EarningsReport {
  readonly snapshot: EarningsSnapshot;
  readonly summary: EarningsSummary;
}

export type LandingPage = LandingContent<EarningsReport>;

/** Loads the page content and derives every figure from the domain rules. */
export function getLandingPage(repository: LandingContentRepository): LandingPage {
  const content = repository.getContent();
  const { hero, comparison } = content;

  return {
    ...content,
    hero: {
      ...hero,
      dashboard: { ...hero.dashboard, today: toReport(hero.dashboard.today) },
    },
    comparison: {
      ...comparison,
      illusion: { ...comparison.illusion, earnings: toReport(comparison.illusion.earnings) },
      clarity: { ...comparison.clarity, earnings: toReport(comparison.clarity.earnings) },
    },
  };
}

function toReport(snapshot: EarningsSnapshot): EarningsReport {
  return { snapshot, summary: summarizeEarnings(snapshot) };
}
