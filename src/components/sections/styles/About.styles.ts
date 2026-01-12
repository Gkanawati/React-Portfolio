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
  margin-bottom: ${(props) => props.theme.spacing.xl};
  color: ${(props) => props.theme.colors.text};

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${(props) => props.theme.spacing.lg};
  max-width: 900px;
  margin: 0 auto;
`;

export const Bio = styled(Card)`
  &:hover {
    transform: none;
  }
`;

export const BioText = styled.p`
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  line-height: 1.8;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const SkillsCard = styled(Card)`
  &:hover {
    transform: none;
  }
`;

export const SkillsTitle = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  margin-bottom: ${(props) => props.theme.spacing.md};
  color: ${(props) => props.theme.colors.text};
`;

export const LineSeparator = styled.hr`
  border: none;
  height: 1px;
  background: ${(props) => props.theme.colors.border};
  margin: ${(props) => props.theme.spacing.md} 0;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SkillItem = styled.div`
  padding: ${(props) => props.theme.spacing.sm};
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 8px;
  text-align: center;
  font-weight: 500;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
`;
