import * as actions from './theme-actions';

const themeReducer = (state = { darkThemeEnabled: false }, action) => {
  switch (action.type) {
    case actions.TOGGLE_DARK_THEME:
      return { darkThemeEnabled: !state.darkThemeEnabled };

    default:
      return state;
  }
};

export default themeReducer;
