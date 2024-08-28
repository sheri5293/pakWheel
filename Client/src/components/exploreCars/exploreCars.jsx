/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button,
  styled,
  Box,
  Container,
  Modal,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Filters from "../post-ad/Filters";
import CarListing from "../post-ad/CarListing";
import {} from "./exploreCarsStyles";
import { Wrapper } from "../AdPostCard/AdPostCardStyles";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: "800px",
  marginBottom: theme.spacing(3),
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  position: "relative",
  overflow: "hidden",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const FeaturedBadge = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 16,
  left: 16,
  backgroundColor: theme.palette.error.main,
  color: "#fff",
  padding: "4px 12px",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "20px",
}));

const DetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "16px",
  height: "100%",
  justifyContent: "space-between",
  textAlign: "center",
});

const PhoneButton = styled(Button)({
  backgroundColor: "#28a745",
  color: "#fff",
  marginTop: "10px",
  borderRadius: "20px",
  textTransform: "none",
  padding: "8px 24px",
  "&:hover": {
    backgroundColor: "#218838",
  },
});

const PriceTag = styled(Typography)({
  fontWeight: "bold",
  color: "#28a745",
});

const DescriptionText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const EditDeleteContainer = styled(Box)({
  position: "absolute",
  top: 10,
  right: 10,
  display: "flex",
  gap: "8px",
});

const StyledModal = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-paper": {
    borderRadius: "16px",
    padding: theme.spacing(3),
    maxWidth: "600px",
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const carAds = [
  {
    id: 1,
    featured: true,
    image:
      "https://img.goodfon.com/original/1280x960/6/f5/audi-chernyy-kontur.jpg",
    city: "Karachi",
    carInfo: "Daihatsu Mira",
    mileage: "7,000 km",
    registeredIn: "Punjab",
    color: "Silver",
    price: "360,000 PKR",
    description: "Good condition, first owner",
    phoneNumber: "+92 300 0000000",
  },
  {
    id: 2,
    featured: true,
    image:
      "https://img.goodfon.com/original/1280x960/6/f5/audi-chernyy-kontur.jpg",
    city: "Karachi",
    carInfo: "Suzuki Alto",
    mileage: "12,000 km",
    registeredIn: "Sindh",
    color: "White",
    price: "1,200,000 PKR",
    description: "Low mileage, very neat and clean",
    phoneNumber: "+92 300 0000000",
  },
  {
    id: 3,
    featured: false,
    image:
      "https://img.goodfon.com/original/1280x960/6/f5/audi-chernyy-kontur.jpg",
    city: "Lahore",
    carInfo: "Honda Civic",
    mileage: "45,000 km",
    registeredIn: "Punjab",
    color: "Black",
    price: "2,400,000 PKR",
    description: "Well maintained, used by an army officer",
    phoneNumber: "+92 300 0000000",
  },
  {
    id: 4,
    featured: false,
    image:
      "https://img.goodfon.com/original/1280x960/6/f5/audi-chernyy-kontur.jpg",
    city: "Lahore",
    carInfo: "Honda Civic",
    mileage: "45,000 km",
    registeredIn: "Punjab",
    color: "Black",
    price: "2,400,000 PKR",
    description: "Well maintained, used by an army officer",
    phoneNumber: "+92 300 0000000",
  },
  {
    id: 5,
    featured: false,
    image:
      "https://img.goodfon.com/original/1280x960/6/f5/audi-chernyy-kontur.jpg",
    city: "Lahore",
    carInfo: "Honda Civic",
    mileage: "45,000 km",
    registeredIn: "Punjab",
    color: "Black",
    price: "2,400,000 PKR",
    description: "Well maintained, used by an army officer",
    phoneNumber: "+92 300 0000000",
  },
];

