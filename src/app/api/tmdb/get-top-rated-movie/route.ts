import { TMDB_API_READ_ACCESS_TOKEN } from "@/data/environment_variables/Environment_Variables";

export const GET = async (request: Request) => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          Authorization: `Bearer ${TMDB_API_READ_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("TMDB request failed");
    }

    const data = await response.json();
    const topRatedMovies = data.results;

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
// export const runtime = "edge";
