<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Yakroh Landing Page

This is the official landing page and marketing site for **Yakroh/Stikiroh**. It serves as the gateway for users to explore tools, features, and the AI-powered capabilities of the platform.

Built with **Astro**, **React**, and **Tailwind CSS**.

## Features

- **AI Assistant**: Integrated Gemini-powered assistant for user queries.
- **Fast Performance**: Static site generation with Astro.
- **Modern UI**: Styled with Tailwind CSS, supporting Dark/Light modes.
- **Responsive**: Fully optimized for all device sizes.

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

- `src/pages/`: Route definitions (`index`, `blog`, etc.).
- `src/components/`: Reusable React and Astro components.
- `src/layouts/`: Page layouts.
