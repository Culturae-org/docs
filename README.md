# Culturae Documentation

Welcome to the source code for the **Culturae Documentation**.

The documentation is live at **[docs.culturae.me](https://docs.culturae.me)**.

## Project Structure

- **`docs/`**: Contains the markdown source files for the documentation.
  - **`en/`**: English content (Source of truth).
  - **`fr/`**: French translations.
  - **`es/`**: Spanish translations.
  - **`.vitepress/`**: VitePress configuration, theme, and customizations.

## Local Development

### Prerequisites

- **Node.js** (v20+) or **Nix** (with `direnv`)
- **Yarn**

### Installation

1. **Fork and clone the repository**:

   ```bash
   git clone https://github.com/<your-username>/docs.git
   cd docs
   ```

2. **Install dependencies**:
   ```bash
   yarn install
   ```

### Running the Dev Server

To start the local development server with hot-reload:

```bash
yarn run dev
```

The site will be available at `http://localhost:3000` (or similar).

### Building for Production

To build the static site:

```bash
yarn run build
```

The output will be in `docs/.vitepress/dist`.

### Previewing the Build

To test the production build locally:

```bash
yarn run preview
```

## Internationalization (i18n)

This project supports **English (en)**, **French (fr)**, and **Spanish (es)**.

- When creating new content, please ensure it is added to the relevant language directories.
- The `docs/.vitepress/config.ts` file handles the navigation and sidebar structure for each locale.
