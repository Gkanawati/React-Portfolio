import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.background}f0;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  height: 80px;
  display: flex;
  align-items: center;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.lg};
`;

export const ToggleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => props.theme.spacing.sm};
  margin-right: ${(props) => props.theme.spacing.sm};
  border-right: 1px solid ${(props) => props.theme.colors.border};
  padding-right: ${(props) => props.theme.spacing.sm};

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.colors.text};
  transition: ${(props) => props.theme.transitions.fast};
  border-radius: 6px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.surface};
    transform: translateY(-2px);
  }
`;
