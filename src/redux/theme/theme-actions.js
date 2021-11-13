import { createAction } from '@reduxjs/toolkit';
export const TOGGLE_DARK_THEME = 'TOGGLE_DARK_THEME';

export const toggleDarkTheme = createAction(TOGGLE_DARK_THEME);
