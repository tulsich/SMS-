import React, { createContext, useState, useContext } from 'react';

const lightTheme = {
  mode: 'light',
  colors: {
    background: '#f9fafb',
    card: '#ffffff',
    text: '#1e293b',
    accent: '#2563eb',
  },
};

const darkTheme = {
  mode: 'dark',
  colors: {
    background: '#1e293b',
    card: '#334155',
    text: '#f1f5f9',
    accent: '#3b82f6',
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme.mode === 'light' ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
