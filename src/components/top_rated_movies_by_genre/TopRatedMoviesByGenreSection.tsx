import React, { useEffect, useState } from "react";
import MySection from "../section/MySection";
import useBasic from "@/hooks/useBasics";
import axios from "axios";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import MovieLists from "../movie_lists/MovieLists";
type PropsType = {
  genreName: string;
  genreId: string;
};

const TopRatedMoviesByGenreSection = (props: PropsType) => {
  const { genreName, genreId } = props;
  const [topRatedMovies, setTopRatedMovies] = useState([] as any[]);
  const { screenSize } = useBasic();
  const fetchData = () => {
    axios
      .get(`/api/tmdb/get-top-rated-movie-by-genre?genre_id=${genreId}`)
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
        <div className="text-sm lg:text-2xl font-bold">{genreName}</div>
      </div>
      <div className="mt-5">
        <MovieLists arrayOfMovies={topRatedMovies} />
      </div>
    </MySection>
  );
};

export default TopRatedMoviesByGenreSection;
