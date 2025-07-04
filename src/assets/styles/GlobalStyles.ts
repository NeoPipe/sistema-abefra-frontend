import { createGlobalStyle } from "styled-components";

import { device } from "../../config/device/index";
import { colors, fontSizes, sizes } from "../styles/variables";

const { veryLightGray } = colors;
const { size100Percent } = sizes;

const GlobalStyle = createGlobalStyle`

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    font-size: 10px !important;
    height: ${size100Percent};

    @media ${device.xxs} {
      font-size: 8.5px !important;
    }

  }

  body {
    /* background-color: ${veryLightGray}; */
    height: 100vh;
  }

  h1 {
    font-size: ${fontSizes.fontSize32};
  }

  h2 {
    font-size: ${fontSizes.fontSize24};
  }

  h3 {
    font-size: ${fontSizes.fontSize18};
  }

  h4 {
    font-size: ${fontSizes.fontSize16};
  }

  p {
    font-size: ${fontSizes.fontSize14};
  }

  .custom-toast {
    font-family: 'Roboto', sans-serif;
    font-size: ${fontSizes.fontSize14};
  }
`;

export default GlobalStyle;
