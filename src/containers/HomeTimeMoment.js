import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import MomentHeaderCard from '../components/MomentHeaderCard';
import MoodCheckIn from '../components/MoodCheckIn';

function HomeTimeMoment({ timedActivity }) {
  const [mood, setMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');

  function handleClick(e) {
    const selectedMood = e.currentTarget.dataset.mood;
    if (mood === selectedMood) {
      setMood(null);
    } else {
      setMood(selectedMood);
    }
  }

  function handleInput(e) {
    setMoodDescription(e.currentTarget.value);
  }

  function postNewMood(e) {
    const data = {
      mood,
      moodDescription,
    };

    axios.post('/mood/create', data)
      .then((response) => {
        console.log(response);
        // if there's a 500 error, let the user know...?
        // if it's successful (201) then switch check in modal into countdown and say thanks for checking in
      })
      .catch((response) => {
        console.log(response);
        // if the post request fails, tell the user to try again later
      });
  }
  return (
    <>
      <div className="min-h-custom flex flex-col items-center justify-center bg-yellow-50 mb-16">

        <MomentHeaderCard
          activityCategory={timedActivity.category}
          startTime={timedActivity.createdAt}
          activityDescription={timedActivity.description}
          duration="05 hr 54 min"
          button="true"
        />
        {/* main content wrapper v */}
        <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">

          {/* card for mood check in */}
          <MoodCheckIn
            button="true"
            onIconClick={(e) => handleClick(e)}
            onInput={(e) => handleInput(e)}
            selected={mood}
            onButtonClick={(e) => postNewMood(e)}
          />

        </div>
      </div>

      <Navigation />
    </>
  );
}

export default HomeTimeMoment;
