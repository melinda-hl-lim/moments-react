import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import CardFullWidth from '../components/CardFullWidth';
import ActivityIconLabel from '../components/ActivityIconLabel';
import MoodCheckIn from '../components/MoodCheckIn';

function TimeMomentMoodSelect({ location }) {
  const { state } = location;
  const [mood, setMood] = useState('0');
  const [moodDescription, setMoodDescription] = useState('');

  function handleClick(e) {
    setMood(e.currentTarget.dataset.mood);
  }

  function handleInput(e) {
    setMoodDescription(e.currentTarget.value);
  }

  return (
    state
      ? (
        <div className="min-h-screen flex flex-col items-center bg-yellow-50">
          <BackButton />

          <CardFullWidth>
            <h1 className="text-center text-2xl mx-4">You selected</h1>

            <div className="flex flex-col justify-around items-center my-4 mx-4 max-w-md bg-white rounded-lg">
              <ActivityIconLabel
                label={state.category}
              />
              <p className="mt-4">{state.description}</p>
            </div>
          </CardFullWidth>

          {/* main content area */}
          <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
            <MoodCheckIn
              onClick={(e) => handleClick(e)}
              onInput={(e) => handleInput(e)}
            />
            <Button
              text="Start Activity"
              linkTo="/"
            />
          </div>
        </div>
      )
      : <Redirect to="/" />
  );
}

export default TimeMomentMoodSelect;
