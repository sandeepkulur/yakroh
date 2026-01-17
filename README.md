<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Yakroh / Stikiroh

This is the official landing page and marketing site for **Yakroh** and its flagship tool **Stikiroh**.

**Stikiroh** is a privacy-first, local-first ideation board designed for speed and simplicity. It allows users to capture, organize, and refine ideas without server-side tracking.

The site also features a suite of developer productivity tools, including a powerful JSON Text Editor and Viewer.

Built with **Astro**, **React**, and **Tailwind CSS**.

## Features

- **Stikiroh Showcase**: Interactive landing section demonstrating the power of the Stikiroh board.
- **Developer Tools**: Suite of utilities like the JSON Smart Viewer & Editor.
- **AI Assistant**: Integrated Gemini-powered assistant to help users navigate and use the tools.
- **High Performance**: Static site generation with Astro for lightning-fast load times.
- **Modern UI**: Polished glassmorphic design with full Dark/Light mode support.

## Getting Started

Follow these steps to run the project locally.

### Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd 00-yakroh
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment:**
    Create a `.env.local` file in the root directory and add your Gemini API key:
    ```env
    GEMINI_API_KEY=your_api_key_here
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

## Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

- `src/pages/`: Route definitions (`index`, `tools`, `blog`, etc.).
- `src/components/`: Reusable React and Astro components (e.g., `StikirohLandingSection`, `ToolHighlight`).
- `src/layouts/`: Base page layouts.
