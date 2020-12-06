import React from 'react';
import { RiHomeHeartFill } from 'react-icons/ri';
import {
  FaUserFriends, FaHeart, FaBookOpen, FaRunning, FaBath, FaUmbrellaBeach, FaStar,
} from 'react-icons/fa';
import { MdWork, MdLocalGroceryStore } from 'react-icons/md';

function ActivityIconLabel({ label, onClick, selected }) {
  function applyClasses() {
    let classes = 'flex flex-col items-center p-2';
    if (selected === label) { classes += ' text-primary-dark'; }

    return classes;
  }

  function selectIcon(givenLabel) {
    switch (givenLabel) {
      case 'Family':
        return <RiHomeHeartFill />;
      case 'Work':
        return <MdWork />;
      case 'Exercise':
        return <FaRunning />;
      case 'Friends':
        return <FaUserFriends />;
      case 'School':
        return <FaBookOpen />;
      case 'Self Care':
        return <FaBath />;
      case 'Date':
        return <FaHeart />;
      case 'Errands':
        return <MdLocalGroceryStore />;
      case 'Relax':
        return <FaUmbrellaBeach />;
      default:
        return <FaStar />;
    }
  }

  return (
    <div
      data-category={label}
      className={applyClasses()}
      onClick={onClick}
    >
      <span className="text-3xl m-0">{selectIcon(label)}</span>
      <p className="-mt-px ">{label}</p>
    </div>
  );
}

export default ActivityIconLabel;
