import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: ${(props) => props.theme.transitions.default};
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px ${(props) => props.theme.colors.shadow};
  }
`;

export const ImageWrapper = styled.div<{ $hasImage: boolean }>`
  position: relative;
  width: 100%;
  height: 200px;
  background: ${(props) =>
    props.$hasImage
      ? props.theme.colors.surface
      : `linear-gradient(
    135deg,
    ${props.theme.colors.primary}50,
    ${props.theme.colors.secondary}50
  )`};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.typography.fontSize.xlarge};
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  overflow: hidden;
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: ${(props) => props.theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Title = styled.h3`
  font-size: ${(props) => props.theme.typography.fontSize.large};
  margin-bottom: ${(props) => props.theme.spacing.sm};
  color: ${(props) => props.theme.colors.text};
`;

export const Description = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.typography.fontSize.medium};
  line-height: 1.6;
  margin-bottom: ${(props) => props.theme.spacing.md};
  flex: 1;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.theme.spacing.xs};
  margin-bottom: ${(props) => props.theme.spacing.md};
`;

export const Tag = styled.span`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border-radius: 4px;
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: 500;
`;

export const Links = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  font-weight: 500;
  padding: ${(props) => props.theme.spacing.xs}
    ${(props) => props.theme.spacing.sm};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 6px;
  transition: ${(props) => props.theme.transitions.fast};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
