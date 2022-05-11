import { apiMovies } from './config';
import { NowPlayingResponse, Result, TvResponse } from '../interfaces/response';

export const getNowPlaying = apiMovies.get<NowPlayingResponse>(
  `/movie/now_playing?sort_by=released_date.asc&language=es-CO`,
);

export const getDiscover = apiMovies.get<NowPlayingResponse>(
  `/discover/movie`,
);

export const getPopular = apiMovies.get<NowPlayingResponse>(
  '/movie/upcoming',
);

export const getLastest = apiMovies.get<NowPlayingResponse>(
  '/movie/latest?language=en-US',
);
  
export const getTvOnAir = apiMovies.get<TvResponse>('/tv/on_the_air');