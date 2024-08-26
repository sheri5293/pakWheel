import { styled } from "styled-components";
import { Box, Typography } from "@mui/material";

export const Wrapper = styled(Box)`
  background-color: black;
  padding: 60px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

export const Heading = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: #2a3eb1;
  margin-bottom: 30px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
`;

export const ContentBox = styled(Box)`
  background-color: #ffffff;
  padding: 30px 40px;
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  max-width: 450px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 20px 15px;
  }
`;

export const ImageContainerWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;
