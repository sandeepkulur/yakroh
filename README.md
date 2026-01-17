# Yakroh / Stikiroh

<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

<div align="center">
  <br />
  <a href="https://stiki.yakroh.com"><strong>Stikiroh Board</strong></a> · <a href="https://yakroh.com/tools"><strong>Developer Tools</strong></a> · <a href="https://yakroh.com"><strong>Yakroh.com</strong></a>
  <br />
</div>

## Overview

**Yakroh** is a modern developer hub and marketing platform. It features **Stikiroh**, a premium, local-first ideation board, along with a suite of developer productivity tools.

## Stikiroh: Ideation Board
**Stikiroh** (`stiki.yakroh.com`) is a privacy-focused tool for capturing and organizing ideas.

- **Local-First**: All data is stored in your browser (IndexedDB). Zero server-side tracking.
- **Smart Organization**: Tagging system with internal `@untagged` handling.
- **Sorting**: Sort ideas by Text (A-Z, Z-A) or Date.
- **PWA Support**: Install as a native app on your device.
- **Premium UI**: Glassmorphic design with full Dark/Light mode support.

## Developer Tools
Yakroh hosts essential utilities for developers:

- **JSON Smart Viewer**: Validate, format, and diff JSON data locally.
- **AI Assistant**: Integrated Gemini-powered help for navigating tools.

## Tech Stack
Built with **Astro 5**, **React 19**, and **Tailwind CSS**.

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

## Project Structure
- `src/pages/`: Route definitions (`index`, `tools`).
- `src/components/`: Reusable UI (`StikirohLandingSection`, `ToolHighlight`).
- `src/layouts/`: Base layouts with SEO `head` and global styles.
