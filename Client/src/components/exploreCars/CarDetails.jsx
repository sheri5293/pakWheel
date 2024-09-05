/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import AuthContext from "../contexts/AuthContext";
import axios from "axios";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  Button,
  Divider,
  Grid,
  TextField,
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
import { Wrapper } from "../AdPostCard/AdPostCardStyles";
import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import demo1 from "../../assets/image/demo1.webp";
import demo2 from "../../assets/image/demo2.webp";
import demo3 from "../../assets/image/demo3.webp";

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
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition:
      transform 0.5s ease,
      box-shadow 0.5s ease;
  }

  .slick-slide img:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
  }

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
    opacity: 0.8;
    transition:
      opacity 0.3s ease,
      transform 0.3s ease;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.9);
    border: 2px solid #1976d2;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .slick-prev {
    left: 20px;
    &:before {
      content: "◁";
      font-size: 28px;
      color: #1976d2;
    }
  }

  .slick-next {
    right: 20px;
    &:before {
      content: "▷";
      font-size: 28px;
      color: #1976d2;
    }
  }

  .slick-prev:hover,
  .slick-next:hover {
    opacity: 1;
    transform: scale(1.2);
    background-color: #f5f5f5;
  }
`;

const InfoSection = styled(Box)`
  padding: 16px;
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
const CommentSection = styled(Box)`
  margin-top: 16px;
  padding: 24px;
  background-color: #f9f9f9;
  border-radius: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CommentList = styled(Box)`
  margin-bottom: 16px;
