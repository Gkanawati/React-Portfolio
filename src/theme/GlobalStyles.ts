import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${props => props.theme.typography.fontFamily};
    font-size: ${props => props.theme.typography.fontSize.medium};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    transition: ${props => props.theme.transitions.default};
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 600;
    color: ${props => props.theme.colors.text};
  }

  h1 {
    font-size: ${props => props.theme.typography.fontSize.xlarge};
  }

  h2 {
    font-size: ${props => props.theme.typography.fontSize.large};
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: ${props => props.theme.transitions.fast};
  }

  a:hover {
    opacity: 0.8;
  }

  button {
    font-family: ${props => props.theme.typography.fontFamily};
    cursor: pointer;
    border: none;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  ul, ol {
    list-style: none;
  }

  ::selection {
    background-color: ${props => props.theme.colors.primary};
    color: #ffffff;
  }
`;
