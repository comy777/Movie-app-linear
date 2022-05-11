export interface UiStateProps {
  darkTheme: boolean,
  setDarkTheme: () => void,
  loading: boolean,
  setLoading: () => void
}

export interface UiState {
  darkTheme: boolean,
  loading: boolean
}

export const uiInitialState : UiState = {
  darkTheme: false,
  loading: false
}

export type UiActions = {type: 'set dark theme'} | {type: 'set loading'}