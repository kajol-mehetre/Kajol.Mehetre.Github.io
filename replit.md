# VR Developer Portfolio

## Overview

This is a VR-inspired developer portfolio website built as a static single-page application. The portfolio showcases projects across three categories: Virtual Reality, Machine Learning, and Software Testing. It features a game-inspired UI design with immersive animations, a personality assessment visualization, and credentials showcase.

The application is designed to be deployed as a static site to GitHub Pages, providing a professional portfolio presence with zero hosting costs. Content is managed through JSON files, allowing non-technical updates without code changes.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript running on Vite as the build tool and development server.

**Routing**: Uses Wouter, a lightweight client-side router (2KB). Routes are defined in `App.tsx` with paths for home (`/`), projects listing (`/projects`), individual project details (`/project/:id`), and personality assessment (`/personality`).

**State Management**: React Query (@tanstack/react-query) handles server state and caching. Local component state uses React hooks. No global state management library is needed since content is static JSON.

**Styling Approach**: Tailwind CSS for utility-first styling with a custom design system configured in `tailwind.config.ts`. Custom CSS variables define theme colors that support light/dark mode toggling. Design follows gaming/VR aesthetic with geometric shapes, depth effects, and futuristic typography (Orbitron, Inter, Rajdhani fonts).

**Component Library**: shadcn/ui components (Radix UI primitives with custom styling). Components are copied into the project rather than installed as dependencies, providing full customization control.

**Theme System**: Custom light/dark theme implementation using CSS classes and localStorage persistence. Toggle button switches themes by adding/removing the "dark" class on the document root.

### Data Architecture

**Content Storage**: All portfolio content stored as static JSON files in `client/src/data/`:
- `profile.json` - Personal information, social links
- `projects.json` - Project details, tech stacks, video URLs
- `personality.json` - Personality traits with numerical ratings
- `certificates.json` - Certification details
- `achievements.json` - Professional achievements

**Rationale**: JSON-based content allows non-developers to update portfolio information without touching React code. This separation of content from presentation enables easy maintenance.

**Assets**: Images stored in `attached_assets/generated_images/` and imported via path aliases (`@assets`).

### Build & Deployment Strategy

**Dual Build Configuration**: 
- Standard build (`vite.config.ts`) for development with Replit-specific plugins
- GitHub Pages build (`vite.config.github.ts`) with `base: "./"` for relative paths, outputting to `dist-github/`

**Rationale**: GitHub Pages serves from a subdirectory, requiring relative asset paths. Separate configs prevent development/production conflicts.

**Deployment Target**: Static file hosting on GitHub Pages. No backend server required - all functionality is client-side.

### Backend Architecture

**Server Status**: Backend server code exists (`server/index.ts`, `server/routes.ts`) but is not used in production deployment. The portfolio is purely static.

**Database Schema**: Drizzle ORM schema defined in `shared/schema.ts` with PostgreSQL dialect, but database is not provisioned or used. Schema includes a basic users table.

**Rationale**: This appears to be a template-based project where backend scaffolding exists but isn't necessary for the static portfolio use case.

### Type Safety

**TypeScript**: Strict mode enabled across all code. Type definitions ensure compile-time safety for component props, route parameters, and data structures.

**Path Aliases**: Configured in `tsconfig.json` for clean imports:
- `@/*` → `client/src/*`
- `@shared/*` → `shared/*`
- `@assets/*` → `attached_assets/*`

### Performance Optimizations

**Code Splitting**: Vite automatically splits vendor bundles and route-level chunks.

**Image Handling**: Static images imported directly, processed by Vite's asset pipeline.

**CSS Strategy**: Tailwind's JIT compiler generates only used utility classes, minimizing bundle size.

## External Dependencies

### UI Component Libraries
- **Radix UI** - Headless accessible component primitives (accordion, dialog, dropdown, etc.)
- **shadcn/ui** - Pre-styled Radix components following design system
- **Lucide React** - Icon library for UI elements
- **React Icons** - Additional icons (specifically SiMedium for Medium social link)

### Routing & State
- **Wouter** - Minimal client-side router
- **@tanstack/react-query** - Server state management and caching

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation (via drizzle-zod)
- **@hookform/resolvers** - Connects Zod to React Hook Form

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities

### Build Tools
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **PostCSS** - CSS processing with Tailwind

### Database (Unused in Production)
- **Drizzle ORM** - TypeScript ORM with PostgreSQL support
- **@neondatabase/serverless** - Neon Postgres driver (not used in static deployment)

### Fonts
- **Google Fonts** - Orbitron (headings), Inter (body), Rajdhani (accents) loaded via CDN in `index.html`

### Development Tools (Replit-specific)
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit integration
- **@replit/vite-plugin-dev-banner** - Development environment banner