# WW Marketing Website Monorepo

A modern full-stack monorepo built with Turborepo, Next.js 15, and TypeScript, optimized for WW development and Vercel deployment.

## 📖 Documentation

- [CHANGESETS.md](./docs/CHANGESETS.md) - Version management and changelog workflow
- [DEVELOPMENT.md](./docs/DEVELOPMENT.md) - Development tools and workflows
- [COMMANDS.md](./docs/COMMANDS.md) - Complete command reference
- [REACT_GUIDELINES.md](./docs/REACT_GUIDELINES.md) - React coding standards and guidelines

## 🏗️ Architecture Overview

This repository contains multiple Next.js applications and shared packages, orchestrated with Turborepo for fast builds and easy deployment.

### Applications

- **client** (Port 3000) - WW application with Storyblok CMS integration
- **quizes** (Port 3001) - Interactive quiz platform application placeholder

### Shared Packages

- **@repo/typescript-config** - Shared TypeScript configurations
- **@repo/eslint-config** - Shared ESLint configurations

## 🚀 Quick Start

```bash
# Clone and navigate to project
git clone <repository-url>
cd ww

# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=client
pnpm dev --filter=quizes
```

### Access URLs

- **Client**: [http://localhost:3000](http://localhost:3000) - Main app with Storyblok CMS
- **Quizes**: [http://localhost:3001](http://localhost:3001) - Quiz application

## �️ Development Tools

### EditorConfig

This project includes an `.editorconfig` file to ensure consistent code formatting across different editors and IDEs. Make sure your editor supports EditorConfig for automatic formatting.

### Changesets

We use [Changesets](https://github.com/changesets/changesets) for managing versions and changelogs of shared packages:

```bash
# Create a changeset for package changes
pnpm changeset

# Version packages and update changelogs
pnpm changeset:version

# Check changeset status
pnpm changeset:status
```

See [CHANGESETS.md](./docs/CHANGESETS.md) for detailed workflow and best practices.

## �📦 Package Management

```bash
# Install dependencies for all packages
pnpm install

# Add dependency to specific package
pnpm add --filter=client <app-or-package-name-as-listed-in-package-json>

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

## 🚀 Vercel Deployment TODO

This monorepo is optimized for Vercel deployment:

### 1. Connect to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the monorepo structure

### 2. Environment Variables

Set these in your Vercel dashboard:

**Client App:**

```
STORYBLOK_TOKEN=your_preview_token
STORYBLOK_REGION=eu
STORYBLOK_VERSION=draft
```

### 3. Build Configuration

Vercel automatically uses the `vercel.json` configuration:

- Client app deployed to main domain
- Quizes app deployed to `/quizes` path

## 🎨 Storyblok CMS Integration

The client app includes comprehensive Storyblok integration with shared components and TypeScript generation.

### Available Components

The `@repo/storyblok-components` package provides production-ready components

### Usage Example

```tsx
import { Hero, Feature, CtaBanner } from "@repo/storyblok-components";

export default function Page({ blok }) {
  return (
    <div>
      <Hero blok={blok.hero} />
      <CtaBanner blok={blok.cta_banner} />
      <Feature blok={blok.feature} />
    </div>
  );
}
```

### Component Demo

Visit the component gallery at [http://localhost:3000](http://localhost:3000) to see all available components and their variants.

### Local Development Setup

```bash
# Generate TypeScript types
pnpm storyblok:generate --filter=client

# Start HTTPS proxy for Visual Editor
pnpm storyblok:proxy --filter=client
```

## 🧪 Testing

### Cypress Testing

The project includes comprehensive Cypress tests for both e2e and component testing:

```bash
# Install Cypress
pnpm cypress:install --filter=client

# Open Cypress UI for interactive testing
pnpm cypress:open --filter=client

# Run all tests headlessly
pnpm cypress:run --filter=client

# Run only component tests
pnpm cypress:component --filter=client
```

### Test Coverage

- **E2E Tests**: Full user workflows and page interactions
- **Component Tests**: Isolated component testing with multiple variants
- **CTA Banner Tests**: 26+ test cases covering all variants and accessibility

## ️ Tech Stack & Developer Tools

### Core Technologies

- **Next.js 15**: App router with React 19 support
- **TypeScript**: Type-safe development environment
- **Tailwind CSS**: Utility-first styling framework
- **pnpm**: Fast, disk space efficient package manager

### Content Management

- **Storyblok CMS**: Headles CMS implemented though it's SDK in the client app

### Development & Testing

- **Cypress**: E2E and component testing framework
- **ESLint & Prettier**: Code linting and formatting
- **Turborepo**: Monorepo build system and caching

### Deployment & Infrastructure - TODO

- **Vercel**: Deployment and hosting platform

## 🛠️ Available Scripts

### Development Commands

```bash
pnpm dev                    # Start all apps in development
pnpm dev --filter=client   # Start client app only
pnpm dev --filter=quizes   # Start quizes app only

pnpm build                  # Build all apps and packages
pnpm build --filter=client # Build specific app
pnpm lint                   # Lint all packages
```

### Storyblok Commands

```bash
# Pull components from your Storyblok space (run from project root)
pnpm storyblok:pull --space your-space-id

# Generate TypeScript types after pulling components
pnpm storyblok:types --space your-space-id

# Pull components and generate types in one command
pnpm storyblok:generate

# Start HTTPS proxy for Visual Editor (required for Storyblok Visual Editor)
pnpm storyblok:proxy

# Login/logout from Storyblok CLI
pnpm storyblok:login
pnpm storyblok:logout
```

### Testing Commands

```bash
pnpm cypress:open --filter=client       # Open Cypress UI
pnpm cypress:run --filter=client        # Run tests headlessly
pnpm cypress:component --filter=client  # Run component tests
```

### Package Management

```bash
pnpm changeset              # Create changeset for version management
pnpm changeset:version      # Version packages and update changelogs
pnpm changeset:status       # Check changeset status
```

## 📁 Project Structure

```
ww/
├── apps/
│   ├── client/             # Main ww app with Storyblok CMS
│   │   ├── src/app/        # Next.js 15 app router
│   │   ├── cypress/        # E2E and component tests
│   │   └── public/         # Static assets
│   └── quizes/             # Interactive quiz platform
├── packages/
│   ├── storyblok-components/ # Reusable Storyblok CMS components
│   ├── typescript-config/  # Shared TypeScript configurations
│   └── eslint-config/      # Shared ESLint configurations
├── .editorconfig          # Code formatting consistency
├── vercel.json           # Vercel deployment configuration
└── turbo.json            # Turborepo build configuration
```

## � Performance & Optimization

- **Turborepo**: Intelligent build caching and parallel execution
- **Next.js 15**: Latest React features and performance improvements
- **Vercel Edge**: Global CDN and automatic optimization
- **Shared Packages**: Code reuse and consistent dependencies

## 🎯 Storyblok CMS Integration

The WW platform includes comprehensive Storyblok CMS integration with type-safe components.

### Setup Enviroment vars

Before running Storyblok commands, configure env vars in `apps/client/.env.development`:

## 📚 Documentation & Resources

### Framework Documentation

- [Next.js 15 Guide](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Storyblok CMS Guide](https://www.storyblok.com/docs)

### Development Resources

- [Cypress Testing Guide](https://docs.cypress.io/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vercel Deployment](https://vercel.com/docs)

## 🔗 Useful Turborepo Links

Explore advanced Turborepo features:

- [Task Configuration](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Build Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [CLI Reference](https://turborepo.com/docs/reference/command-line-reference)

### Access from Storyblok Visual Editor

Storyblok requires **HTTPS** for the Visual Editor. Since Next.js runs on HTTP locally, use `local-ssl-proxy` to create an SSL-secured connection.

#### Generate SSL Certificates

If you don't have SSL certificates, generate them using OpenSSL:

```sh
pnpm turbo run openssl:generate-ssls --filter=client
```

When prompted:

- Enter any values for fields like country, organization, etc.
- For "Common Name (CN)", enter `localhost`

This generates:

- `localhost.pem` (SSL Certificate)
- `localhost-key.pem` (Private Key)

#### Start HTTPS Proxy

```sh
pnpm storyblok:proxy
```

Open [https://localhost:3010](https://localhost:3010) with your browser. The browser may warn "Not Secure" due to self-signed SSL certificates - you can safely ignore this and proceed.

Now you can access the app from Storyblok Visual Editor using `https://localhost:3010`.

- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Storyblok](https://www.storyblok.com/) CMS integration with TypeScript generation
- [Cypress](https://www.cypress.io/) for end-to-end testing

### Build

To build all apps and packages, run the following command:

```sh
pnpm build
```

You can build a specific package by using a [filter](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters):

```sh
# Build client app
pnpm build --filter=client

# Build specific app
pnpm build --filter=quizes
```

### Useful Commands

For a complete list of available commands, see [COMMANDS.md](./docs/COMMANDS.md).

### Remote Caching TODO

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd ww

# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo login

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo login
yarn exec turbo login
pnpm exec turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
# With [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation) installed (recommended)
turbo link

# Without [global `turbo`](https://turborepo.com/docs/getting-started/installation#global-installation), use your package manager
npx turbo link
yarn exec turbo link
pnpm exec turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turborepo.com/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.com/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.com/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration Options](https://turborepo.com/docs/reference/configuration)
- [CLI Usage](https://turborepo.com/docs/reference/command-line-reference)
