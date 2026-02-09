import React, { useEffect, useState } from "react";
import MySection from "../section/MySection";
import useBasic from "@/hooks/useBasics";
import axios from "axios";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import MovieLists from "../movie_lists/MovieLists";

const TopRatedMoviesSection = () => {
  const [topRatedMovies, setTopRatedMovies] = useState([] as any[]);
  const { screenSize } = useBasic();
  const fetchData = () => {
    axios
      .get("/api/tmdb/get-top-rated-movie")
      .then((res) => {
        const data = res.data.data;
        setTopRatedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <MySection>
      <div>
        <div className="text-sm lg:text-2xl font-bold">Top Rated Movies</div>
      </div>
      <div className="mt-5">
        <MovieLists arrayOfMovies={topRatedMovies} />
      </div>
    </MySection>
  );
};

export default TopRatedMoviesSection;
