import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  transition: ${(props) => props.theme.transitions.fast};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    transition: ${(props) => props.theme.transitions.fast};
  }

  &:hover {
    color: ${(props) => props.theme.colors.primary};

    &::after {
      width: 100%;
    }
  }
`;

export const MobileMenuButton = styled.button`
  display: none;
  background-color: transparent;
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  padding: ${(props) => props.theme.spacing.xs};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: none;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.surface};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    padding: ${(props) => props.theme.spacing.lg};
    gap: ${(props) => props.theme.spacing.md};
    z-index: 999;
  }
`;
