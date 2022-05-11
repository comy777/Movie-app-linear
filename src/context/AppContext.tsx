import React, {createContext} from 'react'
import { UiStateProps } from '../interfaces/ui';
import useUiReducer from '../hooks/useUiReducer';
import { AppStateProps } from '../interfaces/app';
import useAppReducer from '../hooks/useAppReducer';

export const AppContext = createContext({} as UiStateProps)

export const MoviesContext = createContext({} as AppStateProps)

export const AppContextProvider = ({children} : any) => {
  const {uiState, setDarkTheme, setLoading} = useUiReducer()
  const {appState, setMovies} = useAppReducer()
  
  return(
    <AppContext.Provider value={{...uiState, setDarkTheme, setLoading}} >
      <MoviesContext.Provider value={{...appState, setMovies}}>
        {children}
      </MoviesContext.Provider>
    </AppContext.Provider>
  )
}