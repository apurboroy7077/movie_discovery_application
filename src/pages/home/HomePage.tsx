"use client";
import HeroSection from "@/components/hero_section/HeroSection";
import MyNavbar from "@/components/navbar/MyNavbar";
import MySection from "@/components/section/MySection";
import TopRatedMoviesByGenreSection from "@/components/top_rated_movies_by_genre/TopRatedMoviesByGenreSection";
import TopRatedMoviesSection from "@/components/top_rated_movies_section/TopRatedMoviesSection";
import React from "react";

const HomePage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <TopRatedMoviesSection />
      <TopRatedMoviesByGenreSection genreName="Action" genreId="28" />
      <TopRatedMoviesByGenreSection genreName="Horror" genreId="27" />
      <TopRatedMoviesByGenreSection genreName="Mystery" genreId="9648" />
      <TopRatedMoviesByGenreSection genreName="Science Fiction" genreId="878" />
      <TopRatedMoviesByGenreSection genreName="Adventure" genreId="12" />
    </>
  );
};

export default HomePage;
