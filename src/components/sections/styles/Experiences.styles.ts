import styled from 'styled-components';

export const Section = styled.section`
  padding: ${(props) => props.theme.spacing.xl} 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.surface};
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text};

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const TimelineContainer = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: ${(props) => props.theme.spacing.xl} 0;
  transition: ${(props) => props.theme.transitions.default};

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.background};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 4px;

    &:hover {
      background: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const Timeline = styled.div`
  display: flex;
  position: relative;
  min-width: max-content;
  padding: 0 ${(props) => props.theme.spacing.xl};
  gap: ${(props) => props.theme.spacing.xl};

  /* Timeline line */
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: ${(props) => props.theme.spacing.xl};
    right: ${(props) => props.theme.spacing.xl};
    height: 2px;
    background-color: ${(props) => props.theme.colors.border};
    z-index: 0;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-width: 300px;
  max-width: 300px;
  z-index: 1;
`;

export const Year = styled.div`
  font-size: ${(props) => props.theme.typography.fontSize.xlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const Dot = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  border: 4px solid ${(props) => props.theme.colors.surface};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.border};
  transition: ${(props) => props.theme.transitions.default};

  ${TimelineItem}:hover & {
    transform: scale(1.3);
    box-shadow: 0 0 0 4px ${(props) => props.theme.colors.primary}40;
  }
`;

export const Content = styled.div`
  text-align: center;
  padding: ${(props) => props.theme.spacing.md};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: ${(props) => props.theme.transitions.default};

  ${TimelineItem}:hover & {
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 4px 12px ${(props) => props.theme.colors.shadow};
    transform: translateY(-4px);
  }
`;

export const Company = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: ${(props) => props.theme.spacing.xs};
`;

export const Role = styled.h4`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.sm};
`;

export const Description = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.small};
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
`;
