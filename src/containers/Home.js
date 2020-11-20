import React from 'react';
import { RiEmotionLine } from 'react-icons/ri';
import Button from '../components/Button';

function Home() {
  return (
    // justify-center
    <div className="h-custom flex flex-col items-center bg-orange-100">
      {/* Card that shows last check in time and mood */}
      {/*  fixed top-0 justify-center items-center */}
      <div className="flex flex-col w-full bg-white rounded-lg shadow-md ">
        <h2 className="mt-12 text-center text-4xl leading-9 font-extrabold text-gray-900">
          Last check in at:
        </h2>
        <h2 className="mt-6 text-center text-5xl leading-9 font-extrabold text-gray-900">
          4:15 pm
        </h2>
        <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900">
          You felt:
        </h2>
        <span className="text-center text-6xl"><RiEmotionLine /></span>
      </div>

      {/* Butons to check in or time activity */}
      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center rounded-lg">
          <Button text="Check In" linkTo="/building" />
        </div>
        <div className="w-full text-center rounded-lg">
          <Button text="Time Activity" linkTo="/time_moment_activity_select" />
        </div>
      </div>
    </div>
  );
}

export default Home;
