import { Typography } from "@mui/material";
import { useAppTheme } from "../context/ThemeContext";

const CustomTypography = ({
  type = "body",
  children,
  sx = {},
  className,
  ...props
}) => {
  const theme = useAppTheme();

  const textVariants = {
    heading1: {
      variant: "h1",
      fontWeight: 700,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    heading2: {
      variant: "h2",
      fontWeight: 700,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    heading3: {
      variant: "h3",
      fontWeight: 600,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    heading3h: {
      variant: "h3",
      fontWeight: 600,
      color: theme.palette.text.highlight, // #003366 (light), #EBEBED (dark)
    },
    heading4: {
      variant: "h4",
      fontWeight: 600,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    heading5: {
      variant: "h5",
      fontWeight: 600,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    heading5h: {
      variant: "h5",
      fontWeight: 600,
      color: theme.palette.text.highlight, // #003366 (light), #EBEBED (dark)
    },
    heading6: {
      variant: "h6",
      fontWeight: 600,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    heading6h: {
      variant: "h6",
      fontWeight: 600,
      color: theme.palette.text.highlight, // #003366 (light), #EBEBED (dark)
    },
    subHeading: {
      variant: "h6",
      fontWeight: 600,
      color: theme.palette.text.secondary, // #005599 (light), #7E8BB6 (dark)
    },
    body: {
      variant: "body1",
      fontWeight: 400,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    bodyBold: {
      variant: "body1",
      fontWeight: 700,
      color: theme.palette.text.primary, // #003366 (light), #EBEBED (dark)
    },
    subText: {
      variant: "body2",
      fontWeight: 300,
      color: theme.palette.text.secondary, // #005599 (light), #7E8BB6 (dark)
      fontSize: "14px",
    },
    subText2: {
      variant: "body2",
      fontWeight: 300,
      color: theme.palette.text.secondary,
      fontSize: "12px",
    },
    listItem: {
      variant: "body1",
      fontWeight: 300,
      color: theme.palette.text.primary,
      fontSize: "14px",
    },
  };

  return (
    <Typography
      sx={{ color: textVariants[type]?.color, ...sx }} // Use variant-specific color as default
      className={className}
      {...textVariants[type]}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
