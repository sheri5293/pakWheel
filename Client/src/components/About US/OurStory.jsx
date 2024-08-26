/* eslint-disable no-unused-vars */
import React from "react";
import { StorySection, AboutContainer } from "./AboutUsStyles";
import { Typography, Box } from "@mui/material";

const OurStory = () => {
  return (
    <StorySection>
      <AboutContainer>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ fontWeight: "bold", color: "#000", mb: 2 }}
          >
            Our Story
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, maxWidth: "800px", mx: "auto", mb: 2 }}
          >
            At St Cars, we have a rich history of delivering exceptional
            automotive solutions. Our journey began with a vision to
            revolutionize the industry. What started as a small garage has grown
            into a leading name in the automotive world, thanks to our
            unwavering commitment to quality and innovation.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, maxWidth: "800px", mx: "auto", mb: 2 }}
          >
            Our dedicated team of experts continuously pushes the boundaries of
            technology and design. We believe in staying ahead of the curve,
            anticipating market trends, and delivering products that exceed
            expectations. Our commitment to sustainability and excellence drives
            every aspect of our business.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, maxWidth: "800px", mx: "auto", mb: 2 }}
          >
            Over the years, we have achieved numerous milestones, including
            major industry awards and recognitions. But what truly sets us apart
            is our customer-centric approach. We value the trust our customers
            place in us and strive to create lasting relationships built on
            reliability and integrity.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ lineHeight: 1.6, maxWidth: "800px", mx: "auto" }}
          >
            As we look to the future, our vision remains clear: to lead the
            automotive industry with innovative solutions, exceptional service,
            and a relentless drive for excellence. Join us on this exciting
            journey as we continue to set new standards and redefine what’s
            possible in the world of cars.
          </Typography>
        </Box>
      </AboutContainer>
    </StorySection>
  );
};

export default OurStory;
