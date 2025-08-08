# CTA Banner Component - Storyblok Schema

This document provides the complete Storyblok schema configuration for the CTA Banner component used across WW websites.

## Overview

The CTA Banner component is a versatile conversion-focused component that supports multiple layouts and variants. It's designed to drive action, promote campaigns, and highlight conversion opportunities across different pages.

## Storyblok Component Schema

### Basic Configuration

```json
{
  "name": "cta_banner",
  "display_name": "CTA Banner",
  "schema": {
    "title": {
      "type": "text",
      "required": true,
      "description": "Main headline text",
      "max_length": 100
    },
    "description": {
      "type": "textarea",
      "description": "Optional subheading or description text",
      "max_length": 300
    },
    "ctaText": {
      "type": "text",
      "required": true,
      "description": "Call-to-action button text",
      "max_length": 50
    },
    "ctaLink": {
      "type": "multilink",
      "required": true,
      "description": "Call-to-action button destination URL"
    },
    "image": {
      "type": "asset",
      "filetypes": ["images"],
      "description": "Image for split layout variant (optional)"
    },
    "formEmbedCode": {
      "type": "textarea",
      "description": "HTML embed code for forms (Formstack, etc.)",
      "rich_markdown": false
    },
    "backgroundColor": {
      "type": "option",
      "description": "Background color theme",
      "options": [
        {
          "name": "Primary Blue",
          "value": "primary"
        },
        {
          "name": "Secondary Purple",
          "value": "secondary"
        },
        {
          "name": "White",
          "value": "white"
        },
        {
          "name": "Light Gray",
          "value": "gray"
        },
        {
          "name": "Dark",
          "value": "dark"
        }
      ],
      "default_value": "primary"
    },
    "alignment": {
      "type": "option",
      "description": "Content alignment (legacy field, use variant instead)",
      "options": [
        {
          "name": "Centered",
          "value": "centered"
        },
        {
          "name": "Split",
          "value": "split"
        }
      ],
      "default_value": "centered"
    },
    "variant": {
      "type": "option",
      "description": "Layout variant - determines the overall component structure",
      "options": [
        {
          "name": "Centered Text",
          "value": "centered-text"
        },
        {
          "name": "Split Layout",
          "value": "split-layout"
        },
        {
          "name": "With Form",
          "value": "with-form"
        }
      ],
      "default_value": "centered-text",
      "required": true
    }
  }
}
```

## Field Descriptions

### Required Fields

| Field     | Type      | Description        | Example                                      |
| --------- | --------- | ------------------ | -------------------------------------------- |
| `title`   | text      | Main headline text | "Transform Your Health Journey"              |
| `ctaText` | text      | Button text        | "Start Your Journey"                         |
| `ctaLink` | multilink | Button destination | `/signup` or `https://external.com`          |
| `variant` | option    | Layout type        | "centered-text", "split-layout", "with-form" |

### Optional Fields

| Field             | Type     | Description     | When to Use                       |
| ----------------- | -------- | --------------- | --------------------------------- |
| `description`     | textarea | Subheading text | Add context or explanation        |
| `image`           | asset    | Hero image      | Required for split-layout variant |
| `formEmbedCode`   | textarea | HTML form code  | Required for with-form variant    |
| `backgroundColor` | option   | Theme color     | Match page design                 |
| `alignment`       | option   | Legacy field    | Use variant instead               |

## Variants Guide

### 1. Centered Text (`centered-text`)

**Use Case:** Primary hero sections, simple calls-to-action
**Example Page:** weightwatchers.com/us/oprah

**Required Fields:**

- title
- ctaText
- ctaLink
- variant: "centered-text"

**Optional Fields:**

- description
- backgroundColor

**Configuration Example:**

```json
{
  "title": "Transform Your Health Journey",
  "description": "Join millions of people who have found their path to wellness",
  "ctaText": "Start Your Journey",
  "ctaLink": {
    "url": "/signup",
    "target": "_self"
  },
  "backgroundColor": "primary",
  "variant": "centered-text"
}
```

### 2. Split Layout (`split-layout`)

**Use Case:** Feature highlights, comparison pages
**Example Page:** weightwatchers.com/us/compare-memberships

**Required Fields:**

- title
- ctaText
- ctaLink
- variant: "split-layout"

