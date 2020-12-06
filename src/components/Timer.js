import React, { useState, useEffect } from 'react';

function Timer({ startTimestamp, reverse, countdownDuration }) {
  const [duration, setDuration] = useState(getDuration());

  // Calculate the time passed between now and a given start time
  function calculateDurationForward() {
    const startTime = new Date(startTimestamp);
    const endTime = new Date();

    let hours = endTime.getHours() - startTime.getHours();
    let minutes = endTime.getMinutes() - startTime.getMinutes();

    if (minutes < 0) {
      hours -= 1;
      minutes += 60;
    }

    return { hours, minutes };
  }

  // Calculate the time left in a timed countdown
  function calculateDurationBackward() {
    const startTime = new Date(startTimestamp);
    const currentDuration = new Date() - startTime;
    const remainingDuration = countdownDuration - currentDuration;

    const remainingMinutes = Math.round(remainingDuration / 60000);
    return { hours: 0, minutes: remainingMinutes };
  }

  function getDuration() {
    let currentDuration;
    if (reverse) {
      currentDuration = calculateDurationBackward();
      return `${String(currentDuration.minutes)} min`;
    }
    currentDuration = calculateDurationForward();
    return `${currentDuration.hours} hr ${currentDuration.minutes} min`;
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentDuration = getDuration();
      if (currentDuration !== duration) { setDuration(currentDuration); }
    }, 5000);

    return () => clearInterval(timerId);
  });

  return (
    <p>{duration}</p>
  );
}

export default Timer;
