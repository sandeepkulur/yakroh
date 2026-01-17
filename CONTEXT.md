# Project Context: Yakroh/Stikiroh

## Overview
**Yakroh** is a developer productivity hub and marketing site. Its flagship product, **Stikiroh** (`stiki.yakroh.com`), is a privacy-first, local-first ideation board designed for speed and simplicity. The platform also hosts a suite of developer utilities, including a powerful **JSON Smart Viewer**.

## Tech Stack
- **Framework**: [Astro](https://astro.build/) (v5.x) - "Island Architecture" for performance.
- **UI Interaction**: [React](https://react.dev/) (v19) - Used for `Stikiroh` board and interactive tools.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling with comprehensive dark mode.
- **AI Integration**: Google Gemini (`@google/genai`) - Powers the intelligent assistant.
- **Persistence**: LocalStorage & IndexedDB (Dexie.js) - STRICTLY local-first data persistence for Stikiroh.

## Project Structure
- `src/pages`:
    - `index.astro`: Yakroh landing page.
    - `tools.astro`: Developer tools catalog.
- `src/components`:
    - `StikirohLandingSection.tsx`: Landing page showcase.
    - `ToolHighlight.astro`: Feature highlights.
    - `Header.astro`, `Footer.astro`: Global layout components.
- `src/layouts`:
    - `Layout.astro`: Base shell with SEO and global styles.

## Key Features
- **Stikiroh Board**:
    - **Local-First**: 100% client-side data. No database.
    - **System Tags**: internal `@untagged` handling.
    - **Sorting**: Text sort (A-Z, Z-A), Date sort.
    - **PWA**: Installable as a progressive web app.
- **Developer Tools**:
    - **JSON Smart Viewer**: formatting, validation, and diffing.
    - **AI Assistant**: Context-aware help.

## Design System
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter).
- **Aesthetics**: Glassmorphism, premium dark mode, green/teal accents (`--accent`).
- **Icons**: Lucide React.
