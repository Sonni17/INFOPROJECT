# FridgeFinder 

A recipe finder web app built with CSS/HTML,JS using the free [TheMealDB API](https://www.themealdb.com/).

## Features

### Public (no login required)
- Search recipes by ingredient
- Browse by category
- View full recipe details (image, ingredients, instructions, YouTube link)

### Logged-in users
- Bookmark / save favourite recipes ⭐
- Add personal meal notes 📝
- View recently viewed recipes 🕐

## Demo Credentials
| Field    | Value          |
|----------|----------------|
| Username | `bob`          |
| Email    | `bob@mail.com` |
| Password | `bobpass`      |

## Project Structure
```
recipe-app/
├── index.html       ← Home page (hero search + category browse)
├── explore.html     ← Public explore page (filter + search)
├── dashboard.html   ← Private user dashboard (bookmarks, notes, history)
├── style.css        ← All styles
├── app.js           ← API calls, rendering, bookmarks, history
├── auth.js          ← Login, logout, user data storage
├── manifest.json    ← PWA manifest
├── sw.js            ← Service worker (offline support)
└── icons/           ← App icons (192x192 and 512x512 PNGs needed)
```

## Setup & Run Locally

```bash
# Option 1 — VS Code Live Server (recommended)
# Install "Live Server" extension, right-click index.html → Open with Live Server

# Option 2 — Python HTTP server
python -m http.server 3000
# then open http://localhost:3000

# Option 3 — Node http-server
npx http-server . -p 3000
```

## Deployment (GitHub Pages — free)

1. Create a public GitHub repo
2. Push all files to the `main` branch
3. Go to **Settings → Pages → Source → main branch → / (root)**
4. Your site will be live at `https://<username>.github.io/<repo-name>/`

## Icons (required for PWA)

Place two PNG files in an `icons/` folder:
- `icons/icon-192.png` (192×192 px)
- `icons/icon-512.png` (512×512 px)

You can generate these free at https://realfavicongenerator.net/

## API Used

| API | Endpoint | Purpose |
|-----|----------|---------|
| TheMealDB | `/filter.php?i={ingredient}` | Search by ingredient |
| TheMealDB | `/filter.php?c={category}` | Filter by category |
| TheMealDB | `/lookup.php?i={id}` | Get full recipe details |
| TheMealDB | `/categories.php` | Get all categories |

No API key required — completely free.

## Rubric Checklist

| Requirement | Implemented |
|-------------|-------------|
| Auth & User Content | ✅ Login/logout, bookmarks, notes, history |
| API Integration | ✅ TheMealDB (search, filter, detail) |
| UI & UX | ✅ Responsive, modals, tabs, search, PWA |
| PWA Manifest | ✅ manifest.json + service worker |
| Public content (no login) | ✅ Home, Explore pages |
| User-created content | ✅ Bookmarks, meal notes |
