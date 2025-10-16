import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();

  const updateSearchText = (e) => {
    navigate("/search");
    setSearchText(e.target.value);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-black via-[#1a0026] to-purple-900 shadow-lg border-b border-purple-800/30">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-4">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:opacity-90 transition-opacity duration-200"
        >
          <img
            src="https://play-lh.googleusercontent.com/rumkiUVTEOUbGi2c8oue58kLJwalnSTqv2Y-kKaxfuyO9OsEFa1MlD_bh60rIHwMGQ=w240-h480-rw"
            className="h-9 rounded-md shadow-md"
            alt="Flowflix Logo"
          />
          <span className="self-center text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-600">
            Flowflix
          </span>
        </Link>

        <div className="flex items-center md:order-2 gap-3">
          <div className="relative hidden md:block">
            <input
              type="search"
              id="search-navbar"
              placeholder="Search..."
              value={searchText}
              onChange={updateSearchText}
              className="block w-64 p-2 ps-10 text-sm text-white placeholder-gray-400 border border-purple-600/50 rounded-lg bg-[#1a0026] focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200"
            />
            <div className="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-purple-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg bg-[#0b0011]/80 md:space-x-10 md:flex-row md:mt-0 md:bg-transparent">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-purple-300 hover:text-fuchsia-400 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/search"
                className="block py-2 px-3 text-purple-300 hover:text-fuchsia-400 transition-colors duration-200"
              >
                Browse
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-purple-300 hover:text-fuchsia-400 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/coming-soon"
                className="block py-2 px-3 text-purple-300 hover:text-fuchsia-400 transition-colors duration-200"
              >
                Coming Soon
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
