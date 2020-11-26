import React, { useState } from 'react';
import ActivitySelection from '../components/ActivitySelection';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';

function TimeMomentActivitySelect() {
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  function handleClick(e) {
    setCategory(e.currentTarget.dataset.category);
  }

  function handleInput(e) {
    setDescription(e.currentTarget.value);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-orange-100">

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
        <Card>
          <h1 className="text-center text-3xl mx-4">Select an Activity</h1>
          <ActivitySelection
            onClick={(e) => handleClick(e)}
            selected={category}
          />
          <div className="mx-4">
            <Input
              name="Description"
              type="text"
              required="false"
              position="singular"
              onChange={(e) => handleInput(e)}
            />
          </div>
        </Card>
        <Button text="Next" linkTo="/time_moment_mood_select" />
      </div>
    </div>
  );
}

export default TimeMomentActivitySelect;
