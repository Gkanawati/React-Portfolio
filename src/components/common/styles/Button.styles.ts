import styled from 'styled-components';

interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'outline';
  $size?: 'small' | 'medium' | 'large';
}

export const Button = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.$size) {
      case 'small':
        return `${props.theme.spacing.xs} ${props.theme.spacing.sm}`;
      case 'large':
        return `${props.theme.spacing.md} ${props.theme.spacing.lg}`;
      default:
        return `${props.theme.spacing.sm} ${props.theme.spacing.md}`;
    }
  }};

  font-size: ${(props) => {
    switch (props.$size) {
      case 'small':
        return props.theme.typography.fontSize.small;
      case 'large':
        return props.theme.typography.fontSize.large;
      default:
        return props.theme.typography.fontSize.medium;
    }
  }};

  font-weight: 600;
  border-radius: 8px;
  transition: ${(props) => props.theme.transitions.fast};
  cursor: pointer;

  ${(props) => {
    switch (props.$variant) {
      case 'secondary':
        return `
          background-color: ${props.theme.colors.secondary};
          color: #ffffff;
          border: 2px solid ${props.theme.colors.secondary};

          &:hover {
            background-color: transparent;
            color: ${props.theme.colors.secondary};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${props.theme.colors.primary};
          border: 2px solid ${props.theme.colors.primary};

          &:hover {
            background-color: ${props.theme.colors.primary};
            color: #ffffff;
          }
        `;
      default:
        return `
          background-color: ${props.theme.colors.primary};
          color: #ffffff;
          border: 2px solid ${props.theme.colors.primary};

          &:hover {
            background-color: transparent;
            color: ${props.theme.colors.primary};
          }
        `;
    }
  }}

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
