<template>
  <!--
    The entire template is provided — do not modify it.
    Your job is to implement the <script setup> section below.
    Read through the template first to understand what it expects.
  -->
  <div class="search-view">

    <section class="hero">
      <h1 class="hero-title">
        <span class="hero-title-line1">Find any</span>
        <span class="hero-title-line2">movie.</span>
      </h1>
      <p class="hero-sub">Search the Open Movie Database — 8+ million titles.</p>

      <div class="search-bar">
        <input
          v-model="query"
          type="text"
          class="search-input"
          placeholder="e.g. Blade Runner, Parasite, The Godfather…"
          aria-label="Search movies"
          @keydown.enter="handleSearch"
        />
        <button
          class="search-btn"
          :disabled="store.isLoading || !query.trim()"
          @click="handleSearch"
        >
          <span v-if="store.isLoading" class="btn-spinner" aria-hidden="true" />
          <span v-else>Search</span>
        </button>
      </div>
    </section>

    <div v-if="store.error" class="state-error" role="alert">
      <span class="state-icon">⚠</span>
      {{ store.error }}
    </div>

    <div v-else-if="store.isLoading" class="results-grid">
      <div v-for="n in 8" :key="n" class="skeleton-card">
        <div class="skeleton-poster" />
        <div class="skeleton-body">
          <div class="skeleton-line wide" />
          <div class="skeleton-line narrow" />
        </div>
      </div>
    </div>

    <template v-else-if="store.hasResults">
      <div class="results-header">
        <p class="results-meta">
          <span class="results-count">{{ store.totalResults.toLocaleString() }}</span>
          results for <em>"{{ store.lastQuery }}"</em>
          — page {{ store.currentPage }} of {{ store.totalPages }}
        </p>
      </div>

      <div class="results-grid">
        <MovieCard
          v-for="movie in store.results"
          :key="movie.imdbID"
          :movie="movie"
          @select="goToDetail"
        />
      </div>

      <div v-if="store.totalPages > 1" class="pagination">
        <button
          class="page-btn"
          :disabled="store.currentPage === 1"
          @click="changePage(store.currentPage - 1)"
        >
          ← Prev
        </button>
        <span class="page-indicator">{{ store.currentPage }} / {{ store.totalPages }}</span>
        <button
          class="page-btn"
          :disabled="store.currentPage >= store.totalPages"
          @click="changePage(store.currentPage + 1)"
        >
          Next →
        </button>
      </div>
    </template>

    <div v-else-if="store.lastQuery" class="state-empty">
      <span class="state-icon">◉</span>
      <p>No movies found for <strong>"{{ store.lastQuery }}"</strong></p>
      <p class="state-hint">Try a different title or check the spelling.</p>
    </div>

    <div v-else class="state-initial">
      <div class="suggestions">
        <p class="suggestions-label">Try searching for</p>
        <div class="suggestion-chips">
          <button
            v-for="s in suggestions"
            :key="s"
            class="chip"
            @click="quickSearch(s)"
          >
            {{ s }}
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMovieStore } from '../stores/movieStore'
import MovieCard from '../components/MovieCard.vue'

// ─────────────────────────────────────────────────────────────
// TODO 8: Set up the store and router
//
// Call useMovieStore() to get the store instance.
// Call useRouter() to get the router instance.
// ─────────────────────────────────────────────────────────────
const store  = null // replace this
const router = null // replace this

// Local state for the search input
const query = ref('')

const suggestions = ['Blade Runner', 'The Godfather', 'Parasite', 'Dune', 'Alien']


// ─────────────────────────────────────────────────────────────
// TODO 9: Implement handleSearch()
//
// Called when the button is clicked or Enter is pressed.
// Guard against empty queries, then call store.search(query.value).
// ─────────────────────────────────────────────────────────────
async function handleSearch() {

}


// ─────────────────────────────────────────────────────────────
// TODO 10: Implement quickSearch(term)
//
// Called when a suggestion chip is clicked.
// Set query.value to the term, then trigger a search.
// ─────────────────────────────────────────────────────────────
function quickSearch(term) {

}


