import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import useBasic from "@/hooks/useBasics";
import axios from "axios";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [numberOneRatedMovieData, setNumberOneRatedMovieData] = useState(
    null as any
  );
  const { screenSize } = useBasic();
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
        <div className=" relative">
          <img
            src={`${TMDB_IMAGE_URL}/${
              screenSize === "LARGE_SCREEN"
                ? numberOneRatedMovieData.backdrop_path
                : numberOneRatedMovieData.backdrop_path
            }`}
            alt=""
            className="w-full min-h-[20rem] lg:max-h-[40rem] object-cover object-center"
          />
          <div className="absolute bottom-0 h-full w-[70%] bg-gradient-to-r from-black to-transparent">
            <div className="w-full h-full relative">
              <div className="absolute bottom-[2rem] lg:bottom-[5rem] left-[2rem] lg:left-[5rem]">
                <div className="font-bold lg:text-5xl">
                  {numberOneRatedMovieData.title}
                </div>
                <div className="text-xs lg:text-xl mt-1 lg:mt-3">
                  Rating: {numberOneRatedMovieData.vote_average} | Release Date:{" "}
                  {numberOneRatedMovieData.release_date}
                </div>
                <div className="mt-3 lg:mt-10">
                  <button className="bg-[#1B2E4A] text-xs lg:text-lg px-3 lg:px-10 py-1 lg:py-2 rounded active:scale-[0.95]">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
