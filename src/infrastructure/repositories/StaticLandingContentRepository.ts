import type { LandingContent, LandingContentRepository } from '../../application';
import { landingContent } from '../content/landingContent';

export class StaticLandingContentRepository implements LandingContentRepository {
  getContent(): LandingContent {
    return landingContent;
  }
}
