import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('')

   useEffect(() => {
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE0ZGFhYzMwYmFlNTQ2MWUyZjZkNTRhZjQ4MDVmYiIsIm5iZiI6MTc2MDYwMTAwMC45NDU5OTk5LCJzdWIiOiI2OGYwYTNhOGNlODc5NDJmOThjNzdiOWYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ybrmO6Jt7XOzuQwMLTB1nq9IS-RmizQbEDEBOyB9ug0'
    }
  };

    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => console.error(err));
    
        if (searchText) {
          fetch(
            `https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`,
            options
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data.results);
              setSearchResults(data.results);
            });
    }
  }, [searchText]); 

  return (
    <div >
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
      </Routes>
    </div>
  );
}


export default App;
