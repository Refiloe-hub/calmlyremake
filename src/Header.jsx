import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="landing-header">
    <div className="header-container">
      {/* Logo */}
      <div className="logo">
        <img src="/calmly_modified.png" alt="Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="navigation">
      <Link to="/">Home</Link>
      <Link to="/processoverview">Process Overview</Link> 
      <Link to="/aboutus">About Us</Link>
      <Link to="/wellnesstips">Wellness Tips</Link>
      <Link to="/contactus">Contact Us</Link>  {/* Ensure correct path */}
</nav>
<style>
        {`
         .landing-header {
      background-color: #40ADA8;
      display: flex;
      justify-content: center;
      align-items: center; /* Ensures all header elements are vertically aligned */
      height: 75px; /* Set consistent height */
      width: 100%;
     
      top: 0;
      left: 0;
      z-index: 1000;
      padding: 0 40px;
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
      margin-left: -120px;
  }
  
    .logo img {
      height: 75px; /* Ensures the logo has the same height as navigation links */
      width: 85px;
      
    
    }
      
    .navigation {
      display: flex;
      gap: 20px;
    }
  
    .navigation a {
      color: white;
      text-decoration: none;
      font-size: 16px;
      display: flex;
      font-weight: bold;
      padding: 10px 15px;
      align-items: center; /* Vertically centers the text */
      height: 80px; /* Matches the header height */
      transition: color 0.3s ease;
    }
  
    .navigation a:hover {
      color: #808080;
    }
                .hero {
      display: flex;
      align-items: center;
      justify-content: space-between;
       padding: 100px 40px 40px;
      background-color: #e6f7f7; /* Light teal background */
        gap: 220px;
    }
  
  
       
        `}
      </style>

    </div>
  </header>
  );
};

export default Header;