`;

const CommentItem = styled(Box)`
  margin-bottom: 12px;
  padding: 16px;
  border-radius: 20px;
  background: linear-gradient(145deg, #ffffff, #f1f1f1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  max-width: 80%;
  position: relative;

  &.user-comment {
    background: #007aff;
    color: #fff;
    align-self: flex-end;
    border-top-right-radius: 0;
  }

  &.other-comment {
    background: #e5e5ea;
    color: #000;
    align-self: flex-start;
    border-top-left-radius: 0;
  }
`;

const CommentAvatar = styled(Box)`
  margin-right: 12px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff6f61, #ffcccb);
  transition:
    background 0.3s ease,
    transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  &:hover {
    background: linear-gradient(135deg, #ffcccb, #ff6f61);
    transform: scale(1.1);
  }
`;

const CommentContent = styled(Box)`
  flex: 1;
  font-size: 14px;
`;

const CarDetails = () => {
  const { id } = useParams();

  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    if (!id) {
      console.error("carId is undefined or null");
      return;
    }

    axios
      .get(`http://localhost:5000/api/users/get-comments/${id}`)
      .then((response) => {
        console.log("Response data:", response.data);
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, [id]);
  const handleCommentSubmit = () => {
    const newCommentData = {
      text: newComment,
      isUser: true,
      carId: id,
    };

    axios
      .post("http://localhost:5000/api/users/add-comment", newCommentData)
      .then((response) => {
        setComments([response.data, ...comments]);
        setNewComment("");
      })
      .catch((error) => console.error(error));
  };

  const cars = [
    {
      id: 1,
      title: "Daihatsu Mira",
      price: "$60,000",
      location: "New York",
      year: "2016",
      mileage: "40,000",
      fuelType: "Petrol",
      transmission: "Automatic",
      images: [demo1, demo2, demo3],

      description: "Excellent condition, well maintained.",
      registration: "NYC",
      color: "Black",
      condition: "Used",
      engineCapacity: "4.5L",
      sellerName: "John Doe",
      sellerSince: "2018",
    },
    {
      id: 2,
      title: "Suzuki Alto",
      price: "$30,000",
      location: "Los Angeles",
      year: "2020",
      mileage: "10,000",
      fuelType: "Diesel",
      transmission: "Manual",
      images: [demo1, demo2, demo3],
      description: "Brand new with extended warranty.",
      registration: "LA",
      color: "White",
      condition: "New",
      engineCapacity: "1.8L",
      sellerName: "Jane Smith",
      sellerSince: "2020",
    },
    {
      id: 3,
      title: "Nissan Altima 2019",
      price: "$40,000",
      location: "Chicago",
      year: "2019",
      mileage: "20,000",
      fuelType: "Petrol",
      transmission: "Automatic",
      images: [demo1, demo2, demo3],
      description: "Brand new with extended warranty.",
      registration: "CHI",
      color: "Red",
      condition: "Used",
      engineCapacity: "2.0L",
      sellerName: "Michael Johnson",
      sellerSince: "2019",
    },
    {
      id: 4,
      title: "Audi A6",
      price: "$40,000",
      location: "Chicago",
      year: "2019",
      mileage: "20,000",
      fuelType: "Petrol",
      transmission: "Automatic",
      images: [demo1, demo2, demo3],
      description: "Brand new with extended warranty.",
      registration: "CHI",
      color: "Red",
      condition: "Used",
      engineCapacity: "2.0L",
      sellerName: "Michael Johnson",
      sellerSince: "2019",
    },
    {
      id: 5,
      title: "Cultus",
      price: "$40,000",
      location: "Chicago",
      year: "2019",
      mileage: "20,000",
      fuelType: "Petrol",
      transmission: "Automatic",
      images: [demo1, demo2, demo3],
      description: "Brand new with extended warranty.",
      registration: "CHI",
      color: "Red",
      condition: "Used",
      engineCapacity: "2.0L",
      sellerName: "Michael Johnson",
      sellerSince: "2019",
    },
  ];
  const car = cars.find((car) => car.id === parseInt(id));

  if (!car) {
    return <Typography variant="h6">Car not found</Typography>;
  }
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
    <Wrapper>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <CarCard>
            <HeaderSection>
              <Typography variant="h5">{car.title}</Typography>
              <LocationBox>
                <LocationOnIcon fontSize="small" />
                <Typography variant="body2" sx={{ marginLeft: "4px" }}>
                  {car.location}
                </Typography>
              </LocationBox>
            </HeaderSection>
            <CarImageSlider {...settings}>
              {car.images.map((image, index) => (
                <div key={index}>
                  <CardMedia
                    component="img"
                    height="400"
                    image={image}
                    alt={`Car image ${index + 1}`}
                  />
                </div>
              ))}
            </CarImageSlider>
            <InfoSection>
              <Divider />
              <Box
                display="flex"
                justifyContent="space-between"
                padding="8px 0"
              >
                <DetailItem>
                  <DetailIcon>
                    <CalendarTodayIcon fontSize="small" />
                  </DetailIcon>
                  <Typography variant="body2">{car.year}</Typography>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <SpeedIcon fontSize="small" />
                  </DetailIcon>
                  <Typography variant="body2">{car.mileage}</Typography>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <LocalGasStationIcon fontSize="small" />
                  </DetailIcon>
                  <Typography variant="body2">{car.fuelType}</Typography>
                </DetailItem>
                <DetailItem>
                  <DetailIcon>
                    <SettingsIcon fontSize="small" />
                  </DetailIcon>
                  <Typography variant="body2">{car.transmission}</Typography>
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
                      <Typography variant="body1">
                        {car.registration}
                      </Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography variant="body1" fontWeight="bold">
                        Color:
                      </Typography>
                      <Typography variant="body1">{car.color}</Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography variant="body1" fontWeight="bold">
                        Condition:
                      </Typography>
                      <Typography variant="body1">{car.condition}</Typography>
                    </InfoRow>
                  </CarInfoBox>
                  <CarInfoBox>
                    <InfoRow>
                      <Typography variant="body1" fontWeight="bold">
                        Transmission:
                      </Typography>
                      <Typography variant="body1">
                        {car.transmission}
                      </Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography variant="body1" fontWeight="bold">
                        Fuel Type:
                      </Typography>
                      <Typography variant="body1">{car.fuelType}</Typography>
                    </InfoRow>
                    <InfoRow>
                      <Typography variant="body1" fontWeight="bold">
                        Engine Capacity:
                      </Typography>
                      <Typography variant="body1">
                        {car.engineCapacity}
                      </Typography>
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
                <DescriptionText>{car.description}</DescriptionText>
              </DescriptionSection>
            </InfoSection>
            <CommentSection>
              <Typography variant="h6" gutterBottom>
                Comments
              </Typography>
              <CommentList>
                {comments.map((comment, index) => (
                  <CommentItem
                    key={index}
                    className={
                      comment.isUser ? "user-comment" : "other-comment"
                    }
                  >
                    <CommentAvatar>{comment.isUser ? "U" : "O"}</CommentAvatar>
                    <CommentContent>
                      <Typography>{comment.text}</Typography>
                    </CommentContent>
                  </CommentItem>
                ))}
              </CommentList>
              <TextField
                label="Add a comment"
                variant="outlined"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                fullWidth
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleCommentSubmit}
              >
                Add Comment
              </Button>
            </CommentSection>
          </CarCard>
        </Grid>
        <Grid item xs={4}>
          <PriceCard>
            <Typography variant="h6" gutterBottom>
              Price
            </Typography>
            <Typography variant="h5" color="primary">
              {car.price}
            </Typography>
            <PhoneNumberSection>
              <ContactButton
                onClick={() => setShowPhoneNumber(!showPhoneNumber)}
              >
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
            <Typography variant="body1">{car.sellerName}</Typography>
            <Typography variant="body2" color="textSecondary">
              {car.sellerSince}
            </Typography>
            <SellerIconBox>
              <FacebookIcon />
              <EmailIcon />
              <PhoneIcon />
            </SellerIconBox>
          </SellerCard>
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default CarDetails;
