import { createGlobalStyle } from "styled-components"

export const MEDIA_QUERY_LG = '@media screen and (min-width: 1366px)'
export const theme = {
  colors: {
    primary: "#01254F",
    primaryLight: "#01254F65",
    secondary: "#43AA15",
    textPrimary: "#333333",
    textSecondary: "#00000065",
  }
}

export const GlobalBorderbox = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;