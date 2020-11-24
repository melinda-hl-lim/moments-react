import React from 'react';
import Button from './Button';
import Input from './Input';
import MoodSelectionIcons from './MoodSelectionIcons';

function MoodCheckIn({
  button, lastCheckIn,
}) {
  const buttonPresent = (button === 'true');
  let finishButton;
  if (buttonPresent) {
    finishButton = <Button text="Check In" linkTo="/home_timing" />;
  }

  let miniTitle;
  if (lastCheckIn) {
    miniTitle = <h2 className="text-center mx-4">Once last check in...</h2>;
  }

  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md px-4 py-8">
      {miniTitle}
      <h1 className="text-center text-3xl mb-4">How Do You Feel?</h1>

      <MoodSelectionIcons />

      <Input
        name="Description"
        type="text"
        required="false"
        position="singular"
      />

      {finishButton}
    </div>
  );
}

export default MoodCheckIn;
