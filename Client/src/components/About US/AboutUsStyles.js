/* eslint-disable no-unused-vars */
import { styled } from "@mui/material/styles";
import { Typography, Container, Button, Box, Grid } from "@mui/material";

export const HeroSection = styled("section")(({ theme }) => ({
  position: "relative",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  color: "#fff",
}));

export const VideoContainer = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  zIndex: -1,
  video: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const HeroContent = styled(Box)(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  textAlign: "center",
  padding: theme.spacing(4),
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  borderRadius: theme.shape.borderRadius,
}));

export const StorySection = styled("section")(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
  backgroundImage:
    "linear-gradient(to bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1))",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

export const TeamSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(6, 0),
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const MissionVisionSection = styled("section")(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: "#000",
  color: "#fff",
  textAlign: "center",
}));

export const AboutContainer = styled(Container)(({ theme }) => ({
  maxWidth: "lg",
}));
