import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
  
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

        <div 
          className="navbar-hamburger" 
          onClick={toggleMenu}
          ref={hamburgerRef}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul 
          className={`navbar-mobile-menu ${isOpen ? 'active' : ''}`}
          ref={menuRef}
        >
          <li><Link to="/" onClick={closeMenu}>✎ Art</Link></li>
          <li><Link to="/design" onClick={closeMenu}>☎ 24-Hour Hotline</Link></li>
          <li><Link to="/library" onClick={closeMenu}>📖 Library</Link></li>
          <li><Link to="/film" onClick={closeMenu}>🎬 Film</Link></li>
          <li><Link to="/about" onClick={closeMenu}>👤 Buckhouse</Link></li>
          <li>
            <a 
              href="https://jamesbuckhouse.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
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