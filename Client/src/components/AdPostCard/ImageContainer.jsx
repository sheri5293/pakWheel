/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { ImageContainerWrapper } from "./AdPostCardStyles";
import pakwheelImage from "../../assets/image/pakwheel.png";

const ImageContainer = ({ alt }) => {
  return (
    <ImageContainerWrapper>
      <img src={pakwheelImage} alt={alt} width="250px" />
    </ImageContainerWrapper>
  );
};

export default ImageContainer;
