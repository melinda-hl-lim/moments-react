import React from 'react';
import { RiHomeHeartFill } from 'react-icons/ri';
import {
  FaUserFriends, FaHeart, FaBookOpen, FaRunning, FaBath, FaUmbrellaBeach,
} from 'react-icons/fa';
import { MdWork, MdLocalGroceryStore } from 'react-icons/md';
// import Button from '../components/Button';
// import Input from '../components/Input';

function ActivitySelection() {
  return (
    <div className="flex justify-around items-center mt-4 py-4 px-4 max-w-md w-full bg-white">

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><RiHomeHeartFill /></span>
          <p className="-mt-px">Family</p>
        </div>

        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><MdWork /></span>
          <p className="-mt-px">Work</p>
        </div>

        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><FaRunning /></span>
          <p className="-mt-px">Exercise</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><FaUserFriends /></span>
          <p className="-mt-px">Friends</p>
        </div>

        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><FaBookOpen /></span>
          <p className="-mt-px">School</p>
        </div>

        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><FaBath /></span>
          <p className="-mt-px">Self Care</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><FaHeart /></span>
          <p className="-mt-px">Date</p>
        </div>

        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><MdLocalGroceryStore /></span>
          <p className="-mt-px">Errands</p>
        </div>

        <div className="flex flex-col items-center p-2">
          <span className="text-3xl m-0"><FaUmbrellaBeach /></span>
          <p className="-mt-px">Relax</p>
        </div>
      </div>

    </div>

  );
}

export default ActivitySelection;
