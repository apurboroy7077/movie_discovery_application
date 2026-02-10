import React, { useEffect } from "react";
import MySection from "../section/MySection";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import axios from "axios";
type PropsType = {
  movieDetails: any;
};
const MovieDetailSection = (props: PropsType) => {
  const { movieDetails } = props;
  return (
    <MySection>
      <div>
        <div className="flex justify-between">
          <div className="w-[35%] lg:w-[20%]">
            <img
              src={`${TMDB_IMAGE_URL}/${movieDetails.poster_path}`}
              alt=""
              className="w-full  object-cover object-center"
            />
          </div>
          <div className="w-[55%] lg:w-[78%]">
            <div className="font-bold lg:text-5xl">
              {movieDetails.original_title}
            </div>
            <div className="text-sm lg:text-2xl mt-2 lg:mt-5 border-b-[1px] border-b-[gray] pb-1">
              Overview
            </div>
            <div className="mt-2 lg:mt-5">
              <div className="text-xs lg:text-lg text-justify">
                {movieDetails.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" border-t-[1px] border-t-[gray] mt-5"></div>
      <div className="mt-5">
        <div>
          <span className="font-medium text-sm lg:text-xl">Release Date:</span>{" "}
          <span className=" text-xs lg:text-lg">
            {movieDetails.release_date}
          </span>
        </div>
        <div className="lg:mt-2">
          <span className="font-medium text-sm lg:text-xl">Rating:</span>{" "}
          <span className=" text-xs lg:text-lg ">
            {movieDetails.vote_average}
          </span>
        </div>
        <div className="lg:mt-2">
          <span className="font-medium text-sm lg:text-xl">Status:</span>{" "}
          <span className=" text-xs lg:text-lg">{movieDetails.status}</span>
        </div>
        <div className="lg:mt-2">
          <span className="font-medium text-sm lg:text-xl">Production:</span>{" "}
          <span className=" text-xs lg:text-lg">
            {movieDetails?.production_companies[0]?.name}
          </span>
        </div>
      </div>
    </MySection>
  );
};

export default MovieDetailSection;
