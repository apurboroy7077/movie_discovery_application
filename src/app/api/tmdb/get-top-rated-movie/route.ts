import { TMDB_API_READ_ACCESS_TOKEN } from "@/data/environment_variables/Environment_Variables";
import axios from "axios";

export const GET = async (request: Request) => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        timeout: 99999,
        headers: {
          Authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`,
        },
      }
    );
    const topRatedMovies = response.data.results;
    return Response.json(
      {
        message: "Top Rated Movies Successfully Fetched",
        data: topRatedMovies,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error Happened" }, { status: 500 });
  }
};
