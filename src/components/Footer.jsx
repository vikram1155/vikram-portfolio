import { Box } from "@mui/material";
import React from "react";
import { useAppTheme } from "../context/ThemeContext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomTypography from "../customComponents/CustomTypography";

function Footer() {
  const theme = useAppTheme();
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 1,
        pb: 1.5,
        position: "fixed",
        bottom: "0",
        width: "100%",
        zIndex: 1201,
        backgroundColor: theme.palette.background.default,
        textAlign: "center",
        flexDirection: "row",
        boxShadow: `0px 10px 20px -2px ${theme.palette.text.highlight}`,
      }}
    >
      <CustomTypography>Designed & Developed,&nbsp;</CustomTypography>
      <Box
        onClick={() => {
          window.open("https://www.linkedin.com/in/vikram1155", "_blank");
        }}
      >
        <CustomTypography
          type="bodyBold"
          sx={{
            cursor: "pointer",
            color: theme.palette.text.highlight,
          }}
        >
          Vikram S
        </CustomTypography>
      </Box>
    </Box>
  );
}

export default Footer;
