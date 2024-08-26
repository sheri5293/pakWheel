import styled from "styled-components";
import { Button, TextField } from "@mui/material";

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const FormWrapper = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 400px;
  width: 100%;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 1rem;
    .MuiInputLabel-root {
      color: #000000;
    }
    .MuiInputBase-input {
      color: #000000;
    }
    .MuiFormHelperText-root {
      color: #d32f2f;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
    text-transform: none;
    &:hover {
      background-color: #1976d2;
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #000000;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1.5rem;
  color: #555555;
`;

export const CreateAccountButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 0.9rem;
    font-weight: 100;
    background-color: lightgrey;
    color: black;
    transition: background-color 0.3s ease;
    text-transform: none;
    &:hover {
      background-color: #cccccc;
    }
  }
`;
export const Separator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  font-size: 1rem;
  color: #555555;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #ddd;
    margin: 0 1rem;
  }

  &::before {
    border-radius: 3px 0 0 3px; 
  }

  &::after {
    border-radius: 0 3px 3px 0; 

  span {
    background: #f5f5f5;
    padding: 0 0.5rem;
    border-radius: 50px; 
    color: #555555;
    font-weight: 500;
  }
`;
export const PasswordContainer = styled.div`
  position: relative;
`;

export const EyeIcon = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #555555;
`;
export const GoogleButton = styled(Button)`
  && {
    width: 100%;
    margin-top: 1rem;
    border-radius: 8px;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    background-color: #4285f4;
    color: white;
    transition: background-color 0.3s ease;
    text-transform: none;
    &:hover {
      background-color: #357ae8;
    }
  }
`;
