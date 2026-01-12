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
