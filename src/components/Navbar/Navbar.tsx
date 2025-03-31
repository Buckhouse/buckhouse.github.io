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
    <ul className="navbar-menu">
      <li><Link to="/">✎ Art</Link></li>
      <li><Link to="/design">☎ 24-Hour Hotline</Link></li>
      <li><Link to="/library">📖 Library</Link></li>
      <li><Link to="/film">🎬 Film</Link></li>
      <li><Link to="/about">👤 Buckhouse</Link></li>
    </ul>

    <div className="navbar-action">
      <a
        href="https://jamesbuckhouse.substack.com/"
        className="navbar-newsletter"
        target="_blank"
        rel="noopener noreferrer"
      >
        📰 Newsletter
      </a>
    </div>

    {/* Hamburger Icon moved outside navbar-action */}
    <div className="navbar-hamburger" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <ul className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}>
    <li><Link to="/">✎ Art</Link></li>
      <li><Link to="/design">☎ 24-Hour Hotline</Link></li>
      <li><Link to="/library">📖 Library</Link></li>
      <li><Link to="/film">🎬 Film</Link></li>
      <li><Link to="/about">👤 Buckhouse</Link></li>
      <li>
  <a 
    href="https://jamesbuckhouse.substack.com/"
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