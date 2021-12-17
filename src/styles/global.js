import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    margin: 0;
    font-size: 47.78px;
  }

  body {
    margin: 0;
    background: #262A59;
    /* https://css-tricks.com/snippets/css/system-font-stack/ */
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
`;
