import styled from "styled-components";
import { Box, Typography, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PublishIcon from "@mui/icons-material/Publish";

export const Wrapper = styled(Box)`
  background-color: black;
  padding: 100px 20px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
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

export const SubHeading = styled(Typography)`
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 60px;
  letter-spacing: 1px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 40px;
  }
`;

export const CardsContainer = styled(Box)`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledCard = styled(Card)`
  flex: 1;
  background-color: ${(props) => (props.isGreen ? "#d4edda" : "#ffffff")};
  border-radius: 12px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  position: relative;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const CardContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  svg {
    font-size: 3.5rem;
    color: #2a3eb1;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

export const ConfirmationIcon = styled(CheckCircleIcon)`
  color: #28a745;
  font-size: 3.5rem;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;
`;

export const PublishIconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  color: #fff;
  cursor: pointer;
  font-size: 1.2rem;
  background: linear-gradient(45deg, #2a3eb1, #4a90e2);
  border-radius: 12px;
  padding: 15px 25px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.3);
  transition:
    background-color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: center;

  svg {
    font-size: 2rem;
    margin-right: 10px;
  }

  &:hover {
    background: linear-gradient(45deg, #4a90e2, #2a3eb1);
    transform: translateY(-3px);
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 600px) {
    margin-top: 20px;
    flex-direction: column;
  }
`;

export const StyledPublishIcon = styled(PublishIcon)`
  font-size: 2rem;
  color: #fff;
`;
