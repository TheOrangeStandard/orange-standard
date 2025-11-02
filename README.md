# Orange Standard

Turborepo monorepo with Vite + React + PrimeReact + TypeScript.

## Structure

```
orange-standard/
├── apps/
│   ├── web/         # Web application (port 3000)
│   └── batch/       # Batch processing application (port 3001)
└── packages/
    ├── config/      # Shared configurations (ESLint, TypeScript)
    ├── ui/          # Shared UI components (PrimeReact wrappers)
    ├── theme/       # Shared theme/styling
    └── utils/       # Shared utilities
```

## Tech Stack

- **Build System**: Turborepo + pnpm workspaces
- **Framework**: Vite 7 + React 18
- **Language**: TypeScript
- **UI Components**: PrimeReact 10.9.7 (Styled Mode - lara-light-cyan theme)
- **State Management**: Zustand
- **Routing & Data**: TanStack Router + Query
- **Styling**: TailwindCSS + PrimeReact theme
- **Testing**: Vitest
- **Linting**: ESLint 9 (Flat Config)

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Development

Run all apps in development mode:

```bash
pnpm dev
```

Or run specific apps:

```bash
# Web app (http://localhost:3000)
pnpm dev --filter @orange-standard/web

# Batch app (http://localhost:3001)
pnpm dev --filter @orange-standard/batch
```

### Build

Build all apps:

```bash
pnpm build
```

### Test

Run all tests:

```bash
pnpm test
```

### Lint

Run linting:

```bash
pnpm lint
```

## Workspace Commands

```bash
# Install package to specific app
pnpm install <package> --filter @orange-standard/web

# Run command in specific app
pnpm --filter @orange-standard/web <command>

# Find package location
pnpm dlx turbo run where @orange-standard/web
```

## Requirements

- Node.js >= 18
- pnpm 9.0.0 or later
