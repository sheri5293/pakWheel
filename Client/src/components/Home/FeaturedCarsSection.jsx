/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@mui/material";
import {
  FeaturedCarsSection,
  CarGrid,
  CarCard,
  CarImage,
  CarInfo,
} from "./FeaturedCarsStyles";
const FeaturedCarsSectionComponent = () => {
  const cars = [
    {
      name: "Mercedes-Benz S-Class",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/48067/s-class-exterior-front-view-2.jpeg?isig=0&q=80",
    },
    {
      name: "BMW 7 Series",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/132513/new-7-series-exterior-front-view.jpeg?isig=0&q=80",
    },
    {
      name: "Audi A8",
      image:
        "https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/124141/a8-l-exterior-front-view-10.jpeg?isig=0&q=80",
    },
  ];

  return (
    <FeaturedCarsSection>
      <Container>
        <Typography variant="h4" align="center" gutterBottom>
          Featured Cars
        </Typography>
        <CarGrid>
          {cars.map((car, index) => (
            <CarCard key={index}>
              <CarImage src={car.image} alt={car.name} />
              <CarInfo>
                <Typography variant="h6" component="h3">
                  {car.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Discover the elegance and power of the {car.name}.
                </Typography>
              </CarInfo>
            </CarCard>
          ))}
        </CarGrid>
      </Container>
    </FeaturedCarsSection>
  );
};

export default FeaturedCarsSectionComponent;
