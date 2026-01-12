import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import { useTranslation } from 'react-i18next';
import {
  Nav,
  NavLink,
  MobileMenuButton,
  MobileMenu,
} from './styles/Navigation.styles';

export const Navigation = () => {
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#home', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#experiences', label: t('nav.experiences') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#contact', label: t('nav.contact') },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <Nav>
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href}>
            {item.label}
          </NavLink>
        ))}
      </Nav>

      <MobileMenuButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <List size={28} />}
      </MobileMenuButton>

      <MobileMenu $isOpen={mobileMenuOpen}>
        {navItems.map((item) => (
          <NavLink key={item.href} href={item.href} onClick={handleLinkClick}>
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </>
  );
};
