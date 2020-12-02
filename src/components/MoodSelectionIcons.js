import React from 'react';
import {
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';

function MoodSelectionIcons({ onClick, selected }) {
  const greyedIcon = 'text-gray-400';

  function determineIconColor(originalMoodColor, moodValue) {
    if (selected && selected === moodValue) {
      return originalMoodColor;
    } if (selected) {
      return greyedIcon;
    }
    return originalMoodColor;
  }

  return (
    <div className="flex justify-around items-center max-w-md my-6">
      <span
        className={`text-4xl m-0 ${determineIconColor('text-indigo-800', '1')}`}
        data-mood="1"
        onClick={onClick}
      >
        <RiEmotionSadLine />
      </span>
      <span
        className={`text-4xl m-0 ${determineIconColor('text-purple-600', '2')}`}
        data-mood="2"
        onClick={onClick}
      >
        <RiEmotionUnhappyLine />
      </span>
      <span
        className={`text-4xl m-0 ${determineIconColor('text-blue-500', '3')}`}
        data-mood="3"
        onClick={onClick}
      >
        <RiEmotionNormalLine />
      </span>
      <span
        className={`text-4xl m-0 ${determineIconColor('text-green-400', '4')}`}
        data-mood="4"
        onClick={onClick}
      >
        <RiEmotionHappyLine />
      </span>
      <span
        className={`text-4xl m-0 ${determineIconColor('text-yellow-500', '5')}`}
        data-mood="5"
        onClick={onClick}
      >
        <RiEmotionLaughLine />
      </span>
    </div>
  );
}

export default MoodSelectionIcons;
