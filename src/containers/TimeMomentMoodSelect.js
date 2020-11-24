import React from 'react';
import {
  RiHomeHeartFill,
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';
import Button from '../components/Button';
import Input from '../components/Input';

function TimeMomentMoodSelect() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-orange-100">

      <div className="flex flex-col w-full bg-white rounded-lg shadow-md">
        <h1 className="text-center text-2xl mt-8 mx-4">You selected</h1>

        <div className="flex justify-around items-center my-4 mx-4 max-w-md bg-white rounded-lg">
          <div className="flex flex-col items-center">
            <span className="text-3xl m-0"><RiHomeHeartFill /></span>
            <p className="-mt-px">Family</p>
          </div>
        </div>

        <div className="mx-4 mb-8">
          <p>Spend some time with the fam bam for the holidays</p>
        </div>
      </div>

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md mt-8">
          <h1 className="text-center text-3xl mt-8 mx-4">How Do You Feel?</h1>

          <div className="flex justify-around items-center my-8 mx-4 max-w-md bg-white rounded-lg">

            <span className="text-4xl m-0"><RiEmotionSadLine /></span>
            <span className="text-4xl m-0"><RiEmotionUnhappyLine /></span>
            <span className="text-4xl m-0"><RiEmotionNormalLine /></span>
            <span className="text-4xl m-0"><RiEmotionHappyLine /></span>
            <span className="text-4xl m-0"><RiEmotionLaughLine /></span>

          </div>

          <div className="mx-4 mb-8">
            <Input
              name="Description"
              type="text"
              required="false"
              position="singular"
            />
          </div>
        </div>

        <Button text="Start Activity" linkTo="/home_timing" />
      </div>
    </div>

  );
}

export default TimeMomentMoodSelect;
