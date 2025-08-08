# WW Turborepo Commands Reference

## 🚀 Development Commands

### Basic Development

# Format code according to guidelines (automatically fixes trailing commas, etc.)

pnpm format

# Check formatting without making changes

pnpm format:check

# Lint code for guidelines violations

pnpm lint

# Run full quality check

pnpm check-types && pnpm lint && pnpm format:check

```

**Key Guidelines**: See [REACT_GUIDELINES.md](./REACT_GUIDELINES.md) for comprehensive standards:

- WET over DRY philosophy for flexibility
- Function declarations over arrow functions
- No `any` types except when absolutely necessary
- Helper functions below JSX return
- Avoid `useEffect` when possible

## 📦 Package Management & Versioningart all apps in development mode

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

Then run commands:

```bash
# Login to Storyblok
pnpm storyblok:login

# Logout from Storyblok
pnpm storyblok:logout

# Pull components from Storyblok
pnpm storyblok:pull --space [SPACE_ID]

# Generate TypeScript types
pnpm storyblok:types --space [SPACE_ID]

# Pull components AND generate types (recommended)
pnpm storyblok:generate --space [SPACE_ID]

# Start HTTPS proxy for Storyblok Visual Editor
pnpm storyblok:proxy
```

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

## 🐳 Docker Compose

```bash

# View logs (direct docker-compose command)
docker-compose logs
docker ps
docker-compose up
# or rebuild
docker-compose up --build
```

## 📱 Apps Overview

| App        | Port | Description                        |
| ---------- | ---- | ---------------------------------- |
| **client** | 3000 | Main client app with Storyblok CMS |
| **quizes** | 3001 | Quiz application                   |

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
   # Generate types
   pnpm turbo run storyblok:generate --space [SPACE_ID]
   ```

5. **For testing:**
   ```bash
   # Install and run Cypress
   pnpm turbo run cypress:install
   pnpm turbo run cypress:open
   ```
