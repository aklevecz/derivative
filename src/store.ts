import { createStore, combineReducers } from "redux";

export interface State {
  ui: UIState;
}

export interface UIState {
  mobile: boolean;
  openNav: boolean;
}

const uiState = {
  mobile: true,
  openNav: false
};

interface Action {
  type: string;
  mobile?: boolean;
}

const uiReducer = (state = uiState, action: Action) => {
  switch (action.type) {
    case "OPEN_NAV":
      return { ...state, openNav: true };
    case "CLOSE_NAV":
      return { ...state, openNav: false };
    case "RESIZE":
      const { mobile } = action;
      return { ...state, mobile };
    default:
      return state;
  }
};

const reducers = combineReducers({ ui: uiReducer });

const store = createStore(reducers);

export default store;
