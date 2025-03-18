import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="landing-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <img src="/bealive1-removebg-preview.png" alt="Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Navigation Links */}
        <nav className={`navigation ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/processoverview" onClick={() => setMenuOpen(false)}>Process Overview</Link>
          <Link to="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link to="/wellnesstips" onClick={() => setMenuOpen(false)}>Wellness Tips</Link>
          <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact Us</Link>
        </nav>
      </div>

      {/* CSS Styling */}
      <style>
        {`
        .landing-header {
          background-color: #40ADA8;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 75px;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1000;
          padding: 0 20px;
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 90%;
          max-width: 1200px;
        }

      .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: -100px;
  }
  
    .logo img {
      height: 120px; /* Ensures the logo has the same height as navigation links */
      width: 120px;
      
    
    }
        .navigation {
          display: flex;
          gap: 20px;
        }

        .navigation a {
          color: white;
          text-decoration: none;
          font-size: 16px;
          font-weight: bold;
          padding: 10px 15px;
          transition: color 0.3s ease;
        }

        .navigation a:hover {
          color: #808080;
        }

        /* Mobile Styling */
        .menu-toggle {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          margin-right: 20px;
        }

        @media (max-width: 768px) {
          .navigation {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 75px;
            left: 0;
            width: 100%;
            background-color: #40ADA8;
            padding: 10px 0;
          }

          .navigation.open {
            display: flex;
          }

          .menu-toggle {
            display: block;
          }

          .logo img {
            height: 75px;
          }
              .logo {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: -50px;
  }
      
  
        }
        `}
      </style>
    </header>
  );
};

export default Header;