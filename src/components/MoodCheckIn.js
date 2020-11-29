import React from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import MoodSelectionIcons from './MoodSelectionIcons';

function MoodCheckIn({
  button, lastCheckIn, onClick, onInput,
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
    <Card>
      {miniTitle}
      <h1 className="text-center text-3xl mb-4">How Do You Feel?</h1>

      <MoodSelectionIcons onClick={onClick} />

      <Input
        name="Description"
        type="text"
        required="false"
        position="singular"
        onChange={onInput}
      />

      {finishButton}
    </Card>
  );
}

export default MoodCheckIn;
