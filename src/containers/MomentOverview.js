import React from 'react';
import {
  RiEmotionNormalLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';
import Button from '../components/Button';
import MomentHeaderCard from '../components/MomentHeaderCard';

function MomentOverview() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100">

      <MomentHeaderCard
        activityCategory="Family"
        startTime="3:15 PM"
        stopTime="9:15 PM"
        duration="06 hr 00 min"
        activityDescription="Spend some time with the fam bam for the holidays"
      />

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4">

        <div className="max-w-md w-full bg-white rounded-lg shadow-md px-4 py-8">
          <h1 className="text-center text-4xl">You felt:</h1>

          <ul className="mt-6 max-w-md">

            <li className="flex text-4xl my-2">
              <RiEmotionSadLine />
              <div className="flex flex-col mx-3">
                <p className="text-2xl">3:15 PM</p>
                <p className="text-base">Mew...</p>
              </div>
            </li>
            <li className="flex text-4xl my-2">
              <RiEmotionNormalLine />
              <div className="flex flex-col mx-3">
                <p className="text-2xl">5:56 PM</p>
                <p className="text-base" />
              </div>
            </li>
            <li className="flex text-4xl my-2">
              <RiEmotionHappyLine />
              <div className="flex flex-col mx-3">
                <p className="text-2xl">9:15 PM</p>
                <p className="text-base">Family visit wasn&apos;t bad!</p>
              </div>
            </li>
          </ul>
        </div>

        <Button text="Finish" linkTo="/home" />
      </div>
    </div>

  );
}

export default MomentOverview;
