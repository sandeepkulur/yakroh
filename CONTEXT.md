# Project Context: Yakroh Landing Page

## Overview
This project is the landing page/marketing site for **Yakroh/Stikiroh**, a local-first ideation board application. It is built using **Astro** for high performance and static site generation, integrated with **React** for interactive components, and styled with **Tailwind CSS**.

## Tech Stack
- **Framework**: [Astro](https://astro.build/) (v5.x)
- **UI Interaction**: [React](https://react.dev/) (v19)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI Integration**: Google Gemini (`@google/genai`)

## Project Structure
- `src/pages`: Astro pages defining the routes (`index`, `blog`, `contact`, `tools`).
- `src/components`: Reusable UI components.
    - `GeminiAssistant.tsx`: AI interaction component using Gemini API.
    - `ThemeToggle`: Dark/light mode switcher.
- `src/layouts`: Shared page layouts (e.g., `Layout.astro` presumably).
- `public`: Static assets.

## Key Features
- **AI-Powered**: Includes a Gemini-powered assistant/demo.
- **Responsive Design**: Mobile-first approach using Tailwind.
- **Theme Support**: Dark and light mode capability.
- **Performance**: Optimized via Astro's island architecture.

## Configuration
- `astro.config.mjs`: Astro configuration.
- `tailwind.config.mjs`: Tailwind configuration.
- `.env.local`: Environment variables (requires `GEMINI_API_KEY`).
