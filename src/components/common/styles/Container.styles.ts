import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${(props) => props.theme.spacing.lg};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    width: 100%;
    min-width: 0;
    padding: 0 ${(props) => props.theme.spacing.md};
  }
`;
