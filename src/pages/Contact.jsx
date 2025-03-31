import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import CustomTypography from "../customComponents/CustomTypography";
import ComponentLayout from "../components/ComponentLayout";
import { useAppTheme } from "../context/ThemeContext";

const contactData = [
  {
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/vikram1155",
    icon: LinkedInIcon,
    isExternal: true,
  },
  {
    title: "GitHub",
    link: "https://github.com/vikram1155",
    icon: GitHubIcon,
    isExternal: true,
  },
  {
    title: "Call Me",
    link: "tel:+918610713933",
    icon: PhoneIcon,
    isExternal: false,
  },
  {
    title: "Email Me",
    link: "mailto:markiv1155@gmail.com",
    icon: EmailIcon,
    isExternal: false,
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/v1kr4m_s",
    icon: InstagramIcon,
    isExternal: true,
  },
];

function Contact() {
  const theme = useAppTheme();

  // eslint-disable-next-line no-unused-vars
  const SocialIcon = ({ link, icon: Icon, title, isExternal = false }) => (
    <Tooltip title={title}>
      <IconButton
        href={link}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        sx={{
          color: theme.palette.text.primary,
          ":hover": {
            color: theme.palette.text.highlight,
          },
        }}
      >
        <Icon sx={{ fontSize: "24px" }} />
      </IconButton>
    </Tooltip>
  );

  return (
    <ComponentLayout>
      <Box
        sx={{
          textAlign: "center",
          color: "text.primary",
        }}
      >
        <CustomTypography type="heading3" sx={{ mb: 4 }}>
          Get in
          <span style={{ color: theme.palette.text.highlight }}> Touch</span>
        </CustomTypography>
        <CustomTypography type="subHeading" sx={{ mb: 1 }}>
          I’d be glad to connect via these platforms — reach out anytime!
        </CustomTypography>
        <CustomTypography type="listItem" sx={{ mb: 4 }}>
          I’d also enjoy hearing your feedback on the websites I've developed!😊
        </CustomTypography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            maxWidth: "600px",
            mx: "auto",
          }}
        >
          {contactData.map((contact, index) => (
            <SocialIcon
              key={index}
              link={contact.link}
              icon={contact.icon}
              title={contact.title}
              isExternal={contact.isExternal}
            />
          ))}
        </Box>
      </Box>
    </ComponentLayout>
  );
}

export default Contact;
