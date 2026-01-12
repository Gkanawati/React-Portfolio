import { Sun, Moon } from '@phosphor-icons/react';
import { useTheme } from '../../contexts/ThemeContext';
import { useTranslation } from 'react-i18next';
import { ToggleButton } from './styles/ThemeToggle.styles';

export const ThemeToggle = () => {
  const { themeMode, toggleTheme } = useTheme();
  const { t } = useTranslation('common');

  const ariaLabel =
    themeMode === 'light'
      ? t('theme.switchToDark')
      : t('theme.switchToLight');

  return (
    <ToggleButton onClick={toggleTheme} aria-label={ariaLabel}>
      {themeMode === 'light' ? (
        <Moon size={24} weight='duotone' />
      ) : (
        <Sun size={24} weight='duotone' />
      )}
    </ToggleButton>
  );
};
