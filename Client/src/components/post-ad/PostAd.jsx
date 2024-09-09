/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import CarInfoModal from "../Modal/CarInfoModal";
import UploadModal from "../Modal/uploadModal";
import ContactModal from "../Modal/ContactModal";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  Wrapper,
  SubHeading,
  CardsContainer,
  StyledCard,
  CardContentStyled,
  ConfirmationIcon,
  PublishIconContainer,
  StyledPublishIcon,
} from "./PostAdStyles";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import PublishedAdLayout from "./PublishedAdLayout";

const PostAd = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = Cookies.get("authToken");
    if (!authToken) {
      navigate("/login");
    }
  }, [navigate]);

  const [modalOpen, setModalOpen] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [cardStatus, setCardStatus] = useState({
    carInfo: false,
    photos: false,
    contact: false,
  });
  const [carId, setCarId] = useState(null);
  const [adPublished, setAdPublished] = useState(false);
  const [adData, setAdData] = useState(null);

  const handleCardClick = (cardType) => {
    if (cardType === "photos" && !cardStatus.carInfo) return;
    if (cardType === "contact" && !cardStatus.photos) return;
    setActiveCard(cardType);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSuccess = (cardType, newCarId = null) => {
    setCardStatus((prevStatus) => ({
      ...prevStatus,
      [cardType]: true,
    }));

    if (cardType === "carInfo" && newCarId) {
      setCarId(newCarId);
    }

    setActiveCard(cardType);
  };

  const isButtonDisabled = !(
    cardStatus.carInfo &&
    cardStatus.photos &&
    cardStatus.contact
  );

  const handlePublish = () => {
    if (!isButtonDisabled) {
      const fetchedData = {
        carInfo: {
          make: "Toyota",
          model: "Corolla",
          year: 2020,
        },
        photos: [{ url: "/images/photo1.jpg" }, { url: "/images/photo2.jpg" }],
        contactInfo: {
          name: "John Doe",
          phone: "123-456-7890",
          email: "john@example.com",
        },
      };

      setAdData(fetchedData);
      setAdPublished(true);
    }
  };

  return (
    <Wrapper>
      <h1 style={{ color: "white" }}>
        Sell Your Car With 3 Easy & Simple Steps!
      </h1>
      <SubHeading>It's free and takes less than a minute</SubHeading>
      <CardsContainer>
        <StyledCard
          onClick={() => handleCardClick("carInfo")}
          isGreen={cardStatus.carInfo}
        >
          <CardContentStyled>
            <DirectionsCarIcon />
            <Typography variant="body1" component="p">
              Enter Your Car Information
            </Typography>
            {cardStatus.carInfo && <ConfirmationIcon />}
          </CardContentStyled>
        </StyledCard>
        <StyledCard
          onClick={() => handleCardClick("photos")}
          isGreen={cardStatus.photos}
          style={{ opacity: cardStatus.carInfo ? 1 : 0.5 }}
        >
          <CardContentStyled>
            <PhotoCameraIcon />
            <Typography variant="body1" component="p">
              Upload Photos
            </Typography>
            {cardStatus.photos && <ConfirmationIcon />}
          </CardContentStyled>
        </StyledCard>
        <StyledCard
          onClick={() => handleCardClick("contact")}
          isGreen={cardStatus.contact}
          style={{ opacity: cardStatus.photos ? 1 : 0.5 }}
        >
          <CardContentStyled>
            <ContactPhoneIcon />
            <Typography variant="body1" component="p">
              Enter Your Contact Information
            </Typography>
            {cardStatus.contact && <ConfirmationIcon />}
          </CardContentStyled>
        </StyledCard>
      </CardsContainer>
      <PublishIconContainer
        onClick={handlePublish}
        style={{ opacity: isButtonDisabled ? 0.5 : 1 }}
      >
        <StyledPublishIcon />
        <Typography variant="body1" component="span">
          Publish Ad
        </Typography>
      </PublishIconContainer>

      {modalOpen && activeCard === "carInfo" && (
        <CarInfoModal
          open={modalOpen}
          handleClose={handleCloseModal}
          onSuccess={(newCarId) => handleSuccess("carInfo", newCarId)}
        />
      )}
      {modalOpen && activeCard === "photos" && (
        <UploadModal
          open={modalOpen}
          handleClose={handleCloseModal}
          onSuccess={() => handleSuccess("photos")}
          carId={carId || "84"}
        />
      )}
      {modalOpen && activeCard === "contact" && (
        <ContactModal
          open={modalOpen}
          handleClose={handleCloseModal}
          onSuccess={() => handleSuccess("contact")}
          carId={carId || "84"}
        />
      )}

      {adPublished && adData && (
        <PublishedAdLayout
          carInfo={adData.carInfo}
          photos={adData.photos}
          contactInfo={adData.contactInfo}
        />
      )}
    </Wrapper>
  );
};

export default PostAd;
