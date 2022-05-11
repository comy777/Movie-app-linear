import {useReducer} from 'react'
import { uiReducer } from '../reducers/ui';
import { uiInitialState } from '../interfaces/ui';

const useUiReducer = () => {
  const [state, dispatch] = useReducer(uiReducer, uiInitialState)
  const setDarkTheme = () => dispatch({type: 'set dark theme'})
  const setLoading = () => dispatch({type: 'set loading'})

  return {
    uiState: state,
    setDarkTheme,
    setLoading
  }
}

export default useUiReducer