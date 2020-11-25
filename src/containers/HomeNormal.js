import React from 'react';
import { RiEmotionLine } from 'react-icons/ri';
import Button from '../components/Button';
import CardFullWidth from '../components/CardFullWidth';
import Navigation from '../components/Navigation';

function HomeNormal({ lastMood }) {
  // eslint-disable-next-line no-debugger
  // debugger;
  return (
    <>
      <div className="min-h-custom flex flex-col items-center bg-orange-100 mb-16">

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
          <span className="text-center text-6xl"><RiEmotionLine /></span>
        </CardFullWidth>

        <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full text-center rounded-lg">
            <Button text="Record a Mood" linkTo="/building" />
          </div>
          <div className="w-full text-center rounded-lg">
            <Button text="Time an Activity" linkTo="/time_moment_activity_select" />
          </div>
        </div>

      </div>

      <Navigation />
    </>
  );
}

export default HomeNormal;
