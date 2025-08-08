export * from "./storyblok";

// Common utility types
export interface ComponentConfig {
  name: string;
  component: React.ComponentType<any>;
}

export interface StoryblokConfig {
  accessToken: string;
  use: any[];
  components: Record<string, React.ComponentType<any>>;
}
