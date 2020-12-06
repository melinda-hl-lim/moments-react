import React, { useState, useEffect } from 'react';
import DateTimeHelper from '../utils/DateTimeHelper';

function Timer({ startTimestamp, countdown, countdownDuration }) {
  const dtHelper = new DateTimeHelper();
  const [duration, setDuration] = useState(getDuration());

  function getDuration() {
    if (countdown) {
      const { minutes } = dtHelper.calculateRemainingCountdown(startTimestamp, countdownDuration);
      return `${String(minutes)} min`;
    }

    const now = new Date();
    const { hours, minutes } = dtHelper.calculateDurationBetween(startTimestamp, now);
    return `${hours} hr ${minutes} min`;
  }

  useEffect(() => {
    const timerId = setInterval(() => {
      const currentDuration = getDuration();

      if (currentDuration !== duration) {
        setDuration(currentDuration);
      }
    }, 5000);

    return () => clearInterval(timerId);
  });

  return (
    <p>{duration}</p>
  );
}

export default Timer;
