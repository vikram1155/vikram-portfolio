import { Button } from "@mui/material";
import { useAppTheme } from "../context/ThemeContext";

const CustomButton = ({
  text = "Click Me",
  variant = "outlined",
  sx = {},
  onClick = () => {},
  icon,
  ...props
}) => {
  const theme = useAppTheme();
  return (
    <Button
      variant={variant}
      sx={{
        px: 2,
        py: 0.5,
        borderRadius: 2,
        transition: "transform 0.2s ease",
        textTransform: "none",
        color: theme.palette.button.color,
        backgroundColor: theme.palette.button.background,
        borderColor: theme.palette.button.color,
        fontWeight: 600,
        height: "fit-content",
        ":hover": {
          transform: "scale(1.03)",
          color: theme.palette.button.hoveredColor,
          backgroundColor: theme.palette.button.hoveredBackground,
          borderColor: theme.palette.button.hoveredBackground,
        },
        ...sx,
      }}
      onClick={onClick}
      {...props}
    >
      {text}&nbsp; {icon}
    </Button>
  );
};

export default CustomButton;
