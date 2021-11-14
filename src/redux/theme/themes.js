import theme from 'styled-theming';

const LIGHT_THEME_BG_COLOR = '#fff';
const DARK_THEME_BG_COLOR = 'rgb(51, 51, 51)';
const LIGHT_THEME_FONT_COLOR = '#2f3438';
const DARK_THEME_FONT_COLOR = 'rgb(204, 204, 204)';
const LIGHT_THEME_INPUT_BG_COLOR = 'rgb(236, 236, 236)';
const DARK_THEME_INPUT_BG_COLOR = 'rgb(252, 222, 168)';
const LIGHT_THEME_ICON_FILL = LIGHT_THEME_FONT_COLOR;
const DARK_THEME_ICON_FILL = '#fff';
const LIGHT_THEME_BOX_SHADOW = 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px';
const DARK_THEME_BOX_SHADOW = '1px 11px 25px 21px rgba(238, 238, 238, 0.14)';

export const backgroundColor = theme('theme', {
  light: LIGHT_THEME_BG_COLOR,
  dark: DARK_THEME_BG_COLOR,
});

export const textColor = theme('theme', {
  light: LIGHT_THEME_FONT_COLOR,
  dark: DARK_THEME_FONT_COLOR,
});

export const inputBgColor = theme('theme', {
  light: LIGHT_THEME_INPUT_BG_COLOR,
  dark: DARK_THEME_INPUT_BG_COLOR,
});

export const iconFill = theme('theme', {
  light: LIGHT_THEME_ICON_FILL,
  dark: DARK_THEME_ICON_FILL,
});

export const boxShadow = theme('theme', {
  light: LIGHT_THEME_BOX_SHADOW,
  dark: DARK_THEME_BOX_SHADOW,
});
