import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  padding: ${(props) => props.theme.spacing.lg};
  box-shadow: 0 4px 6px ${(props) => props.theme.colors.shadow};
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: ${(props) => props.theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px ${(props) => props.theme.colors.shadow};
  }
`;
