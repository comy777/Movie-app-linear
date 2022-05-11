import {useReducer} from 'react'
import { appReducer } from '../reducers/app';
import { appInitialState } from '../interfaces/app';
import { Result } from '../interfaces/response';

const useAppReducer = () => {
  const [state, dispatch] = useReducer(appReducer, appInitialState)
  const setMovies = (movies: Result[]) => dispatch({type: 'set movies', payload: {movies}})

  return {
    appState: state,
    setMovies
  }
}

export default useAppReducer