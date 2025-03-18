import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Be Alive. All rights reserved.</p>

      <ul className="footer-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/processoverview">Process Overview</Link></li>
        <li><Link to="/contactus">Contact Us</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
        <li><Link to="/wellnesstips">Wellness Tips</Link></li>
        <li><Link to="/privacypolicy">Privacy Policy</Link></li>
        <li><Link to="/termsconditions">Terms & Conditions</Link></li>
      </ul>

      <style>
        {`
          .footer {
            text-align: center;
            padding: 20px;
            background-color: #40ADA8;
            color: white;
            width: 100%;
            margin-top: 40px;
          }

          .footer-links {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 10px;
          }

          .footer-links li {
            display: inline;
          }

          .footer-links a {
            text-decoration: none;
            color: white;
            font-size: 0.9rem;
            padding: 5px 10px;
          }

          .footer-links a:hover {
            text-decoration: underline;
          }

          /* Responsive Styling */
          @media (max-width: 768px) {
            .footer {
              padding: 15px;
              font-size: 0.8rem;
            }

            .footer-links {
              flex-direction: column;
              align-items: center;
              gap: 10px;
            }

            .footer-links a {
              font-size: 0.85rem;
              padding: 8px 0;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;