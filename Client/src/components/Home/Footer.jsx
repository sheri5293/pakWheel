/* eslint-disable no-unused-vars */
import React from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import { Facebook, Twitter, Instagram } from "@mui/icons-material";
import {
  FooterSection,
  FooterGrid,
  SocialIcons,
  Newsletter,
  Links,
  LinkItem,
} from "./FooterStyles";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <FooterGrid>
          <div>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Links>
              <LinkItem component={Link} to="/about">
                {" "}
                About Us
              </LinkItem>
              <LinkItem href="#">Contact</LinkItem>
              <LinkItem href="#">FAQ</LinkItem>
            </Links>
          </div>

          <Newsletter>
            <Typography variant="h6" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              size="small"
              fullWidth
              sx={{ backgroundColor: "white", borderRadius: "4px" }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: "10px" }}
            >
              Subscribe
            </Button>
          </Newsletter>

          <div>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <SocialIcons>
              <IconButton color="inherit" href="#">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" href="#">
                <Twitter />
              </IconButton>
              <IconButton color="inherit" href="#">
                <Instagram />
              </IconButton>
            </SocialIcons>
          </div>
        </FooterGrid>

        <Typography
          variant="body2"
          align="center"
          sx={{ marginTop: "20px", color: "#ccc" }}
        >
          © 2024 Car Luxury. All rights reserved. | Privacy Policy | Terms of
          Service
        </Typography>
      </Container>
    </FooterSection>
  );
};

export default Footer;
