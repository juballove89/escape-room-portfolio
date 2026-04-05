# Draftly 3D Website Export

## Quick Start (Windows, Mac, Linux)

1. **Unzip** this folder to your computer.
2. **Open Terminal** (Command Prompt on Windows, Terminal on Mac/Linux) in the extracted folder.
3. **Run** one of these commands:
   - `npx serve . -l 3000` — serves the site (no install needed)
   - Or: `npm run start` — if you prefer the npm script
4. **Open** http://localhost:3000 in your browser.

## Structure

- `index.html` — main website
- `assets/` — CSS, JS, and uploads
- `frames-webp/` — scroll-driven frame sequence
- `frontend/` — same content for alternate setup
- `backend/` — optional Express API (contact form, leads)

## Run Backend (optional)

```
cd backend
npm install
npm run dev
```

## Notes

- View and edit on your own computer for full environment control.
- Full application hosting services are coming soon.
