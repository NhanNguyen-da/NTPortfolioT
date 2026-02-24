# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for a Healthcare IT professional built with Angular 21. It's a single-page application with anchor-based navigation (no Angular Router).

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server on port 3000
npm run build        # Production build to ./dist
npm run preview      # Serve production build locally
```

## Architecture

**Standalone Components (no NgModule)** - All components are standalone and imported directly into `AppComponent`.

**Zoneless Change Detection** - Uses `provideZonelessChangeDetection()` in bootstrap for better performance.

**Signals-based State** - Components use Angular signals (`signal()`, `update()`) for state management instead of traditional change detection.

### Key Files

- `src/app.component.ts` - Root component that imports all section components
- `src/services/theme.service.ts` - Dark/light mode toggle with system preference detection
- `src/directives/scroll-reveal.directive.ts` - IntersectionObserver directive for fade-in animations

### Component Structure

```
src/components/
├── header/      # Sticky nav, mobile menu, theme toggle
├── hero/        # Typewriter effect, image slideshow
├── about/       # Image carousel, stats, CV download
├── experience/  # Accordion-style job cards
├── skills/      # Tabbed interface with progress bars
├── education/   # Degree/certification cards
└── contact/     # Reactive form with validation
```

### Patterns Used

- **Navigation**: Anchor links with `scrollIntoView()` smooth scroll (no router)
- **Dark Mode**: Class-based via Tailwind `dark:` prefix, managed by ThemeService
- **Forms**: Reactive Forms with floating labels
- **Styling**: Tailwind CSS with custom teal color palette

### Data

All portfolio data (experience, skills, education) is hardcoded in component TypeScript files. No backend or external API integration.
