# WW Turborepo

A modern full-stack monorepo built with Turborepo [CHANGESETS.md](./CHANGESETS.md) for detailed workflow and best practices.

For more information about development tools and workflows, see [DEVELOPMENT.md](./DEVELOPMENT.md).

## 📦 Package Management 15, Turborepo, optimized for Vercel deployment.

## 🏗️ Architecture Overview

This repository contains multiple Next.js applications and shared packages, orchestrated with Turborepo for fast builds and easy deployment to Vercel.

### Applications

- **client** (Port 3000) - Main WW application with Storyblok CMS integration
- **quizes** (Port 3001) - Quiz platform application

### Shared Packages

- **@repo/ui** - Shared React components
- **@repo/typescript-config** - TypeScript configurations
- **@repo/eslint-config** - ESLint configurations
- **@repo/storyblok-components** - Reusable Storyblok CMS components

## 🚀 Quick Start

### Development

```bash
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

See [CHANGESETS.md](./CHANGESETS.md) for detailed workflow and best practices.

## �📦 Package Management

```bash
# Install dependencies for all packages
pnpm install

# Add dependency to specific package
pnpm add --filter=client <package-name>

# Build all packages
pnpm build

# Lint all packages
pnpm lint
```

## 🚀 Vercel Deployment

This monorepo is optimized for Vercel deployment:

### 1. Connect to Vercel

1. Push your code to GitHub/GitLab
2. Connect your repository to Vercel
3. Vercel will automatically detect the monorepo structure

### 2. Environment Variables

Set these in your Vercel dashboard:

**Client App:**

```
STORYBLOK_TOKEN=your_preview_token
STORYBLOK_SPACE_ID=your_space_id
STORYBLOK_REGION=eu
STORYBLOK_VERSION=draft
```

### 3. Build Configuration

Vercel automatically uses the `vercel.json` configuration:

- Client app deployed to main domain
- Quizes app deployed to `/quizes` path

## 🎨 Storyblok CMS Integration

The client app includes full Storyblok integration:

### Local Development

```bash
# Set environment variables (Fish shell)
set -gx SPACE_ID your_space_id

# Generate TypeScript types
pnpm storyblok:generate --filter=client

# Start HTTPS proxy for Visual Editor
pnpm storyblok:proxy --filter=client
```

### Shared Storyblok Components

Use the `@repo/storyblok-components` package:

```tsx
import { Hero, Feature, Grid, RichText } from "@repo/storyblok-components";

export default function Page({ blok }) {
  return (
    <div>
      <Hero blok={blok.hero} />
      <Grid blok={blok.features} />
      <RichText content={blok.description} />
    </div>
  );
}
```

## 🐳 Local Testing with Docker

For testing the production-like environment locally:

```bash
# Start all services with Docker
pnpm docker:dev

# Stop all services
pnpm docker:down
```

## 🛠️ Available Scripts

```bash
# Development
pnpm dev                    # Start all apps
pnpm build                  # Build all apps
pnpm lint                   # Lint all packages

# Local Docker testing
pnpm docker:dev            # Start with Docker Compose
pnpm docker:down           # Stop Docker services
```

## 📁 Project Structure

```
├── apps/
│   ├── client/          # Main app with Storyblok
│   └── quizes/          # Quiz platform
├── packages/
│   ├── ui/              # Shared UI components
│   ├── typescript-config/  # TS configurations
│   ├── eslint-config/   # ESLint configurations
│   └── storyblok-components/ # Storyblok components
├── vercel.json          # Vercel deployment config
└── turbo.json          # Turborepo configuration
```

## 🔧 Performance Optimization

- **Turborepo**: Parallel builds and intelligent caching
- **Vercel**: Edge deployment and automatic optimization
- **Next.js 15**: Latest features and performance improvements
- **Shared Packages**: Code reuse across applications

## 📚 Learn More

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Storyblok Documentation](https://www.storyblok.com/docs)

## Client App Features

The client app includes advanced Storyblok CMS integration with the following capabilities:

### Storyblok Setup

Generate TypeScript types from your Storyblok space:

**Option 1: Using Turbo (requires pnpm v10.6.2+):**

```sh
# Set your Storyblok space ID
export SPACE_ID=your_space_id  # Bash/Zsh
# OR
set -gx SPACE_ID your_space_id  # Fish shell

# Pull components and generate types
pnpm turbo run storyblok:generate --filter=client
```

**Option 2: Direct CLI (recommended for Fish shell users):**

```sh
cd apps/client

# Fish shell
set -gx SPACE_ID 286267789414235
npx storyblok components pull -p src/types/storyblok --sf --space=$SPACE_ID
npx storyblok types generate -p src/types/storyblok --type-prefix=Storyblok --sf --space=$SPACE_ID

# Or use the helper script
./storyblok.fish generate
```

**Option 3: Using helper script (Fish shell):**

```sh
cd apps/client
./storyblok.fish pull     # Pull components only
./storyblok.fish types    # Generate types only
./storyblok.fish generate # Pull + generate types
```

### Shared Storyblok Components

The `@repo/storyblok-components` package provides reusable Storyblok components that can be used across all applications:

#### Available Components

- **Hero**: Hero sections with headlines, descriptions, and CTAs
- **Feature**: Feature cards with icons and descriptions
- **Grid**: Flexible grid layouts for content organization
- **RichText**: Rich text content rendering with Storyblok's rich text renderer

#### Usage Example

```tsx
import { Hero, Feature, Grid, RichText } from "@repo/storyblok-components";

export default function Page({ blok }) {
  return (
    <div>
      <Hero blok={blok.hero} />
      <Grid blok={blok.features} />
      <RichText content={blok.description} />
    </div>
  );
}
```

See `packages/storyblok-components/README.md` for detailed component documentation and usage examples.

### Testing with Cypress

Run end-to-end tests:

```sh
# Install Cypress
pnpm turbo run cypress:install --filter=client

# Open Cypress UI
pnpm turbo run cypress:open --filter=client

# Run tests headlessly
pnpm turbo run cypress:run --filter=client
```

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
pnpm turbo run storyblok:proxy --filter=client
```

Open [https://localhost:3010](https://localhost:3010) with your browser. The browser may warn "Not Secure" due to self-signed SSL certificates - you can safely ignore this and proceed.

Now you can access the app from Storyblok Visual Editor using `https://localhost:3010`.

## Docker Development

For containerized development:

```sh
# Build and start all services
pnpm docker:dev

# Start specific service
pnpm docker:client    # Client app on port 3000
pnpm docker:quizes    # Quizes app on port 3001

# Stop all services
pnpm docker:down
```

- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Storyblok](https://www.storyblok.com/) CMS integration with TypeScript generation
- [Cypress](https://www.cypress.io/) for end-to-end testing
- [Docker](https://www.docker.com/) for containerized development

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

For a complete list of available commands, see [COMMANDS.md](./COMMANDS.md).

Quick reference:

```sh
# Development
pnpm dev                                    # Start all apps
pnpm dev --filter=client                   # Start client only

# Storyblok
pnpm turbo run storyblok:generate --filter=client  # Generate types
pnpm turbo run storyblok:proxy --filter=client     # HTTPS proxy

# Testing
pnpm turbo run cypress:open --filter=client        # Open Cypress UI

# Docker
pnpm docker:dev                             # Start all containers
pnpm docker:client                          # Start client container
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turborepo.com/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo

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
