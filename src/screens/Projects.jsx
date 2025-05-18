import React, { useState, useEffect, useRef } from "react";
import { Box, Collapse, Divider, IconButton } from "@mui/material";
import CustomTypography from "../customComponents/CustomTypography";
import { useAppTheme } from "../context/ThemeContext";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import CustomChip from "../customComponents/CustomChip";

const ProjectLink = ({ label, url, isBold = false, theme }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      ":hover": {
        color: theme.palette.text.highlight,
      },
    }}
    onClick={() => window.open(url, "_blank")}
  >
    <CustomTypography
      type={isBold ? "bodyBold" : "body"}
      sx={{ color: "inherit" }}
    >
      {label}
    </CustomTypography>
    <OpenInNewRoundedIcon fontSize="20px" sx={{ color: "inherit" }} />
  </Box>
);

const ProjectLinks = ({
  label,
  liveUrl,
  repoFrontend,
  repoBackend,
  techStack,
  theme,
}) => (
  <Box
    sx={{
      display: "flex",
      mb: 1,
      flexDirection: "column",
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <CustomTypography type="bodyBold">Live at: </CustomTypography>
      <ProjectLink label={label} url={liveUrl} theme={theme} />
    </Box>

    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        flexWrap: "wrap",
        my: 1,
      }}
    >
      <CustomTypography type="bodyBold">Repositories:</CustomTypography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          justifyContent: "center",
        }}
      >
        <ProjectLink label="Frontend " url={repoFrontend} theme={theme} />
        |
        <ProjectLink label="Backend " url={repoBackend} theme={theme} />
      </Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        mt: 1,
        flexWrap: "wrap",
      }}
    >
      {techStack?.map((item) => (
        <CustomChip key={item} label={item} sx={{ mr: 0.2 }} />
      ))}
    </Box>
  </Box>
);

