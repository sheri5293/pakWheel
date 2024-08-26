/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import {
  TestimonialsContainer,
  TestimonialCard,
  TestimonialsGrid,
} from "./TestimonialsStyles";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "Amazing experience! The car was in perfect condition and the service was top-notch.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      feedback:
        "I love my new car! The process was smooth and the team was very helpful.",
      rating: 4,
    },
  ];

  return (
    <TestimonialsContainer>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          What Our Customers Say
        </Typography>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <Typography variant="h6" component="h3">
                {testimonial.name}
              </Typography>

              <div style={{ color: "#ffcc00", margin: "10px 0" }}>
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <Typography variant="body2" color="textSecondary">
                {testimonial.feedback}
              </Typography>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
