# Yakroh / Stikiroh

<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">
  <br />
  <a href="https://stiki.yakroh.com"><strong>Stikiroh Board</strong></a> · <a href="https://jsonsv.yakroh.com"><strong>JSON Smart Viewer</strong></a> · <a href="https://yakroh.com"><strong>Yakroh.com</strong></a>
  <br />
</div>

## Overview

**Yakroh** is a modern developer hub and marketing platform featuring premium, privacy-first productivity tools. The flagship product, **Stikiroh**, is a local-first ideation board, complemented by essential developer utilities like the JSON Smart Viewer.

## Stikiroh: Ideation Board

**Stikiroh** (`stiki.yakroh.com`) is a privacy-focused tool for capturing and organizing ideas with a premium user experience.

### Core Features
- **Local-First Privacy**: All data stored in your browser (IndexedDB). Zero server-side tracking or storage
- **Instant Capture**: Quick idea entry with intelligent #hashtag auto-tagging
- **Smart Organization**: 
    - Custom tag creation and management
    - Internal `@untagged` system for unorganized ideas
    - Visual Kanban-lite board with Grid & List views
- **Advanced Workflow**:
    - **Transactional Review System**: Safe Revert & Apply for pending changes
    - **Smart Search**: Real-time filtering across all ideas
    - **Advanced Filtering**: Filter by Status (Active, Archived, Completed) and Tags
    - **Flexible Sorting**: Sort by Text (A-Z, Z-A) or Date
- **Data Portability**: Save and Restore sessions directly to disk (JSON File)
- **PWA Support**: Install as a native app on any device
- **Premium UI**: Glassmorphic design with full Dark/Light mode support

## Developer Tools

Yakroh hosts essential utilities for developers:

- **JSON Smart Viewer** (`jsonsv.yakroh.com`): Validate, format, and diff JSON data locally with visual comparison
- **AI Assistant**: Integrated Gemini-powered help for navigating tools

## Tech Stack

Built with modern web technologies:
- **Astro 5**: Island architecture for optimal performance
- **React 19**: Interactive components and state management
- **Tailwind CSS**: Utility-first styling with comprehensive theming
- **Lucide React**: Modern icon library
- **TypeScript**: Type-safe development

## Getting Started

### Prerequisites
- Node.js v18+
- npm or yarn

### Installation

1.  **Clone & Install:**
    ```bash
    git clone <repository-url>
    cd 00-yakroh
    npm install
    ```

2.  **Environment Setup:**
    Create `.env.local`:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

3.  **Run Locally:**
    ```bash
    npm run dev
    ```
    Visit `http://localhost:4321`.

4.  **Build for Production:**
    ```bash
    npm run build
    npm run preview
    ```

## Project Structure

```
src/
├── pages/              # Route definitions
│   ├── index.astro     # Landing page
│   ├── tools.astro     # Tools catalog
│   ├── blog.astro      # Blog page
│   └── contact.astro   # Contact page
├── components/         # Reusable UI components
│   ├── Header.astro    # Global header with navigation
│   ├── Footer.astro    # Global footer
│   ├── Hero.astro      # Landing hero section
│   ├── StikirohLandingSection.tsx  # Stikiroh showcase
│   ├── ToolHighlight.astro         # Tool features
│   ├── MobileMenu.tsx  # Responsive mobile navigation
│   └── ThemeToggle.tsx # Dark/light mode toggle
└── layouts/            # Base layouts
    └── Layout.astro    # SEO, metadata, global styles
```

## Features

### Responsive Design
- Mobile-first approach with hamburger menu navigation
- Optimized layouts for all screen sizes
- Touch-friendly interactions

### Social Integration
- YouTube: [@yakroh](https://www.youtube.com/@yakroh)
- GitHub: [yakroh](https://github.com/yakroh)

### SEO Optimized
- Open Graph metadata for social sharing
- Twitter card support
- Semantic HTML structure
- Sitemap generation

### Contact
- **Email**: info@yakroh.com
- **Location**: Kingston, ON, Canada

## Design Philosophy

- **Privacy First**: No tracking, no external analytics, client-side processing only
- **Premium Quality**: Polished, modern UI with glassmorphism and smooth animations
- **Performance**: Optimized for speed with Astro's island architecture
- **Accessibility**: Semantic HTML and ARIA labels throughout

## License

All rights reserved.
