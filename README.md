# blog

A minimal blog built with [Astro](https://astro.build), hosted on [GitHub Pages](https://asawo.github.io/blog).

## Commands

- `pnpm dev` — Start dev server at localhost:4321/blog/
- `pnpm build` — Build static site to `dist/`
- `pnpm preview` — Preview production build locally

## Architecture

- **Astro 5** with static output, no frameworks
- **Content collections** with glob loader for markdown posts in `src/content/posts/`
- **Vanilla CSS** with system fonts and 65ch max-width

## Deployment

Push to `main` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages.
