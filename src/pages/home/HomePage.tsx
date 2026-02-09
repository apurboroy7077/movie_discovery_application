"use client";
import HeroSection from "@/components/hero_section/HeroSection";
import MyNavbar from "@/components/navbar/MyNavbar";
import MySection from "@/components/section/MySection";
import TopRatedMoviesSection from "@/components/top_rated_movies_section/TopRatedMoviesSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <TopRatedMoviesSection />
    </>
  );
};

export default HomePage;
