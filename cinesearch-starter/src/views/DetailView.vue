<template>
  <!--
    The entire template is provided — do not modify it.
    Your job is to implement the <script setup> section below.
  -->
  <div class="detail-view">

    <button class="back-btn" @click="goBack">
      ← Back to results
    </button>

    <div v-if="store.isLoading" class="detail-skeleton">
      <div class="sk-poster" />
      <div class="sk-info">
        <div class="sk-line xl" />
        <div class="sk-line md" />
        <div class="sk-line lg" />
        <div class="sk-line sm" />
        <div class="sk-line full" style="margin-top: 24px;" />
        <div class="sk-line full" />
        <div class="sk-line mid" />
      </div>
    </div>

    <div v-else-if="store.error" class="state-error" role="alert">
      <div class="error-icon">⚠</div>
      <div>
        <p class="error-title">Failed to load movie</p>
        <p class="error-message">{{ store.error }}</p>
      </div>
    </div>

    <article v-else-if="store.selectedMovie" class="detail-layout">
      <div class="detail-poster-col">
        <div class="poster-frame">
          <img
            v-if="hasPoster"
            :src="store.selectedMovie.Poster"
            :alt="`Poster for ${store.selectedMovie.Title}`"
          />
          <div v-else class="poster-placeholder">
            <span>🎬</span>
            <span>No Poster</span>
          </div>
        </div>

        <div v-if="ratings.length" class="ratings-block">
          <p class="ratings-title">Ratings</p>
          <div class="rating-rows">
            <div v-for="r in ratings" :key="r.Source" class="rating-row">
              <span class="rating-source">{{ r.Source }}</span>
              <span class="rating-value">{{ r.Value }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="detail-info-col">
        <div class="genre-tags">
          <span v-for="g in genres" :key="g" class="genre-tag">{{ g }}</span>
        </div>

        <h1 class="movie-title">{{ store.selectedMovie.Title }}</h1>

        <div class="meta-row">
          <span class="meta-pill">{{ store.selectedMovie.Year }}</span>
          <span class="meta-pill">{{ store.selectedMovie.Rated }}</span>
          <span class="meta-pill">{{ store.selectedMovie.Runtime }}</span>
        </div>

        <div v-if="imdbRating" class="imdb-score">
          <span class="imdb-star">★</span>
          <span class="imdb-num">{{ imdbRating }}</span>
          <span class="imdb-label">/ 10 IMDb</span>
          <span v-if="store.selectedMovie.imdbVotes !== 'N/A'" class="imdb-votes">
            ({{ store.selectedMovie.imdbVotes }} votes)
          </span>
        </div>

        <p class="plot">{{ store.selectedMovie.Plot }}</p>

        <div class="crew-grid">
          <div v-if="notNA(store.selectedMovie.Director)" class="crew-item">
            <span class="crew-label">Director</span>
            <span class="crew-value">{{ store.selectedMovie.Director }}</span>
          </div>
          <div v-if="notNA(store.selectedMovie.Writer)" class="crew-item">
            <span class="crew-label">Writer</span>
            <span class="crew-value">{{ store.selectedMovie.Writer }}</span>
          </div>
          <div v-if="notNA(store.selectedMovie.Actors)" class="crew-item">
            <span class="crew-label">Cast</span>
            <span class="crew-value">{{ store.selectedMovie.Actors }}</span>
          </div>
          <div v-if="notNA(store.selectedMovie.Country)" class="crew-item">
            <span class="crew-label">Country</span>
            <span class="crew-value">{{ store.selectedMovie.Country }}</span>
          </div>
          <div v-if="notNA(store.selectedMovie.Language)" class="crew-item">
            <span class="crew-label">Language</span>
            <span class="crew-value">{{ store.selectedMovie.Language }}</span>
          </div>
          <div v-if="notNA(store.selectedMovie.Awards)" class="crew-item crew-item--full">
            <span class="crew-label">Awards</span>
            <span class="crew-value">{{ store.selectedMovie.Awards }}</span>
          </div>
        </div>

        <a
          :href="`https://www.imdb.com/title/${store.selectedMovie.imdbID}`"
          target="_blank"
          rel="noopener noreferrer"
          class="imdb-link"
        >
          View on IMDb →
        </a>
      </div>
    </article>

  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useMovieStore } from '../stores/movieStore'

// ─────────────────────────────────────────────────────────────
// TODO 13: Declare the `id` prop
//
// This component receives the IMDb ID from the router (because
// we set props: true on the route). Declare it like this:
//
//   const props = defineProps({
//     id: { type: String, required: true }
//   })
// ─────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────
// TODO 14: Set up the store and router
// ─────────────────────────────────────────────────────────────
const router = null // replace this
const store  = null // replace this

