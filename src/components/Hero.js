const Hero =() => {
    return (
        <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white min-h-screen flex items-center justify-center px-6">
            <div className="max-w-3xl text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Discover Your Next Favorite Movie 🎬
                </h1>
                <p className="text-lg md:text-xl text-gray-100 mb-8">
                Browse, search, and explore thousands of films - all in one beautiful interface.
                </p>
                <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
                    Get Started
                </button>
                <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-700 transition duration-300">
                    Learn More
                </button>
                </div>
            </div>
        </section>
    )
}

export default Hero;