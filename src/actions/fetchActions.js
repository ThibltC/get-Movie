import { FETCH_MOVIE, FETCH_HEADER } from './types';

const api_key = process.env.REACT_APP_API_KEY;

export const getMoviesInHome = (query) => (dispatch) => { 
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=1&region=FR&language=fr-FR`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_MOVIE,
        listMoviesInHome: data.results,
        areLoaded: true
      });
    })
}

export const getMovieHeader = () => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&language=fr-FR&page=1&region=Fr`)
      .then(response => response.json())
      .then(data => {
          dispatch({
            type: FETCH_HEADER,
              randomMovie: data.results[Math.floor(Math.random() * 20)],
              imageLoaded: true
          });
      });
}
