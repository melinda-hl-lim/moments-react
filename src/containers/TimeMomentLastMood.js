import React from 'react';
import Button from '../components/Button';
import MoodCheckIn from '../components/MoodCheckIn';

function TimeMomentLastMood() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100 px-4 py-8">

      <div className="flex flex-col max-w-md w-full flex-grow justify-center">
        <MoodCheckIn lastCheckIn="true" />

        <Button text="Next" linkTo="/moment_overview" />
      </div>
    </div>

  );
}

export default TimeMomentLastMood;
