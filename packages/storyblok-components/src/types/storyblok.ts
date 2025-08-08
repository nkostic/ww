// Simplified Storyblok type definitions for the component library

// Base interfaces
export interface StoryblokAsset {
  filename: string;
  alt?: string;
  title?: string;
}

export interface StoryblokLink {
  url: string;
  target?: "_blank" | "_self";
  linktype?: string;
}

// Base component interface
export interface StoryblokComponentBase {
  _uid: string;
  component: string;
  _editable?: string;
}

// Base Storyblok Story interface
export interface StoryblokStory<T = any> {
  content: T;
  created_at: string;
  full_slug: string;
  group_id: number;
  id: number;
  is_startpage: boolean;
  meta_data?: any;
  name: string;
  parent_id: number;
  position: number;
  published_at: string;
  slug: string;
  sort_by_date: string;
  tag_list: string[];
  uuid: string;
}

// Hero component interface
export interface StoryblokHero extends StoryblokComponentBase {
  component: "hero";
  title: string;
  subtitle?: string;
  description?: string;
  background_image?: StoryblokAsset;
  cta_text?: string;
  cta_link?: StoryblokLink;
}

// Feature component interface
export interface StoryblokFeature extends StoryblokComponentBase {
  component: "feature";
  title: string;
  description: string;
  icon?: string;
  image?: StoryblokAsset;
}

// Grid component interface
export interface StoryblokGrid extends StoryblokComponentBase {
  component: "grid";
  columns: number;
  gap?: string;
  items: StoryblokComponentBase[];
}

// Rich text component interface
export interface StoryblokRichText extends StoryblokComponentBase {
  component: "rich_text";
  content: any; // Rich text document
}

// CTA Banner component interface
export interface StoryblokCtaBanner extends StoryblokComponentBase {
  component: "cta_banner";
  title: string;
  description?: string;
  ctaText: string;
  ctaLink: StoryblokLink;
  image?: StoryblokAsset;
  formEmbedCode?: string;
  backgroundColor: "primary" | "secondary" | "white" | "gray" | "dark";
  alignment: "centered" | "split";
  variant: "centered-text" | "split-layout" | "with-form";
}

// Page component interface
export interface StoryblokPage extends StoryblokComponentBase {
  component: "page";
  title: string;
  body: StoryblokComponentBase[];
  seo_title?: string;
  seo_description?: string;
}

// Layout options
export type LayoutType = "default" | "wide" | "narrow" | "full-width";

// Theme options
export type ThemeType = "light" | "dark" | "brand";

// Generic component union type
export type StoryblokComponentTypes =
  | StoryblokHero
  | StoryblokFeature
  | StoryblokGrid
  | StoryblokRichText
  | StoryblokCtaBanner
  | StoryblokPage;
