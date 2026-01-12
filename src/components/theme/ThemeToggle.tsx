import { Sun, Moon } from '@phosphor-icons/react';
import { useTheme } from '../../contexts/ThemeContext';
import { ToggleButton } from './styles/ThemeToggle.styles';

export const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <ToggleButton
      onClick={toggleTheme}
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {themeMode === 'light' ? (
        <Moon size={24} weight='duotone' />
      ) : (
        <Sun size={24} weight='duotone' />
      )}
    </ToggleButton>
  );
};