**Recommended Fields:**

- image (shows placeholder if not provided)
- description

**Configuration Example:**

```json
{
  "title": "Compare Our Memberships",
  "description": "Find the perfect plan that fits your lifestyle and budget",
  "ctaText": "Compare Plans",
  "ctaLink": {
    "url": "/compare-memberships"
  },
  "image": {
    "filename": "https://example.com/image.jpg",
    "alt": "Happy woman preparing healthy meal"
  },
  "backgroundColor": "white",
  "variant": "split-layout"
}
```

### 3. With Form (`with-form`)

**Use Case:** Sign-up flows, activation pages
**Example Page:** weightwatchers.com/us/signup/activate

**Required Fields:**

- title
- ctaText
- ctaLink
- variant: "with-form"

**Optional Fields:**

- formEmbedCode (shows default form if not provided)
- description

**Configuration Example:**

```json
{
  "title": "Activate Your Membership",
  "description": "Complete your registration to unlock personalized meal plans",
  "ctaText": "Activate Now",
  "ctaLink": {
    "url": "/signup/activate"
  },
  "formEmbedCode": "<form>...custom form HTML...</form>",
  "backgroundColor": "secondary",
  "variant": "with-form"
}
```

## Background Color Options

| Value       | Description     | Text Color | Button Style                  |
| ----------- | --------------- | ---------- | ----------------------------- |
| `primary`   | ww blue         | White      | White button with blue text   |
| `secondary` | Purple accent   | White      | White button with purple text |
| `white`     | Clean white     | Dark gray  | Blue button with white text   |
| `gray`      | Light gray      | Dark gray  | Blue button with white text   |
| `dark`      | Dark gray/black | White      | Blue button with white text   |

## Form Integration

### Formstack Integration

For the `with-form` variant, you can embed Formstack forms:

1. Get your Formstack embed code
2. Paste the complete HTML into the `formEmbedCode` field
3. The component will render the form in a styled container

### Custom HTML Forms

You can also use custom HTML forms:

```html
<form class="space-y-4">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input type="text" placeholder="First Name" class="px-4 py-3 rounded-lg border border-gray-300 text-gray-900" required />
    <input type="text" placeholder="Last Name" class="px-4 py-3 rounded-lg border border-gray-300 text-gray-900" required />
  </div>
  <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-900" required />
  <button type="submit" class="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit</button>
</form>
```

## Implementation Notes

### TypeScript Interface

```typescript
interface StoryblokCtaBanner extends StoryblokComponentBase {
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
```

### React Usage

```tsx
import { CtaBanner } from "storyblok-components/components";

// In your page component
<CtaBanner blok={story.content.cta_banner} />

// With Storyblok Visual Editor
<StoryblokComponent blok={blok} />
```

## Best Practices

### Content Guidelines

1. **Title**: Keep under 100 characters, focus on benefit or action
2. **Description**: 1-2 sentences maximum, support the title
3. **CTA Text**: Action-oriented, under 50 characters
4. **Images**: High quality, relevant to content, proper alt text

### Accessibility

1. **Alt Text**: Always provide descriptive alt text for images
2. **Color Contrast**: All text meets WCAG AA standards
3. **Keyboard Navigation**: All interactive elements are keyboard accessible
4. **Semantic HTML**: Proper heading hierarchy and semantic structure

### Performance

1. **Image Optimization**: Use optimized images (WebP when possible)
2. **Form Loading**: Consider lazy loading for complex forms
3. **CSS**: Component uses Tailwind utility classes for optimal performance

### SEO Considerations

1. **Heading Structure**: Titles use appropriate heading tags
2. **Link Structure**: Proper internal linking for CTAs
3. **Content Quality**: Clear, benefit-focused messaging

## Testing

The component includes comprehensive Cypress tests covering:

- All three variants
- All background color options
- Form interaction (when applicable)
- Responsive design
- Accessibility
- Edge cases

Run tests with:

```bash
pnpm cypress:run --spec "cypress/e2e/cta-banner.cy.ts"
```

## Support

For questions about implementation or usage, refer to:

1. Component source: `packages/storyblok-components/src/components/CtaBanner.tsx`
2. Demo page: `/cta-banner-demo`
3. Type definitions: `packages/storyblok-components/src/types/storyblok.ts`
