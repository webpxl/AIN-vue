# CineSearch — Starter Project

Your job is to implement the logic in these files. The UI (templates, CSS) is already done.

## Setup

```bash
npm install

# Add your OMDb API key:
cp .env.example .env
# Edit .env → VITE_OMDB_KEY=your_key_here
# Get a free key at https://www.omdbapi.com/apikey.aspx

npm run dev
```

## What to implement

Work through the TODO comments in order. Each is numbered so you always know where you are.

| # | File | What to do |
|---|------|------------|
| 1–3 | `src/api/omdb.js` | Create axios instance, implement `searchMovies()` and `getMovieById()` |
| 4–7 | `src/stores/movieStore.js` | Add computed getters, implement `search()` and `fetchDetail()` actions |
| 8–12 | `src/views/SearchView.vue` | Wire up the store, router, and event handlers |
| 13–17 | `src/views/DetailView.vue` | Props, store, onMounted fetch, goBack |

## Files you do NOT need to touch

- `src/main.js` — already complete
- `src/App.vue` — already complete (read it for reference)
- `src/router/index.js` — already complete (read it for reference)
- `src/components/MovieCard.vue` — already complete (read it for reference)
- `src/style.css` — already complete
- `index.html`, `vite.config.js`, `package.json` — already complete
