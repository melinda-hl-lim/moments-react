import React from 'react';
import ActivitySelection from '../components/ActivitySelection';
import Button from '../components/Button';
import Input from '../components/Input';

function TimeActivitySelect() {
  return (
    <>

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
      <Button text="Next" linkTo="/building" />
    </>
  );
}

export default TimeActivitySelect;
