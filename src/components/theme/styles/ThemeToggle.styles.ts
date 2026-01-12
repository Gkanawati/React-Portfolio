import styled from 'styled-components';

export const ToggleButton = styled.button`
  background-color: transparent;
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ${(props) => props.theme.transitions.fast};
  color: ${(props) => props.theme.colors.text};

  &:hover {
    background-color: ${(props) => props.theme.colors.surface};
    transform: rotate(180deg);
  }

  &:active {
    transform: scale(0.95);
  }
`;
