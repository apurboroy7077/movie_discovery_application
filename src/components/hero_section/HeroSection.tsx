import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [numberOneRatedMovieData, setNumberOneRatedMovieData] = useState(
    null as any
  );
  const fetchData = () => {
    axios
      .get("/api/tmdb/get-top-rated-movie")
      .then((res) => {
        const numberOneRatedMovie = res.data.data[0];
        setNumberOneRatedMovieData(numberOneRatedMovie);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(numberOneRatedMovieData);
  return (
    <section>
      {numberOneRatedMovieData && (
        <div>
          <img
            src={`${TMDB_IMAGE_URL}/${numberOneRatedMovieData.poster_path}`}
            alt=""
          />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
