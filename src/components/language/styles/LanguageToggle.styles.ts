import styled from 'styled-components';

export const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.fast};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: 500;

  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
    transform: translateY(-2px);
  }
`;

export const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 120px;
  box-shadow: 0 4px 12px ${(props) => props.theme.colors.shadow};
  z-index: 1000;
`;

export const LanguageOption = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 1rem;
  background: ${(props) =>
    props.$isActive ? props.theme.colors.primary + '20' : 'transparent'};
  border: none;
  border-radius: 4px;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.primary : props.theme.colors.text};
  font-weight: ${(props) => (props.$isActive ? '600' : '400')};
  cursor: pointer;
  text-align: left;
  transition: ${(props) => props.theme.transitions.fast};
  font-size: ${(props) => props.theme.typography.fontSize.small};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary}20;
  }
`;
