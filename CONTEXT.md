# Project Context: Yakroh/Stikiroh Landing Page

## Overview
This project is the official marketing and landing site for **Yakroh** and its flagship product, **Stikiroh**. Stikiroh is a privacy-first, local-first ideation board that combines the simplicity of sticky notes with powerful organizational tools. The site also hosts a suite of developer utilities including a JSON editor and viewer.

## Tech Stack
- **Framework**: [Astro](https://astro.build/) (v5.x) - Utilizes Astro's "Island Architecture" for optimal performance.
- **UI Interaction**: [React](https://react.dev/) (v19) - Used for interactive components like the Stikiroh demo and tools.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling with comprehensive dark mode support.
- **AI Integration**: Google Gemini (`@google/genai`) - Powers the intelligent assistant features.

## Project Structure
- `src/pages`:
    - `index.astro`: Main landing page featuring the Stikiroh hero section and value proposition.
    - `tools.astro`: Developer tools catalog (JSON viewer, etc.).
    - `blog.astro`, `contact.astro`: Content pages.
- `src/components`:
    - `StikirohLandingSection.tsx`: Core interactive showcase for Stikiroh features.
    - `ToolHighlight.astro`: Highlights key developer utilities.
    - `GeminiAssistant.tsx`: AI assistant interface.
    - `ThemeToggle`: Handles light/dark mode switching with system preference detection.
    - `Hero.astro`, `Header.astro`, `Footer.astro`: Global layout components.
- `src/layouts`:
    - `Layout.astro`: Base HTML shell handling SEO, metadata, and global styles.

## Design System
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) font family.
- **Color Palette**:
    - Supports System, Dark, and Light modes.
    - **Accents**: Custom green/teal gradients defined in `Layout.astro` (`--accent`, `--accent-light`).
- **Styles**: Glassmorphism effects (`backdrop-blur`), smooth color transitions, and responsive layouts.

## Configuration
- `astro.config.mjs`: Astro project settings.
- `tailwind.config.mjs`: Tailwind CSS configuration.
- `.env.local`: Environment variables (e.g., `GEMINI_API_KEY`).
