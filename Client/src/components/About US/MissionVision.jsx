/* eslint-disable no-unused-vars */
import React from "react";
import { MissionVisionSection, AboutContainer } from "./AboutUsStyles";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MissionVision = () => {
  const navigate = useNavigate();

  const handleGetInTouch = () => {
    navigate("/login");
  };

  return (
    <MissionVisionSection>
      <AboutContainer>
        <Typography variant="h3" gutterBottom>
          Our Mission & Vision
        </Typography>
        <Typography variant="body1" paragraph>
          Our mission is to deliver top-quality automotive services and exceed
          customer expectations. Our vision is to be the leading provider of
          innovative automotive solutions.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleGetInTouch}
        >
          Get in Touch
        </Button>
      </AboutContainer>
    </MissionVisionSection>
  );
};

export default MissionVision;
