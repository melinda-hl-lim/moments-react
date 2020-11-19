import React from 'react';
import { RiHome2Fill } from 'react-icons/ri';
import { FaCalendarDay, FaChartArea, FaUserAlt } from 'react-icons/fa';
import {
  Link,
} from 'react-router-dom';

function Navigation() {
  return (
    <nav className="flex bg-white h-16 w-full fixed bottom-0 shadow-top">
      <ul className="flex w-full items-stretch justify-around">
        <Link to="/home" className="flex items-center">
          <span className="text-3xl"><RiHome2Fill /></span>
          {/* <li className="text-center">Home</li> */}
        </Link>
        <Link to="/home" className="flex items-center">
          <span className="text-3xl"><FaCalendarDay /></span>
          {/* <li className="text-center">Your Day</li> */}
        </Link>
        <Link to="/home" className="flex items-center">
          <span className="text-3xl"><FaChartArea /></span>
          {/* <li className="text-center">Trends</li> */}
        </Link>
        <Link to="/home" className="flex items-center">
          <span className="text-3xl"><FaUserAlt /></span>
          {/* <li className="text-center">Profile</li> */}
        </Link>
      </ul>
    </nav>

  );
}

export default Navigation;
