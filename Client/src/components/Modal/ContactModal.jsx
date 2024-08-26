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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { styled } from "@mui/material/styles";
import axios from "axios";
import Cookies from "js-cookie";

const ModalWrapper = styled(Box)(({ theme }) => ({
  width: "90vw",
  maxWidth: "500px",
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

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#007bff",
  color: "#fff",
  marginTop: "20px",
  zIndex: 1,
  "&:hover": {
    backgroundColor: "#0056b3",
  },
}));

const ContactModal = ({ open, handleClose, onSuccess, carId }) => {
  const [mobile, setMobile] = useState("");
  const [secondaryMobile, setSecondaryMobile] = useState("");

  useEffect(() => {
    if (!open) {
      setMobile("");
      setSecondaryMobile("");
    }
  }, [open]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!carId) {
      console.error("car_id is missing");
      alert("car_id is required");
      return;
    }

    const contact = {
      car_id: carId,
      mobile,
      secondaryMobile: secondaryMobile || null,
    };

    console.log("Sending request with data:", contact);

    const token = Cookies.get("token");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/contact-info",
        contact,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert("Contact number saved successfully");
        setMobile("");
        setSecondaryMobile("");

        if (typeof handleClose === "function") {
          handleClose();
        }
        if (onSuccess) {
          onSuccess();
        }
      } else {
        console.error("Unexpected response status:", response.status);
        alert("Unexpected error occurred");
      }
    } catch (error) {
      console.error(
        "Error submitting contact information:",
        error.response ? error.response.data : error.message
      );
      alert("Error submitting contact information");
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
          <CheckCircleIcon color="success" /> Please provide your contact
          information
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            margin="normal"
            name="mobile"
            label="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="e.g., 0300 1234567"
            inputProps={{ maxLength: 11 }}
            required
          />
          <TextField
            fullWidth
            margin="normal"
            name="secondaryMobile"
            label="Secondary Mobile (Optional)"
            value={secondaryMobile}
            onChange={(e) => setSecondaryMobile(e.target.value)}
            placeholder="e.g., 0300 7654321"
            inputProps={{ maxLength: 11 }}
          />
          <StyledButton type="submit">Save Contact Number</StyledButton>
        </form>
      </ModalWrapper>
    </Modal>
  );
};

export default ContactModal;
