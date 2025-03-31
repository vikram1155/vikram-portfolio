import { Box } from "@mui/material";
import React from "react";
import CustomTypography from "../customComponents/CustomTypography";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiPython,
  DiSqllite,
  DiMongodb,
  DiFirebase,
  DiDocker,
  DiGit,
} from "react-icons/di";
import {
  SiMui,
  SiNextdotjs,
  SiTypescript,
  SiFigma,
  SiRedux,
} from "react-icons/si";
import { useAppTheme } from "../context/ThemeContext";
import ComponentLayout from "../components/ComponentLayout";
import useWindowWidth from "../components/useWindowWidth";

function SkillsSection() {
  const skills = [
    { name: "HTML", icon: <DiHtml5 /> },
    { name: "CSS", icon: <DiCss3 /> },
    { name: "JavaScript", icon: <DiJavascript1 /> },
    { name: "React", icon: <DiReact /> },
    { name: "Redux", icon: <SiRedux /> },
    { name: "MUI", icon: <SiMui /> },
    { name: "Python", icon: <DiPython /> },
    { name: "FastAPI", icon: <DiGit /> },
    { name: "SQL", icon: <DiSqllite /> },
    { name: "MongoDB", icon: <DiMongodb /> },
    { name: "Firebase", icon: <DiFirebase /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "Docker", icon: <DiDocker /> },
    { name: "Figma", icon: <SiFigma /> },
  ];
  const theme = useAppTheme();
  const repeatedSkills = Array(100).fill(skills).flat();
  const repeatedSkillsOdd = Array(100).fill(skills.slice(0, 7)).flat();
  const repeatedSkillsEven = Array(100).fill(skills.slice(8, 16)).flat();
  const windowWidth = useWindowWidth();

  return (
    <ComponentLayout>
      {/* Heading */}
      <CustomTypography type="heading3" sx={{ textAlign: "center", mb: 4 }}>
        <span style={{ color: theme.palette.text.highlight }}> Tech </span>I Use
      </CustomTypography>

      {/* Scroller Container */}
      {windowWidth > 500 ? (
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
            "&:hover .scroller": {
              animationPlayState: "paused",
              cursor: "pointer",
            },
          }}
        >
          <Box
            className="scroller"
            sx={{
              display: "flex",
              gap: { xs: 5, sm: 8, md: 10 },
              animation: "scroll 100s linear infinite",
              whiteSpace: "nowrap",
              "@keyframes scroll": {
                "0%": { transform: "translateX(0)" },
                "100%": {
                  transform: () => `translateX(-${skills.length * 1000}px)`,
                },
              },
            }}
          >
            {repeatedSkills.map((skill, index) => (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: { xs: 1, sm: 1.5 },
                  justifyContent: "space-between",
                  color: theme.palette.text.primary,
                  ":hover": {
                    color: theme.palette.text.highlight,
                  },
                }}
                key={index}
              >
                <Box
                  sx={{
                    fontSize: { xs: "30px", sm: "50px" },
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    filter: (theme) =>
                      theme.palette.mode === "dark"
                        ? "brightness(1.2)"
                        : "none",
                  }}
                >
                  {skill.icon}
                </Box>

                <CustomTypography
                  type="subText"
                  sx={{
                    textTransform: "uppercase",
                    color: "inherit",
                    fontWeight: 600,
                  }}
                >
                  {skill.name}
                </CustomTypography>
              </Box>
            ))}
          </Box>
        </Box>
      ) : (
        <>
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              "&:hover .scroller": {
                animationPlayState: "paused",
                cursor: "pointer",
              },
            }}
          >
            <Box
              className="scroller"
              sx={{
                display: "flex",
                gap: { xs: 5, sm: 8, md: 10 },
                animation: "scroll 100s linear infinite",
                whiteSpace: "nowrap",
                "@keyframes scroll": {
                  "0%": { transform: "translateX(0)" },
                  "100%": {
                    transform: () => `translateX(-${skills.length * 1000}px)`,
                  },
                },
              }}
            >
              {repeatedSkillsOdd.map((skill, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.5 },
                    justifyContent: "space-between",
                    color: theme.palette.text.primary,
                    ":hover": {
                      color: theme.palette.text.highlight,
                    },
                  }}
                >
                  <Box
                    key={index}
                    sx={{
                      fontSize: { xs: "30px", sm: "50px" },
                      color: "inherit",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      filter: (theme) =>
                        theme.palette.mode === "dark"
                          ? "brightness(1.2)"
                          : "none",
                    }}
                  >
                    {skill.icon}
                  </Box>

                  <CustomTypography
                    type="subText"
                    sx={{
                      textTransform: "uppercase",
                      color: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    {skill.name}
                  </CustomTypography>
                </Box>
              ))}
            </Box>
          </Box>
          <br></br>
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              position: "relative",
              "&:hover .scroller": {
                animationPlayState: "paused",
                cursor: "pointer",
              },
            }}
          >
            <Box
              className="scroller"
              sx={{
                display: "flex",
                gap: { xs: 5, sm: 8, md: 10 },
                animation: "scroll 100s linear infinite",
                whiteSpace: "nowrap",
                "@keyframes scroll": {
                  "0%": { transform: "translateX(0)" },
                  "100%": {
                    transform: () => `translateX(-${skills.length * 1000}px)`,
                  },
                },
              }}
            >
              {repeatedSkillsEven.map((skill, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: { xs: 1, sm: 1.5 },
                    justifyContent: "space-between",
                    color: theme.palette.text.primary,
                    ":hover": {
                      color: theme.palette.text.highlight,
                    },
                  }}
                >
                  <Box
                    key={index}
                    sx={{
                      fontSize: { xs: "30px", sm: "50px" },
                      color: "inherit",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      filter: (theme) =>
                        theme.palette.mode === "dark"
                          ? "brightness(1.2)"
                          : "none",
                    }}
                  >
                    {skill.icon}
                  </Box>

                  <CustomTypography
                    type="subText"
                    sx={{
                      textTransform: "uppercase",
                      color: "inherit",
                      fontWeight: 600,
                    }}
                  >
                    {skill.name}
                  </CustomTypography>
                </Box>
              ))}
            </Box>
          </Box>
        </>
      )}
    </ComponentLayout>
  );
}

export default SkillsSection;
