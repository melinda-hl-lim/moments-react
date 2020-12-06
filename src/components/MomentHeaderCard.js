import React from 'react';
import CardFullWidth from './CardFullWidth';
import Timer from './Timer';

function MomentHeaderCard({
  children, activityCategory, startTime, stopTime, activityDescription, timestamp,
}) {
  let timeInfo;
  if (stopTime) {
    timeInfo = `${startTime} to ${stopTime}`;
  } else {
    timeInfo = `Start Time: ${startTime}`;
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
      {children}
    </CardFullWidth>
  );
}

export default MomentHeaderCard;
