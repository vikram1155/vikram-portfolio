import { Box, Typography } from "@mui/material";
import CustomButton from "../customComponents/CustomButton";
import CustomTypography from "../customComponents/CustomTypography";
import TypewriterTypography from "../customComponents/TypewriterTypography";
import heroImg from "../assets/HeaderImage.png";
import { useAppTheme } from "../context/ThemeContext";
import "./styles.css";
import useWindowWidth from "../components/useWindowWidth";
import { useEffect, useState } from "react";

const CustomTypographyHover = ({ sx, className, children }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const brightColors = [
    "#FF1744",
    "#FF5252",
    "#D81B60",
    "#F06292",
    "#FF5722",
    "#FF9800",
    "#FFA726",
    "#FFCA28",
    "#FFFF00",
    "#FFEB3B",
    "#FDD835",
    "#FFEE58",
    "#00E676",
    "#00C853",
    "#4CAF50",
    "#76FF03",
    "#2196F3",
    "#03A9F4",
    "#00BCD4",
    "#448AFF",
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * brightColors.length);
    return brightColors[randomIndex];
  };
  const [sColor, setSColor] = useState(getRandomColor());

  useEffect(() => {
    const interval = setInterval(() => {
      setSColor(getRandomColor());
    }, 500);

    return () => clearInterval(interval);
  }, [brightColors, getRandomColor]);

  const textWithHoverEffect = children.split("").map((char, index) => {
    const isLastS =
      children === "I am Vikram S" && index === children.length - 1;
    return (
      <span
        key={index}
        style={{
          transition: "color 0.2s ease",
          color: isLastS ? sColor : undefined,
        }}
        onMouseEnter={(e) => {
          if (!isLastS) {
            e.target.style.color = getRandomColor();
          }
        }}
        onMouseLeave={(e) => {
          if (!isLastS) {
            e.target.style.color = "";
          }
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <CustomTypography
      type="heading1"
      sx={{
        whiteSpace: "nowrap",
        ...sx,
      }}
      className={className}
    >
      {textWithHoverEffect}
    </CustomTypography>
  );
};

const AboutSection = ({ scrollToContact }) => {
  const words = [
    "Frontend",
    "Backend",
    "React",
    "FastAPI",
    "JavaScript",
    "MongoDB",
    "SQL",
  ];
  const theme = useAppTheme();

  const useWindowHeight = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    useEffect(() => {
      const handleResize = () => {
        setWindowHeight(window.innerHeight);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return windowHeight;
  };

  const windowWidth = useWindowWidth();
  const windowHeight = useWindowHeight();

  return (
    <Box>
      {/* First Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: windowHeight < 600 ? "auto" : "calc(100vh - 160px)",
          justifyContent: "center",
          gap: "16px",
          pt: { xs: 0, sm: 0 },
        }}
      >
        <CustomTypography type="subHeading" className="fade-in-text delay-1">
          Hello 👋
        </CustomTypography>
        <CustomTypographyHover
          sx={{
            mt: 1,
            cursor: "pointer",
            textAlign: "center",
            fontSize: { xs: "3rem", sm: "4.5rem", md: "6rem" },
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
          className="fade-in-text delay-2"
        >
          I am Vikram S
        </CustomTypographyHover>
        <Box className="fade-in-text delay-3">
          <TypewriterTypography words={words} />
        </Box>
        <CustomButton
          text="Connect"
          sx={{ mt: 3 }}
          onClick={scrollToContact}
          className="fade-in-text delay-4"
        />
      </Box>

      {/* Second Section */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "auto", md: "1fr 1fr" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: { xs: "0", md: "40px" },
          marginTop: "40px",
        }}
      >
        {/* Left Section */}
        <Box className="image-container fade-in-text delay-5">
          <img
            src={heroImg}
            alt="Hero"
            style={{
              width: windowWidth < 500 ? "90%" : "400px",
              borderRadius: "10px",
              height: "100%",
              opacity: 0,
              transform: "translateY(20px)",
              animation: "fadeIn 1s ease-out forwards",
            }}
          />
        </Box>

        {/* Right Section */}
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <CustomTypography type="heading3" className="fade-in-text delay-6">
            About{" "}
            <span style={{ color: theme.palette.text.highlight }}>Me</span>
          </CustomTypography>
          <CustomTypography
            type="subHeading"
            sx={{ mt: 3, fontSize: "16px" }}
            className="fade-in-text delay-7"
          >
            With{" "}
            <span style={{ color: theme.palette.text.highlight }}>
              4+ years
            </span>{" "}
            of experience, I’m all about bringing Figma designs to life through
            clean, efficient code that enhances UIs and bridges design with
            functionality. I enjoy creating and integrating APIs with database
            systems, constantly pushing myself to grow as a full stack
            professional.
          </CustomTypography>
          <CustomTypography
            type="subHeading"
            sx={{ mt: 3, fontSize: "16px" }}
            className="fade-in-text delay-8"
          >
            Feel free to get in touch with me to find out more about my work and
            my web expertise!
          </CustomTypography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutSection;
