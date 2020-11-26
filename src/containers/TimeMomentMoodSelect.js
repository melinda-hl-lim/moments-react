import React from 'react';
import Button from '../components/Button';
import CardFullWidth from '../components/CardFullWidth';
import ActivityIconLabel from '../components/ActivityIconLabel';
import MoodCheckIn from '../components/MoodCheckIn';

function TimeMomentMoodSelect() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-orange-100">

      <CardFullWidth>
        <h1 className="text-center text-2xl mx-4">You selected</h1>

        <div className="flex flex-col justify-around items-center my-4 mx-4 max-w-md bg-white rounded-lg">
          <ActivityIconLabel label="Family" />
          <p className="mt-4">Spend some time with the fam bam for the holidays</p>
        </div>
      </CardFullWidth>

      {/* main content area */}
      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
        <MoodCheckIn />
        <Button text="Start Activity" linkTo="/" />
      </div>
    </div>

  );
}

export default TimeMomentMoodSelect;
