import axios from 'axios';

export const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '64ce2334e3effee0b90d9b927bed61c7',
    // language: 'es-CO',
  },
});