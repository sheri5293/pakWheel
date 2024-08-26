import styled from "styled-components";
import { Button } from "@mui/material";

export const HeroSection = styled.div`
  background-image: url("https://wallpapercave.com/wp/wp9831512.jpg");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

export const HeroContent = styled.div`
  max-width: 600px;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  padding: 20px;
  border-radius: 10px;
`;

export const HeroButton = styled(Button)`
  && {
    background-color: #ff4081;
    &:hover {
      background-color: #ff80ab;
    }
    margin-top: 20px;
  }
`;
