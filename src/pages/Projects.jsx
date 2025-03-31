import { Box, Container, Link, IconButton } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import CustomTypography from "../customComponents/CustomTypography";
import { useAppTheme } from "../context/ThemeContext";
import { FaGithub } from "react-icons/fa";
import { MdOpenInNew } from "react-icons/md";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import CustomChip from "../customComponents/CustomChip";
import ComponentLayout from "../components/ComponentLayout";
import { useNavigate } from "react-router";

const projectData = [
  {
    name: "FitHub [E-Commerce Platform]",
    description:
      "A full stack e-commerce platform for fitness enthusiasts, offering a seamless shopping experience with fitness equipment, protein-rich foods, and supplements.",
    features: [
      "Multi-user access with secure login for admins and regular users.",
      "User-friendly browsing, cart functionality, order placement, and order history tracking.",
      "Admin controls for managing products and updating order statuses.",
    ],
    techUsed: ["FastAPI", "React", "MongoDB", "Material-UI"],
    liveSite: "https://fit-hub-app.netlify.app/",
    githubRepoUrl: "https://github.com/vikram1155/ecommerce-app",
  },
  {
    name: "TaskHub",
    description:
      "A full stack task management application inspired by Jira, designed to enhance team collaboration and task tracking with a multi-user platform.",
    features: [
      "Multi-user login system with secure roles for regular users and admins.",
      "Task creation, editing, and assignment with status tracking and filtering by date or team member.",
      "Admin controls to manage team members and update their details.",
      "Responsive dashboard with upcoming deadlines and overdue task alerts.",
      "Intuitive UI built with Material-UI for seamless task and team oversight.",
    ],
    techUsed: [
      "FastAPI",
      "React",
      "MongoDB",
      "Material-UI",
      "Redux",
      "React Router",
    ],
    liveSite: "https://taskhub-app.netlify.app/",
    githubRepoUrl: "https://github.com/vikram1155/task-manager",
  },
];

