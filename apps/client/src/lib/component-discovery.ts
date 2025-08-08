import { readdirSync, statSync } from "fs";
import { join } from "path";
import { wwColorCombinations } from "./ww-colors";

export interface ComponentInfo {
  name: string;
  displayName: string;
  description: string;
  demoPath?: string;
  icon: string;
  color: string;
}

// Define component metadata with WW brand colors
const componentMetadata: Record<string, Omit<ComponentInfo, "name" | "demoPath">> = {
  CtaBanner: {
    displayName: "CTA Banner",
    description:
      "Production-ready CTA Banner component with multiple variants: centered text, split layout, and form integration. Built for conversion campaigns.",
    icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
    color: wwColorCombinations.periPeri
  },
  Hero: {
    displayName: "Hero",
    description:
      "Hero sections with call-to-action buttons and engaging headlines for landing pages.",
    icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 0a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16z",
    color: wwColorCombinations.blueAgave
  },
  Feature: {
    displayName: "Feature",
    description: "Feature showcase components for highlighting product benefits and capabilities.",
    icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    color: wwColorCombinations.dinoKale
  },
  Grid: {
    displayName: "Grid",
    description: "Responsive grid layouts for organizing content in structured formats.",
    icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
    color: wwColorCombinations.ube
  },
  RichText: {
    displayName: "Rich Text",
    description:
      "Rich text content components with formatting support for articles and documentation.",
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    color: wwColorCombinations.roastedChestnut
  }
};

function getComponentsFromDirectory(): string[] {
  try {
    const componentsPath = join(process.cwd(), "src/components/storyblok/components");
    const items = readdirSync(componentsPath);

    return items
      .filter((item) => {
        const itemPath = join(componentsPath, item);
        const isDirectory = statSync(itemPath).isDirectory();
        const isComponent = item.endsWith(".tsx") && item !== "index.ts";

        if (isDirectory) {
          return true; // Component directories like CtaBanner/
        }

        if (isComponent) {
          return true; // Component files like Feature.tsx
        }

        return false;
      })
      .map((item) => {
        // Remove .tsx extension if it exists
        return item.replace(".tsx", "");
      });
  } catch (error) {
    console.warn("Could not read components directory:", error);
    return [];
  }
}

function getDemoPagesFromDirectory(): string[] {
  try {
    const appPath = join(process.cwd(), "src/app");
    const items = readdirSync(appPath);

    return items.filter((item) => {
      const itemPath = join(appPath, item);
      const isDirectory = statSync(itemPath).isDirectory();

      if (isDirectory && item.endsWith("-demo")) {
        return true;
      }

      return false;
    });
  } catch (error) {
    console.warn("Could not read app directory:", error);
    return [];
  }
}

export function getAvailableComponents(): ComponentInfo[] {
  const components = getComponentsFromDirectory();
  const demoPages = getDemoPagesFromDirectory();

  return components.map((componentName) => {
    const metadata = componentMetadata[componentName];

    // Try to find matching demo page
    const demoPageName = `${componentName
      .toLowerCase()
      .replace(/([A-Z])/g, "-$1")
      .slice(1)}-demo`;
    const hasDemoPage = demoPages.includes(demoPageName);

    return {
      name: componentName,
      displayName: metadata?.displayName || componentName,
      description: metadata?.description || `${componentName} component for Storyblok`,
      demoPath: hasDemoPage ? `/${demoPageName}` : undefined,
      icon:
        metadata?.icon ||
        "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: metadata?.color || wwColorCombinations.neutral
    };
  });
}

// Static version for build time (since we can't use fs at runtime in Next.js)
export function getStaticComponents(): ComponentInfo[] {
  return [
    {
      name: "CtaBanner",
      displayName: "CTA Banner",
      description:
        "Production-ready CTA Banner component with multiple variants: centered text, split layout, and form integration. Built for conversion campaigns.",
      demoPath: "/cta-banner-demo",
      icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z",
      color: wwColorCombinations.periPeri
    },
    {
      name: "Hero",
      displayName: "Hero",
      description:
        "Hero sections with call-to-action buttons and engaging headlines for landing pages.",
      demoPath: undefined,
      icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 0a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h16z",
      color: wwColorCombinations.blueAgave
    },
    {
      name: "Feature",
      displayName: "Feature",
      description:
        "Feature showcase components for highlighting product benefits and capabilities.",
      demoPath: undefined,
      icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
      color: wwColorCombinations.dinoKale
    },
    {
      name: "Grid",
      displayName: "Grid",
      description: "Responsive grid layouts for organizing content in structured formats.",
      demoPath: undefined,
      icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z",
      color: wwColorCombinations.ube
    },
    {
      name: "RichText",
      displayName: "Rich Text",
      description:
        "Rich text content components with formatting support for articles and documentation.",
      demoPath: undefined,
      icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
      color: wwColorCombinations.roastedChestnut
    }
  ];
}
