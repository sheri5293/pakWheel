/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import styled from "styled-components";
import axios from "axios";

const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  width: 400px;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
`;

const UploadModal = ({ open, handleClose, carId, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  console.log("Car ID in UploadModal:", carId);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    console.log("Submitting with carId:", carId);

    const formData = new FormData();
    formData.append("car_id", String(carId)); // Ensure carId is a string
    formData.append("image", event.target.image.files[0]);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/upload-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data);
      handleClose();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error:", error);
      setError(`Upload failed: ${error.response?.data || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <ModalContent>
        <Typography variant="h6" component="h2">
          Upload Image
        </Typography>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="file" name="image" required />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : null}
          >
            {loading ? "Uploading..." : "Upload"}
          </StyledButton>
        </form>
        <StyledButton
          onClick={handleClose}
          variant="outlined"
          color="secondary"
          disabled={loading}
        >
          Close
        </StyledButton>
      </ModalContent>
    </StyledModal>
  );
};

export default UploadModal;
