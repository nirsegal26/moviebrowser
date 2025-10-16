import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Hero';
import {Routes, Route} from 'react-router-dom';
import SearchView from './components/SearchView';
import MovieView from './components/MovieView';
import { useState, useEffect } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

useEffect(() => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE0ZGFhYzMwYmFlNTQ2MWUyZjZkNTRhZjQ4MDVmYiIsIm5iZiI6MTc2MDYwMTAwMC45NDU5OTk5LCJzdWIiOiI2OGYwYTNhOGNlODc5NDJmOThjNzdiOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ybrmO6Jt7XOzuQwMLTB1nq9IS-RmizQbEDEBOyB9ug0'
    }
  };

  const fetchMovies = async () => {
    try {
      let url = '';

      if (searchText.trim() === '') {
        url =
          'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
      } else {
        url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          searchText
        )}&include_adult=false&language=en-US&page=1`;
      }

      const response = await fetch(url, options);
      const data = await response.json();
      setSearchResults(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  fetchMovies();
}, [searchText]);


  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
        <Route path="/movie/:id" element={<MovieView />} />
      </Routes>
    </div>
  );
}


export default App;
