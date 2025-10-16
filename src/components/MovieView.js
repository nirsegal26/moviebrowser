import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const MovieView = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=3aa4daac30bae5461e2f6d54af4805fb&language=en-US`
        );
        if (!response.ok) throw new Error("Failed to fetch movie details");
        const data = await response.json();
        setMovieDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1a0026] to-purple-900 text-white">
        <h1 className="text-3xl font-semibold animate-pulse text-purple-300">
          Loading...
        </h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1a0026] to-purple-900 text-white">
        <h1 className="text-2xl font-semibold text-red-400">
          Error: {error}
        </h1>
      </div>
    );
  }

  if (!movieDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1a0026] to-purple-900 text-white">
        <h1 className="text-2xl">No movie details found.</h1>
      </div>
    );
  }

  const posterUrl = movieDetails.poster_path
    ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0026] to-purple-950 text-white p-8 flex flex-col items-center">
      <div className="max-w-5xl w-full bg-[#0b0011]/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-purple-900/40 overflow-hidden md:flex">
        {/* Poster */}
        <img
          src={posterUrl}
          alt={movieDetails.original_title}
          className="w-full md:w-1/3 object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-t-none shadow-lg"
        />

        {/* Details */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-600 drop-shadow-md">
              {movieDetails.original_title}
            </h1>

            <p className="text-gray-300 mb-6 leading-relaxed">
              {movieDetails.overview || "No description available."}
            </p>

            <div className="space-y-2 text-sm text-gray-400">
              <p>
                <strong className="text-purple-300">Release Date:</strong>{" "}
                {movieDetails.release_date}
              </p>
              <p>
                <strong className="text-purple-300">Rating:</strong> ⭐{" "}
                {movieDetails.vote_average.toFixed(1)}/10
              </p>
              {movieDetails.runtime && (
                <p>
                  <strong className="text-purple-300">Runtime:</strong>{" "}
                  {movieDetails.runtime} min
                </p>
              )}
              {movieDetails.genres && (
                <p>
                  <strong className="text-purple-300">Genres:</strong>{" "}
                  {movieDetails.genres.map((g) => g.name).join(", ")}
                </p>
              )}
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link
              to="/search"
              className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white font-medium rounded-full shadow-md hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
            >
              ← Back to Browse
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieView;
