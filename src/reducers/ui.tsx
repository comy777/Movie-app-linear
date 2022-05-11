import { UiState, UiActions } from '../interfaces/ui';

export const uiReducer = (state : UiState, action: UiActions) : UiState => {
  switch (action.type) {
    case 'set dark theme':
      return {
        ...state,
        darkTheme: !state.darkTheme
      };
    case 'set loading':
      return{
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
}