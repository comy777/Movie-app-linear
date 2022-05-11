import { AppState, AppActions } from '../interfaces/app';

export const appReducer = (state: AppState, action: AppActions) : AppState => {
  switch (action.type) {
    case 'set movies':
      return {
        ...state,
        movies: action.payload.movies
      }
    default:
      return state
  }
}