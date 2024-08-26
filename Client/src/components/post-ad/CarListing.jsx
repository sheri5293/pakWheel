/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/slices/carSlice";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

const CarGrid = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const CarCard = styled(Card)`
  width: calc(33.333% - 20px);
`;

const NoResults = styled(Typography)`
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
`;

function CarListing() {
  const dispatch = useDispatch();
  const { cars, status, error } = useSelector((state) => state.cars);

  useEffect(() => {
    dispatch(fetchCars({}));
  }, [dispatch]);

  return (
    <>
      <CarGrid>
        {status === "loading" && <p>Loading...</p>}
        {status === "failed" && <p>Error loading cars.</p>}
        {status === "succeeded" && cars.length > 0 ? (
          cars.map((car) => (
            <CarCard key={car._id}>
              <CardMedia
                component="img"
                height="150"
                image={car.image}
                alt={car.title}
              />
              <CardContent>
                <Typography variant="h6">{car.title}</Typography>
                <Typography variant="body2">{car.location}</Typography>
                <Typography variant="body2">
                  {car.year} | {car.mileage} km | {car.fuel} | {car.engine} |{" "}
                  {car.transmission}
                </Typography>
                <Typography variant="body2">
                  PKR {car.price.toLocaleString()}
                </Typography>
              </CardContent>
            </CarCard>
          ))
        ) : (
          <NoResults></NoResults>
        )}
      </CarGrid>
    </>
  );
}

export default CarListing;
