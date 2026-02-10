import MyNavbar from "@/components/navbar/MyNavbar";
import MySection from "@/components/section/MySection";
import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import React from "react";

const DetailsPage = () => {
  const dummyData = {
    adult: false,
    backdrop_path: "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
    genre_ids: [18, 80],
    id: 238,
    original_language: "en",
    original_title: "The Godfather",
    overview:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    popularity: 100.932,
    poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    release_date: "1972-03-14",
    title: "The Godfather",
    video: false,
    vote_average: 8.7,
    vote_count: 17806,
  };
  return (
    <>
      <MyNavbar />
      <MySection>
        <div>
          <div className="flex justify-between">
            <div className="w-[35%]">
              <img src={`${TMDB_IMAGE_URL}/${dummyData.poster_path}`} alt="" />
            </div>
            <div className="w-[55%]">
              <div className="font-bold">{dummyData.original_title}</div>
              <div className="text-sm mt-2 border-b-[1px] border-b-[gray] pb-1">
                Overview
              </div>
              <div className="mt-2">
                <div className="text-xs text-justify">{dummyData.overview}</div>
              </div>
            </div>
          </div>
        </div>
        <div className=" border-t-[1px] border-t-[gray] mt-5"></div>
        <div className="mt-5">
          <div>
            <span className="font-medium text-sm">Release Date:</span>{" "}
            <span className=" text-xs">{dummyData.release_date}</span>
          </div>
          <div>
            <span className="font-medium text-sm">Rating:</span>{" "}
            <span className=" text-xs">{dummyData.vote_average}</span>
          </div>
          <div>
            <span className="font-medium text-sm">Release Date:</span>{" "}
            <span className=" text-xs">{dummyData.release_date}</span>
          </div>
          <div>
            <span className="font-medium text-sm">Release Date:</span>{" "}
            <span className=" text-xs">{dummyData.release_date}</span>
          </div>
        </div>
      </MySection>
    </>
  );
};

export default DetailsPage;
