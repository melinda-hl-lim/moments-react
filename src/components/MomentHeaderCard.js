import React from 'react';
import Button from './Button';
import CardFullWidth from './CardFullWidth';
import Timer from './Timer';

function MomentHeaderCard({
  activityCategory, startTime, stopTime, activityDescription, timestamp, button,
}) {
  let timeInfo;
  if (stopTime) {
    timeInfo = `${startTime} to ${stopTime}`;
  } else {
    timeInfo = `Start Time: ${startTime}`;
  }

  const buttonPresent = (button === 'true');
  let finishButton;
  if (buttonPresent) {
    finishButton = <Button text="Finish Activity" linkTo="/time_moment_last_mood" />;
  } else {
    finishButton = '';
  }

  return (
    <CardFullWidth>

      <div className="w-full text-left">
        <h2 className="text-4xl">{activityCategory}</h2>
        <p>{timeInfo}</p>
        <p>{activityDescription}</p>
      </div>

      <h1 className="text-5xl mt-4">
        <Timer
          startTimestamp={timestamp}
        />
      </h1>
      <h1 className="text-5xl mt-4">5 hr 3 min</h1>

      <div className="w-full">
        {finishButton}
      </div>
    </CardFullWidth>
  );
}

export default MomentHeaderCard;
