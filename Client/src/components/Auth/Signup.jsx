/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormValidation } from "../../hooks/useFormValidation";
import useAuth from "../../services/authService";
import ToastNotification from "../Common/ToastNotification";
import {
  AuthContainer,
  FormWrapper,
  StyledTextField,
  StyledButton,
  Title,
  Subtitle,
  PasswordContainer,
  EyeIcon,
} from "./AuthStyles";

function SignupPage() {
  const navigate = useNavigate();
  const { signup } = useAuth();
  const { values, handleChange, handleSubmit, errors } = useFormValidation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const onSubmit = async () => {
    try {
      await signup(values);
      toast.success("Signup successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Signup failed. Please try again.";
      toast.error(errorMessage);
    }
  };

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordVisibilityToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <AuthContainer>
      <FormWrapper>
        <Title>Sign Up</Title>
        <Subtitle>Create a new account.</Subtitle>
        <form onSubmit={(e) => handleSubmit(e, onSubmit)}>
          <StyledTextField
            label="Name"
            name="username"
            type="text"
            value={values.username}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.username}
            helperText={errors.username}
          />
          <StyledTextField
            label="Phone Number"
            name="phoneNO"
            type="text"
            value={values.phoneNO}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.phoneNO}
            helperText={errors.phoneNO}
          />
          <StyledTextField
            label="Location"
            name="location"
            type="text"
            value={values.location}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.location}
            helperText={errors.location}
          />
          <StyledTextField
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            fullWidth
            required
            error={!!errors.email}
            helperText={errors.email}
          />
          <PasswordContainer>
            <StyledTextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.password}
              helperText={errors.password}
            />
            <EyeIcon onClick={handlePasswordVisibilityToggle}>
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </EyeIcon>
          </PasswordContainer>
          <PasswordContainer>
            <StyledTextField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange}
              fullWidth
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
            />
            <EyeIcon onClick={handleConfirmPasswordVisibilityToggle}>
              {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
            </EyeIcon>
          </PasswordContainer>
          <StyledButton type="submit" variant="contained" color="primary">
            Sign Up
          </StyledButton>
        </form>
      </FormWrapper>
      <ToastNotification />
    </AuthContainer>
  );
}

export default SignupPage;
