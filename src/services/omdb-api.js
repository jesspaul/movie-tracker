const API_KEY = process.env.REACT_APP_API_KEY;

export function searchMovie(title) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
    .then(res => res.json());
}