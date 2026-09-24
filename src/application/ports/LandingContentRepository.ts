import type { LandingContent } from '../content/LandingContent';

/**
 * Where landing page content comes from. Today it is a static file;
 * later it could be a CMS or an API without touching the UI.
 */
export interface LandingContentRepository {
  getContent(): LandingContent;
}
