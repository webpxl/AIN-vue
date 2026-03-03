// src/api/omdb.js
// All communication with the OMDb API lives here.
// Components and the store should never import axios directly — use these functions.

import axios from 'axios'

// ─────────────────────────────────────────────────────────────
// TODO 1: Create an axios instance
//
// Use axios.create() with:
//   - baseURL pointing to 'https://www.omdbapi.com/'
//   - a default params object that always sends the API key
//     (read it from import.meta.env.VITE_OMDB_KEY)
//
// Tip: any key added to `params` here will be merged into
// every request automatically — no need to repeat it.
// ─────────────────────────────────────────────────────────────
const client = null // replace this


/**
 * Search for movies by title.
 * This is an ASYNC function, so you can use await's in it! 
 *
 * @param {string} query - The search term
 * @param {number} page  - Page number (OMDb returns 10 results per page)
 * @returns {Promise<{ movies: Array, totalResults: number }>}
 */
export async function searchMovies(query, page = 1) {
  // ─────────────────────────────────────────────────────────────
  // TODO 2: Call the OMDb search endpoint
  //
  // Make a GET request using your axios instance with params:
  //   s: query        (the search term)
  //   type: 'movie'   (filter to movies only)
  //   page: page      (for pagination)
  //
  // OMDb quirk: when no results are found, it does NOT return
  // an HTTP error. Instead it returns:
  //   { Response: "False", Error: "Movie not found!" }
  // You need to check for this manually and return { movies: [], totalResults: 0 }
  //
  // On success, OMDb returns:
  //   { Search: [...], totalResults: "42", Response: "True" }
  // Return { movies: data.Search, totalResults: parseInt(data.totalResults, 10) }
  // ─────────────────────────────────────────────────────────────

  throw new Error('searchMovies() is not implemented yet')
}


/**
 * Fetch full details for a single movie by its IMDb ID.
 *
 * @param {string} imdbId - e.g. "tt0111161"
 * @returns {Promise<Object>} - the full movie object
 */
export async function getMovieById(imdbId) {
  // ─────────────────────────────────────────────────────────────
  // TODO 3: Call the OMDb detail endpoint
  //
  // Make a GET request with params:
  //   i:    imdbId      (the IMDb ID)
  //   plot: 'full'      (get the long plot description)
  //
  // Again: check for Response === 'False' and throw an Error
  // with the message from data.Error (or 'Movie not found').
  //
  // On success, return the full response data object.
  // ─────────────────────────────────────────────────────────────

  throw new Error('getMovieById() is not implemented yet')
}
