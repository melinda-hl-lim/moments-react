import React, { useState } from 'react';
import axios from 'axios';
import Navigation from '../components/Navigation';
import MomentHeaderCard from '../components/MomentHeaderCard';
import MoodCheckIn from '../components/MoodCheckIn';
import MoodSelector from '../utils/MoodSelector';
import Card from '../components/Card';
import Timer from '../components/Timer';
import useModal from '../useModal';
import Modal from '../components/Modal';

function HomeTimeMoment({ timedActivity }) {
  const MOOD_CHECK_IN_COUNTDOWN = 900000; // 15 minutes in milliseconds
  const [mood, setMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');
  const [moodCountdown, setMoodCountdown] = useState(false);
  const [countdownStartTime, setCountdownStartTime] = useState(new Date());
  const moodSelector = new MoodSelector(mood, moodDescription, setMood, setMoodDescription);
  const { isVisible, toggleModal } = useModal();

  function postNewMood() {
    const data = {
      mood,
      moodDescription,
    };

    axios.post('/mood/create', data)
      .then((response) => {
        console.log(response);

        // TODO: if there's a 500 error, let the user know...?
        if (response.status === 201) {
          setMoodCountdown(true);
          setCountdownStartTime(new Date());
          setTimeout(
            () => setMoodCountdown(null),
            MOOD_CHECK_IN_COUNTDOWN,
          );
        }
      })
      .catch((response) => {
        console.log(response);
        // TODO: if the post request fails, tell the user to try again later
      });
  }

  function handleSubmit(e) {
    if (mood) {
      postNewMood();
    } else {
      e.preventDefault();
      toggleModal();
    }
  }

  return (
    <>
      <div className="min-h-custom flex flex-col items-center justify-center bg-yellow-50 mb-16">

        <MomentHeaderCard
          activityCategory={timedActivity.category}
          startTime={timedActivity.createdAt}
          activityDescription={timedActivity.description}
          timestamp={timedActivity.timestamp}
          button="true"
        />
        {/* main content wrapper v */}
        <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
          {moodCountdown
            ? (
              <Card>
                <div className="flex flex-col justify-center items-center">
                  <p>Thank you for checking in!</p>
                  <p className="mt-4">You can record another mood in:</p>
                  <h2 className="text-2xl">
                    <Timer
                      startTimestamp={countdownStartTime}
                      reverse
                    />
                  </h2>
                </div>
              </Card>
            )
            : (
              <MoodCheckIn
                button="true"
                onIconClick={(e) => moodSelector.handleClick(e)}
                onInput={(e) => moodSelector.handleInput(e)}
                selected={mood}
                onButtonClick={(e) => handleSubmit(e)}
              />
            )}
        </div>
      </div>

      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        text="Please select a mood"
      />

      <Navigation />
    </>
  );
}

export default HomeTimeMoment;
