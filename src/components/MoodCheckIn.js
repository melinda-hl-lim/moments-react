import React from 'react';
import Card from './Card';
import Input from './Input';
import MoodSelectionIcons from './MoodSelectionIcons';

function MoodCheckIn({
  children, lastCheckIn, onIconClick, onInput, selected,
}) {
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

      {children}
    </Card>
  );
}

export default MoodCheckIn;
