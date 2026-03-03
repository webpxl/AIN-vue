<template>
  <!--
    MovieCard.vue — already complete, nothing to implement here.
    Read through it to understand:
      - how props are declared with defineProps()
      - how defineEmits() works
      - how a computed property handles the poster fallback
  -->
  <article
    class="card"
    role="button"
    tabindex="0"
    @click="$emit('select', movie)"
    @keydown.enter="$emit('select', movie)"
  >
    <div class="card-poster">
      <img
        v-if="hasPoster"
        :src="movie.Poster"
        :alt="`Poster for ${movie.title}`"
        loading="lazy"
        @error="posterError = true"
      />
      <div v-else class="card-poster-placeholder">
        <span class="placeholder-icon">🎬</span>
        <span class="placeholder-text">No Poster</span>
      </div>

      <div class="card-year-badge">{{ movie.year }}</div>
    </div>

    <div class="card-body">
      <h3 class="card-title">{{ movie.title }}</h3>
      <p class="card-type">{{ movie.type }}</p>
    </div>
  </article>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})

defineEmits(['select'])

// If the poster image fails to load, fall back to the placeholder
const posterError = ref(false)

const hasPoster = computed(() =>
  props.movie.Poster && props.movie.Poster !== 'N/A' && !posterError.value
)
</script>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease;
}

.card:hover {
  transform: translateY(-4px);
  border-color: var(--accent);
  box-shadow: 0 12px 40px rgba(0,0,0,.5), 0 0 0 1px var(--accent);
}

.card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.card-poster {
  position: relative;
  aspect-ratio: 2/3;
  overflow: hidden;
  background: var(--surface2);
}

.card-poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform .3s ease;
}

.card:hover .card-poster img {
  transform: scale(1.04);
}

.card-poster-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-dim);
}

.placeholder-icon { font-size: 36px; }
.placeholder-text { font-size: 12px; letter-spacing: .08em; text-transform: uppercase; }

.card-year-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(12, 12, 15, 0.85);
  backdrop-filter: blur(6px);
  color: var(--accent);
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 4px;
  border: 1px solid rgba(232, 197, 71, 0.3);
}

.card-body {
  padding: 14px 14px 16px;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  line-height: 1.35;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-type {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: var(--text-dim);
  font-family: 'JetBrains Mono', monospace;
}
</style>
