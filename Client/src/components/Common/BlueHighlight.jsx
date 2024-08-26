/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { styled } from "styled-components";

const BlueHighlightWrapper = styled.span`
  color: #fff;
  background-color: #0d47a1;
  padding: 0 6px;
  border-radius: 4px;
  font-weight: bold;
  margin-right: 5px;
`;

const BlueHighlight = ({ children }) => {
  return <BlueHighlightWrapper>{children}</BlueHighlightWrapper>;
};

export default BlueHighlight;
