import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaPowerOff } from 'react-icons/fa'; 

function Navbar() {
  const userName = "Nonkazimulo Mchunu";

  return (
    <nav>
        
      <div className="user-info">
        <FaUser />
        <span>{userName}</span>
      </div>

      <div className="logo-container">
        <span className="logo">FQ</span>
      </div>
      
      <div>
        <ul id="navbar">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/quiz/:id">MyQuizzes</Link>
          </li>
          <li>
            <Link to="/profile">MyProfile</Link>
          </li>
          <li>
          
            <Link to="/logout" className="logout-link">
              <FaPowerOff />
            </Link>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

export default Navbar;
