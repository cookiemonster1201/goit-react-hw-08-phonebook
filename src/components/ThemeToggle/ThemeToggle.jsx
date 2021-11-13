import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDarkThemeEnabled } from 'redux/theme/theme-selectors';
import { ToggleControl, Input, Control } from './ThemeToggle-styled';
import { toggleDarkTheme } from 'redux/theme/theme-actions';

const ThemeToggle = () => {
  const darkThemeEnabled = useSelector(getDarkThemeEnabled);
  const dispatch = useDispatch();

  return (
    <ToggleControl>
      <Input
        type="checkbox"
        checked={darkThemeEnabled}
        onChange={() => dispatch(toggleDarkTheme())}
      />
      <Control></Control>
    </ToggleControl>
  );
};

export default ThemeToggle;
