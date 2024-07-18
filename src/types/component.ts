export type Theme = 'dark' | 'light';

export type ThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}