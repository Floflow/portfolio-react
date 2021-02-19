import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import '../App.css';

function Navbar(props) {
  return (
    <div className="navigation">
      <div className="navigation-sub">
        <Link to="/" className="item">Projects</Link>
        <Link to="/" className="item">About</Link>
        <Link to="/Resume" className="item">Resume</Link>
        <Link to="/" className="item">Contact</Link>
      </div>
    </div>
  );
}

export default Navbar;
