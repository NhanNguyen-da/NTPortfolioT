# Nhan Portfolio - Storytelling Portfolio Website

A single-page storytelling portfolio website for Nguyen Trung Nhan, an IT Supervisor specializing in Healthcare IT systems. This portfolio uses an interactive "trunk/tree" timeline concept to present career milestones in a cinematic journey.

## Tech Stack

- **Framework**: Angular 17+ (Standalone Components)
- **Runtime**: Node.js
- **Styling**: SCSS with CSS Custom Properties
- **Animations**: Angular Animations + CSS Animations
- **Data Storage**: TypeScript files (no database)

## Design Concept

### The "Trunk" Timeline
The portfolio features a vertical tree/trunk visualization that represents a career journey through time:
- **Visual**: Organic, hand-drawn line that "grows" downward
- **Nodes**: Red/accent colored dots at each career milestone (education + work)
- **Animation**: Trunk draws itself on page load, nodes bloom as the line reaches them
- **Interaction**: Click nodes to jump to milestones, or scroll through sequentially

### Split-View Layout
- **Left Side**: Vertical trunk with milestone nodes
- **Right Side**: Detail panel showing milestone information
- **Demos**: Interactive demo modals for workplace achievements

## Project Structure

```
src/
├── app/
│   ├── core/services/          # Core services (scroll, timeline, section-observer)
│   ├── data/                   # Data models and content
│   │   ├── models/             # TypeScript interfaces
│   │   └── content/            # Portfolio data in TypeScript
│   ├── sections/               # Main page sections
│   │   ├── intro/              # Landing/intro section
│   │   ├── journey/            # Main trunk timeline section
│   │   ├── skills/             # Skills showcase
│   │   ├── certifications/     # Certifications display
│   │   └── contact/            # Contact section
│   ├── demos/                  # Interactive demo components
│   │   ├── ecosystem-integration/
│   │   ├── management-dashboard/
│   │   ├── data-pipeline/
│   │   └── compliance-checker/
│   ├── shared/                 # Shared components, directives, pipes
│   └── animations/             # Angular animation triggers
├── assets/                     # Static assets (images, fonts)
└── styles/                     # Global SCSS partials
```

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start
# or
ng serve

# Navigate to http://localhost:4200
```

### Development Commands

```bash
# Development server
ng serve

# Build for production
ng build --configuration production

# Run unit tests
ng test

# Run linting
ng lint

# Generate a new component
ng generate component <name> --standalone
```

## Implementation Roadmap

### Phase 1: Data Setup
1. Populate milestone data in `src/app/data/content/milestones.data.ts`
2. Add personal information in `src/app/data/content/personal.data.ts`
3. Define skills in `src/app/data/content/skills.data.ts`
4. Add certifications to `src/app/data/content/certifications.data.ts`

### Phase 2: Core Components
1. Implement intro section with profile card
2. Build trunk component with SVG line drawing
3. Create trunk-node components with bloom animations
4. Implement detail-panel with content transitions
5. Add scroll-based milestone activation

### Phase 3: Additional Sections
1. Build skills section with proficiency indicators
2. Create certifications gallery with lightbox
3. Implement contact section

### Phase 4: Interactive Demos
1. Ecosystem integration visualization
2. Management dashboard with KPIs
3. Data pipeline flow diagram
4. Compliance checker interface

### Phase 5: Polish
1. Add all scroll animations
2. Implement parallax effects
3. Optimize performance
4. Test responsive design
5. Add loading states

## Key Features to Implement

### Animations
- Trunk line drawing animation using SVG stroke-dasharray
- Node bloom effect when scrolling into view
- Pulse animation for active node
- Content fade/slide transitions in detail panel
- Parallax scrolling effects

### Scroll Behavior
- Smooth scroll between sections
- Active node tracking based on scroll position
- Click to jump to specific milestone
- Scroll indicator on intro section

### Responsive Design
- Mobile: Stack trunk and detail panel vertically
- Tablet: Adjust spacing and font sizes
- Desktop: Full split-view layout

## Customization

### Colors
Edit color variables in `src/styles/_variables.scss`:
- Primary colors (red/accent)
- Background colors
- Text colors

### Fonts
Update font imports in `src/styles/_typography.scss`

### Animation Speeds
Adjust animation durations in `src/app/animations/constants/durations.ts`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private project - All rights reserved
