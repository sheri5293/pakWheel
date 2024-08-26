/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useFormLogin } from "../../hooks/useFormLogin";
import ToastNotification from "../Common/ToastNotification";

import Spinner from "../Common/Spinner";
import {
  AuthContainer,
  FormWrapper,
  StyledTextField,
  StyledButton,
  Title,
  Subtitle,
  CreateAccountButton,
  Separator,
  PasswordContainer,
  EyeIcon,
  GoogleButton,
} from "./Authstyles";
import { Visibility, VisibilityOff, Google } from "@mui/icons-material";
import useAuth from "../../services/authService";

function LoginPage() {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  const { login } = useAuth();
  const { values, handleChange, handleSubmit, errors } = useFormLogin();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [creatingAccount, setCreatingAccount] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleCreateAccountClick = () => {
    setCreatingAccount(true);

    setTimeout(() => {
      navigate("/signup");
      setCreatingAccount(false);
    }, 2000);
  };

  return (
    <>
      {loading && <Spinner />}
      {creatingAccount && <Spinner />}
      <AuthContainer>
        <FormWrapper>
          <Title>Login</Title>
          <Subtitle>Please enter your credentials to login.</Subtitle>
          <form
            onSubmit={(e) =>
              handleSubmit(e, async () => {
                setLoading(true);
                try {
                  await login(values);
                  toast.success("Login successful! Redirecting...");
                  setTimeout(() => {
                    navigate("/about");
                  }, 2000);
                } catch (error) {
                  toast.error(
                    "Login failed. Please check your credentials and try again."
                  );
                } finally {
                  setLoading(false);
                }
              })
            }
          >
            <StyledTextField
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={(e) => {
                handleChange(e);
                setShowPasswordField(true);
              }}
              fullWidth
              required
              error={!!errors.email}
              helperText={errors.email}
            />
            {showPasswordField && (
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
            )}
            <StyledButton type="submit" variant="contained" color="primary">
              Login
            </StyledButton>
            <Separator>
              <span>Or</span>
            </Separator>
            <GoogleButton
              onClick={() => loginWithRedirect({ connection: "google-oauth2" })}
            >
              <Google /> Sign in with Google
            </GoogleButton>
            <CreateAccountButton onClick={handleCreateAccountClick}>
              Create Account
            </CreateAccountButton>
          </form>
        </FormWrapper>
        <ToastNotification />
      </AuthContainer>
    </>
  );
}

export default LoginPage;
