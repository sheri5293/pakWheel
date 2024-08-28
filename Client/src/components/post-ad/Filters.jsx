/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Box, Typography } from "@mui/material";
import styled from "styled-components";
import { fetchCars } from "../../redux/slices/carSlice";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

const FilterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #f3f4f6, #ffffff);
  max-width: 500px;
  margin: 20px auto;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease;

  &:hover {
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  & .MuiOutlinedInput-root {
    border-radius: 8px;
  }
  & .MuiInputLabel-root {
    color: #666;
  }
  & .MuiInputBase-input {
    padding: 12px;
  }
  & .MuiInputAdornment-root {
    color: #007bff;
  }
`;

const StyledButton = styled(Button)`
  background-color: #007bff;
  color: #fff;
  border-radius: 8px;
  padding: 10px;
  font-weight: bold;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: #0056b3;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const FilterHeader = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Filters = ({ setFilters }) => {
  const [location, setLocation] = useState("");
  const [fuel, setFuel] = useState("");
  const [transmission, setTransmission] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");
  const [engine, setEngine] = useState("");
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const applyFilters = () => {
    const filters = {
      location,
      fuel,
      transmission,
      minPrice,
      maxPrice,
      minYear,
      maxYear,
      minMileage,
      maxMileage,
      engine,
      title,
    };
    setFilters(filters);
    dispatch(fetchCars(filters));
  };

  return (
    <FilterContainer>
      <FilterHeader variant="h6">
        <FilterListIcon /> Filter Cars
      </FilterHeader>
      <StyledTextField
        label="Location"
        variant="outlined"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <StyledTextField
        label="Fuel"
        variant="outlined"
        value={fuel}
        onChange={(e) => setFuel(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <StyledTextField
        label="Transmission"
        variant="outlined"
        value={transmission}
        onChange={(e) => setTransmission(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <StyledTextField
        type="number"
        label="Min Price"
        variant="outlined"
        value={minPrice}
        onChange={(e) => setMinPrice(e.target.value)}
        fullWidth
      />
      <StyledTextField
        type="number"
        label="Max Price"
        variant="outlined"
        value={maxPrice}
        onChange={(e) => setMaxPrice(e.target.value)}
        fullWidth
      />
      <StyledTextField
        type="number"
        label="Min Year"
        variant="outlined"
        value={minYear}
        onChange={(e) => setMinYear(e.target.value)}
        fullWidth
      />
      <StyledTextField
        type="number"
        label="Max Year"
        variant="outlined"
        value={maxYear}
        onChange={(e) => setMaxYear(e.target.value)}
        fullWidth
      />
      <StyledTextField
        type="number"
        label="Min Mileage"
        variant="outlined"
        value={minMileage}
        onChange={(e) => setMinMileage(e.target.value)}
        fullWidth
      />
      <StyledTextField
        type="number"
        label="Max Mileage"
        variant="outlined"
        value={maxMileage}
        onChange={(e) => setMaxMileage(e.target.value)}
        fullWidth
      />
      <StyledTextField
        label="Engine"
        variant="outlined"
        value={engine}
        onChange={(e) => setEngine(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <StyledTextField
        label="Title"
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        fullWidth
        InputProps={{
          startAdornment: <SearchIcon />,
        }}
      />
      <StyledButton variant="contained" onClick={applyFilters} fullWidth>
        Apply Filters
      </StyledButton>
    </FilterContainer>
  );
};

export default Filters;
