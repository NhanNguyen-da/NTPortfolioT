# NTPortfolioT
Create a single-page storytelling portfolio website for Nguyen Trung Nhan, an IT Supervisor specializing in Healthcare IT systems. This is NOT a traditional CV website - it's an interactive journey that tells the story of his career progression through visual storytelling and animations.

Tech Stack:

+ Frontend: Angular 17+ (standalone components preferred)
+ Runtime: Node.js
+ Optional: Python (only if needed for mock demo applications)
+ Database: None - all data stored in TypeScript files
+ Styling: SCSS with CSS custom properties
+ Animations: Angular Animations + CSS animations

# Design Concept
Overall Vision
The portfolio is designed as a cinematic journey through Nhan's career. Users scroll through the story like watching a documentary, with smooth transitions and meaningful animations that enhance the narrative rather than distract from it.

# The "Trunk" Concept
The trunk is a vertical tree/road/path that represents the journey through time:

Visual Style: An organic, hand-drawn line that "grows" downward with nodes at each milestone
Nodes: Red/accent colored dots at each career milestone (education + work combined)
Interaction:

Scroll: As user scrolls, nodes activate sequentially
Click: User can click any node to jump to that milestone

# Detail Panel Behavior

Always visible on the right side (desktop)
Content transitions smoothly when a new node is selected
Can contain: images, text, achievements, and interactive demo buttons
Demos load as overlays/modals when triggered


Animation: The trunk "draws" itself on page load, nodes "bloom" as the line reaches them
