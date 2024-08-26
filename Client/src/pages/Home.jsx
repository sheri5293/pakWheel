/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "../components/Home/Hero Section";
import FeaturedCars from "../components/Home/FeaturedCarsSection";
import WhyChooseUs from "../components/Home/WhyChooseUsSection";
import Testimonials from "../components/Home/TestimonialsSection";
import Footer from "../components/Home/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedCars />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
