import {Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-br from-black via-[#1a0026] to-purple-900 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        {/* TITLE */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-600 drop-shadow-lg">
          Discover Your Next Favorite Movie 🎬
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Browse, search, and explore thousands of films -
          from timeless classics to the latest hits
        </p>
            
        {/* BUTTON */}
        <Link to="/search" className="flex justify-center gap-6">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-fuchsia-700 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-purple-500/40 transition-all duration-300">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
