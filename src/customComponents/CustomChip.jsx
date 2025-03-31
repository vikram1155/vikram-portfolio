import { Chip } from "@mui/material";
import React from "react";
import { useAppTheme } from "../context/ThemeContext";

function CustomChip({ label, sx }) {
  const theme = useAppTheme();

  return (
    <Chip
      label={label}
      variant="outlined"
      sx={{
        borderColor: theme.palette.text.primary,
        height: "24px",
        cursor: "pointer",
        m: "4px",
        ":hover": {
          color: theme.palette.text.highlight,
          borderColor: theme.palette.text.highlight,
        },
        ...sx,
      }}
    />
  );
}

export default CustomChip;
