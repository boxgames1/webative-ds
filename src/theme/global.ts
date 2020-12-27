import { createGlobalStyle } from "styled-components";
import colors from "./colors";
import { useFont } from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${useFont()};
  body {
      margin: 0;
      padding: 0;
      background: ${colors.background};
      color: ${colors.primary};
  }
`;

export default GlobalStyles;
