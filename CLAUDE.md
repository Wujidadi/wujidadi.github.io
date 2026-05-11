# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 常用指令

- 本機預覽：`hugo server --disableFastRender`
- 本機建置：`hugo --minify`
- CI 等效建置：`hugo --destination /tmp/public --minify --baseURL "<base-url>/"`（由 `.github/workflows/pages.yml` 中 `actions/configure-pages` 注入 `base_url`）

`public/` 為產物目錄，請勿手動編輯或提交。

## 架構概要

此 repository 是 `wujidadi.github.io` 的 Hugo 原始碼。整體刻意維持「無主題（theme-less）」：所有版面、CSS 與標題邏輯都在 repo 自身的 `layouts/` 中，沒有外掛主題。

渲染管線（理解整體版面必須同時看這幾個檔案）：

- `content/_index.md`：首頁的 Markdown 內容。新增其他頁面時，將 Markdown 放在 `content/` 之下。
- `layouts/_default/baseof.html`：HTML 骨幹、`<head>`、favicon 連結、頁尾與**站台所有 CSS**都集中在這裡。新增樣式時請改這個檔案，除非要引入完整 asset pipeline。
- `layouts/index.html`：首頁用的 `main` block。
- `layouts/_default/single.html` / `list.html`：分別處理單頁與 section 列表；`list.html` 在非首頁時會自動輸出 `<h1>` 標題，並在 `.Pages` 非空且 front matter `showList` 非 `false` 時列出子頁面。
- `layouts/partials/page-title-text.html`：標題解析順序為「front matter `title` → Markdown 第一個 `#` 標題 → 檔名 humanize → 站台標題」。新增頁面通常不需要 front matter，直接寫 `# 標題` 即可被偵測。
- `static/`：直接複製到網站根目錄的靜態檔；目前包含 `favicon.svg` 與 `favicon.png`。

`hugo.toml` 設定 `markup.goldmark.renderer.unsafe = true`（允許 Markdown 內嵌 raw HTML）與 `hasCJKLanguage = true`（影響中文斷字統計）。預設語言為 `zh-tw`。

## 部署

`.github/workflows/pages.yml` 在推送到 `master` 時觸發：抓取 Hugo Extended 最新版、以 GitHub Pages 注入的 `base_url` 建置到 `/tmp/public`，再由 `actions/deploy-pages` 發布。任何只在 CI 才會生效的 baseURL 行為，務必透過 `--baseURL` 旗標而非寫死在 `hugo.toml`。

## 撰寫慣例

- 站台內容語言為繁體中文（`zh-Hant` / `zh-tw`），請使用台灣標準用語。
- 內容變更請放在 `content/` 的 Markdown 中；只有當渲染結構或站台層級樣式需要調整時，才動 `layouts/`。
- 偏好以 Markdown 標題作為頁面標題，僅在需要 Hugo 專屬 metadata 時才加 front matter。
- CSS 集中於 `layouts/_default/baseof.html`，不要散落多處。
- 更換 favicon 時，`static/favicon.svg`（來源）與 `static/favicon.png`（PNG fallback）兩者需同步更新。
- 檔案格式遵循 `.editorconfig`：UTF-8、LF、檔尾換行、兩格縮排。

## Git Commit 規則

- 一律使用繁體中文（台灣）撰寫 commit message，採用台灣標準翻譯與慣用術語，不可夾雜日語、韓語或其他非中文詞彙（含感嘆句、慣用語）。
- 使用 [Conventional Commits](https://www.conventionalcommits.org/zh-hant/) 標準格式。
- 變動較多或較複雜時，標題之外請在內文以 bullet point 列出至少一項摘要，並說明各檔案的異動原因。
