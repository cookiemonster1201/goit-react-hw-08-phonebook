import theme from 'styled-theming';

export const LIGHT_THEME_BG_COLOR = '#fff';
export const DARK_THEME_BG_COLOR = 'rgb(51, 51, 51)';
export const LIGHT_THEME_FONT_COLOR = '#2f3438';
export const DARK_THEME_FONT_COLOR = 'rgb(204, 204, 204)';

export const backgroundColor = theme('theme', {
  light: LIGHT_THEME_BG_COLOR,
  dark: DARK_THEME_BG_COLOR,
});

export const textColor = theme('theme', {
  light: LIGHT_THEME_FONT_COLOR,
  dark: DARK_THEME_FONT_COLOR,
});
