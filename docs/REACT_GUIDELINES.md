# React Development Guidelines

This document outlines the React development standards and best practices for the WW project.

## 🎯 Core Philosophy

**WET over DRY**: We prefer to be WET (Write Everything Twice) than DRY (Don't Repeat Yourself), especially early in projects where we want flexibility to make changes easily. Abstraction usually means added complexity, so we reserve it for when repeating ourselves too often.

## 📁 Folder Structure

### Component Organization

- **Prefer folders over individual modules**
- **Keep components localized** to their folders
- **Keep children nested** within parent component folders
- **Keep supporting files** like tests localized to the component

### File Naming Conventions

```
ComponentName/
├── index.tsx           # Main component file
├── index.cy.tsx        # Cypress tests
├── types.ts           # Component-specific types
└── components/        # Child components
    └── ChildComponent/
        └── index.tsx
```

**Benefits**: This structure helps significantly with search and maintains clear component boundaries.

## 📄 Component File Structure

### Import Order (Enforced by ESLint)

1. **Libraries**: `import React from 'react';`
2. **Higher order components/helpers**: `import type { MetricsHeroStoryblok } from '@/types/sb';`
3. **Locally scoped items**: `import MetricsHeroItem from './components/MetricsHeroItem';`
4. **Images, SVGs, fonts**
5. **Styles**: Using Tailwind CSS classes directly in className (no style imports needed)

### Code Structure Template

```tsx
// 1. Library imports
import { useState } from "react";

// 2. Type imports
import type { ComponentProps } from "@/types/common";

// 3. Local component imports
import ChildComponent from "./components/ChildComponent";

// 4. Component definition
export default function MyComponent({ data }: ComponentProps) {
  // State declarations
  const [value, setValue] = useState<string>("");

  // Variable declarations with newline after
  const header = myHelperFunction();

  return (
    <div className={styles.container}>
      <h1>{header}</h1>
      <ChildComponent onClick={handleClick} />
    </div>
  );

  // Helper functions below JSX return
  function myHelperFunction() {
    console.log("This is a helper function");
    return "Nice Page!";
  }

  function handleClick() {
    setValue("new value");
  }
}
```

## 🔧 Coding Standards

### TypeScript Preferences

- ✅ **Prefer `type` over `interface`**
- ✅ **NO `any`** - keep exceptions rare and well-documented
- ✅ **Strict typing** - use proper TypeScript types

```tsx
// ✅ Good
type UserData = {
  id: string;
  name: string;
  email: string;
};

// ❌ Avoid
interface UserData {
  id: string;
  name: string;
  email: string;
}

// ❌ Never
const userData: any = fetchUser();
```

### Syntax Preferences

- ✅ **Prefer semicolons** (`;`)
- ✅ **No trailing commas** (`,`)
- ✅ **`const` by default**
- ✅ **Newline after variable declarations**
- ✅ **camelCase for CSS rule names**

```tsx
// ✅ Good
const userData = fetchUserData();

const processedData = processData(userData);

// ❌ Avoid trailing commas
const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000 // No trailing comma
};
```

### Function Declarations

- ✅ **Prefer function declarations over const arrow functions**
- ✅ **One TSX function block per file**
- ✅ **Put helper functions below JSX return**

```tsx
// ✅ Good - Function declaration
export default function MyComponent() {
  return <div>Content</div>;
}

// ❌ Avoid - Arrow function for components
const MyComponent = () => {
  return <div>Content</div>;
};
```

### CSS/SCSS Conventions

- ✅ **Use camelCase for CSS rule names**
- ✅ **CSS Modules for component styles**

```scss
// styles.module.scss
.containerWrapper {
  display: flex;
  flexdirection: column;
}

.primaryButton {
  background-color: var(--primary-color);
  borderradius: 4px;
}
```

## ⚛️ React Best Practices

### State Management

- ✅ **Avoid `useEffect` at all costs** - use callbacks/handlers instead
- ✅ **Avoid overuse of `useMemo` and `useCallback`** - they hurt readability
- ✅ **Handle state changes in event handlers**

```tsx
// ✅ Good - Direct state updates in handlers
function MyComponent() {
  const [value, setValue] = useState("");
  const [otherValue, setOtherValue] = useState("");

  function handleClick(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    setOtherValue(e.target.value.toUpperCase());
  }

  return <input onChange={handleClick} />;
}

// ❌ Avoid - useEffect for simple state synchronization
function MyComponent() {
  const [value, setValue] = useState("");
  const [otherValue, setOtherValue] = useState("");

  useEffect(() => {
    setOtherValue(value.toUpperCase());
  }, [value]);

  function handleClick(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return <input onChange={handleClick} />;
}
```

### Component Architecture

- ✅ **Keep components focused and single-purpose**
- ✅ **Extract child components when JSX becomes complex**
- ✅ **Avoid deeply nested component trees**

## 🔄 Git Workflow

### Branch Naming

- **Pattern**: `{ghusername}/{ticket}-{name}`
- **Example**: `lkuich/wc-145-feature-desc`

### Commit Messages

- **Pattern**: `WC-145: Some nice commit message`
- **Include ticket number in every commit**

### Pull Requests

- **Title**: `type(WC-145): A title that matches a Jira ticket`
- **Squash PRs** before merging
- **One branch per ticket**

## 🎨 Storyblok Schema Management

### Workflow for Blok Changes

1. **Alert team** about breaking changes before making schema modifications
2. **Open branch** for config changes first
3. **Run** `pnpm storyblok:generate` to get fresh types
4. **Update codebase** to handle breaking changes
5. **Open PR** and tag team for review
6. **Merge config changes** quickly to minimize downtime
7. **Begin FE work** on separate branch

### Schema Change Types

#### Standard Changes

- Dev alerts others about breaking changes
- Once acknowledged by lead, proceed with schema changes
- Minimize potential downtime by merging schema changes quickly

#### Substantial Changes

- Duplicate the primary Storyblok space
- Make changes freely in duplicate space
- Test changes thoroughly
- Re-apply changes to target space
- Follow standard PR workflow

### Future Migration Tool

- Storyblok v4 CLI includes migration tools
- Manage components in-code with JavaScript migration files
- Enable at end of CMS project when ready

## 🔍 Code Review Guidelines

### What to Look For

- ✅ **No `any` types** without justification
- ✅ **Proper import order** and organization
- ✅ **Function declarations** over arrow functions for components
- ✅ **No unnecessary `useEffect`** usage
- ✅ **Minimal `useMemo`/`useCallback`** usage
- ✅ **Helper functions** placed below JSX return
- ✅ **Proper TypeScript types** for all props and state

### Performance Considerations

- **Avoid premature optimization** with React hooks
- **Prefer readability** over micro-optimizations
- **Use React 19 compiler** when available instead of manual memoization

## 🛠️ Tooling Configuration

### ESLint Rules

- Enforces `type` over `interface`
- Prevents `any` usage
- Ensures proper import order
- Enforces semicolons and no trailing commas

### Prettier Configuration

- Semicolons: `true`
- Trailing commas: `none`
- Single quotes: `false` (use double quotes)
- Print width: `100`

### EditorConfig

- UTF-8 encoding
- LF line endings
- 2-space indentation
- 100 character line limit

### Pre-commit Hooks (Husky + Lint-staged)

- **Automatic formatting** on commit
- **ESLint fixes** applied to staged files
- **Prevents inconsistent code** from being committed
- **Zero configuration** - works automatically after setup

**What runs on commit:**

```bash
# TypeScript/JavaScript files
prettier --write → eslint --fix

# Other files (MD, JSON, CSS, SCSS)
prettier --write
```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Best Practices](https://typescript-eslint.io/rules/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Storyblok Documentation](https://www.storyblok.com/docs)
