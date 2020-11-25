import React from 'react';
import {
  RiHomeHeartFill,
} from 'react-icons/ri';
import Button from '../components/Button';
import MoodCheckIn from '../components/MoodCheckIn';

function TimeMomentMoodSelect() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-orange-100">
      {/* Header card */}
      <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl mt-8 mx-4">You selected</h1>

        <div className="flex justify-around items-center my-4 mx-4 max-w-md bg-white rounded-lg">
          <div className="flex flex-col items-center">
            <span className="text-3xl m-0"><RiHomeHeartFill /></span>
            <p className="-mt-px">Family</p>
          </div>
        </div>

        <div className="mx-4 mb-8">
          <p>Spend some time with the fam bam for the holidays</p>
        </div>
      </div>

      {/* main content area */}
      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
        <MoodCheckIn />
        <Button text="Start Activity" linkTo="/" />
      </div>
    </div>

  );
}

export default TimeMomentMoodSelect;
