import React from 'react';
import {
  RiEmotionUnhappyLine,
  RiEmotionNormalLine,
  RiEmotionLaughLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';
import Button from '../components/Button';
import Input from '../components/Input';

function TimeMomentLastMood() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100">

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md mt-8">
          <h2 className="text-center mt-8 mx-4">Once last check in...</h2>
          <h1 className="text-center text-4xl mx-4">How Do You Feel?</h1>

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

        <Button text="Next" linkTo="/moment_overview" />
      </div>
    </div>

  );
}

export default TimeMomentLastMood;
