import React, { useState, useEffect } from 'react';

function Timer({ startTimestamp, reverse }) {
  const MOOD_CHECK_IN_COUNTDOWN = 900000; // 15 minutes in milliseconds
  const [duration, setDuration] = useState(calculateDuration(startTimestamp));

  // Calculate the time passed between now and a given start time
  function calculateDurationForward(givenStartTime) {
    const startTime = new Date(givenStartTime);
    const endTime = new Date();

    const hours = endTime.getHours() - startTime.getHours();
    const minutes = endTime.getMinutes() - startTime.getMinutes();
    return `${hours} hr ${minutes} min`;
  }

  // Calculate the time left in a timed countdown
  function calculateDurationBackward(givenStartTime) {
    const startTime = new Date(givenStartTime);
    const currentDuration = new Date() - startTime;
    const remainingDuration = MOOD_CHECK_IN_COUNTDOWN - currentDuration;

    const remainingMinutes = Math.floor(remainingDuration / 60000);

    return `${String(remainingMinutes)} min`;
  }

  function calculateDuration(givenStartTime) {
    if (reverse) {
      return calculateDurationBackward(givenStartTime);
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
