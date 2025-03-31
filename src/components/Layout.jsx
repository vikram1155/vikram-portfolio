import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./Header";
import { useAppTheme } from "../context/ThemeContext";
import Footer from "./Footer";
import Loader from "./Loader";
import backgroundImage from "../assets/background.jpg";

const Layout = ({ children, home = false }) => {
  const theme = useAppTheme();
  const [isLoading, setIsLoading] = useState(
    children.type.name === "HomePage" && !localStorage.getItem("firstTimeUser")
  );

  useEffect(() => {
    if (
      children.type.name === "HomePage" &&
      !localStorage.getItem("firstTimeUser")
    ) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        localStorage.setItem("firstTimeUser", "true");
      }, 4600);
      return () => clearTimeout(timer);
    }
  }, [children.type.name]);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Background Image Layer */}
      {localStorage.getItem("mode") === "dark" && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            transform: "rotate(180deg)",
            opacity: 0.2,
            zIndex: 0,
          }}
        />
      )}

      {/* Content Layer */}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Box
            sx={{
              minHeight: "100vh",
              px: home ? 0 : 2.5,
              pt: 9,
              pb: 8,
              width: "100%",
              position: "relative",
              zIndex: 1,
            }}
          >
            {children}
          </Box>
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Layout;
