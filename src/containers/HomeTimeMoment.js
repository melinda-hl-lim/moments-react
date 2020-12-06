import React, { useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';
import useModal from '../useModal';
import MomentHeaderCard from '../components/MomentHeaderCard';
import MoodCheckIn from '../components/MoodCheckIn';
import MoodSelector from '../utils/MoodSelector';
import Navigation from '../components/Navigation';
import Timer from '../components/Timer';

function HomeTimeMoment({ timedActivity }) {
  const MOOD_CHECK_IN_COUNTDOWN = 900000; // 15 minutes in milliseconds
  const [mood, setMood] = useState(null);
  const [moodDescription, setMoodDescription] = useState('');
  const [moodCountdown, setMoodCountdown] = useState(false);
  const [countdownStartTime, setCountdownStartTime] = useState(new Date());
  const moodSelector = new MoodSelector(mood, moodDescription, setMood, setMoodDescription);
  const {
    isVisible, toggleModal, modalText, setModalText,
  } = useModal();

  function postNewMood() {
    const data = {
      mood,
      moodDescription,
      momentId: timedActivity.id,
    };

    axios.post('/mood/create', data)
      .then((response) => {
        if (response.status === 201) {
          setMoodCountdown(true);
          setCountdownStartTime(new Date());
          setTimeout(
            () => {
              // TODO: pull into function for resetMood ...?
              setMoodCountdown(null);
              setMood(null);
            },
            MOOD_CHECK_IN_COUNTDOWN,
          );
        } if (response.status >= 400 && response.status <= 511) {
          setModalText(`A ${response.status} error has occured. Please check in again later.`);
          toggleModal();
        }
      })
      .catch(() => {
        setModalText('An error has occured. Please check in again later.');
        toggleModal();
      });
  }

  function handleMoodSubmit(e) {
    if (mood) {
      postNewMood();
    } else {
      e.preventDefault();
      setModalText('Please select a mood');
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
        >
          <div className="w-full">
            <Button
              text="Finish Activity"
              linkTo={{
                pathname: '/time_moment_last_mood',
                state: {
                  momentId: timedActivity.id,
                },
              }}
            />
          </div>
        </MomentHeaderCard>
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
                      countdownDuration={MOOD_CHECK_IN_COUNTDOWN}
                    />
                  </h2>
                </div>
              </Card>
            )
            : (
              <MoodCheckIn
                onIconClick={(e) => moodSelector.handleClick(e)}
                onInput={(e) => moodSelector.handleInput(e)}
                selected={mood}
              >
                <Button
                  text="Check In"
                  variant="secondary"
                  size="small"
                  onClick={(e) => handleMoodSubmit(e)}
                />
              </MoodCheckIn>
            )}
        </div>
      </div>

      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        text={modalText}
      />

      <Navigation />
    </>
  );
}

export default HomeTimeMoment;
