import { Box, Container } from "@mui/material";
import React, { useState } from "react";
import CustomTypography from "../customComponents/CustomTypography";
import { useAppTheme } from "../context/ThemeContext";
import CustomChip from "../customComponents/CustomChip";
import ComponentLayout from "../components/ComponentLayout";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { useNavigate } from "react-router";
import useWindowWidth from "../components/useWindowWidth";

const experienceData = [
  {
    company: "Sigmoid",
    role: "SDE II (Full Stack Developer)",
    period: "Aug 2022 - Present",
    description:
      "As a Full Stack Developer at Sigmoid, my usual day at work involves creating modern UI screens, robust front-end components, and scalable APIs. I focus on coding efficient, reusable code, optimizing API performance, and ensuring seamless integration with front-end components, all while prioritizing robust error handling and edge case testing.",
    tasks: [
      "Started as a Front-End Developer at Sigmoid and transitioned into a Full Stack Developer",
      "Progressed from SDE-1 to SDE-2, enhancing skills in efficiency and scalability across multiple projects.",
      "Proven expertise in translating Figma designs into functional code, building reusable components and pages.",
      "Excelled in designing and integrating optimized APIs, reducing database dependencies for improved performance.",
      "Consistently received positive feedback from senior leads and clients for efforts, ideas, teamwork and collaboration.",
    ],
    techStack: [
      "React",
      "FastAPI",
      "JavaScript",
      "SQL",
      "MUI",
      "Redux",
      "Node.Js",
      "Python",
      "Figma",
      "MSAL",
    ],
  },
  {
    company: "LTI - Larsen & Toubro Infotech",
    role: "Software Engineer",
    period: "Aug 2021 - Aug 2022",
    description:
      "After joining LTI as a Graduate Engineer Trainee through campus placement, I received training in front-end technologies and databases. Assigned to an internal project, I gained expertise in Power Apps, Power BI tools, and MS Dynamics 365, further developing my skills in these technologies",
    tasks: [
      "Developed interactive dashboards and implemented data analytics using Power Apps for an internal project.",
      "Integrated MS Dynamics 365 for Finance and Operations, leveraging cloud-based workflows to improve automation and operational efficiency.",
      "Contributed to the full lifecycle of application development, including coding, testing, and deployment, using MS Power Apps for Finance and Options Dashboard",
      "Trained in front-end technologies (JavaScript, React) and database systems (MySQL, SQLite) to support robust application development.",
      "Collaborated with teams to optimize workflow processes, incorporating Power BI tools for effective data visualization.",
    ],
    techStack: [
      "JavaScript",
      "React",
      "MySQL",
      "MS Power Apps",
      "MS Power BI",
      "MS Dynamics 365",
    ],
  },
  {
    company: "Openthrive",
    role: "Front-End Developer",
    period: "Jan 2021 - Aug 2021",
    description:
      "After joining Openthrive as a Front-End Developer Intern through an off-campus paid opportunity, I focused on developing efficient front-end code using vanilla JavaScript and React. Additionally, I worked with low-code platforms like HubSpot, Asana and other CRMs to accelerate and streamline web application development in earlier projects.",
    tasks: [
      "Completed a one-week training program, enhancing my HTML, CSS, JavaScript, and React skills through a hands-on internal project.",
      "Contributed to scalable, fast, and adaptable website solutions for B2B and eCommerce clients.",
      "Gained hands-on experience with HubSpot, Asana and Salesforce CRM, developing low-code applications.",
      "Delivered consistent, high-quality work by collaborating with designers across multiple projects during an eight-month internship.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "HubSpot", "Asana"],
  },
];

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(0);
  const theme = useAppTheme();
  const navigate = useNavigate();
  const windowWidth = useWindowWidth();

  return (
    <ComponentLayout>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CustomTypography
          type="heading3"
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          Journey
          <span style={{ color: theme.palette.text.highlight }}> So far</span>
        </CustomTypography>

        {windowWidth < 900 ? (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", custom900: "row" },
              gap: 4,
              alignItems: "stretch",
              [theme.breakpoints.down("custom900")]: {
                gap: 2,
              },
            }}
          >
            <Box
              sx={{
                display: { xs: "none", custom900: "flex" },
                flex: "1 1 40%",
                flexDirection: "column",
                gap: 3,
                maxWidth: { custom900: "400px" },
              }}
            >
              {experienceData.map((exp, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => setActiveCompany(index)}
                  onClick={() => setActiveCompany(index)}
                  sx={{
                    p: 3,
                    borderRadius: "0 12px 12px 0",
                    backgroundColor: theme.palette.cards.inactive,
                    color: activeCompany === index ? "white" : "text.primary",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderLeft: `5px solid ${
                      activeCompany === index
                        ? theme.palette.text.highlight
                        : theme.palette.cards.inactive
                    }`,
                    "&:hover": {
                      borderLeft: `5px solid ${theme.palette.text.highlight}`,
                      color: "white",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CustomTypography type="heading6" sx={{ fontWeight: "bold" }}>
                    {exp.role}
                  </CustomTypography>
                  <CustomTypography
                    type="subHeading"
                    sx={{
                      color:
                        activeCompany === index
                          ? theme.palette.text.highlight
                          : theme.palette.text.secondary,
                    }}
                  >
                    {exp.company}
                  </CustomTypography>
                  <CustomTypography
                    type="subText2"
                    sx={{ mt: 1, opacity: 0.8 }}
                  >
                    {exp.period}
                  </CustomTypography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", custom900: "block" },
                flex: "1 1 60%",
                p: 4,
                borderRadius: "12px 0 0 12px",
                background: theme.palette.cards.inactive,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                animation: "fadeIn 0.5s ease-in-out",
              }}
            >
              <CustomTypography
                type="heading4"
                sx={{ mb: 2, color: theme.palette.text.highlight }}
              >
                {experienceData[activeCompany].company}
              </CustomTypography>
              <CustomTypography type="body" sx={{ mb: 3 }}>
                {experienceData[activeCompany].description}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: theme.palette.text.highlight,
                    ":hover": { color: theme.palette.text.highlight },
                  }}
                  onClick={() => navigate("/experience")}
                >
                  <CustomTypography
                    type="body"
                    sx={{ color: theme.palette.text.highlight }}
                  >
                    Read More..
                  </CustomTypography>
                </Box>
              </CustomTypography>
              <Box sx={{ mb: 3 }}>
                <CustomTypography
                  type="bodyBold"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  What I Did:
                </CustomTypography>
                {experienceData[activeCompany].tasks.map((task, idx) => (
                  <CustomTypography key={idx} type="listItem" sx={{ ml: 2 }}>
                    • {task}
                  </CustomTypography>
                ))}
              </Box>
              <Box>
                <CustomTypography type="bodyBold" sx={{ fontWeight: "bold" }}>
                  Tech Stack:
                </CustomTypography>
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                  {experienceData[activeCompany].techStack.map((tech) => (
                    <CustomChip key={tech} label={tech} />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Small Screens (< 900px): Card + Details Stacked */}
            <Box
              sx={{
                display: { xs: "flex", custom900: "none" },
                flexDirection: "column",
                gap: 3,
                width: "100%",
              }}
            >
              {experienceData.map((exp, index) => (
                <React.Fragment key={index}>
                  {/* Company Card */}
                  <Box
                    onMouseEnter={() => setActiveCompany(index)}
                    onClick={() => setActiveCompany(index)}
                    sx={{
                      p: 2,
                      borderRadius: "2px",
                      backgroundColor: theme.palette.cards.inactive,
                      color: activeCompany === index ? "white" : "text.primary",
                      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      borderLeft: `5px solid ${
                        activeCompany === index
                          ? theme.palette.text.highlight
                          : theme.palette.cards.inactive
                      }`,
                      "&:hover": {
                        borderLeft: `5px solid ${theme.palette.text.highlight}`,
                        color: "white",
                        transform: "translateY(-4px)",
                      },
                    }}
                  >
                    <CustomTypography
                      type="heading6"
                      sx={{ fontWeight: "bold" }}
                    >
                      {exp.role}
                    </CustomTypography>
                    <CustomTypography
                      type="subHeading"
                      sx={{
                        color:
                          activeCompany === index
                            ? theme.palette.text.highlight
                            : theme.palette.text.secondary,
                      }}
                    >
                      {exp.company}
                    </CustomTypography>
                    <CustomTypography
                      type="subText2"
                      sx={{ mt: 1, opacity: 0.8 }}
                    >
                      {exp.period}
                    </CustomTypography>
                  </Box>

                  {/* Company Details  */}
                  {activeCompany === index && (
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: "2px",
                        background: theme.palette.cards.inactive,
                        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <CustomTypography
                        type="heading5"
                        sx={{ mb: 1, color: theme.palette.text.highlight }}
                      >
                        {exp.company}
                      </CustomTypography>
                      <CustomTypography type="body" sx={{ mb: 2 }}>
                        {exp.description}
                        <Box
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            cursor: "pointer",
                            color: theme.palette.text.highlight,
                            ":hover": { color: theme.palette.text.highlight },
                          }}
                          onClick={() => navigate("/experience")}
                        >
                          <CustomTypography
                            type="body"
                            sx={{ color: theme.palette.text.highlight }}
                          >
                            Read More..
                          </CustomTypography>
                        </Box>
                      </CustomTypography>
                      <Box sx={{ mb: 2 }}>
                        <CustomTypography
                          type="bodyBold"
                          sx={{ fontWeight: "bold", mb: 1 }}
                        >
                          What I Did:
                        </CustomTypography>
                        {exp.tasks.map((task, idx) => (
                          <CustomTypography
                            key={idx}
                            type="listItem"
                            sx={{ ml: 2 }}
                          >
                            • {task}
                          </CustomTypography>
                        ))}
                      </Box>
                      <Box>
                        <CustomTypography
                          type="bodyBold"
                          sx={{ fontWeight: "bold" }}
                        >
                          Tech Stack:
                        </CustomTypography>
                        <Box
                          sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            mt: 1,
                          }}
                        >
                          {exp.techStack.map((tech) => (
                            <CustomChip key={tech} label={tech} />
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "stretch",
            }}
          >
            {/* Company Cards */}
            <Box
              sx={{
                flex: "1 1 40%",
                display: "flex",
                flexDirection: "column",
                gap: 3,
                maxWidth: { md: "400px" },
              }}
            >
              {experienceData.map((exp, index) => (
                <Box
                  key={index}
                  onMouseEnter={() => setActiveCompany(index)}
                  onClick={() => setActiveCompany(index)}
                  sx={{
                    p: 3,
                    borderRadius: "0 12px 12px 0",
                    backgroundColor: theme.palette.cards.inactive,
                    color: activeCompany === index ? "white" : "text.primary",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    borderLeft: `5px solid ${
                      activeCompany === index
                        ? theme.palette.text.highlight
                        : theme.palette.cards.inactive
                    }`,
                    "&:hover": {
                      borderLeft: `5px solid ${theme.palette.text.highlight}`,
                      color: "white",
                      transform: "translateY(-4px)",
                    },
                  }}
                >
                  <CustomTypography type="heading6" sx={{ fontWeight: "bold" }}>
                    {exp.role}
                  </CustomTypography>
                  <CustomTypography
                    type="subHeading"
                    sx={{
                      color:
                        activeCompany === index
                          ? theme.palette.text.highlight
                          : theme.palette.text.secondary,
                    }}
                  >
                    {exp.company}
                  </CustomTypography>
                  <CustomTypography
                    type="subText2"
                    sx={{ mt: 1, opacity: 0.8 }}
                  >
                    {exp.period}
                  </CustomTypography>
                </Box>
              ))}
            </Box>

            {/* Company Details */}
            <Box
              sx={{
                flex: "1 1 60%",
                p: 4,
                borderRadius: "12px 0 0 12px",
                background: theme.palette.cards.inactive,
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                animation: "fadeIn 0.5s ease-in-out",
              }}
            >
              <CustomTypography
                type="heading4"
                sx={{
                  mb: 2,
                  color: theme.palette.text.highlight,
                }}
              >
                {experienceData[activeCompany].company}
              </CustomTypography>

              <CustomTypography type="body" sx={{ mb: 3 }}>
                {experienceData[activeCompany].description}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    color: theme.palette.text.highlight,
                    ":hover": {
                      color: theme.palette.text.highlight,
                    },
                  }}
                  onClick={() => navigate("/experience")}
                >
                  <CustomTypography
                    type={"body"}
                    sx={{ color: theme.palette.text.highlight }}
                  >
                    Read More..
                  </CustomTypography>
                </Box>
              </CustomTypography>

              {/* Tasks */}
              <Box sx={{ mb: 3 }}>
                <CustomTypography
                  type="bodyBold"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  What I Did:
                </CustomTypography>
                {experienceData[activeCompany].tasks.map((task, idx) => (
                  <CustomTypography key={idx} type="listItem" sx={{ ml: 2 }}>
                    • &nbsp;{task}
                  </CustomTypography>
                ))}
              </Box>

              {/* Tech Stack */}
              <Box>
                <CustomTypography type="bodyBold" sx={{ fontWeight: "bold" }}>
                  Tech Stack:
                </CustomTypography>
                <Box sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}>
                  {experienceData[activeCompany].techStack.map(
                    (tech, index) => (
                      <span key={index}>
                        <CustomChip label={tech} />
                      </span>
                    )
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
        )}
        {/* Animation for Right Column */}
        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Container>
    </ComponentLayout>
  );
};

export default Experience;
