import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import {Routes, Route} from 'react-router-dom';
import SearchView from './components/SearchView';
import { useState, useEffect } from 'react';

function App() {
  const [searchResults, setSearchResults] = useState([])
  const [searchText, setSearchText] = useState('searchgfjgfh')
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>} />
      </Routes>
    </div>
  );
}


export default App;
