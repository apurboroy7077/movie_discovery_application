import { TMDB_IMAGE_URL } from "@/data/environment_variables/Environment_Variables";
import Link from "next/link";
import React from "react";
type PropsType = {
  arrayOfMovies: any[];
};
const MovieLists = (props: PropsType) => {
  const { arrayOfMovies } = props;
  return (
    <ul className="flex gap-2 lg:gap-5 overflow-x-scroll lg:overflow-hidden">
      {arrayOfMovies.map((data, index) => {
        return (
          <li key={index}>
            <Link href={`/details/${data.id}`}>
              <div className="w-[7rem] lg:w-[13rem] h-[7rem] lg:h-[17rem] ">
                <img
                  src={`${TMDB_IMAGE_URL}/${data.poster_path}`}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieLists;