const ExploreCars = () => {
  const [visiblePhoneNumber, setVisiblePhoneNumber] = useState(null);
  const [editAd, setEditAd] = useState(null);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [carList, setCarList] = useState(carAds);
  const [filters, setFilters] = useState({ title: "", mileage: "" });

  const handleShowPhone = (id) => {
    setVisiblePhoneNumber(visiblePhoneNumber === id ? null : id);
  };

  const handleEditClick = (ad) => {
    setEditAd(ad);
    setOpenEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setCarList(carList.filter((ad) => ad.id !== id));
  };

  const handleCloseModal = () => {
    setOpenEditModal(false);
    setEditAd(null);
  };

  const handleEditSubmit = (values) => {
    setCarList(
      carList.map((ad) => (ad.id === editAd.id ? { ...ad, ...values } : ad))
    );
    handleCloseModal();
  };

  const formik = useFormik({
    initialValues: {
      image: editAd?.image || "",
      city: editAd?.city || "",
      carInfo: editAd?.carInfo || "",
      mileage: editAd?.mileage || "",
      registeredIn: editAd?.registeredIn || "",
      color: editAd?.color || "",
      price: editAd?.price || "",
      description: editAd?.description || "",
      phoneNumber: editAd?.phoneNumber || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      image: Yup.string().url("Invalid URL").required("Required"),
      city: Yup.string().required("Required"),
      carInfo: Yup.string().required("Required"),
      mileage: Yup.string().required("Required"),
      registeredIn: Yup.string().required("Required"),
      color: Yup.string().required("Required"),
      price: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      phoneNumber: Yup.string().required("Required"),
    }),
    onSubmit: handleEditSubmit,
  });
  useEffect(() => {
    const filteredCars = carAds.filter(
      (ad) =>
        ad.carInfo.toLowerCase().includes(filters.title.toLowerCase()) &&
        ad.mileage.toLowerCase().includes(filters.mileage.toLowerCase())
    );
    setCarList(filteredCars);
  }, [filters]);

  return (
    <Wrapper>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" gutterBottom>
              <Provider store={store}>
                <Filters />
                <CarListing />
              </Provider>
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Box sx={{ mt: 5 }}>
              <Grid container spacing={3}>
                {carList.map((ad) => (
                  <Grid item key={ad.id} xs={12}>
                    <StyledCard>
                      {ad.featured && <FeaturedBadge>FEATURED</FeaturedBadge>}
                      <CardMedia
                        component="img"
                        sx={{ height: 300, objectFit: "cover" }}
                        image={ad.image}
                        alt={ad.carInfo}
                      />
                      <CardContent>
                        <EditDeleteContainer>
                          <IconButton
                            color="primary"
                            onClick={() => handleEditClick(ad)}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteClick(ad.id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </EditDeleteContainer>
                        <DetailsContainer>
                          <Typography
                            component="h5"
                            variant="h6"
                            sx={{ fontWeight: 600, fontSize: "1.5rem" }}
                          >
                            {ad.carInfo}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            sx={{ marginBottom: "8px" }}
                          >
                            {ad.city} | {ad.carInfo} | {ad.registeredIn} |{" "}
                            {ad.mileage} | {ad.color}
                          </Typography>
                          <PriceTag variant="h6">{ad.price}</PriceTag>
                          <DescriptionText variant="body2">
                            {ad.description}
                          </DescriptionText>
                          <PhoneButton onClick={() => handleShowPhone(ad.id)}>
                            {visiblePhoneNumber === ad.id
                              ? ad.phoneNumber
                              : "Show Phone Number"}
                          </PhoneButton>
                        </DetailsContainer>
                      </CardContent>
                    </StyledCard>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>

        <StyledModal
          open={openEditModal}
          onClose={handleCloseModal}
          aria-labelledby="edit-modal-title"
          aria-describedby="edit-modal-description"
        >
          <StyledDialogTitle>Edit Ad</StyledDialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <StyledTextField
                fullWidth
                id="image"
                name="image"
                label="Image URL"
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
              <StyledTextField
                fullWidth
                id="city"
                name="city"
                label="City"
                value={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
              <StyledTextField
                fullWidth
                id="carInfo"
                name="carInfo"
                label="Car Info"
                value={formik.values.carInfo}
                onChange={formik.handleChange}
                error={formik.touched.carInfo && Boolean(formik.errors.carInfo)}
                helperText={formik.touched.carInfo && formik.errors.carInfo}
              />
              <StyledTextField
                fullWidth
                id="mileage"
                name="mileage"
                label="Mileage"
                value={formik.values.mileage}
                onChange={formik.handleChange}
                error={formik.touched.mileage && Boolean(formik.errors.mileage)}
                helperText={formik.touched.mileage && formik.errors.mileage}
              />
              <StyledTextField
                fullWidth
                id="registeredIn"
                name="registeredIn"
                label="Registered In"
                value={formik.values.registeredIn}
                onChange={formik.handleChange}
                error={
                  formik.touched.registeredIn &&
                  Boolean(formik.errors.registeredIn)
                }
                helperText={
                  formik.touched.registeredIn && formik.errors.registeredIn
                }
              />
              <StyledTextField
                fullWidth
                id="color"
                name="color"
                label="Color"
                value={formik.values.color}
                onChange={formik.handleChange}
                error={formik.touched.color && Boolean(formik.errors.color)}
                helperText={formik.touched.color && formik.errors.color}
              />
              <StyledTextField
                fullWidth
                id="price"
                name="price"
                label="Price"
                value={formik.values.price}
                onChange={formik.handleChange}
                error={formik.touched.price && Boolean(formik.errors.price)}
                helperText={formik.touched.price && formik.errors.price}
              />
              <StyledTextField
                fullWidth
                id="description"
                name="description"
                label="Description"
                multiline
                rows={4}
                value={formik.values.description}
                onChange={formik.handleChange}
                error={
                  formik.touched.description &&
                  Boolean(formik.errors.description)
                }
                helperText={
                  formik.touched.description && formik.errors.description
                }
              />
              <StyledTextField
                fullWidth
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                error={
                  formik.touched.phoneNumber &&
                  Boolean(formik.errors.phoneNumber)
                }
                helperText={
                  formik.touched.phoneNumber && formik.errors.phoneNumber
                }
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Save
            </Button>
          </DialogActions>
        </StyledModal>
      </Container>
    </Wrapper>
  );
};

export default ExploreCars;