// ─────────────────────────────────────────────────────────────
// TODO 15: Destructure selectedMovie from the store safely
//
// If you write:  const { selectedMovie } = store
//   → this breaks reactivity! selectedMovie becomes a plain value.
//
// Instead use storeToRefs():
//   const { selectedMovie } = storeToRefs(store)
//
// This gives you a ref that stays in sync with the store.
// ─────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────
// TODO 16: Fetch the movie when the component mounts
//
// Use onMounted() to call store.fetchDetail() with props.id.
// This also handles the case where the user visits the URL
// directly (e.g. from a bookmark) — onMounted always fires.
// ─────────────────────────────────────────────────────────────


// ── Computed helpers ─────────────────────────────────

const hasPoster = computed(() =>
  selectedMovie.value?.Poster && selectedMovie.value.Poster !== 'N/A'
)

const genres = computed(() =>
  selectedMovie.value?.Genre?.split(', ') ?? []
)

const ratings = computed(() =>
  selectedMovie.value?.Ratings ?? []
)

const imdbRating = computed(() =>
  selectedMovie.value?.imdbRating !== 'N/A'
    ? selectedMovie.value?.imdbRating
    : null
)

function notNA(val) {
  return val && val !== 'N/A'
}

// ─────────────────────────────────────────────────────────────
// TODO 17: Implement goBack()
//
// Navigate back. If there's history to go back to, use router.back().
// Otherwise push to the search route as a fallback
// (handles the case where the user opened this page directly).
// ─────────────────────────────────────────────────────────────
function goBack() {

}
</script>

<style scoped>
.detail-view {
  max-width: 960px;
  margin: 0 auto;
}

.back-btn {
  background: none;
  color: var(--text-muted);
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  padding: 8px 0;
  margin-bottom: 32px;
  transition: color .2s;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.back-btn:hover { color: var(--accent); }

.detail-layout {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 48px;
  align-items: start;
}

@media (max-width: 680px) {
  .detail-layout { grid-template-columns: 1fr; }
}

.poster-frame {
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 2/3;
  background: var(--surface2);
  border: 1px solid var(--border);
}

.poster-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.poster-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-dim);
  font-size: 13px;
}

.ratings-block {
  margin-top: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px;
}

.ratings-title {
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 12px;
}

.rating-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
  font-size: 13px;
}

.rating-row:last-child { border-bottom: none; }
.rating-source { color: var(--text-muted); }
.rating-value { font-weight: 600; font-family: 'JetBrains Mono', monospace; color: var(--accent); }

.genre-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.genre-tag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.movie-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(36px, 6vw, 60px);
  letter-spacing: .02em;
  line-height: 1.05;
  margin-bottom: 16px;
}

.meta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.meta-pill {
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: .08em;
  padding: 4px 12px;
  border-radius: 100px;
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text-muted);
}

.imdb-score {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 24px;
}

.imdb-star { color: var(--accent); font-size: 20px; }
.imdb-num  { font-family: 'Bebas Neue', sans-serif; font-size: 32px; letter-spacing: .02em; color: var(--accent); }
.imdb-label { font-size: 13px; color: var(--text-muted); }
.imdb-votes { font-size: 12px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; }

.plot {
  font-size: 15px;
  line-height: 1.75;
  color: var(--text-muted);
  margin-bottom: 28px;
  font-weight: 300;
}

.crew-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin-bottom: 32px;
}

.crew-item { display: flex; flex-direction: column; gap: 3px; }
.crew-item--full { grid-column: 1 / -1; }

.crew-label {
  font-family: 'JetBrains Mono', monospace;
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--text-dim);
}

.crew-value { font-size: 14px; color: var(--text); line-height: 1.4; }

.imdb-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--accent);
  border: 1px solid rgba(232, 197, 71, 0.3);
  padding: 10px 20px;
  border-radius: 6px;
  transition: all .2s;
}

.imdb-link:hover {
  background: var(--accent-dim);
  border-color: var(--accent);
}

.detail-skeleton {
  display: grid;
  grid-template-columns: 260px 1fr;
  gap: 48px;
  animation: pulse 1.4s ease-in-out infinite;
}

.sk-poster {
  aspect-ratio: 2/3;
  background: var(--surface2);
  border-radius: 10px;
}

.sk-info { display: flex; flex-direction: column; gap: 12px; padding-top: 8px; }

.sk-line { height: 14px; border-radius: 4px; background: var(--surface2); }
.sk-line.xl   { width: 75%; height: 48px; }
.sk-line.lg   { width: 55%; }
.sk-line.md   { width: 40%; }
.sk-line.sm   { width: 28%; }
.sk-line.full { width: 100%; }
.sk-line.mid  { width: 70%; }

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: .45; }
}

.state-error {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(224, 82, 82, 0.08);
  border: 1px solid rgba(224, 82, 82, 0.25);
  border-radius: 8px;
  padding: 24px 28px;
  margin-top: 24px;
}

.error-icon { font-size: 28px; color: var(--red); line-height: 1; }
.error-title { font-weight: 600; color: var(--red); margin-bottom: 4px; }
.error-message { font-size: 14px; color: var(--text-muted); }
</style>
