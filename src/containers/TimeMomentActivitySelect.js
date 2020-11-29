import React, { useState } from 'react';
import ActivitySelection from '../components/ActivitySelection';
import BackButton from '../components/BackButton';
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

  function validCategory(givenCategory) {
    return givenCategory !== '';
  }

  // TODO: Create an actual way to clean description...? Or is this Rails?
  function cleanDescriptionInput(givenDescription) {
    setDescription(givenDescription);
  }

  function verifyAndPassInputs(e) {
    if (!validCategory(category)) {
      e.preventDefault();
      // TODO: Show a warning message to user
      console.log('You have to select a thing!!!');
    }
    cleanDescriptionInput(description);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-50">
      <BackButton />

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">

        <Card>
          <h1 className="text-center text-3xl">Select an Activity</h1>
          <ActivitySelection
            onClick={(e) => handleClick(e)}
            selected={category}
          />
          <div className="">
            <Input
              name="Description"
              type="text"
              required="false"
              position="singular"
              onChange={(e) => handleInput(e)}
            />
          </div>
        </Card>
        <Button
          text="Next"
          linkTo={{
            pathname: '/moment/new/select_mood',
            state: {
              category,
              description,
            },
          }}
          onClick={(e) => verifyAndPassInputs(e)}
        />
      </div>
    </div>
  );
}

export default TimeMomentActivitySelect;
