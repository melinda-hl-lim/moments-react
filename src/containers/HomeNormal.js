import React from 'react';
import {
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';
import Button from '../components/Button';
import CardFullWidth from '../components/CardFullWidth';
import Navigation from '../components/Navigation';

function HomeNormal({ lastMood }) {
  function moodRatingToIcon(rating) {
    switch (rating) {
      case 1:
        return <RiEmotionSadLine />;
      case 2:
        return <RiEmotionUnhappyLine />;
      case 3:
        return <RiEmotionNormalLine />;
      case 4:
        return <RiEmotionHappyLine />;
      case 5:
        return <RiEmotionLaughLine />;
      default:
        return <RiEmotionNormalLine />;
    }
  }
  return (
    <>
      <div className="min-h-custom flex flex-col items-center bg-yellow-50 mb-16">

        <CardFullWidth>
          <h2 className="mt-4 text-center text-4xl leading-9 font-extrabold text-gray-900">
            Last check in at:
          </h2>
          <h2 className="mt-6 text-center text-5xl leading-9 font-extrabold text-gray-900">
            {lastMood.createdAt}
          </h2>
          <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900">
            You felt:
          </h2>
          <span className="text-center text-6xl">
            {moodRatingToIcon(lastMood.rating)}
          </span>
        </CardFullWidth>

        <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center rounded-lg">
            <Button text="Record a Mood" linkTo="/building" />
          </div>
          <div className="w-full text-center rounded-lg">
            <Button text="Time an Activity" linkTo="/moment/new/select_activity" />
          </div>
        </div>

      </div>

      <Navigation />
    </>
  );
}

export default HomeNormal;
