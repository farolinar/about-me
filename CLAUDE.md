# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website built with React + Vite showcasing professional experience and information. The project follows a structured component-based architecture inspired by [this blog post](https://dev.to/itswillt/folder-structures-in-react-projects-3dp8?ref=dailydev).

**Design Aesthetic:** Terminal-meets-synthwave with restrained Vaporwave/Outrun enhancements. Monospace typography, cyan-to-magenta gradients, subtle neon glows, and deep purple backgrounds create a retro-futuristic developer aesthetic.

## Key Commands

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run lint       # Run ESLint
npm run preview    # Preview production build
```

## Architecture

### State Management
- Uses Redux Toolkit with redux-persist for state management
- Theme state is persisted to localStorage via redux-persist
- Store configuration in `src/store/index.js` with root reducer combining all slices
- Only the `theme` reducer is whitelisted for persistence

### Project Structure
The codebase follows a layered architecture:

```
src/
├── components/     # Reusable UI components (BlinkingComponent, Typewriter, etc.)
├── views/
│   ├── layouts/   # Layout components (Header, Page)
│   └── pages/     # Page-level components (About, Experience, Footer)
├── store/         # Redux store and reducers
├── utils/         # Utility functions and data (data.jsx contains experience data)
└── assets/        # Static assets (images)
```

### Component Organization
- Each component has its own directory with `.jsx` and `.css` files
- Most components have both regular and minified CSS versions (`*.css` and `*-min.css`)
- Components are self-contained and follow the single responsibility principle

### Key Patterns
- **Refs for scrolling**: App.jsx creates refs that are passed down to Header and Footer for scroll navigation between sections
- **Theme switching**: Theme state stored in Redux controls the document element's className to toggle light/dark mode
- **Data separation**: Experience and credits data is centralized in `src/utils/data.jsx` using factory functions
- **Intersection Observer**: Used for scroll-based animations and section detection

### Vaporwave/Outrun Design System
The portfolio uses restrained neon accents and subtle glows to enhance the retro-tech aesthetic:

**Glow Variables (defined in index.css):**
- `--glow-cyan`: Cyan glow for interactive elements
- `--glow-magenta`: Magenta glow for borders and accents
- `--glow-accent`: Theme-appropriate accent glow

**Enhancement Principles:**
1. **Selective Application**: Glows are applied only to interactive elements and key focal points
2. **Subtle Animation**: Border glows pulse gently (3s ease-in-out) without distraction
3. **Interaction Feedback**: Hover states include glow intensification and micro-animations
4. **Background Texture**: Subtle scanline overlay (3% opacity) adds retro CRT aesthetic
5. **Preserve Clarity**: All enhancements support readability and UX, never overwhelm

**Enhanced Elements:**
- Headlines (h1, h2): Subtle cyan glow for hierarchy
- Typewriter caret: Cyan glow matching terminal aesthetic
- Logo: Cyan-magenta gradient glow
- Buttons: Intensified glow on hover with lift effect
- Experience cards: Animated gradient border glow
- Interactive text: Gradient fill with glow on hover
- Header icons: Cyan glow on hover with scale effect

### Main Application Flow
1. `main.jsx` - Entry point wrapping App with Redux Provider and PersistGate
2. `App.jsx` - Root component managing refs and rendering Header, About, Experience, and Footer sections
3. Theme is applied globally via document.documentElement.className

## Technology Stack
- React 18.2.0
- Vite 5.2.0 (build tool)
- Redux Toolkit + redux-persist (state management)
- Material-UI (@mui/material, @emotion)
- react-intersection-observer (for scroll-based animations)

## Styling Notes
- Uses both regular and minified CSS files
- **IMPORTANT**: This project imports minified CSS files (`.min.css` or `-min.css`) in components, NOT the regular `.css` files
  - When editing styles, ALWAYS update BOTH the regular CSS file AND its minified counterpart
  - Check component imports to see which file is actually being used
  - The app currently uses: `index-min.css`, `App-min.css`, and component-specific minified files
- Theme switching implemented via className changes on document root element
- Material-UI Emotion for some styled components
- All animations use `ease` or `ease-in-out` timing for smoothness
- Transition duration: 0.3s for interactions, 0.4s for larger movements, 3s for ambient effects
