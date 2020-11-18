import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex bg-white h-16 w-full fixed bottom-0">
      <ul className="flex w-full items-stretch justify-around">
        <Link to="/home" className="flex items-center">
          <li className="text-center">Home</li>
        </Link>
        <Link to="/home" className="flex items-center">
          <li className="text-center">Your Day</li>
        </Link>
        <Link to="/home" className="flex items-center">
          <li className="text-center">Trends</li>
        </Link>
        <Link to="/home" className="flex items-center">
          <li className="text-center">Profile</li>
        </Link>
      </ul>
    </nav>

  );
}

export default Navigation;
