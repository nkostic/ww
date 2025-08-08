# WW Turborepo Commands Reference

## 🚀 Development Commands

### Basic Development

```bash
# Start all apps in development mode
pnpm dev

# Start specific app
pnpm dev --filter=client
pnpm dev --filter=quizes

# Build all apps
pnpm build

# Build specific app
pnpm build --filter=client
pnpm build --filter=quizes
```

### Linting & Type Checking

```bash
# Lint all apps
pnpm lint

# Type check all apps
pnpm check-types

# Format code
pnpm format
```

## 🧪 Testing Commands (Cypress)

```bash
# Install Cypress
pnpm turbo run cypress:install --filter=client

# Open Cypress UI
pnpm turbo run cypress:open --filter=client

# Run component tests
pnpm turbo run cypress:component --filter=client

# Run all Cypress tests
pnpm turbo run cypress:run --filter=client
```

## 📝 Storyblok CMS Commands

```bash
# Login to Storyblok
pnpm storyblok:login

# Logout from Storyblok
pnpm storyblok:logout

# Pull components from Storyblok
pnpm storyblok:pull

# Generate TypeScript types
pnpm storyblok:types

# Pull components AND generate types (recommended)
pnpm storyblok:generate

# Start HTTPS proxy for Storyblok Visual Editor
pnpm storyblok:proxy
```

**Note**: Make sure your `SPACE_ID` is configured in `apps/client/.env.development` before running these commands.

## � Package Management & Versioning

### Package Management

```bash
# Install dependencies for all packages
pnpm install

# Add dependency to specific package
pnpm add --filter=client <package-name>

# Remove dependency from specific package
pnpm remove --filter=client <package-name>
```

### Changesets (Version Management)

```bash
# Create a changeset for package changes
pnpm changeset

# Version packages and update changelogs
pnpm changeset:version

# Check what packages have changesets
pnpm changeset:status

# Version packages and update lockfile
pnpm version-packages
```

## �🔒 SSL/Certificate Commands

```bash
# Install SSL certificate (requires mkcert)
pnpm turbo run certificate:install --filter=client

# Generate SSL certificates with OpenSSL
pnpm turbo run openssl:generate-ssls --filter=client
```

## � Storyblok Components Package

```bash
# Build the shared components package
pnpm build --filter=@repo/storyblok-components

# Develop with the shared components
pnpm dev --filter=@repo/storyblok-components

# Lint the components package
pnpm lint --filter=@repo/storyblok-components

# Use components in your app
# Add to your app's package.json dependencies:
# "@repo/storyblok-components": "workspace:*"
```

### Using Shared Storyblok Components

```tsx
// Import components
import { Hero, Feature, Grid, RichText } from "@repo/storyblok-components";

// Use in your Storyblok component
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

## 🐳 Docker Commands

```bash
# Start all services with build
pnpm docker:dev

# Start specific service
pnpm docker:client    # Port 3000
pnpm docker:quizes    # Port 3001

# Stop all services
pnpm docker:down

# Clean up (remove volumes and orphans)
pnpm docker:clean

# View logs (direct docker-compose command)
docker-compose logs

# Access container shell (direct docker-compose command)
docker-compose exec client sh
docker-compose exec quizes sh
```

## 📱 Apps Overview

| App        | Port | Description                        |
| ---------- | ---- | ---------------------------------- |
| **client** | 3000 | Main client app with Storyblok CMS |
| **web**    | 3001 | Secondary web app                  |
| **docs**   | 3002 | Documentation site                 |
| **quizes** | 3001 | Quiz application                   |

## 🛠️ Environment Variables

For Storyblok integration, make sure to set:

- `SPACE_ID` - Your Storyblok space ID

## 📚 Package Structure

```
ww/
├── apps/
│   ├── client/     # Main app with Storyblok, Cypress, SSL
│   ├── web/        # Basic Next.js app
│   ├── docs/       # Documentation
│   └── quizes/     # Quiz application
├── packages/
│   ├── ui/         # Shared UI components
│   ├── eslint-config/  # Shared ESLint config
│   └── typescript-config/  # Shared TypeScript config
└── docker-compose.yaml  # Development containers
```

## 🏃‍♂️ Quick Start

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development:**

   ```bash
   pnpm dev
   ```

3. **Access apps:**
   - Client: http://localhost:3000
   - Quizes: http://localhost:3001

4. **For Storyblok development:**

   ```bash
   # Set your space ID
   export SPACE_ID=your_storyblok_space_id

   # Generate types
   pnpm turbo run storyblok:generate --filter=client
   ```

5. **For testing:**
   ```bash
   # Install and run Cypress
   pnpm turbo run cypress:install --filter=client
   pnpm turbo run cypress:open --filter=client
   ```
