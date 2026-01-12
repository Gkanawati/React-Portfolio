import styled from 'styled-components';

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

export const Greeting = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.md};
  font-weight: 600;
`;

export const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
  line-height: 1.1;
`;

export const Subtitle = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
  line-height: 1.6;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;
