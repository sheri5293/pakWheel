/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import {
  WhyChooseUsContainer,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
} from "./WhyChooseUsStyles";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: "🚗",
      title: "Wide Range of Cars",
      description: "We offer a wide range of luxury cars to choose from.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      description: "Get the best prices on top-quality cars.",
    },
    {
      icon: "👍",
      title: "Trusted by Thousands",
      description: "Our customers love us for our reliable service.",
    },
  ];

  return (
    <WhyChooseUsContainer>
      {" "}
      {/* Use the renamed styled component */}
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Why Choose Us
        </Typography>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <Typography variant="h6" component="h3">
                {feature.title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {feature.description}
              </Typography>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </WhyChooseUsContainer>
  );
};

export default WhyChooseUsSection;
