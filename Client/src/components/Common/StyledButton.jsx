import { styled } from "styled-components";
import { Button } from "@mui/material";

const StyledButton = styled(Button)`
  margin-top: 20px;
  background-color: #0d47a1;

  &:hover {
    background-color: #08306a;
  }
`;

export default StyledButton;
