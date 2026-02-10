"use client";
import MovieDetailSection from "@/components/movie_details/MovieDetailSection";
import MyNavbar from "@/components/navbar/MyNavbar";
import MySection from "@/components/section/MySection";
import TopRatedMoviesByGenreSection from "@/components/top_rated_movies_by_genre/TopRatedMoviesByGenreSection";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
  const myParams = useParams();
  const [movieDetails, setMovieDetails] = useState<any>(null);
  const fetchData = () => {
    if (!myParams) {
      return;
    }
    axios
      .get(`/api/tmdb/get-movie-details?movie_id=${myParams.id}`)
      .then((res) => {
        const data = res.data.data;
        setMovieDetails(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <MyNavbar />
      {movieDetails && <MovieDetailSection movieDetails={movieDetails} />}

      <TopRatedMoviesByGenreSection genreId="27" genreName="Horror" />
    </>
  );
};

export default DetailsPage;
