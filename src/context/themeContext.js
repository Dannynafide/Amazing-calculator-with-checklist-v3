import React, {useEffect, useMemo} from 'react';

const ThemeContext = React.createContext();

function getInitialState() {
  // We’re checking if the user has set a theme preference in their browser settings.
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = defaultDark ? 'dark' : 'light';

  const theme = localStorage.getItem('theme');
  const res = theme ? JSON.parse(theme) : defaultTheme;

  return res;
}

function ThemeProvider({children}) {
  const [theme, setTheme] = React.useState(getInitialState);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const memoedValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={memoedValue}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`);
  }
  const {theme, setTheme} = context;

  const switchTheme = (mainTheme) => {
    setTheme(mainTheme);
  };

  return {
    theme,
    switchTheme,
  };
}
export {ThemeProvider, useTheme};
