import { Globe } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import { LanguageButton, LanguageDropdown, LanguageOption } from './styles/LanguageToggle.styles';
import { useState } from 'react';

export const LanguageToggle = () => {
  const { i18n, t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const currentLang = i18n.language.split('-')[0]; // en-US -> en

  return (
    <div style={{ position: 'relative' }}>
      <LanguageButton
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('language.label')}
      >
        <Globe size={24} weight="duotone" />
        <span>{currentLang.toUpperCase()}</span>
      </LanguageButton>

      {isOpen && (
        <LanguageDropdown>
          <LanguageOption
            onClick={() => changeLanguage('en')}
            $isActive={currentLang === 'en'}
          >
            {t('language.en')}
          </LanguageOption>
          <LanguageOption
            onClick={() => changeLanguage('pt')}
            $isActive={currentLang === 'pt'}
          >
            {t('language.pt')}
          </LanguageOption>
        </LanguageDropdown>
      )}
    </div>
  );
};
