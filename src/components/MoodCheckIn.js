import React from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';
import MoodSelectionIcons from './MoodSelectionIcons';

function MoodCheckIn({
  button, lastCheckIn, onIconClick, onInput, onButtonClick, selected,
}) {
  const buttonPresent = (button === 'true');
  let finishButton;
  if (buttonPresent) {
    finishButton = (
      <Button
        text="Check In"
        variant="secondary"
        size="small"
        linkTo="/home_timing"
        onClick={onButtonClick}
      />
    );
  }

  return (
    <Card>
      {lastCheckIn
        ? <h2 className="text-center mx-4">Once last check in...</h2>
        : null }
      <h1 className="text-center text-3xl mb-4">How Do You Feel?</h1>

      <MoodSelectionIcons
        onClick={onIconClick}
        selected={selected}
      />

      <Input
        name="Description"
        type="text"
        required="false"
        position="singular"
        onChange={onInput}
      />
      {/* TODO Instead of making a finish button,
      have this component accept children. If unclear, ask andrew :3 */}
      {finishButton}
    </Card>
  );
}

export default MoodCheckIn;
