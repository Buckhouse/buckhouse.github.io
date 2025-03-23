import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import ArtworkDetail from './components/Gallery/ArtworkDetail';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import './styles/globals.css'; // Import global styles;
import Design from './pages/Design';
import Library from './pages/Library';
import About from './pages/About';
import Film from './pages/Film';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/art/:id" element={<ArtworkDetail />} />
          <Route path="/design" element={<Design />} />
          <Route path="/library" element={<Library />} />
          <Route path="/about" element={<About />} />
          <Route path="/film" element={<Film />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;