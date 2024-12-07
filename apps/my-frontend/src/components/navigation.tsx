import React from "react";
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/other" className="nav-link">
            Other
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;