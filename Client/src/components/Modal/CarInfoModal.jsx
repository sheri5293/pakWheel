/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Cookies from "js-cookie";

const ModalWrapper = styled(Box)(({ theme }) => ({
  width: "90vw",
  maxWidth: "600px",
  background: "linear-gradient(135deg, #f9f9f9, #e9e9e9)",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1)",
  position: "relative",
  maxHeight: "80vh",
  overflowY: "auto",
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "10px",
  right: "10px",
  color: "#555",
  zIndex: "10",
  transition: "color 0.3s ease",

  "&:hover": {
    color: "#000",
  },
}));

const CitySelect = styled(Select)(({ theme }) => ({
  width: "100%",
  marginBottom: "16px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#007bff",
  color: "#fff",
  marginTop: "20px",
  zIndex: 1,
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

const CarInfoModal = ({ open, handleClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    city: "",
    carInfo: "",
    registeredIn: "",
    color: "",
    mileage: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (open) {
      setFormData({
        city: "",
        carInfo: "",
        registeredIn: "",
        color: "",
        mileage: "",
        price: "",
        description: "",
      });
    }
  }, [open]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = Cookies.get("token");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/submit-car-info",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        alert("Car information submitted successfully");
        handleClose();
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      console.error("Error submitting car information:", error);
      alert("Error submitting car information");
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <ModalWrapper>
        <CloseButton onClick={handleClose}>
          <CloseIcon />
        </CloseButton>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ fontWeight: 600, textAlign: "center" }}
        >
          <CheckCircleIcon color="success" /> We don't allow duplicates of the
          same ad
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>City</InputLabel>
            <CitySelect
              name="city"
              value={formData.city}
              onChange={handleChange}
              label="City"
              required
            >
              <MenuItem value="karachi">Karachi</MenuItem>
              <MenuItem value="lahore">Lahore</MenuItem>
              <MenuItem value="islamabad">Islamabad</MenuItem>
              <MenuItem value="rawalpindi">Rawalpindi</MenuItem>
              <MenuItem value="multan">Multan</MenuItem>
              <MenuItem value="faislabad">Faislabad</MenuItem>
              <MenuItem value="peshawar">Peshawar</MenuItem>
              <MenuItem value="sialkot">Sialkot</MenuItem>
              <MenuItem value="gujranwala">Gujranwala</MenuItem>
              <MenuItem value="quetta">Quetta</MenuItem>
              <MenuItem value="bahawalpur">Bahawalpur</MenuItem>
              <MenuItem value="sargodha">Sargodha</MenuItem>
              <MenuItem value="bannu">Bannu</MenuItem>
              <MenuItem value="kohat">Kohat</MenuItem>
              <MenuItem value="bahawalnagar">Bahawalnagar</MenuItem>
            </CitySelect>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            name="carInfo"
            label="Car Model"
            value={formData.carInfo}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="registeredIn"
            label="Registered In (Province)"
            value={formData.registeredIn}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="color"
            label="Exterior Color"
            value={formData.color}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="mileage"
            label="Mileage (in km)"
            value={formData.mileage}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="price"
            label="Price"
            value={formData.price}
            onChange={handleChange}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
            multiline
            rows={4}
            required
          />
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </ModalWrapper>
    </Modal>
  );
};

export default CarInfoModal;
