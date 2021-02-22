import React from 'react'; // Import the Component component from React
import {Link, CustomLink} from 'react-router-dom'; // Import the Link component
import '../App.css';

function Navbar(props) {
  return (
    <div className="navigation">
      <div className="navigation-sub">
        <Link to="/Projects" className="item">Projects</Link>
        <Link to="/About" className="item">About</Link>
        <Link to="/Resume" className="item">Resume</Link>
        <Link to="/Contact" className="item">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
