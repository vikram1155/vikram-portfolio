import { createTheme } from "@mui/material/styles";

const FONT_FAMILY = '"Chakra Petch", "Arial", sans-serif';
const COMMON_COLORS = {
  grey: "#F8F8F8",
  orange: "#FD6F00",
};

// Light theme
const lightTheme = {
  palette: {
    mode: "light",
    background: {
      default: "#FFFFFF", // white
    },
    text: {
      primary: "#002266", // dark blue
      secondary: "#005599", // light blue
      highlight: "#00BBAA", // green highlights
    },
    cards: {
      inactive: "#F9F9F9", //white bg
      active: "#E4E4E4", //grey bg
    },
    boxShadow: {
      active: "#0000008F",
      inactive: "#0000001A",
    },
    button: {
      background: "#FFFFFF",
      color: "#00BBAA", // green highlights
      hoveredBackground: "#00BBAA", // green highlights
      hoveredColor: "#FFFFFF",
    },
    loader: {
      primary: "#002266", // dark blue
    },
    common: COMMON_COLORS,
  },
  typography: {
    fontFamily: FONT_FAMILY,
    allVariants: {
      fontFamily: FONT_FAMILY,
    },
  },
};

// Dark theme
const darkTheme = {
  palette: {
    mode: "dark",
    background: {
      default: "#020615",
    },
    text: {
      primary: "#EBEBED",
      secondary: "#7E8BB6",
      highlight: "#00EEDD",
    },
    primary: {
      main: "#00FFEE",
      contrastText: "#FFFFFF",
    },
    cards: {
      inactive: "#1A2238",
      active: "#002080",
    },
    boxShadow: {
      active: "#003388",
      inactive: "#0000001A",
    },
    button: {
      background: "#020615",
      color: "#00EEDD",
      hoveredBackground: "#00EEDD",
      hoveredColor: "#020615",
    },
    loader: {
      primary: "#00BBAA",
    },
    common: COMMON_COLORS,
  },
  typography: {
    fontFamily: FONT_FAMILY,
    allVariants: {
      fontFamily: FONT_FAMILY,
    },
  },
};

const getTheme = (mode) => {
  const validModes = ["light", "dark"];
  if (!validModes.includes(mode)) {
    console.warn(`Invalid theme mode: ${mode}. Defaulting to "light".`);
    mode = "light";
  }
  return createTheme(mode === "dark" ? darkTheme : lightTheme);
};

export default getTheme;
