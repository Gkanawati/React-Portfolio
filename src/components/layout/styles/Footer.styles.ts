import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: ${(props) => props.theme.colors.surface};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  padding: ${(props) => props.theme.spacing.xl} 0;
  margin-top: ${(props) => props.theme.spacing.xl};
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => props.theme.spacing.md};
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.md};
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.border};
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.transitions.fast};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

export const Copyright = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  text-align: center;
`;

export const Badge = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.typography.fontSize.small};
  text-align: center;

  span {
    color: ${(props) => props.theme.colors.primary};
  }
`;
