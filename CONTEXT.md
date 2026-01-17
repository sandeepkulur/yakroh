# Project Context: Yakroh/Stikiroh

## Overview
**Yakroh** is a developer productivity hub and marketing site. Its flagship product, **Stikiroh** (`stiki.yakroh.com`), is a privacy-first, local-first ideation board designed for speed and simplicity. The platform also hosts a suite of developer utilities, including a powerful **JSON Smart Viewer**.

## Tech Stack
- **Framework**: [Astro](https://astro.build/) (v5.x) - "Island Architecture" for performance
- **UI Interaction**: [React](https://react.dev/) (v19) - Used for interactive components (Stikiroh board, tools, mobile menu)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first styling with comprehensive dark mode
- **Icons**: [Lucide React](https://lucide.dev/) - Modern icon library for interactive components
- **AI Integration**: Google Gemini (`@google/genai`) - Powers the intelligent assistant
- **Persistence**: LocalStorage & IndexedDB (Dexie.js) - STRICTLY local-first data persistence for Stikiroh

## Project Structure
- **Pages** (`src/pages`):
    - `index.astro`: Yakroh landing page with hero, Stikiroh showcase, and tool highlights
    - `tools.astro`: Developer tools catalog page
    - `blog.astro`: Blog landing page
    - `contact.astro`: Contact page with email and location information
- **Components** (`src/components`):
    - `Header.astro`: Global header with navigation, social icons (YouTube, GitHub), and theme toggle
    - `Footer.astro`: Global footer
    - `Hero.astro`: Landing page hero section with gradient text and CTAs
    - `StikirohLandingSection.tsx`: Stikiroh product showcase with features and screenshots
    - `ToolHighlight.astro`: JSON Smart Viewer feature highlights
    - `MoreTools.astro`: Additional tools section
    - `MobileMenu.tsx`: Responsive hamburger menu for mobile navigation
    - `ThemeToggle.tsx` / `ThemeToggle.astro`: Dark/light mode toggle
    - `GeminiAssistant.tsx`: AI-powered help assistant
    - `Features.astro`: Why Yakroh feature cards
- **Layouts** (`src/layouts`):
    - `Layout.astro`: Base shell with SEO metadata, Open Graph tags, theme initialization, and global styles

## Key Features

### Stikiroh Board
- **Local-First**: 100% client-side data. No database, no server storage
- **Instant Capture**: Quick idea entry with intelligent #hashtag auto-tagging
- **Smart Organization**: 
    - Internal `@untagged` system for ideas without tags
    - Custom tag creation and management
    - Visual Kanban-lite board with Grid & List views
- **Advanced Features**:
    - Transactional Review System with safe Revert & Apply
    - Smart Search & Advanced Filtering by Status/Tags
    - Save and Restore sessions directly to disk (JSON File)
    - Sorting by Text (A-Z, Z-A) or Date
- **PWA**: Installable as a progressive web app
- **Premium UI**: Glassmorphic design with full Dark/Light mode support

### Developer Tools
- **JSON Smart Viewer**: Formatting, validation, and diffing
- **AI Assistant**: Context-aware help powered by Gemini

### Website Features
- **Responsive Design**: Mobile-first with hamburger menu navigation
- **Social Integration**: YouTube and GitHub links in header and mobile menu
- **SEO Optimized**: Open Graph and Twitter card metadata
- **Contact**: Email (info@yakroh.com) and location (Kingston, ON, Canada)

## Design System
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Aesthetics**: 
    - Glassmorphism with `backdrop-blur-xl` and transparency
    - Premium dark mode as default
    - Green/teal accent colors (`--accent: 0, 245, 160`)
    - Gradient animations for hero text
    - Smooth transitions and hover effects
- **Color Palette**:
    - Light mode: White backgrounds with gray accents
    - Dark mode: `#000000` background with `#f5f5f7` text
    - Accent: Green (`#10b981`) to Teal (`#14b8a6`) gradients
- **Icons**: Lucide React for interactive components, inline SVG for static elements
- **Responsive**: Mobile-first design with breakpoints at `md` (768px) and `lg` (1024px)

## Privacy & Local-First Philosophy
- **No Tracking**: Stikiroh respects user privacy with zero external analytics
- **Client-Side Only**: All data processing happens in the browser
- **No Server Storage**: User data never leaves the device
- **Transparent**: Open about data handling and privacy practices
