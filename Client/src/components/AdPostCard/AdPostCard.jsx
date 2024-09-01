/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import BlueHighlight from "../Common/BlueHighlight";
import CheckIcon from "../Common/CheckIcon";
import StyledButton from "../Common/StyledButton";
import ImageContainer from "./ImageContainer";
import {
  Wrapper,
  Heading,
  ContentBox,
  ImageContainerWrapper,
} from "./AdPostCardStyles";

const AdPostCard = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const authToken = Cookies.get("authToken");
  //   if (!authToken) {
  //     navigate("/login");
  //   }
  // }, [navigate]);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContentBox>
              <Heading variant="h4" gutterBottom>
                Sell Your Car Online in Pakistan
              </Heading>
              <Typography variant="h5" gutterBottom>
                <BlueHighlight>Post</BlueHighlight> your Ad on PakWheels
              </Typography>
              <ImageContainerWrapper>
                <ImageContainer src="image-source.png" alt="Car Image" />
              </ImageContainerWrapper>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ mt: 2 }}
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
              <StyledButton
                variant="contained"
                color="primary"
                sx={{ mt: 3, width: "100%" }}
                onClick={() => handleButtonClick("/post-ad")}
              >
                Post An Ad
              </StyledButton>
            </ContentBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <ContentBox>
              <Heading variant="h4" gutterBottom>
                Buy Your Dream Car Online in Pakistan
              </Heading>
              <Typography variant="h5" gutterBottom>
                <BlueHighlight>Explore</BlueHighlight> Cars on PakWheels
              </Typography>
              <ImageContainerWrapper>
                <ImageContainer src="image-source2.png" alt="Dream Car Image" />
              </ImageContainerWrapper>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{ mt: 2 }}
              >
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{ mb: 1, maxWidth: "400px", width: "100%" }}
                >
                  <CheckIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Explore a wide range of cars
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{ mb: 1, maxWidth: "400px", width: "100%" }}
                >
                  <CheckIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Verified sellers and buyers
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="flex-start"
                  sx={{ maxWidth: "400px", width: "100%" }}
                >
                  <CheckIcon sx={{ fontSize: "1rem" }} />
                  <Typography variant="body1" sx={{ ml: 1 }}>
                    Get the best deals in the market
                  </Typography>
                </Box>
              </Box>
              <StyledButton
                variant="contained"
                color="primary"
                sx={{ mt: 3, width: "100%" }}
                onClick={() => handleButtonClick("/explore-cars")}
              >
                Explore Cars
              </StyledButton>
            </ContentBox>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
};

export default AdPostCard;