// ─────────────────────────────────────────────────────────────
// TODO 11: Implement goToDetail(movie)
//
// Called when a MovieCard emits 'select'.
// Navigate to the detail route, passing movie.imdbID as the :id param.
// Hint: router.push({ name: 'detail', params: { id: ??? } })
// ─────────────────────────────────────────────────────────────
function goToDetail(movie) {

}


// ─────────────────────────────────────────────────────────────
// TODO 12: Implement changePage(page)
//
// Called by the pagination buttons.
// Call store.search() with the current lastQuery and the new page number.
// Then scroll the window back to the top.
// ─────────────────────────────────────────────────────────────
function changePage(page) {

}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 48px 0 56px;
}

.hero-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(56px, 9vw, 96px);
  line-height: 1;
  letter-spacing: .02em;
  margin-bottom: 12px;
}

.hero-title-line1 {
  display: block;
  color: var(--text-muted);
}

.hero-title-line2 {
  display: block;
  color: var(--accent);
}

.hero-sub {
  color: var(--text-muted);
  font-size: 15px;
  margin-bottom: 32px;
  font-weight: 300;
}

.search-bar {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  background: var(--surface);
  transition: border-color .2s;
}

.search-bar:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px var(--accent-dim);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 15px;
  padding: 14px 18px;
}

.search-input::placeholder { color: var(--text-dim); }

.search-btn {
  background: var(--accent);
  color: var(--bg);
  font-family: 'Outfit', sans-serif;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 0 28px;
  min-width: 100px;
  transition: opacity .2s;
}

.search-btn:disabled { opacity: .5; cursor: not-allowed; }
.search-btn:not(:disabled):hover { opacity: .88; }

.btn-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(12,12,15,.3);
  border-top-color: var(--bg);
  border-radius: 50%;
  animation: spin .7s linear infinite;
}

@keyframes spin { to { transform: rotate(360deg); } }

.results-header { margin-bottom: 20px; }

.results-meta {
  font-size: 13px;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
}

.results-count {
  color: var(--accent);
  font-weight: 500;
}

.results-meta em {
  color: var(--text);
  font-style: normal;
}

.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
}

.skeleton-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  animation: pulse 1.4s ease-in-out infinite;
}

.skeleton-poster {
  aspect-ratio: 2/3;
  background: var(--surface2);
}

.skeleton-body {
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.skeleton-line {
  height: 12px;
  border-radius: 4px;
  background: var(--surface2);
}
.skeleton-line.wide   { width: 85%; }
.skeleton-line.narrow { width: 45%; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .5; }
}

.state-error,
.state-empty,
.state-initial {
  text-align: center;
  padding: 64px 24px;
}

.state-icon {
  display: block;
  font-size: 40px;
  margin-bottom: 16px;
  opacity: .4;
}

.state-error {
  color: var(--red);
  background: rgba(224, 82, 82, 0.08);
  border: 1px solid rgba(224, 82, 82, 0.2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  text-align: left;
}

.state-empty p { color: var(--text-muted); margin-bottom: 6px; }
.state-hint { font-size: 13px; color: var(--text-dim) !important; }

.suggestions-label {
  font-size: 12px;
  letter-spacing: .12em;
  text-transform: uppercase;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 14px;
}

.suggestion-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.chip {
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: 'Outfit', sans-serif;
  font-size: 13px;
  padding: 8px 18px;
  border-radius: 100px;
  transition: all .2s;
}

.chip:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: var(--accent-dim);
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
}

.page-btn {
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  font-family: 'Outfit', sans-serif;
  font-size: 13px;
  font-weight: 500;
  padding: 10px 22px;
  border-radius: 6px;
  transition: all .2s;
}

.page-btn:not(:disabled):hover {
  border-color: var(--accent);
  color: var(--accent);
}

.page-btn:disabled {
  opacity: .3;
  cursor: not-allowed;
}

.page-indicator {
  font-family: 'JetBrains Mono', monospace;
  font-size: 13px;
  color: var(--text-muted);
}
</style>
