import React, { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";
import { useAppTheme } from "../context/ThemeContext";

const LoaderStyled = styled(Box)(({ color }) => ({
  width: "50px",
  aspectRatio: "1.154",
  position: "relative",
  background: `conic-gradient(from 120deg at 50% 64%, #0000, ${color} 1deg 120deg, #0000 121deg)`,
  animation: "l27_0 1.5s infinite cubic-bezier(0.3, 1, 0, 1)",
  "&:before, &:after": {
    content: '""',
    position: "absolute",
    inset: 0,
    background: "inherit",
    transformOrigin: "50% 66%",
    animation: "l27_1 1.5s infinite",
  },
  "&:after": {
    "--s": -1,
  },
  "@keyframes l27_0": {
    "0%, 30%": { transform: "rotate(0)" },
    "70%": { transform: "rotate(120deg)" },
    "70.01%, 100%": { transform: "rotate(360deg)" },
  },
  "@keyframes l27_1": {
    "0%": { transform: "rotate(calc(var(--s, 1) * 120deg)) translate(0)" },
    "30%, 70%": {
      transform:
        "rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px)",
    },
    "100%": { transform: "rotate(calc(var(--s, 1) * 120deg)) translate(0)" },
  },
}));

const Loader = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Booting Up..";
  const [isTyping, setIsTyping] = useState(true);
  const theme = useAppTheme();

  useEffect(() => {
    let charIndex = 0;
    const typingInterval = setInterval(() => {
      if (charIndex < fullText.length) {
        setDisplayText(fullText.slice(0, charIndex + 1));
        charIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.default",
        flexDirection: "column",
        gap: 2,
      }}
    >
      <LoaderStyled color={theme.palette.loader.primary} />
      <Box
        sx={{
          fontFamily: "monospace",
          fontSize: "1rem",
          color: theme.palette.loader.primary,
          display: "flex",
          alignItems: "center",
        }}
      >
        {displayText}
        {isTyping ? (
          <Box
            component="span"
            sx={{
              animation: "blink 1s step-end infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0 },
              },
              width: "10px",
              height: "1.5rem",
              backgroundColor: "text.highlight",
              ml: 0.5,
            }}
          />
        ) : (
          <Box
            component="span"
            sx={{
              animation: "blink 1s step-end infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0 },
              },
              width: "10px",
              height: "1.5rem",
              backgroundColor: "text.highlight",
              ml: 0.5,
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Loader;
