import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n/config'; // Initialize i18n before app renders
import App from './App.tsx';
import { ThemeProvider } from './contexts/ThemeContext.tsx';
import { GlobalStyles } from './theme/GlobalStyles.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
