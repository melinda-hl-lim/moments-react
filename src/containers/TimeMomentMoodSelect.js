import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, Redirect } from 'react-router-dom';

import BackButton from '../components/BackButton';
import Button from '../components/Button';
import CardFullWidth from '../components/CardFullWidth';
import ActivityIconLabel from '../components/ActivityIconLabel';
import Modal from '../components/Modal';
import useModal from '../useModal';
import MoodCheckIn from '../components/MoodCheckIn';
import MoodSelector from '../utils/MoodSelector';

function TimeMomentMoodSelect() {
  const location = useLocation();
  const { state } = location;
  const { isVisible, toggleModal } = useModal();

  const [mood, setMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');
  const moodSelector = new MoodSelector(mood, moodDescription, setMood, setMoodDescription);

  function postNewMoment(e) {
    if (!mood) {
      e.preventDefault();
      toggleModal();
    } else {
      const data = {
        category: state.category,
        activityDescription: state.description,
        mood,
        moodDescription,
      };

      axios.post('/moment/create', data)
        .then((response) => {
          console.log(response);
          // if there's a 500 error, let the user know...?
        })
        .catch((response) => {
          console.log(response);
          // if the post request fails, tell the user to try again later
        });
    }
  }

  return (
    state
      ? (
        <div className="min-h-screen flex flex-col items-center bg-yellow-50">
          <BackButton />

          <CardFullWidth>
            <h1 className="text-center text-2xl mx-4">You selected</h1>

            <div className="flex flex-col justify-around items-center my-4 mx-4">
              <ActivityIconLabel
                label={state.category}
              />
              <p className="mt-4">{state.description}</p>
            </div>
          </CardFullWidth>

          {/* main content area */}
          <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
            <MoodCheckIn
              onIconClick={(e) => moodSelector.handleClick(e)}
              onInput={(e) => moodSelector.handleInput(e)}
              selected={mood}
            />
            <Button
              text="Start Activity"
              linkTo="/"
              onClick={(e) => postNewMoment(e)}
            />
          </div>
          <Modal
            isVisible={isVisible}
            hideModal={toggleModal}
            text="Please select a mood"
          />
        </div>
      )
      : <Redirect to="/" />
  );
}

export default TimeMomentMoodSelect;
