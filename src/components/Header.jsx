import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CustomButton from "../customComponents/CustomButton";
import CustomTypography from "../customComponents/CustomTypography";
import { useAppTheme, useThemeMode } from "../context/ThemeContext";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { Link, useLocation, useNavigate } from "react-router";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import VikramS from "../assets/Vikram S.pdf";

const listItems = [
  { title: "Home", to: "/" },
  { title: "Experience", to: "/experience" },
  { title: "Projects", to: "/projects" },
];

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useAppTheme();

  const { mode, setMode } = useThemeMode(
    localStorage.getItem("mode") || "dark"
  );
  const locoationDetails = useLocation();
  const navigate = useNavigate();
  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setDrawerOpen(!drawerOpen);
  };
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = VikramS;
    link.download = "Vikram S.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.open(VikramS, "_blank");
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: theme.palette.background.default,
          boxShadow: `0px -10px 20px -2px ${theme.palette.text.highlight}`,
          zIndex: 1201,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            {drawerOpen ? (
              <IconButton
                edge="start"
                onClick={toggleDrawer}
                sx={{ color: theme.palette.text.primary }}
              >
                <CloseRoundedIcon />
              </IconButton>
            ) : (
              <IconButton
                edge="start"
                onClick={toggleDrawer}
                sx={{ color: theme.palette.text.primary }}
              >
                <MenuRoundedIcon />
              </IconButton>
            )}
          </Box>

          <Box
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              border: `3px solid ${theme.palette.text.primary}`,
              borderRadius: "100%",
              p: "3px 4px 2px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              color: theme.palette.text.primary,
              ":hover": {
                transform: "scale(1.05)",
                color: theme.palette.text.highlight,
                border: `3px solid ${theme.palette.text.highlight}`,
              },
            }}
            onClick={() => navigate("/")}
          >
            <CustomTypography
              type="bodyBold"
              sx={{
                fontWeight: "bold",
                display: { xs: "none", md: "block" },
                color: "inherit",
              }}
            >
              VS
            </CustomTypography>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              marginLeft: "-90px",
              width: "180px",
              justifyContent: "space-between",
              gap: "20px",
            }}
          >
            {listItems.map((listItem, index) => (
              <Link
                to={listItem.to}
                style={{
                  textDecoration: "none",
                }}
                key={index}
              >
                <CustomTypography
                  type="body"
                  sx={{
                    transition: "all 0.4s ease",
                    color:
                      locoationDetails.pathname === listItem.to
                        ? theme.palette.text.highlight
                        : theme.palette.text.primary,
                    "&:hover": {
                      transform: "scale(1.1)",
                      color: theme.palette.text.highlight,
                    },
                  }}
                >
                  {listItem.title}
                </CustomTypography>
              </Link>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              sx={{ color: theme.palette.text.highlight }}
              onClick={() => {
                localStorage.setItem(
                  "mode",
                  mode === "light" ? "dark" : "light"
                );
                setMode(mode === "light" ? "dark" : "light");
              }}
            >
              {mode === "light" ? (
                <DarkModeOutlinedIcon />
              ) : (
                <LightModeOutlinedIcon />
              )}
            </IconButton>
            <CustomButton
              text="Download CV"
              icon={<FileDownloadOutlinedIcon fontSize="20px" />}
              onClick={handleDownloadCV}
            />
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer}
        sx={{ "& .MuiDrawer-paper": { top: { xs: 56, sm: 64 } } }}
      >
        <Box sx={{ background: theme.palette.background.default }}>
          <List>
            {listItems.map((listItem, index) => (
              <Link
                to={listItem.to}
                style={{
                  textDecoration: "none",
                }}
                key={index}
              >
                <ListItem
                  button
                  key={listItem.title}
                  onClick={toggleDrawer}
                  sx={{
                    justifyContent: "center",
                    color:
                      locoationDetails.pathname === listItem.to
                        ? theme.palette.text.highlight
                        : theme.palette.text.primary,
                    "&:hover": {
                      transform: "scale(1.1)",
                      color: theme.palette.text.highlight,
                    },
                  }}
                >
                  {/* <ListItemText primary={listItem.title} /> */}

                  <CustomTypography
                    type="body"
                    sx={{
                      transition: "all 0.4s ease",
                      color: "inherit",
                    }}
                  >
                    {listItem.title}
                  </CustomTypography>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
