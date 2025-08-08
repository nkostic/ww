export * from "./storyblok";

// Common utility types
export interface ComponentConfig {
  name: string;
  component: React.ComponentType<Record<string, unknown>>;
}

export interface StoryblokConfig {
  accessToken: string;
  use: Array<Record<string, unknown>>;
  components: Record<string, React.ComponentType<Record<string, unknown>>>;
}
