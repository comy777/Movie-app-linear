import { Result } from './response';

export interface AppStateProps {
  movies: Result[];
  setMovies: (movies: Result[]) => void
}

export interface AppState {
  movies: Result[]
}

export type AppActions = {type: 'set movies', payload: {movies: Result[]}}

export const appInitialState : AppState = {
  movies: []
}

