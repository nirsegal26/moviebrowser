const SearchView = ({keyword, searchResults}) => {
    return (
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white flex items-center justify-center px-6">
            <h2>{keyword}</h2>
        </div>
    )
}

export default SearchView;