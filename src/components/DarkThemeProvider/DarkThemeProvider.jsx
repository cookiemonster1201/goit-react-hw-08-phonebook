import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { getDarkThemeEnabled } from 'redux/theme/theme-selectors';

const DarkThemeProvider = ({ children }) => {
  const darkThemeEnabled = useSelector(getDarkThemeEnabled);
  return (
    <ThemeProvider theme={{ theme: darkThemeEnabled ? 'dark' : 'light' }}>
      {children}
    </ThemeProvider>
  );
};

export default DarkThemeProvider;
