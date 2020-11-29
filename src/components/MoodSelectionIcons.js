import React from 'react';
import {
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';

function MoodSelectionIcons({ onClick }) {
  return (
    <div className="flex justify-around items-center max-w-md my-6">
      <span
        className="text-4xl text-indigo-800 m-0"
        data-mood="1"
        onClick={onClick}
      >
        <RiEmotionSadLine />
      </span>
      <span
        className="text-4xl text-purple-600 m-0"
        data-mood="2"
        onClick={onClick}
      >
        <RiEmotionUnhappyLine />
      </span>
      <span
        className="text-4xl text-blue-500 m-0"
        data-mood="3"
        onClick={onClick}
      >
        <RiEmotionNormalLine />
      </span>
      <span
        className="text-4xl text-green-400 m-0"
        data-mood="4"
        onClick={onClick}
      >
        <RiEmotionHappyLine />
      </span>
      <span
        className="text-4xl text-yellow-500 m-0"
        data-mood="5"
        onClick={onClick}
      >
        <RiEmotionLaughLine />
      </span>
    </div>
  );
}

export default MoodSelectionIcons;
