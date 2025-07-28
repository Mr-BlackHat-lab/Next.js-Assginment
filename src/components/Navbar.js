// src/components/Navbar.js
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import HamburgerMenu from './HamburgerMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="logo">MyApp</h2>

        <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>

          <li className="dropdown">
            <span>Services ▾</span>
            <ul className="dropdown-menu">
              <li><Link href="/services/seo">SEO</Link></li>
              <li><Link href="/services/consulting">Consulting</Link></li>
              <li className="dropdown">
                <span>Web Development ▸</span>
                <ul className="dropdown-menu nested">
                  <li><Link href="/services/web-development/mern">MERN</Link></li>
                  <li><Link href="/services/web-development/mean">MEAN</Link></li>
                  <li><Link href="/services/web-development/dotnet">.NET</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          <li><Link href="/contact">Contact</Link></li>
          <li><ThemeToggle /></li>
        </ul>
      </div>
    </nav>
  );
}
