export * from "./storyblok";

// Component registration helper
export function registerStoryblokComponents(components: Record<string, any>) {
  return Object.entries(components).reduce(
    (acc, [key, component]) => {
      acc[key] = component;
      return acc;
    },
    {} as Record<string, any>
  );
}
