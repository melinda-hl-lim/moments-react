import React from 'react';
import Button from './Button';

function MomentHeaderCard({
  activityCategory, startTime, stopTime, activityDescription, duration, button,
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
    <div className="flex flex-col w-full bg-white rounded-lg shadow-md px-4 py-8">

      <h2 className="text-4xl">{activityCategory}</h2>
      <p>{timeInfo}</p>
      <p>{activityDescription}</p>

      <div className="flex justify-center items-center my-4 mx-4 bg-white rounded-lg">
        <h1 className="text-5xl">{duration}</h1>
      </div>

      {finishButton}
    </div>
  );
}

export default MomentHeaderCard;
