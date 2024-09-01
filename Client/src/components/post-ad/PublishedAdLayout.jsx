/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import { styled } from "@mui/system";
import Slider from "react-slick";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SpeedIcon from "@mui/icons-material/Speed";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import SettingsIcon from "@mui/icons-material/Settings";
import RadioIcon from "@mui/icons-material/Radio";
import AirIcon from "@mui/icons-material/Air";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WindowIcon from "@mui/icons-material/Window";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarCard = styled(Card)`
  max-width: 900px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
`;

const HeaderSection = styled(Box)`
  padding: 16px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LocationBox = styled(Box)`
  display: flex;
  align-items: center;
  color: #1976d2;
  margin-top: 8px;
  font-size: 14px;
`;

const CarImageSlider = styled(Slider)`
  .slick-slide img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const InfoSection = styled(Box)`
  padding: 16px;
`;

const DetailRow = styled(Box)`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 14px;
  color: #333;
`;

const DetailIcon = styled(Box)`
  margin-right: 8px;
  color: #1976d2;
`;

const DetailItem = styled(Box)`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

const AdditionalDetails = styled(Box)`
  padding: 16px;
  background-color: #fafafa;
  border-radius: 12px;
  margin-top: 16px;
  border: 1px solid #ddd;
`;

const AdditionalDetailsGrid = styled(Box)`
  display: grid;
  grid-template-columns: 150px auto;
  row-gap: 12px;
  column-gap: 16px;
  align-items: center;
`;

const FeatureHeading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  margin-top: 16px;
  color: #333;
  text-align: center;
`;

const ContactButton = styled(Button)`
  background-color: #4caf50;
  color: white;
  &:hover {
    background-color: #45a049;
  }
`;

const PriceCard = styled(Card)`
  max-width: 300px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const CarDetailsContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0;
`;

const CarInfoBox = styled(Box)`
  flex: 0 0 48%;
  margin-bottom: 20px;
`;

const InfoRow = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
`;

const FeaturesSection = styled(Box)`
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

const FeatureItem = styled(Box)`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-bottom: 12px;
`;

const FeatureIcon = styled(Box)`
  margin-right: 12px;
  color: #000;
  font-size: 20px;
`;

const DescriptionSection = styled(Box)`
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #ddd;
  margin-top: 16px;
`;

const DescriptionHeading = styled(Typography)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #333;
`;

const DescriptionText = styled(Typography)`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const PhoneNumberSection = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
`;

const PhoneButton = styled(Button)`
  background-color: #1976d2;
  color: white;
  margin-top: 8px;
  &:hover {
    background-color: #1565c0;
  }
`;

const SellerCard = styled(Card)`
  max-width: 300px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SellerIconBox = styled(Box)`
  display: flex;
  gap: 16px;
  margin-top: 16px;

  & > * {
    color: #1976d2;
    font-size: 28px;
    transition: color 0.3s;

    &:hover {
      color: #004ba0;
    }
  }
`;

