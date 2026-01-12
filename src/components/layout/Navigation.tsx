import { useState } from 'react';
import { List, X } from '@phosphor-icons/react';
import {
  Nav,
  NavLink,
  MobileMenuButton,
  MobileMenu,
} from './styles/Navigation.styles';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
