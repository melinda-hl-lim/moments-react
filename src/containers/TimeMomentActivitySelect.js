import React from 'react';
import ActivitySelection from '../components/ActivitySelection';
import Button from '../components/Button';
import Input from '../components/Input';

function TimeMomentActivitySelect() {
  return (
    <div className="h-custom flex flex-col items-center justify-center bg-orange-100 py-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-md w-full bg-white rounded-lg shadow-md">
        <h1 className="text-center text-3xl mt-8 mx-4">Select an Activity</h1>
        <ActivitySelection />
        <div className="mx-4 mb-8">
          <Input
            name="Description"
            type="text"
            required="false"
            position="singular"
          />
        </div>
      </div>
      <Button text="Next" linkTo="/time_moment_mood_select" />
    </div>
  );
}

export default TimeMomentActivitySelect;
