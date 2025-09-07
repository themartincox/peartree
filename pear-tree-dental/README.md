# Pear Tree Dental Website

Pear Tree Dental's website, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Next.js 15**: App Router, Server Components, and hybrid rendering
- **TypeScript**: Type safety and improved developer experience
- **Tailwind CSS**: Utility-first styling for responsive design
- **Contentful CMS**: Structured content management
- **Advanced Cohort Engine**: Sophisticated personalization system

## Cohort Engine

The website includes a sophisticated cohort engine for personalization based on:

- Geo-location and travel time estimation
- Device type (mobile, tablet, desktop)
- Time of day and office hours
- User status (new, returning, frequent)
- User intent signals

See the [Cohort Engine Documentation](./COHORT-ENGINE.md) for details on this feature.

## Project Structure

- `src/app`: Next.js App Router pages
- `src/components`: React components
  - `src/components/cohort`: Cohort engine UI components
  - `src/components/ui`: Base UI components
  - `src/components/seo`: SEO-related components
- `src/lib`: Utility functions and business logic
  - `src/lib/cohort-engine`: Cohort engine core logic
- `public`: Static assets

## Setup and Development

### Prerequisites

- Node.js (v18+)
- Bun (recommended) or npm

### Installation

```bash
# Install dependencies
bun install
```

### Development

```bash
# Start development server
bun run dev
```

### Building

```bash
# Build for production
bun run build

# Start production server
bun run start
```

## Deployment

The site is deployed on Netlify with the following configuration:

```toml
[build]
  command = "bun run build"
  functions = ".netlify/functions"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[functions]
  external_node_modules = ["sharp"]
```
