import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
 ${normalize}
  :root,
  html,
  body {
    margin: 0;
    font-family: Arial;
  }

  * {
      box-sizing: border-box;
      -webkit-appearance: none;
      text-decoration: none;

  }
`;
