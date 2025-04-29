import React, { createContext, useState, useContext } from 'react';

const darkTheme = {
  dark: true,
  colors: {
    background: '#0D0D0D',
    primary: '#FF66C4',
    secondary: '#8A2BE2',
    text: '#FFFFFF',
    cardBackground: '#1A1A1A',
    border: '#333333',
    primaryLight: '#FFB3E6',
  },
};

const lightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    primary: '#007AFF',
    secondary: '#5AC8FA',
    text: '#000000',
    cardBackground: '#F2F2F2',
    border: '#CCCCCC',
    primaryLight: '#CCE5FF',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
