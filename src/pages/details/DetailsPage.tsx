"use client";
import MovieDetailSection from "@/components/movie_details/MovieDetailSection";
import MyNavbar from "@/components/navbar/MyNavbar";
import MySection from "@/components/section/MySection";
import TopRatedMoviesByGenreSection from "@/components/top_rated_movies_by_genre/TopRatedMoviesByGenreSection";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import axios from "axios";
import React, { useEffect } from "react";

const DetailsPage = () => {
  return (
    <>
      <MyNavbar />
      <MovieDetailSection />
      <TopRatedMoviesByGenreSection genreId="27" genreName="Horror" />
    </>
  );
};

export default DetailsPage;
