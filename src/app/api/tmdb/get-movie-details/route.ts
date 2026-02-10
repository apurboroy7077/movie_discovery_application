import { TMDB_API_READ_ACCESS_TOKEN } from "@/data/environment_variables/Environment_Variables";

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const movieId = searchParams.get("movie_id");
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
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

    return Response.json(
      {
        message: "Movie Details Successfully Fetched",
        data: data,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error Happened" }, { status: 500 });
  }
};
// export const runtime = "edge";
