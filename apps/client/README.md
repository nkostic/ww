# WW Client App

This is the WW client application built with [Next.js](https://nextjs.org) and integrated with [Storyblok CMS](https://www.storyblok.com/).

## Features

- 🎨 **Storyblok CMS Integration** - Dynamic content management with Visual Editor support
- 🧪 **Cypress Testing** - End-to-end and component testing
- 🔒 **HTTPS Development** - SSL proxy for Storyblok Visual Editor
- ⚡ **Turbopack** - Fast development builds
- 🎯 **TypeScript** - Type-safe development with auto-generated Storyblok types
- 🍪 **Cookie Consent** - GDPR compliance with react-cookie-consent

## Quick Start

### 1. Environment Setup

Initialize your environment configuration:

```bash
pnpm setup:env
```

Then edit `.env.development` with your Storyblok credentials:

```env
STORYBLOK_REGION=eu
STORYBLOK_TOKEN=your_storyblok_preview_token
STORYBLOK_VERSION=draft
SPACE_ID=your_space_id
```

### 2. Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Storyblok Integration

### Generate TypeScript Types

Pull components and generate types from your Storyblok space:

```bash
pnpm storyblok:generate
```

### Visual Editor Setup

For Storyblok Visual Editor access (requires HTTPS):

1. **Generate SSL certificates:**

   ```bash
   pnpm openssl:generate-ssls
   ```

2. **Start HTTPS proxy:**

   ```bash
   pnpm storyblok:proxy
   ```

3. **Access via HTTPS:**
   Open [https://localhost:3010](https://localhost:3010)

## Testing

### Cypress E2E Testing

```bash
# Install Cypress
pnpm cypress:install

# Open Cypress UI
pnpm cypress:open

# Run tests headlessly
pnpm cypress:run

# Run component tests
pnpm cypress:component
```

## Available Commands

### Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm check-types` - TypeScript type checking

### Environment

- `pnpm setup:env` - Copy environment template

### Storyblok

**⚠️ Important: Space ID Required**

All Storyblok commands require a space ID. You can either:

1. **Set SPACE_ID in your environment** (recommended):

   ```bash
   # In .env.development
   SPACE_ID=your_space_id
   ```

2. **Or provide space ID directly with commands**:
   ```bash
   # Append the space ID to the command
   pnpm storyblok:pull-with-space YOUR_SPACE_ID
   ```

#### Available Commands

- `pnpm storyblok:login` - Login to Storyblok CLI
- `pnpm storyblok:pull` - Pull components from Storyblok (requires SPACE_ID env var)
- `pnpm storyblok:pull-with-space [SPACE_ID]` - Pull components with specific space ID
- `pnpm storyblok:types` - Generate TypeScript types (requires SPACE_ID env var)
- `pnpm storyblok:generate` - Pull components + generate types (requires SPACE_ID env var)
- `pnpm storyblok:proxy` - Start HTTPS proxy for Visual Editor

#### Example Usage

```bash
# Method 1: Using environment variable (recommended)
export SPACE_ID=123456
pnpm storyblok:pull

# Method 2: Providing space ID directly
pnpm storyblok:pull-with-space 123456

# For root-level commands (from workspace root):
pnpm storyblok:pull --space 123456
```

### Testing

- `pnpm cypress:install` - Install Cypress
- `pnpm cypress:open` - Open Cypress UI
- `pnpm cypress:run` - Run all tests
- `pnpm cypress:component` - Run component tests

### SSL/Development

- `pnpm certificate:install` - Install mkcert certificates
- `pnpm openssl:generate-ssls` - Generate SSL certificates with OpenSSL

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── types/
│   └── storyblok/        # Auto-generated Storyblok types
└── components/           # React components
```

## Development Workflow

1. **Setup environment**: `pnpm setup:env`
2. **Edit environment**: Add your Storyblok credentials to `.env.development`
3. **Generate types**: `./storyblok.fish generate` (Fish) or `pnpm storyblok:generate` (Bash)
4. **Start development**: `pnpm dev`
5. **For Visual Editor**: `pnpm openssl:generate-ssls && pnpm storyblok:proxy`

## Dependencies

### Core

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### CMS & Content

- **@storyblok/react** - Storyblok React SDK
- **@storyblok/richtext** - Rich text rendering
- **storyblok-rich-text-react-renderer** - Advanced rich text renderer

### Testing

- **Cypress 14** - E2E and component testing
- **Jest 30** - Unit testing framework

### Utilities

- **classnames** - CSS class utilities
- **react-cookie-consent** - GDPR cookie consent
- **html-entities** - HTML entity handling
- **local-ssl-proxy** - HTTPS proxy for development

## Troubleshooting

### TypeScript Errors

- Run `pnpm storyblok:generate` to update types
- Run `pnpm check-types` to verify TypeScript configuration
