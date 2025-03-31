import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Collapse,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CustomTypography from "../customComponents/CustomTypography";
import { useAppTheme } from "../context/ThemeContext";
import "../pages/styles.css";

function Experience() {
  const theme = useAppTheme();
  const [expanded, setExpanded] = useState({});
  const [expandedHeading, setExpandedHeading] = useState({});

  const sigmoidCollapseRef = useRef(null);
  const ltiCollapseRef = useRef(null);
  const openthriveCollapseRef = useRef(null);

  const handleToggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleToggleHeading = (index) => {
    setExpandedHeading((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (expandedHeading[0] && sigmoidCollapseRef.current) {
      sigmoidCollapseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expandedHeading]);

  useEffect(() => {
    if (expandedHeading[1] && ltiCollapseRef.current) {
      ltiCollapseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expandedHeading]);

  useEffect(() => {
    if (expandedHeading[2] && openthriveCollapseRef.current) {
      openthriveCollapseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expandedHeading]);

  return (
    <Box>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "30px auto 40px auto",
          padding: { xs: "20px 15px", md: "40px" },
          backgroundColor: "background.default",
          borderRadius: "12px",
          boxShadow: `0px 1px 20px -12px ${theme.palette.text.highlight}`,
        }}
      >
        {/* Header Section */}
        <CustomTypography
          type="heading4"
          sx={{ mb: 2, textAlign: "center" }}
          className="fade-in-text delay-1"
        >
          My Professional{" "}
          <span style={{ color: theme.palette.text.highlight }}>Journey</span>
        </CustomTypography>
        <CustomTypography
          type="body"
          sx={{ my: 4, textAlign: "center" }}
          className="fade-in-text delay-2"
        >
          Over 4+ years, I’ve evolved from mastering HTML, CSS, and JavaScript
          to building dynamic UIs with React, Redux, and various UI libraries.
          As I progressed, I deepened my expertise in databases like SQLite,
          Firebase, and MongoDB, enabling efficient data management. My journey
          then expanded into backend development, working with FastAPI, Python,
          and Node.js to build scalable and optimized APIs. <br />
          <br />
          Now, as a Full Stack Developer, I seamlessly convert Figma designs
          into code, develop reusable components, develop and integrate
          high-performance APIs, ensuring smooth and efficient user experiences.
          To date, I've worked with three companies, gaining diverse expertise
          and knowledge, which are listed below.
        </CustomTypography>

        <Divider sx={{ mb: 4 }} className="fade-in-text delay-3" />

        {/* Current Role Section (Sigmoid) */}
        <Box className="fade-in-text delay-3">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <CustomTypography type="heading5h">
              Software Development Engineer II (Full Stack)
            </CustomTypography>
            <IconButton
              onClick={() => handleToggleHeading(0)}
              sx={{
                color: theme.palette.text.highlight,
                p: 0.5,
              }}
            >
              {expandedHeading[0] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <CustomTypography
              type="heading6"
              onClick={() => {
                window.open("https://www.sigmoid.com/", "_blank");
              }}
              sx={{
                cursor: "pointer",
                ":hover": {
                  color: theme.palette.text.highlight,
                },
              }}
            >
              Sigmoid
            </CustomTypography>
            <Box>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/company/sigmoid-analytics",
                    "_blank"
                  );
                }}
                sx={{
                  color: theme.palette.text.primary,
                  p: 0.5,
                  ":hover": {
                    color: theme.palette.text.highlight,
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </IconButton>
            </Box>
          </Box>

          <CustomTypography type="subText2" sx={{ mb: 2 }}>
            August, 2022 - Present
          </CustomTypography>

          <CustomTypography type="body" sx={{ mb: 2 }}>
            Sigmoid is a data engineering and AI solutions company that empowers
            enterprises to make data-driven decisions. Given its data-intensive
            nature, the need for visually compelling graphs, charts, tables, and
            faster, optimized APIs is critical—while also ensuring data
            security.
            <br />
            <br />
            As a Full Stack Developer, I work on translating Figma designs into
            real-world code, designing and developing reusable components and
            pages, and building and integrating APIs on daily basis. I also
            focus on optimizing code to reduce database dependencies and enhance
            performance.
            <br />
            <br />
            Currently thriving as an SDE-2 at Sigmoid, I have grown from an
            SDE-1 role into a versatile full stack developer, continually
            improving efficiency and scalability across projects.
          </CustomTypography>

          <Collapse in={expandedHeading[0]} timeout="auto" unmountOnExit>
            <Box ref={sigmoidCollapseRef} sx={{ pt: 1 }}>
              <List sx={{ mb: 4 }}>
                {/* KEnvue - DMP Product */}
                <ListItem
                  alignItems="flex-start"
                  sx={{ flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                      Kenvue - DMP (Full Stack)
                    </CustomTypography>
                    <IconButton
                      onClick={() => handleToggle(0)}
                      sx={{ color: theme.palette.text.highlight, p: 0.5 }}
                    >
                      {expanded[0] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  <CustomTypography
                    type="body"
                    sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                  >
                    Being an integral part of the main team, I contributed to
                    building a robust web application featuring multiple
                    domains, multiple data products and datasets. The data is
                    sourced dynamically through various APIs integrated and
                    efficiently managed using Redux for seamless state
                    management across the app.
                  </CustomTypography>
                  <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
                    <List sx={{ pl: 2 }}>
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• Dynamic Data Visualization & Management: </b>
                            Built comprehensive features for viewing,
                            downloading, and modifying dynamic reports, tables,
                            forms, and datasets. Ensured we are delivering an
                            intuitive interface with interactive elements,
                            optimized for usability and performance.
                          </CustomTypography>
                        }
                      />
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• Secure Authentication & Access: </b>{" "}
                            Implemented Microsoft Azure Active Directory (MSAL)
                            for secure, enterprise-grade authentication,
                            ensuring safe and controlled access to data spanning
                            multiple domains
                          </CustomTypography>
                        }
                      />
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>
                              • Interactive Chatbot with Real-Time Integration:{" "}
                            </b>
                            Developed a fully functional chatbot with live,
                            bidirectional API integration, and an enhanced user
                            experience made for domain-specific queries.
                          </CustomTypography>
                        }
                      />
                    </List>
                  </Collapse>
                </ListItem>
                <Divider sx={{ m: 1.5 }} />
                {/* Fresh Insights - Canteen (Compass) Groups */}
                <ListItem
                  alignItems="flex-start"
                  sx={{ flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                      Compass Groups - Fresh Insights Canteen (Full Stack)
                    </CustomTypography>
                    <IconButton
                      onClick={() => handleToggle(1)}
                      sx={{ color: theme.palette.text.highlight, p: 0.5 }}
                    >
                      {expanded[1] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  <CustomTypography
                    type="body"
                    sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                  >
                    Canteen operates as part of Compass Group North America,
                    serving over 10 million meals daily across various sectors.
                    They’re all about enhancing the break experience, whether
                    through a quick snack or a full dining setup, while keeping
                    sustainability, wellness, and community at the core of their
                    mission.
                    <br />
                    <br />
                    Being one of just two full stack developers, I was pleased
                    to play a key part in constructing a full stack e-commerce
                    web app from the ground level.
                  </CustomTypography>
                  <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
                    <List sx={{ pl: 2 }}>
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• Responsive screens: </b>Designed and developed
                            multiple User friendly webpages, enabling users to
                            browse available items, create and place orders,
                            track order status, monitor food item depletion with
                            automated alerts, and access order history and
                            inventory analysis for optimized decision-making.
                          </CustomTypography>
                        }
                      />
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• Advanced features: </b>Implemented several
                            features including recommended products based on
                            route-specific data via dashboards, reports, tables,
                            and charts to provide better insights, and ensured
                            seamless functionality with robust state management
                            and comprehensive error handling.
                          </CustomTypography>
                        }
                      />
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• Robust and Secure:</b> Built front-end screens
                            and back-end APIs, ensuring seamless integrations,
                            secure API interactions, and error-free components
                            with enhanced error handling for a superior user
                            experience.
                          </CustomTypography>
                        }
                      />
                    </List>
                  </Collapse>
                </ListItem>
                <Divider sx={{ m: 1.5 }} />
                {/* Aura/Bain Project */}
                <ListItem
                  alignItems="flex-start"
                  sx={{ flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                      Aura/Bain Project (Front-End)
                    </CustomTypography>
                    <IconButton
                      onClick={() => handleToggle(2)}
                      sx={{ color: theme.palette.text.highlight, p: 0.5 }}
                    >
                      {expanded[2] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  <CustomTypography
                    type="body"
                    sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                  >
                    Aura, from Bain & Company, provides workforce analytics and
                    insights for consulting firms and enterprises. It analyzes
                    over 1 billion data points on hiring, attrition, skills, and
                    job market trends to help organizations make data-driven
                    decisions via interactive dashboards, custom reports, and
                    real-time insights.
                    <br />
                    <br />
                    As the only front-end developer on the team, I was happy
                    building UI components, incorporating redux, integrating
                    APIs, while handling errors to improve the user experience.
                  </CustomTypography>
                  <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
                    <List sx={{ pl: 2 }}>
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• Interactive Data Visualization: </b>Created
                            responsive screens with multiple dashboards,
                            reports, tables, and charts to demonstrate data
                            received in an eye pleasing way based on Figma
                            designs
                          </CustomTypography>
                        }
                      />
                      <ListItemText
                        primary={
                          <CustomTypography type="listItem">
                            <b>• User Functionalities: </b> Allowed users to
                            create, edit, download import CSV data of a
                            particular product/domain, generate reports with an
                            optimized UI/UX, alongside access management, and
                            analytical tool oversight.
                          </CustomTypography>
                        }
                      />
                    </List>
                  </Collapse>
                </ListItem>
                <Divider sx={{ m: 1.5 }} />
                {/* Colgate MDH NAM */}
                <ListItem
                  alignItems="flex-start"
                  sx={{ flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                      Colpal MDH/FAH - Colgate and Palmolive (Front-End)
                    </CustomTypography>
                    <IconButton
                      onClick={() => handleToggle(3)}
                      sx={{ color: theme.palette.text.highlight, p: 0.5 }}
                    >
                      {expanded[3] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </IconButton>
                  </Box>
                  <CustomTypography
                    type="body"
                    sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                  >
                    This application was developed for Colpal to support their
                    financial analytics and market data management, where I
                    contributed as one of three developers, building the entire
                    app from the base featuring multiple dashboards, reports,
                    tables, visualizations, and analytical tools.
                  </CustomTypography>
                  <Collapse in={expanded[3]} timeout="auto" unmountOnExit>
                    <List sx={{ pl: 2 }}>
                      <ListItemText
                        primary={
                          <CustomTypography type="body">
                            <b>• Eye-pleasing components: </b>Transformed Figma
                            designs into functional code using React, Redux, and
                            various third-party libraries to deliver better UI
                            experience. Seamlessly integrated multiple APIs from
                            live databases, creating visually appealing and
                            interactive components.
                          </CustomTypography>
                        }
                      />
                      <ListItemText
                        primary={
                          <CustomTypography type="body">
                            <b>• Smoother UIs: </b>Improved UI/UX by
                            implementing seamless state management and
                            minimizing backend and database dependency by 60%
                            through optimized front-end code, leveraging Redux
                            to reduce multiple API calls and enhance
                            performance.
                          </CustomTypography>
                        }
                      />
                    </List>
                  </Collapse>
                </ListItem>
                <Divider sx={{ m: 1.5 }} />
                {/* Other FE Contributions */}
                <ListItem
                  alignItems="flex-start"
                  sx={{ flexDirection: "column" }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                      Other Front-End Contributions
                    </CustomTypography>
                  </Box>
                  <CustomTypography
                    type="body"
                    sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                  >
                    Beyond this project, I have contributed to a variety of
                    initiatives, where I mentored new interns and junior
                    developers, guiding them on coding standards, best
                    practices, and technical workflows.
                    <br />
                    <br /> I also led internal tech sessions on React and
                    FastAPI, fostering knowledge sharing within the team, while
                    continuously learning and refining my expertise in multiple
                    technologies—an enriching and rewarding journey!
                  </CustomTypography>
                </ListItem>
              </List>
            </Box>
          </Collapse>
          <Divider sx={{ my: 2.5 }} className="fade-in-text delay-4" />

          {/* LTI */}
          <Box className="fade-in-text delay-4">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <CustomTypography type="heading5h">
                Software Engineer (Power Apps Developer)
              </CustomTypography>
              <IconButton
                onClick={() => handleToggleHeading(1)}
                sx={{
                  color: theme.palette.text.highlight,
                  p: 0.5,
                }}
              >
                {expandedHeading[1] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <CustomTypography
                type="heading6"
                onClick={() => {
                  window.open("https://www.ltimindtree.com/", "_blank");
                }}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    color: theme.palette.text.highlight,
                  },
                }}
              >
                LTI - Larsen & Toubro Infotech
              </CustomTypography>
              <Box>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/l&t-infotech/",
                      "_blank"
                    );
                  }}
                  sx={{
                    color: theme.palette.text.primary,
                    p: 0.5,
                    ":hover": {
                      color: theme.palette.text.highlight,
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>

            <CustomTypography type="subText2" sx={{ mb: 2 }}>
              August, 2021 - August, 2022
            </CustomTypography>

            <CustomTypography type="body" sx={{ mb: 2 }}>
              Recruited by LTI via campus placement, I gained extensive training
              in front-end technologies like JavaScript and React, as well as
              database management with MySQL and SQLite. <br />
              <br />
              As a fresher, I played an essential role in the development,
              testing, and deployment of applications using MS Power Apps.
            </CustomTypography>

            <Collapse in={expandedHeading[1]} timeout="auto" unmountOnExit>
              <Box ref={ltiCollapseRef} sx={{ pt: 1 }}>
                <List sx={{ mb: 4 }}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{ flexDirection: "column" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                        Power Apps | MS Dynamics 365
                      </CustomTypography>
                    </Box>
                    <CustomTypography
                      type="body"
                      sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                    >
                      I was assigned to an internal project as a Power Apps
                      Developer, where I developed interactive dashboards and
                      implemented data analytics using MS Power Apps. <br />I
                      also integrated MS Dynamics 365 for Finance and
                      Operations, leveraging cloud-based workflows to enhance
                      automation. Additionally, I worked with BI tools for data
                      visualization and collaborated with teams to optimize
                      workflow processes.
                    </CustomTypography>
                  </ListItem>
                </List>
              </Box>
            </Collapse>
          </Box>
          <Divider sx={{ my: 2.5 }} className="fade-in-text delay-5" />

          {/* Openthrive */}
          <Box className="fade-in-text delay-5">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                mb: 1,
              }}
            >
              <CustomTypography type="heading5h">
                Web Developer [Intern]
              </CustomTypography>
              <IconButton
                onClick={() => handleToggleHeading(2)}
                sx={{
                  color: theme.palette.text.highlight,
                  p: 0.5,
                }}
              >
                {expandedHeading[2] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </IconButton>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <CustomTypography
                type="heading6"
                onClick={() => {
                  window.open("https://openthrive.com/", "_blank");
                }}
                sx={{
                  cursor: "pointer",
                  ":hover": {
                    color: theme.palette.text.highlight,
                  },
                }}
              >
                Openthrive
              </CustomTypography>
              <Box>
                <IconButton
                  onClick={() => {
                    window.open(
                      "https://www.linkedin.com/company/openthrive/",
                      "_blank"
                    );
                  }}
                  sx={{
                    color: theme.palette.text.primary,
                    p: 0.5,
                    ":hover": {
                      color: theme.palette.text.highlight,
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Box>
            </Box>

            <CustomTypography type="subText2" sx={{ mb: 2 }}>
              Jan, 2021 - August, 2021
            </CustomTypography>

            <CustomTypography type="body" sx={{ mb: 2 }}>
              In my final year of college, I was eager to gain hands-on
              experience with real-world projects and started applying for
              internship roles. I secured an off-campus paid internship as a Web
              Developer Intern at Openthrive and quickly adapted to the role.
              <br />
              <br />
              Openthrive is all about creating scalable, fast, and adaptable
              website experiences that distribute content across multiple
              devices, channels, and platforms providing transformation
              services, primarily for B2B and eCommerce businesses.
            </CustomTypography>

            <Collapse in={expandedHeading[2]} timeout="auto" unmountOnExit>
              <Box ref={openthriveCollapseRef} sx={{ pt: 1 }}>
                <List sx={{ mb: 4 }}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{ flexDirection: "column" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                      }}
                    >
                      <CustomTypography type="heading6h" sx={{ flexGrow: 1 }}>
                        Web Developer - FE | Multiple Projects
                      </CustomTypography>
                    </Box>
                    <CustomTypography
                      type="body"
                      sx={{ fontSize: "14px", fontWeight: 500, mt: 1 }}
                    >
                      After a brief one-week training on the fundamentals, I
                      started working on an active project, where I honed my
                      skills in HTML, CSS, JavaScript, and React.
                      <br />
                      <br /> Additionally, I gained experience using HubSpot,
                      Asana and Salesforce CRM to deploy and create low-code
                      apps. Over the span of eight months, I worked on multiple
                      projects, consistently delivering my best. It was truly a
                      valuable internship experience!
                    </CustomTypography>
                  </ListItem>
                </List>
              </Box>
            </Collapse>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Experience;
