import { Box } from "@mui/material";
import React from "react";

function ComponentLayout({ children }) {
  return <Box sx={{ py: { xs: 4, sm: 6, md: 8 } }}>{children}</Box>;
}

export default ComponentLayout;
