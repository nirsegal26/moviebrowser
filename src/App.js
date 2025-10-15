import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <h1 className="text-5xl font-bold text-white">Tailwind עובד 🎉</h1>
    </div>
  );
}


export default App;