const PublishedAdLayout = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const featureIcons = {
    "AM/FM Radio": <RadioIcon />,
    "Air Bags": <AirIcon />,
    "Air Conditioning": <AcUnitIcon />,
    "Leather Seats": <LockIcon />,
    "Power Door Locks": <LockIcon />,
    "Power Mirrors": <VisibilityIcon />,
    "Power Windows": <WindowIcon />,
    ABS: <RadioIcon />,
    Sunroof: <Brightness7Icon />,
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <CarCard>
          <HeaderSection>
            <Typography variant="h5">Toyota Land Cruiser ZX 2016</Typography>
            <LocationBox>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2" sx={{ marginLeft: "4px" }}>
                Bath Island, Karachi Sindh
              </Typography>
            </LocationBox>
          </HeaderSection>
          <CarImageSlider {...settings}>
            <div>
              <CardMedia
                component="img"
                image="src/assets/image/demo1.webp"
                alt="Toyota Land Cruiser"
              />
            </div>
            <div>
              <CardMedia
                component="img"
                image="src/assets/image/demo2.webp"
                alt="Toyota Land Cruiser"
              />
            </div>
            <div>
              <CardMedia
                component="img"
                image="src/assets/image/demo3.webp"
                alt="Toyota Land Cruiser"
              />
            </div>
          </CarImageSlider>
          <InfoSection>
            <Divider />
            <Box display="flex" justifyContent="space-between" padding="8px 0">
              <DetailItem>
                <DetailIcon>
                  <CalendarTodayIcon fontSize="small" />
                </DetailIcon>
                <Typography variant="body2">2016</Typography>
              </DetailItem>
              <DetailItem>
                <DetailIcon>
                  <SpeedIcon fontSize="small" />
                </DetailIcon>
                <Typography variant="body2">80,000 km</Typography>
              </DetailItem>
              <DetailItem>
                <DetailIcon>
                  <LocalGasStationIcon fontSize="small" />
                </DetailIcon>
                <Typography variant="body2">Petrol</Typography>
              </DetailItem>
              <DetailItem>
                <DetailIcon>
                  <SettingsIcon fontSize="small" />
                </DetailIcon>
                <Typography variant="body2">Automatic</Typography>
              </DetailItem>
            </Box>
            <Divider />
            <AdditionalDetails>
              <CarDetailsContainer>
                <CarInfoBox>
                  <InfoRow>
                    <Typography variant="body1" fontWeight="bold">
                      Registered In:
                    </Typography>
                    <Typography variant="body1">Sindh</Typography>
                  </InfoRow>
                  <InfoRow>
                    <Typography variant="body1" fontWeight="bold">
                      Color:
                    </Typography>
                    <Typography variant="body1">Black</Typography>
                  </InfoRow>
                  <InfoRow>
                    <Typography variant="body1" fontWeight="bold">
                      Condition:
                    </Typography>
                    <Typography variant="body1">Used</Typography>
                  </InfoRow>
                </CarInfoBox>
                <CarInfoBox>
                  <InfoRow>
                    <Typography variant="body1" fontWeight="bold">
                      Transmission:
                    </Typography>
                    <Typography variant="body1">Automatic</Typography>
                  </InfoRow>
                  <InfoRow>
                    <Typography variant="body1" fontWeight="bold">
                      Fuel Type:
                    </Typography>
                    <Typography variant="body1">Petrol</Typography>
                  </InfoRow>
                  <InfoRow>
                    <Typography variant="body1" fontWeight="bold">
                      Engine Capacity:
                    </Typography>
                    <Typography variant="body1">4.0L</Typography>
                  </InfoRow>
                </CarInfoBox>
              </CarDetailsContainer>
            </AdditionalDetails>

            <FeatureHeading>Car Features</FeatureHeading>
            <FeaturesSection>
              {Object.entries(featureIcons).map(([feature, icon]) => (
                <FeatureItem key={feature}>
                  <FeatureIcon>{icon}</FeatureIcon>
                  <Typography variant="body2">{feature}</Typography>
                </FeatureItem>
              ))}
            </FeaturesSection>
            <DescriptionSection>
              <DescriptionHeading>Seller's Comments</DescriptionHeading>
              <DescriptionText>
                This Toyota Land Cruiser ZX 2016 is in excellent condition with
                all the features you need for a comfortable and luxurious ride.
                It has been well-maintained and is ready for a new owner.
              </DescriptionText>
            </DescriptionSection>
          </InfoSection>
        </CarCard>
      </Grid>
      <Grid item xs={4}>
        <PriceCard>
          <Typography variant="h6" gutterBottom>
            Price
          </Typography>
          <Typography variant="h5" color="primary">
            $60,000
          </Typography>
          <PhoneNumberSection>
            <ContactButton onClick={() => setShowPhoneNumber(!showPhoneNumber)}>
              {showPhoneNumber ? "Hide Phone Number" : "Show Phone Number"}
            </ContactButton>
            {showPhoneNumber && (
              <Typography variant="body1" sx={{ marginTop: "8px" }}>
                Phone: +123 456 7890
              </Typography>
            )}
          </PhoneNumberSection>
        </PriceCard>

        <SellerCard>
          <Typography variant="h6">Seller Details</Typography>
          <Typography variant="body1">Sheheryar</Typography>
          <Typography variant="body2" color="textSecondary">
            Member since Jan 2020
          </Typography>
          <SellerIconBox>
            <FacebookIcon />
            <EmailIcon />
            <PhoneIcon />
          </SellerIconBox>
        </SellerCard>
      </Grid>
    </Grid>
  );
};

export default PublishedAdLayout;
