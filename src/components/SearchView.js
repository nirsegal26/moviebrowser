import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movie/${movie.id}`;

  const genreMap = {
    28: "Action",
    12: "Adventure",
    16: "Animation",
    35: "Comedy",
    80: "Crime",
    99: "Documentary",
    18: "Drama",
    10751: "Family",
    14: "Fantasy",
    36: "History",
    27: "Horror",
    10402: "Music",
    9648: "Mystery",
    10749: "Romance",
    878: "Sci-Fi",
    10770: "TV Movie",
    53: "Thriller",
    10752: "War",
    37: "Western",
  };

  return (
    <div className="relative group bg-gradient-to-b from-[#1a0026] via-[#0b0013] to-black rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40 border border-purple-900/40">
      <Link to={detailUrl}>
        <img
          className="rounded-t-xl w-full h-72 object-cover opacity-90 group-hover:opacity-100 transition duration-300"
          src={posterUrl}
          alt={movie.original_title}
        />
      </Link>

      <div className="p-4 text-center">
        <h5 className="mb-2 text-lg font-semibold text-white truncate">
          {movie.original_title}
        </h5>
        <p className="text-sm text-purple-300 mb-4">
          {movie.genre_ids?.map((id) => genreMap[id]).join(", ")}
        </p>
        <Link
          to={detailUrl}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-fuchsia-700 rounded-full hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
        >
          Show Details
          <svg
            className="rtl:rotate-180 w-4 h-4 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const resultsHtml = searchResults.map((movie, i) => (
    <MovieCard movie={movie} key={i} />
  ));

  return (
    <div className="bg-gradient-to-b from-black via-[#1a0026] to-purple-950 text-white min-h-screen p-10">
      <h2 className="text-3xl font-extrabold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-600 drop-shadow-md">
        {searchResults.length === 0 ? `Results for: ${keyword}` : `Results for: ${keyword}`}
      </h2>

      {resultsHtml.length > 0 ? (
        <div className="container mx-auto">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {resultsHtml}
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-400">No results found.</p>
      )}
    </div>
  );
};

export default SearchView;
