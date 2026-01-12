import styled from 'styled-components';
import { Card } from '../../common/Card';

export const Section = styled.section`
  padding: ${(props) => props.theme.spacing.xl} 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.typography.fontSize.large};
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.xl};
`;

export const ContactCard = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  &:hover {
    transform: none;
  }
`;

export const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.spacing.lg};
`;

export const ContactMethod = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  transition: ${(props) => props.theme.transitions.fast};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    transform: scale(1.1);
  }
`;

export const ContactLink = styled.a`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
`;

export const ContactLabel = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  color: ${(props) => props.theme.colors.textSecondary};
`;
