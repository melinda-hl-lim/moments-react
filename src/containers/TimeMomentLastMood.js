import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import Button from '../components/Button';
import Modal from '../components/Modal';
import useModal from '../useModal';
import MoodCheckIn from '../components/MoodCheckIn';
import MoodSelector from '../utils/MoodSelector';

function TimeMomentLastMood() {
  const location = useLocation();
  const { state } = location;

  const { isVisible, toggleModal } = useModal();

  const [mood, setMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');
  const moodSelector = new MoodSelector(mood, moodDescription, setMood, setMoodDescription);

  function handleSubmit(e) {
    if (!mood) {
      e.preventDefault();
      toggleModal();
    } else {
      const data = {
        mood,
        moodDescription,
        momentId: state.momentId,
      };

      axios.post('/moment/finalize', data)
        .then((response) => console.log(response))
        .catch((response) => console.log(response));
    }
  }

  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 px-4 py-8">

      <div className="flex flex-col max-w-md w-full flex-grow justify-center">
        <MoodCheckIn
          lastCheckIn="true"
          onIconClick={(e) => moodSelector.handleClick(e)}
          onInput={(e) => moodSelector.handleInput(e)}
          selected={mood}
        />

        <Button
          text="Next"
          linkTo="/moment_overview"
          onClick={(e) => handleSubmit(e)}
        />
      </div>
      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        text="Please select a mood"
      />
    </div>

  );
}

export default TimeMomentLastMood;
