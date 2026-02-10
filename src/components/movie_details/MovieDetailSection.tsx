import React, { useEffect } from "react";
import MySection from "../section/MySection";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import axios from "axios";

const MovieDetailSection = () => {
  const fetchData = () => {
    axios
      .get(`/api/tmdb/get-movie-details?movie_id=238`)
      .then((res) => {
        const data = res.data.data;
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const dummyData = {
    adult: false,
    backdrop_path: "/tSPT36ZKlP2WVHJLM4cQPLSzv3b.jpg",
    belongs_to_collection: {
      id: 230,
      name: "The Godfather Collection",
      poster_path: "/e5iVtjkjM30znn86JsvkBYtvEo1.jpg",
      backdrop_path: "/dIqp8unLVLykgDAlHNalrRVOKjI.jpg",
    },
    budget: 6000000,
    genres: [
      {
        id: 18,
        name: "Drama",
      },
      {
        id: 80,
        name: "Crime",
      },
    ],
    homepage: "http://www.thegodfather.com/",
    id: 238,
    imdb_id: "tt0068646",
    origin_country: ["US"],
    original_language: "en",
    original_title: "The Godfather",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    popularity: 43.3668,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    production_companies: [
      {
        id: 4,
        logo_path: "/jay6WcMgagAklUt7i9Euwj1pzTF.png",
        name: "Paramount Pictures",
        origin_country: "US",
      },
      {
        id: 10211,
        logo_path: null,
        name: "Alfran Productions",
        origin_country: "US",
      },
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America",
      },
    ],
    release_date: "1972-03-14",
    revenue: 245066411,
    runtime: 175,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English",
      },
      {
        english_name: "Italian",
        iso_639_1: "it",
        name: "Italiano",
      },
      {
        english_name: "Latin",
        iso_639_1: "la",
        name: "Latin",
      },
    ],
    status: "Released",
    tagline: "An offer you can't refuse.",
    title: "The Godfather",
    video: false,
    vote_average: 8.687,
    vote_count: 22430,
  };
  return (
    <MySection>
      <div>
        <div className="flex justify-between">
          <div className="w-[35%] lg:w-[20%]">
            <img
              src={`${TMDB_IMAGE_URL}/${dummyData.poster_path}`}
              alt=""
              className="w-full  object-cover object-center"
            />
          </div>
          <div className="w-[55%] lg:w-[78%]">
            <div className="font-bold lg:text-5xl">
              {dummyData.original_title}
            </div>
            <div className="text-sm lg:text-2xl mt-2 lg:mt-5 border-b-[1px] border-b-[gray] pb-1">
              Overview
            </div>
            <div className="mt-2 lg:mt-5">
              <div className="text-xs lg:text-lg text-justify">
                {dummyData.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] border-t-[gray] mt-5"></div>
      <div className="mt-5">
        <div>
          <span className="font-medium text-sm lg:text-xl">Release Date:</span>{" "}
          <span className=" text-xs lg:text-lg">{dummyData.release_date}</span>
        </div>
        <div className="lg:mt-2">
          <span className="font-medium text-sm lg:text-xl">Rating:</span>{" "}
          <span className=" text-xs lg:text-lg ">{dummyData.vote_average}</span>
        </div>
        <div className="lg:mt-2">
          <span className="font-medium text-sm lg:text-xl">Status:</span>{" "}
          <span className=" text-xs lg:text-lg">{dummyData.status}</span>
        </div>
        <div className="lg:mt-2">
          <span className="font-medium text-sm lg:text-xl">Production:</span>{" "}
          <span className=" text-xs lg:text-lg">
            {dummyData.production_companies[0].name}
          </span>
        </div>
      </div>
    </MySection>
  );
};

export default MovieDetailSection;
