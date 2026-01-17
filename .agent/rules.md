# Agent Rules

## Project Standards

### Tech Stack
- **Framework**: Use **Astro** for all pages and layouts.
- **Interactivity**: Use **React** for interactive UI components (Islands).
- **Styling**: Use **Tailwind CSS** for all styling. Avoid custom CSS files unless absolutely necessary.
- **Language**: Use **TypeScript** for all code.

### Guidelines
1.  **Astro First**: Prefer `.astro` files for static content and layout. Use React only when state or interactivity is required.
2.  **Tailwind Utility**: Adhere to utility-first CSS. Use `@apply` sparingly.
3.  **Responsiveness**: Ensure all new components are mobile-responsive by default.
4.  **Accessibility**: Maintain high accessibility standards (aria-labels, proper semantic HTML).
5.  **Environment Variables**: Access environment variables cleanly (e.g., `import.meta.env` in Astro).

### Project Structure
- Place pages in `src/pages/`.
- Place components in `src/components/`.
- Place layouts in `src/layouts/`.

### AI Integration
- When modifying `GeminiAssistant.tsx` or similar AI features, ensure API keys are secure and error handling is robust.
