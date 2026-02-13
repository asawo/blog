# Blog

Minimal Astro static blog hosted on GitHub Pages at `asawo.github.io/blog`.

## Commands

- `pnpm dev` — Start dev server at localhost:4321/blog/
- `pnpm build` — Build static site to `dist/`
- `pnpm preview` — Preview production build locally

## Architecture

- **Astro 5** with static output, no frameworks
- **Content collections** with glob loader for markdown posts in `src/content/posts/`
- **`src/content.config.ts`** — Schema: title (string), date (date), description (optional string)
- **`src/layouts/Base.astro`** — HTML shell with nav and footer
- **`src/pages/index.astro`** — Home page listing all posts sorted by date
- **`src/pages/posts/[...slug].astro`** — Dynamic route rendering individual posts
- **`src/styles/global.css`** — Vanilla CSS, system fonts, 65ch max-width
- **`astro.config.mjs`** — site: `https://asawo.github.io`, base: `/blog`

## Adding a post

Create a new `.md` file in `src/content/posts/` with frontmatter:

```md
---
title: Post Title
date: 2026-01-01
description: Optional description.
---

Content here.
```

## Commit conventions

Use [Conventional Commits](https://www.conventionalcommits.org/). Format:

```
<type>: <short summary>
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `test`

- Subject line: imperative mood, lowercase, no period, max 72 chars
- Body (optional): separate with blank line, explain *why* not *what*

## Deployment

Push to `main` triggers `.github/workflows/deploy.yml` which builds and deploys to GitHub Pages via `withastro/action@v3`.
