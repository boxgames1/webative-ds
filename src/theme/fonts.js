// weights
const bold = "900";
const normal = "500";
const light = "300";
const lighest = "100";

// sizes
const small = "14px";
const medium = "18px";
const large = "22px";

// family
const robotoFont =
  "https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap";
const fontFamily = "font-family: 'Roboto', sans-serif;";
const useFont = () => `
  @font-face {
      ${fontFamily}
      src: url(${robotoFont}) format('truetype');
  }
`;

module.exports = {
  fontSizes: {
    copy: small,
    subtitle: medium,
    title: large,
  },
  fontWeights: {
    bold,
    normal,
    light,
    lighest,
  },
  useFont,
};
