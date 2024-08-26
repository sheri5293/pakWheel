/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { HeroSection, HeroContent, HeroButton } from "./HeroSectionStyles";

const HeroSectionComponent = () => {
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate("/about");
  };

  return (
    <HeroSection>
      <Container>
        <HeroContent>
          <Typography variant="h2" component="h1" gutterBottom>
            Experience the Luxury
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Find your dream car with us today.
          </Typography>
          <HeroButton
            variant="contained"
            color="secondary"
            size="large"
            onClick={handleExploreClick}
          >
            Explore Now
          </HeroButton>
        </HeroContent>
      </Container>
    </HeroSection>
  );
};

export default HeroSectionComponent;