const Projects = () => {
  const theme = useAppTheme();
  const hoverTimeoutRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [expandedIndices, setExpandedIndices] = useState(new Set());
  const navigate = useNavigate();

  const toggleExpand = (index) => {
    setExpandedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleMouseEnter = (index) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(index);
    }, 100);
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredIndex(null);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  return (
    <ComponentLayout>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 1,
        }}
      >
        <CustomTypography
          type="heading3"
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <span style={{ color: theme.palette.text.highlight }}>Built </span>
          From Scratch
        </CustomTypography>

        {/* Responsive Masonry Layout */}
        <Box sx={{ mx: "auto", width: "100%" }}>
          <ResponsiveMasonry
            columnsCountBreakPoints={{
              350: 1,
              750: 2,
              900: projectData.length >= 3 ? 3 : 2,
            }}
          >
            <Masonry gutter="16px" style={{ gap: "30px" }}>
              {projectData.map((project, index) => {
                const isHovered = hoveredIndex === index;
                const isExpanded = expandedIndices.has(index);
                const isActive = isHovered || isExpanded;

                return (
                  <Box
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    sx={{
                      transition: "transform 1s ease",
                      zIndex: isActive ? 10 : 1,
                      position: "relative",
                      breakInside: "avoid",
                      width: "100%",
                    }}
                  >
                    {/* Card */}
                    <Box
                      sx={{
                        width: "100%",
                        backgroundColor: theme.palette.cards.inactive,
                        borderRadius: "12px",
                        p: 3,
                        boxShadow: isActive
                          ? `${theme.palette.boxShadow.active} 0px 0px 30px -10px`
                          : `${theme.palette.boxShadow.inactive} 4px 4px 12px`,
                        transition: "all 1s ease",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        cursor: "pointer",
                        position: "relative",
                        mb: "20px",
                      }}
                    >
                      {isExpanded ? (
                        <IconButton
                          sx={{
                            position: "absolute",
                            right: -2,
                            top: -2,
                            rotate: "45deg",
                            color: isActive
                              ? theme.palette.text.highlight
                              : theme.palette.text.primary,
                          }}
                          onClick={() => toggleExpand(index)}
                        >
                          <PushPinIcon />
                        </IconButton>
                      ) : isHovered ? (
                        <IconButton
                          onClick={() => toggleExpand(index)}
                          sx={{
                            position: "absolute",
                            right: -2,
                            top: -2,
                            rotate: "45deg",
                            color: isActive
                              ? theme.palette.text.highlight
                              : theme.palette.text.primary,
                          }}
                        >
                          <PushPinOutlinedIcon />
                        </IconButton>
                      ) : (
                        ""
                      )}

                      {/* Always Visible Content */}
                      <Box>
                        <CustomTypography
                          type="heading5"
                          sx={{
                            mb: 2,
                            color: isActive
                              ? theme.palette.text.highlight
                              : theme.palette.text.primary,
                          }}
                        >
                          {project.name}
                        </CustomTypography>
                        <CustomTypography
                          type="subText"
                          sx={{ mb: 2, color: "inherit" }}
                        >
                          {project.techUsed.map((tech, index) => (
                            <span key={index}>
                              <CustomChip label={tech} />
                            </span>
                          ))}
                        </CustomTypography>
                        <CustomTypography
                          type="body"
                          sx={{ mb: 2, color: "inherit" }}
                        >
                          {project.description}
                        </CustomTypography>
                      </Box>

                      {/* Expanded Content */}
                      {isActive && (
                        <Box
                          sx={{
                            animation: "slideDown 2s ease",
                            transition: "all 1s ease",
                            opacity: isActive ? 1 : 0,
                            maxHeight: isActive ? "1000px" : "0",
                            overflow: "hidden",
                            mb: 2,
                          }}
                        >
                          <CustomTypography type="bodyBold" sx={{ mb: 1 }}>
                            Features:
                          </CustomTypography>
                          {project.features?.map((feature, idx) => (
                            <CustomTypography
                              key={idx}
                              type="listItem"
                              sx={{ ml: 2 }}
                            >
                              • &nbsp;{feature}
                            </CustomTypography>
                          ))}
                          <Box onClick={() => navigate("/projects")}>
                            <CustomTypography
                              type="bodyBold"
                              sx={{
                                mb: 2,
                                color: theme.palette.text.highlight,
                              }}
                            >
                              More...
                            </CustomTypography>
                          </Box>
                        </Box>
                      )}

                      {/* Links (Always Visible) */}
                      {isActive && (
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Link
                            href={project.liveSite}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              textDecoration: "none",
                              color: theme.palette.text.primary,
                              "&:hover": {
                                color: theme.palette.text.highlight,
                                textDecoration: "underline",
                              },
                            }}
                            onMouseEnter={(e) => e.stopPropagation()}
                            onMouseLeave={(e) => e.stopPropagation()}
                          >
                            <MdOpenInNew size={20} />
                            <CustomTypography
                              type="subText"
                              sx={{
                                ml: 1,
                                color: "inherit",
                              }}
                            >
                              Live Site
                            </CustomTypography>
                          </Link>
                          <Link
                            href={project.githubRepoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              textDecoration: "none",
                              color: theme.palette.text.primary,
                              "&:hover": {
                                color: theme.palette.text.highlight,
                                textDecoration: "underline",
                              },
                            }}
                            onMouseEnter={(e) => e.stopPropagation()}
                            onMouseLeave={(e) => e.stopPropagation()}
                          >
                            <FaGithub size={20} />
                            {isActive && (
                              <CustomTypography
                                type="subText"
                                sx={{
                                  ml: 1,
                                  color: "inherit",
                                }}
                              >
                                Repo
                              </CustomTypography>
                            )}
                          </Link>
                        </Box>
                      )}
                    </Box>
                  </Box>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        </Box>

        {/* Animation */}
        <style jsx>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              max-height: 0;
            }
            to {
              opacity: 1;
              max-height: 1000px;
            }
          }
        `}</style>
      </Container>
    </ComponentLayout>
  );
};

export default Projects;
