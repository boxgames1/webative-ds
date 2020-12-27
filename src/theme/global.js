const { createGlobalStyle } = require("styled-components");
const colors = require("./colors");
const { useFont } = require("./fonts");

const GlobalStyles = createGlobalStyle`
  ${useFont()};
  body {
      margin: 0;
      padding: 0;
      background: ${colors.background};
      color: ${colors.primary};
  }
`;

module.exports = GlobalStyles;
