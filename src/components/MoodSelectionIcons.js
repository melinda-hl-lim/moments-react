import React from 'react';
import {
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';

function MoodSelectionIcons() {
  return (
    <div className="flex justify-around items-center max-w-md my-6">
      <span className="text-4xl m-0"><RiEmotionSadLine /></span>
      <span className="text-4xl m-0"><RiEmotionUnhappyLine /></span>
      <span className="text-4xl m-0"><RiEmotionNormalLine /></span>
      <span className="text-4xl m-0"><RiEmotionHappyLine /></span>
      <span className="text-4xl m-0"><RiEmotionLaughLine /></span>
    </div>
  );
}

export default MoodSelectionIcons;
