/* eslint-disable no-unused-vars */
import React from "react";
import {
  HeroSection,
  AboutContainer,
  VideoContainer,
  HeroContent,
} from "./AboutUsStyles";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import videoSrc from "../../assets/image/video1.mp4";

const AboutHero = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate("/");
  };

  return (
    <HeroSection>
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
      <HeroContent>
        <Typography variant="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h5" paragraph>
          We are passionate about providing exceptional automotive services.
          Discover who we are and what drives us.
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleLearnMoreClick}
        >
          Learn More
        </Button>
      </HeroContent>
    </HeroSection>
  );
};

export default AboutHero;
