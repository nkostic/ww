// Export individual components
export { Hero } from "./Hero";
export { Feature } from "./Feature";
export { Grid } from "./Grid";
export { RichText } from "./RichText";
export { CtaBanner } from "./CtaBanner";

// Export component prop types
export type { HeroProps } from "./Hero";
export type { FeatureProps } from "./Feature";
export type { GridProps } from "./Grid";
export type { RichTextProps } from "./RichText";
export type { CtaBannerProps } from "./CtaBanner";

// Import components for registry
import { Hero } from "./Hero";
import { Feature } from "./Feature";
import { Grid } from "./Grid";
import { RichText } from "./RichText";
import { CtaBanner } from "./CtaBanner";

// Component registry for Storyblok
export const storyblokComponents = {
  hero: Hero,
  feature: Feature,
  grid: Grid,
  rich_text: RichText,
  cta_banner: CtaBanner,
};

// Type definitions for the components
export type StoryblokComponentType = "hero" | "feature" | "grid" | "rich_text" | "cta_banner";
