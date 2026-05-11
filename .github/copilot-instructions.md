# Copilot instructions for this repository

## Commands

- Build the Hugo site: `hugo --minify`
- Preview locally: `hugo server --disableFastRender`
- The GitHub Pages workflow builds with: `hugo --destination /tmp/public --minify --baseURL "${{ steps.pages.outputs.base_url }}/"`

## Architecture

This repository is the source for the `wujidadi.github.io` GitHub Pages site. It is a Hugo static site whose authored content lives in Markdown under `content/`; generated output belongs in `public/` and should not be edited or committed.

Hugo rendering is intentionally minimal and theme-less:

- `content/_index.md` is the homepage content.
- `layouts/index.html` renders the homepage content inside the shared page shell.
- `layouts/_default/list.html` and `layouts/_default/single.html` handle future section and page content.
- `layouts/_default/baseof.html` owns the HTML document, favicon links, footer, and all site CSS.
- `layouts/partials/page-title-text.html` derives page titles from front matter when present, otherwise from the first Markdown `#` heading, then falls back to the file name or site title.
- `static/` contains assets copied directly to the site root, including `favicon.svg` and `favicon.png`.

Deployment uses GitHub Actions in `.github/workflows/pages.yml`. The workflow runs on pushes to `master`, installs the latest Hugo Extended release, builds into `/tmp/public`, uploads the Pages artifact, and deploys with `actions/deploy-pages`.

## Conventions

- Use Traditional Chinese (`zh-Hant`/`zh-tw`) for site-facing language and metadata.
- Keep substantive page content in Markdown under `content/`; only change `layouts/` when rendering structure or site-wide presentation needs to change.
- Prefer Markdown headings for page titles unless front matter is needed for Hugo-specific metadata.
- Keep CSS centralized in `layouts/_default/baseof.html` unless a broader asset pipeline is introduced.
- Maintain both favicon formats when changing the icon: update `static/favicon.svg` as the source and keep `static/favicon.png` in sync for PNG fallback.
- Keep formatting consistent with `.editorconfig`: UTF-8, LF line endings, final newline, two-space indentation.
