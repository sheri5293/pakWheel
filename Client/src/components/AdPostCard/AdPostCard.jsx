/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BlueHighlight from "../Common/BlueHighlight";
import CheckIcon from "../Common/CheckIcon";
import StyledButton from "../Common/StyledButton";
import ImageContainer from "./ImageContainer";
import { Wrapper, ContentBox, ImageContainerWrapper } from "./AdPostCardStyles";

const AdPostCard = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/post-ad");
  };

  return (
    <Wrapper>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ color: "#0d47a1" }}>
          Sell Your Car Online in Pakistan
        </Typography>
        <ContentBox>
          <Typography variant="h5" gutterBottom>
            <BlueHighlight>Post</BlueHighlight> your Ad on PakWheels
          </Typography>
          <ImageContainerWrapper>
            <ImageContainer src="image-source.png" alt="Car Image" />
          </ImageContainerWrapper>
          <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ mb: 2 }}
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{ mb: 1, maxWidth: "400px", width: "100%" }}
                >
                  <CheckIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Post your Ad for Free in 3 Easy Steps
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{ mb: 1, maxWidth: "400px", width: "100%" }}
                >
                  <CheckIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Genuine offers from Verified Buyers
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{ maxWidth: "400px", width: "100%" }}
                >
                  <CheckIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Sell your car Fast at the Best Price
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <StyledButton
            variant="contained"
            color="primary"
            sx={{ mt: 3, width: "100%", maxWidth: "300px", ml: "-10px" }}
            onClick={handleButtonClick}
          >
            Post An Ad
          </StyledButton>
        </ContentBox>
      </Container>
    </Wrapper>
  );
};

export default AdPostCard;
