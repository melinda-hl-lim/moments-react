import React, { useState, useEffect } from 'react';

function Timer({ startTimestamp, reverse }) {
  const MOOD_CHECK_IN_COUNTDOWN = 15; // 15 minutes
  const [duration, setDuration] = useState('');

  // Calculate the time passed between now and a given start time
  function calculateDurationForward(givenStartTime) {
    const startTime = new Date(givenStartTime);
    const endTime = new Date();

    const hours = endTime.getHours() - startTime.getHours();
    const minutes = endTime.getMinutes() - startTime.getMinutes();
    return `${hours} hr ${minutes} min`;
  }

  // Calculate the time left in a timed countdown
  function calculateDurationBackward(givenStartTime, duration) {

  }

  function calculateDuration(givenStartTime) {
    if (reverse) {
      return calculateDurationBackward(
        givenStartTime,
        new Date().setMinutes(MOOD_CHECK_IN_COUNTDOWN),
      );
    }
    return calculateDurationForward(givenStartTime);
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentDuration = calculateDuration(startTimestamp);
      if (currentDuration !== duration) { setDuration(currentDuration); }
    }, 5000);

    return () => clearInterval(timerId);
  });

  return (
    <p>{duration}</p>
  );
}

export default Timer;