function Projects() {
  const theme = useAppTheme();
  const [expanded, setExpanded] = useState({});

  const fitHubCollapseRef = useRef(null);
  const taskHubCollapseRef = useRef(null);
  const expenseTrackerCollapseRef = useRef(null);

  const handleToggle = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    if (expanded[0] && fitHubCollapseRef.current) {
      fitHubCollapseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expanded]);

  useEffect(() => {
    if (expanded[1] && taskHubCollapseRef.current) {
      taskHubCollapseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expanded]);

  useEffect(() => {
    if (expanded[2] && expenseTrackerCollapseRef.current) {
      expenseTrackerCollapseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expanded]);

  return (
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
      <Box>
        <CustomTypography
          type="heading4"
          sx={{ mb: 2, textAlign: "center" }}
          className="fade-in-text delay-1"
        >
          Personal{" "}
          <span style={{ color: theme.palette.text.highlight }}>Projects</span>
        </CustomTypography>
        <CustomTypography
          type="body"
          sx={{ my: 4, textAlign: "center" }}
          className="fade-in-text delay-2"
        >
          This section showcases my ability to design and build full stack
          applications from scratch, highlighting my skills in front-end,
          backend, and database integration. I created these projects to
          demonstrate my eligibility as a versatile full stack developer using
          FARM stack (React, FastAPI, MongoDB) and MERN stack(MongoDB,
          Express.js, React and Node.js) alongside Redux, TypeScript,
          JavaScript, Material-UI, and related technologies.
          <br />
          <br />
          Inspired by various website designs, I sketched my ideas, refined them
          into clear visions, and transformed them into functional code. Check
          out these projects below and any feedback is welcome!😊
        </CustomTypography>
      </Box>

      <Divider sx={{ mb: 4 }} className="fade-in-text delay-3" />

      {/* FitHub */}
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
            FitHub: E-Commerce Fitness Store
          </CustomTypography>
          <IconButton
            onClick={() => handleToggle(0)}
            sx={{
              color: theme.palette.text.highlight,
              p: 0.5,
            }}
          >
            {expanded[0] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <ProjectLinks
          label="Fit Hub"
          liveUrl="https://fit-hub-app.netlify.app/"
          repoFrontend="https://github.com/vikram1155/ecommerce-app"
          repoBackend="https://github.com/vikram1155/ecommerce-app-be"
          techStack={["React", "FastAPI", "MongoDB", "Redux", "MUI", "MUI-X"]}
          theme={theme}
        />

        <CustomTypography type="subText" sx={{ mb: 2 }}>
          FitHub is a full stack e-commerce platform designed for fitness
          enthusiasts, offering a seamless shopping experience for fitness
          equipment, protein-rich foods, and supplements. Built with a modern
          FARM stack (FastAPI, React, MongoDB), this multi-user application
          supports distinct roles for admins and users, providing robust
          features like product management, cart functionality, and order
          tracking.
        </CustomTypography>

        <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
          <Box ref={fitHubCollapseRef} sx={{ pt: 1 }}>
            {/* Detailed Description */}
            <CustomTypography type="heading6h" sx={{ mb: "15px" }}>
              Detailed Description
            </CustomTypography>
            <Box sx={{ mb: "20px", ml: { xs: "5px", sm: "20px" } }}>
              <CustomTypography
                type="body"
                component="ul"
                sx={{ paddingLeft: { xs: "5px", sm: "20px" } }}
              >
                <li>
                  <CustomTypography type="listItem">
                    <strong>Multi-User Access:</strong> Supports two user
                    types—admins and regular users—with secure login
                    functionality.
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>User Features:</strong> Users can browse a variety
                    of fitness products, view detailed descriptions, add items
                    to their cart, place orders, and review their order history.
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Admin Capabilities:</strong> Admins have full
                    control, including creating, updating, and deleting
                    products, as well as managing all user orders by updating
                    statuses (e.g., "In Progress" or "Completed").
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Product Categories:</strong>
                    <ul style={{ paddingLeft: "10px" }}>
                      <CustomTypography type="listItem">
                        <strong>Equipment:</strong> Dumbbells, barbells, weight
                        plates, and other fitness accessories.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        <strong>Protein-Rich Foods:</strong> Chicken, lentils,
                        eggs, and more.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        <strong>Supplements:</strong> Whey protein, creatine,
                        and other performance enhancers.
                      </CustomTypography>
                    </ul>
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Responsive Design:</strong> Built with React and
                    Material-UI for a user-friendly, mobile-responsive
                    interface.
                  </CustomTypography>
                </li>
              </CustomTypography>
            </Box>

            {/* Tech Stack Used */}
            <CustomTypography type="heading6h" sx={{ mb: "15px" }}>
              Tech Stack Used
            </CustomTypography>
            <CustomTypography
              type="body"
              component="ul"
              sx={{ paddingLeft: "20px", mb: "20px" }}
            >
              <CustomTypography type="listItem">
                <strong>Frontend:</strong> React with Material-UI for a dynamic
                and visually appealing UI.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Backend:</strong> FastAPI for a fast, asynchronous, and
                scalable API.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Database:</strong> MongoDB for flexible, document-based
                data storage.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Deployment:</strong> Frontend: Netlify | Backend: Render
              </CustomTypography>
            </CustomTypography>

            {/* Conclusion */}
            <CustomTypography type="heading6h" sx={{ mb: "15px" }}>
              Conclusion
            </CustomTypography>
            <CustomTypography type="body" sx={{ fontSize: "14px" }}>
              FitHub showcases my ability to build a full stack e-commerce
              application with a focus on user experience, scalability, and
              modern development practices. This project highlights my skills in
              React, FastAPI, and MongoDB while demonstrating my understanding
              of multi-user systems and CRUD operations in a real-world context.
              It’s a cornerstone of my portfolio, reflecting my passion for
              fitness and technology.
            </CustomTypography>
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ my: 4 }} className="fade-in-text delay-4" />

      {/* TaskHub */}
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
            TaskHub: Task Manager App
          </CustomTypography>
          <IconButton
            onClick={() => handleToggle(1)}
            sx={{
              color: theme.palette.text.highlight,
              p: 0.5,
            }}
          >
            {expanded[1] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <ProjectLinks
          label="Task Hub"
          liveUrl="https://taskhub-app.netlify.app/"
          repoFrontend="https://github.com/vikram1155/task-manager"
          repoBackend="https://github.com/vikram1155/task-manager-be"
          techStack={[
            "React",
            "Python",
            "FastAPI",
            "MongoDB",
            "Redux",
            "MUI",
            "React Router",
          ]}
          theme={theme}
        />

        <CustomTypography type="subText" sx={{ mb: 2 }}>
          TaskHub is a full stack task management application inspired by tools
          like Jira, designed to streamline team collaboration and task
          tracking. Built with the FARM stack (FastAPI, React, MongoDB) and
          enhanced with Material-UI components, it offers a multi-user platform
          where both users and admins can manage tasks, with admins having
          additional control over team member management.
        </CustomTypography>

        <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
          <Box ref={taskHubCollapseRef} sx={{ pt: 1 }}>
            <CustomTypography type="heading6h" sx={{ marginBottom: "15px" }}>
              Detailed Description
            </CustomTypography>
            <Box sx={{ mb: "20px", ml: "20px" }}>
              <CustomTypography
                type="body"
                component="ul"
                sx={{ paddingLeft: { xs: "5px", sm: "20px" } }}
              >
                <li>
                  <CustomTypography type="listItem">
                    <strong>Multi-User System:</strong> Supports two
                    roles—regular users and admins—with distinct permissions and
                    secure access.
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Task Management (Users & Admins):</strong>
                    <ul style={{ paddingLeft: "10px" }}>
                      <CustomTypography type="listItem">
                        Create, edit, and update tasks with fields like status,
                        due dates, and descriptions.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        Assign or reassign tasks to team members.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        View all tasks with filtering options by date (e.g.,
                        upcoming deadlines, overdue tasks) and assigned team
                        members.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        Track task progress with statuses (e.g., "To Do," "In
                        Progress," "Completed").
                      </CustomTypography>
                    </ul>
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>User Features:</strong>
                    <ul style={{ paddingLeft: "10px" }}>
                      <CustomTypography type="listItem">
                        View a list of team members for task assignment.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        Dashboard with upcoming deadlines and overdue tasks for
                        better time management.
                      </CustomTypography>
                    </ul>
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Admin Features:</strong> In addition to user
                    capabilities:
                    <ul style={{ paddingLeft: "10px" }}>
                      <CustomTypography type="listItem">
                        Manage team members—add, edit, or remove them from the
                        system.
                      </CustomTypography>
                      <CustomTypography type="listItem">
                        Update member details (e.g., name, role, contact info)
                        for accurate team tracking.
                      </CustomTypography>
                    </ul>
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>UI/UX:</strong> A clean, responsive interface built
                    with Material-UI, featuring an intuitive task dashboard and
                    team overview.
                  </CustomTypography>
                </li>
              </CustomTypography>
            </Box>

            {/* Tech Stack Used */}
            <CustomTypography type="heading6h" sx={{ marginBottom: "15px" }}>
              Tech Stack Used
            </CustomTypography>
            <CustomTypography
              type="body"
              component="ul"
              sx={{
                paddingLeft: { xs: "5px", sm: "20px" },
                marginBottom: "20px",
              }}
            >
              <CustomTypography type="listItem">
                <strong>Frontend:</strong> React with Material-UI for a dynamic,
                responsive, and visually consistent user interface.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Backend:</strong> FastAPI for a high-performance,
                asynchronous API to handle task and user operations.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Database:</strong> MongoDB for flexible, scalable
                storage of tasks and team member data.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Deployment:</strong> Frontend: Netlify | Backend: Render
              </CustomTypography>
            </CustomTypography>

            {/* Conclusion */}
            <CustomTypography type="heading6h" sx={{ marginBottom: "15px" }}>
              Conclusion
            </CustomTypography>
            <CustomTypography type="body" sx={{ fontSize: "14px" }}>
              TaskFlow demonstrates my ability to develop a robust,
              team-oriented task management tool using the FARM stack. By
              integrating features like task filtering, team member management,
              and a Jira-inspired dashboard, this project showcases my skills in
              full stack development, user role differentiation, and modern UI
              design with Material-UI. It’s a testament to my capability to
              build practical, scalable solutions for collaborative workflows.
            </CustomTypography>
          </Box>
        </Collapse>
      </Box>

      <Divider sx={{ my: 4 }} className="fade-in-text delay-4" />

      {/* Expense Tracker */}
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
            Spend Smarter: Personal Finance App
          </CustomTypography>
          <IconButton
            onClick={() => handleToggle(2)}
            sx={{
              color: theme.palette.text.highlight,
              p: 0.5,
            }}
          >
            {expanded[2] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </Box>
        <ProjectLinks
          label="Spend Smarter"
          liveUrl="https://spend-smarter.netlify.app"
          repoFrontend="https://github.com/vikram1155/expense-tracker"
          repoBackend="https://github.com/vikram1155/expense-tracker-be"
          techStack={[
            "React",
            "TypeScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Bcrypt",
          ]}
          theme={theme}
        />

        <CustomTypography type="subText" sx={{ mb: 2 }}>
          Spend Smarter is a full-stack application built with TypeScript,
          Express.js, and MongoDB, designed to help users manage personal
          finances through secure multi-user transaction tracking and insightful
          visualizations.
        </CustomTypography>

        <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
          <Box ref={expenseTrackerCollapseRef} sx={{ pt: 1 }}>
            {/* Detailed Description */}
            <CustomTypography type="heading6h" sx={{ mb: "15px" }}>
              Detailed Description
            </CustomTypography>
            <Box sx={{ mb: "20px", ml: { xs: "5px", sm: "20px" } }}>
              <CustomTypography
                type="body"
                component="ul"
                sx={{ paddingLeft: { xs: "5px", sm: "20px" } }}
              >
                <li>
                  <CustomTypography type="listItem">
                    <strong>Multi-User Authentication:</strong> Secure login
                    system with JWT and bcrypt-hashed passwords for distinct
                    user access.
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Transaction Management:</strong> Users can create,
                    update, and delete credit/debit transactions with fields for
                    amount, category, date, and payment method (e.g., UPI,
                    card).
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Visualizations:</strong> Interactive graphs and
                    tables display transaction trends and spending insights for
                    informed financial decisions.
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>User Profile Management:</strong> Users can edit
                    profiles (name, phone, DOB) and change passwords securely.
                  </CustomTypography>
                </li>
                <li>
                  <CustomTypography type="listItem">
                    <strong>Responsive Design:</strong> Built with TypeScript
                    and Material-UI for a seamless, mobile-friendly interface.
                  </CustomTypography>
                </li>
              </CustomTypography>
            </Box>

            {/* Tech Stack Used */}
            <CustomTypography type="heading6h" sx={{ mb: "15px" }}>
              Tech Stack Used
            </CustomTypography>
            <CustomTypography
              type="body"
              component="ul"
              sx={{ paddingLeft: "20px", mb: "20px" }}
            >
              <CustomTypography type="listItem">
                <strong>Frontend:</strong> React with TypeScript and Material-UI
                for a dynamic, type-safe, and responsive UI.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Backend:</strong> Express.js with TypeScript for a
                robust, scalable API handling authentication and transactions.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Database:</strong> MongoDB for flexible storage of user
                and transaction data.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Security:</strong> JWT for token-based authentication
                and Bcrypt for password hashing.
              </CustomTypography>
              <CustomTypography type="listItem">
                <strong>Deployment:</strong> Frontend: Netlify | Backend: Render
              </CustomTypography>
            </CustomTypography>

            {/* Conclusion */}
            <CustomTypography type="heading6h" sx={{ mb: "15px" }}>
              Conclusion
            </CustomTypography>
            <CustomTypography type="body" sx={{ fontSize: "14px" }}>
              Spend Smarter demonstrates my ability to build a secure,
              full-stack financial application using TypeScript, Express.js, and
              MongoDB. With features like multi-user authentication, transaction
              CRUD, and insightful visualizations, this project highlights my
              skills in developing scalable, user-focused solutions for personal
              finance management.
            </CustomTypography>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
}

export default Projects;
