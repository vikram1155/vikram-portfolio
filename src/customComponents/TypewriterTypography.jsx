import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import CustomTypography from "./CustomTypography";
import { useAppTheme } from "../context/ThemeContext";

const TypewriterTypography = ({ words, sx }) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const theme = useAppTheme();

  useEffect(() => {
    const currentWord = words[wordIndex];

    if (isTyping && charIndex < currentWord.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 150);
      return () => clearTimeout(typingTimeout);
    }

    if (charIndex === currentWord.length && isTyping) {
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isTyping) {
      const nextWordTimeout = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setWordIndex((prev) => (prev + 1) % words.length);
        setIsTyping(true);
      }, 0);
      return () => clearTimeout(nextWordTimeout);
    }
  }, [charIndex, isTyping, wordIndex, words]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        ...sx,
      }}
    >
      <CustomTypography
        type="heading3h"
        sx={{
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
          textAlign: "center",
        }}
      >
        Full Stack Developer
      </CustomTypography>
      <br></br>
      <CustomTypography
        type="heading4"
        sx={{
          position: "relative",
          minHeight: "42px",
          color: theme.palette.text.secondary,
          fontSize: { xs: "1rem", md: "2rem" },
        }}
      >
        {displayText}
        {isTyping && charIndex === words[wordIndex].length && (
          <Box
            component="span"
            sx={{
              animation: "blink 1s step-end infinite",
              "@keyframes blink": {
                "0%, 100%": { opacity: 1 },
                "50%": { opacity: 0 },
              },
            }}
          >
            _
          </Box>
        )}
      </CustomTypography>
    </Box>
  );
};

export default TypewriterTypography;
