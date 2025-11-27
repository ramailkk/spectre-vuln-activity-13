# Spectre V1 — React + Tailwind Site

This folder contains a small Vite + React + Tailwind site for the Spectre V1 project.

Quick start (Windows PowerShell):

```powershell
cd site
npm install
npm run dev
```

Notes:
- Add your `report.pdf` to the project root (`/report.pdf`) so the Report tab can load it via `/report.pdf`.
- Add team images to `site/public/images/rohan.jpg` and `site/public/images/ramail.jpg` (or update `src/App.jsx` paths).
- The video file reference is `/vid.mp4` — place the video in the repo root or change the path.

Deploy: build with `npm run build` and serve the `dist/` folder. For GitHub Pages, follow a small deploy step (not provided here).
