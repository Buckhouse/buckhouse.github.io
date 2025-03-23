import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">

        {/* Desktop Menu */}
        <ul className="navbar-menu">
          <li><Link to="/">✎ Art</Link></li>
          <li><Link to="/design">☎ 24-Hour Hotline</Link></li>
          <li><Link to="/library">📖 Library</Link></li>
          <li><Link to="/film">🎬 Film</Link></li>
          <li><Link to="/about">👤 Buckhouse</Link></li>
          <li>
            <a
                href="https://jamesbuckhouse.substack.com/"
                className="navbar-newsletter"
                target="_blank"
                rel="noopener noreferrer"
            >
                📰 Newsletter
            </a>
            </li>
        </ul>

        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Mobile Menu */}
        <ul className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
          <li><Link to="/design" onClick={toggleMenu}>☎ 24-Hour Hotline</Link></li>
          <li><Link to="/library" onClick={toggleMenu}>📖 Library</Link></li>
          <li><Link to="/film" onClick={toggleMenu}>🎬 Film</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>👤 Buckhouse</Link></li>
          <li>
            <a
                href="https://jamesbuckhouse.substack.com/"
                className="navbar-newsletter"
                target="_blank"
                rel="noopener noreferrer"
            >
                📰 Newsletter
            </a>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;