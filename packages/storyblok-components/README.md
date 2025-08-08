# @repo/storyblok-components

A shared package containing reusable Storyblok components for the WW monorepo.

## Components

### Hero

A prominent hero section component with background image, title, subtitle, description, and call-to-action button.

**Props:**

- `title` (string) - Main heading
- `subtitle` (string, optional) - Small text above title
- `description` (string, optional) - Description text
- `background_image` (object, optional) - Background image with filename and alt
- `cta_text` (string, optional) - Call-to-action button text
- `cta_link` (object, optional) - Call-to-action link with url and linktype
- `theme` ("light" | "dark" | "brand", optional) - Color theme

### Feature

A feature card component with icon/image, title, and description.

**Props:**

- `title` (string) - Feature title
- `description` (string) - Feature description
- `icon` (string, optional) - Emoji or icon character
- `image` (object, optional) - Image with filename and alt
- `layout` ("vertical" | "horizontal", optional) - Layout direction

### Grid

A responsive grid container for displaying multiple components.

**Props:**

- `columns` (number) - Number of columns
- `gap` ("sm" | "md" | "lg", optional) - Gap size between items
- `items` (array) - Array of Storyblok components to display
- `responsive` (boolean, optional) - Enable responsive behavior

### RichText

A component for rendering Storyblok rich text content.

**Props:**

- `content` (object) - Rich text document from Storyblok
- `text_align` ("left" | "center" | "right", optional) - Text alignment
- `max_width` ("sm" | "md" | "lg" | "xl" | "full", optional) - Maximum width

## Usage

### 1. Install in your app

Add to your app's `package.json`:

```json
{
  "dependencies": {
    "@repo/storyblok-components": "workspace:*"
  }
}
```

### 2. Initialize Storyblok

```tsx
import { storyblokInit, apiPlugin } from "@storyblok/react";
import { storyblokComponents } from "@repo/storyblok-components/components";

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: storyblokComponents,
});
```

### 3. Use components

```tsx
import { StoryblokComponent } from "@storyblok/react";

export default function MyPage({ story }) {
  return (
    <div>
      {story.content.body.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </div>
  );
}
```

## Development

### Build the package

```bash
cd packages/storyblok-components
pnpm build
```

### Watch for changes

```bash
cd packages/storyblok-components
pnpm dev
```

### Type checking

```bash
cd packages/storyblok-components
pnpm check-types
```

## Adding New Components

1. Create a new component file in `src/components/`
2. Export it from `src/components/index.ts`
3. Add it to the `storyblokComponents` registry
4. Update the component type unions

Example:

```tsx
// src/components/MyComponent.tsx
import * as React from "react";
import { storyblokEditable } from "@storyblok/react";

interface MyComponentProps {
  blok: {
    title: string;
    // ... other props
  };
}

export const MyComponent: React.FC<MyComponentProps> = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h2>{blok.title}</h2>
    </div>
  );
};
```

```tsx
// src/components/index.ts
export { MyComponent } from "./MyComponent";

export const storyblokComponents = {
  // ... existing components
  my_component: MyComponent,
};
```

## Styling

Components use Tailwind CSS classes. Make sure your app has Tailwind CSS configured with the necessary classes included in your build.

Required Tailwind plugins:

- `@tailwindcss/typography` (for prose styles in RichText)

## TypeScript

The package includes TypeScript definitions for all components. Import types as needed:

```tsx
import type { StoryblokHero, StoryblokFeature } from "@repo/storyblok-components/types";
```
