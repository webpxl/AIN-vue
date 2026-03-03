// The single source of truth for all movie data in the app.
// Components should never call the API directly — only through this store.

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { searchMovies, getMovieById } from '../api/omdb'

export const useMovieStore = defineStore('movies', () => {
  // ── State ──────────────────────────────────────────────────────
  // These are already defined for you. Use them in your actions below.
  const results       = ref([])       // array of search result movies
  const selectedMovie = ref(null)     // full detail object for the detail page
  const isLoading     = ref(false)    // true while any request is in-flight
  const error         = ref(null)     // string error message, or null
  const lastQuery     = ref('')       // the most recent search term
  const totalResults  = ref(0)        // total number of matches (OMDb's count)
  const currentPage   = ref(1)        // current pagination page


  // ── Getters ────────────────────────────────────────────────────

  // TODO 4: Add a computed getter called `hasResults`
  // It should return true when the results array has at least one item.
  const hasResults = null // replace this

  // TODO 5: Add a computed getter called `totalPages`
  // OMDb returns 10 results per page.
  // Hint: Math.ceil(totalResults.value / 10)
  const totalPages = null // replace this


  // ── Actions ────────────────────────────────────────────────────

  /**
   * Search for movies by title. Called from SearchView.
   * @param {string} query
   * @param {number} page
   */
  async function search(query, page = 1) {
    // ─────────────────────────────────────────────────────────────
    // TODO 6: Implement the search action
    //
    // Steps (order matters!):
    //   1. Return early if query is empty/whitespace
    //   2. Set isLoading to true, clear error
    //   3. If page === 1 (fresh search), reset results and totalResults
    //   4. Update lastQuery and currentPage
    //   5. Call searchMovies(query, page) from the API layer
    //   6. On success: store movies in results, store totalResults
    //   7. On error: store the error message in error, reset results
    //   8. Always set isLoading back to false when done
    //
    // Tip: use try / catch / finally
    //   - try:     the API call
    //   - catch:   set error.value
    //   - finally: set isLoading.value = false  ← runs whether it succeeded or failed
    // ─────────────────────────────────────────────────────────────
  }


  /**
   * Load full details for one movie. Called from DetailView.
   * @param {string} imdbId
   */
  async function fetchDetail(imdbId) {
    // ─────────────────────────────────────────────────────────────
    // TODO 7: Implement the fetchDetail action
    //
    // Steps:
    //   1. Set isLoading to true, clear error, clear selectedMovie
    //   2. Call getMovieById(imdbId) from the API layer
    //   3. On success: store the result in selectedMovie
    //   4. On error: store the error message in error
    //   5. Always set isLoading back to false
    // ─────────────────────────────────────────────────────────────
  }


  // ── Return everything the components can use ───────────────────
  return {
    // state
    results,
    selectedMovie,
    isLoading,
    error,
    lastQuery,
    totalResults,
    currentPage,
    // getters
    hasResults,
    totalPages,
    // actions
    search,
    fetchDetail,
  }
})
