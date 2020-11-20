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
import Navigation from '../components/Navigation';

function HomeTimeMoment() {
  return (
    <>
      <div className="min-h-custom flex flex-col items-center justify-center bg-orange-100">

        <div className="max-w-md px-4 py-8 w-full bg-white rounded-lg shadow-md">
          <h2 className="text-4xl">Family</h2>
          <p>Start Time: 3:15 PM</p>
          <p>Spend some time with the fam bam for the holidays</p>

          <div className="flex justify-center items-center my-4 mx-4 max-w-md bg-white rounded-lg">
            <h1 className="text-5xl">05:54</h1>
          </div>

          <Button text="Finish Activity" linkTo="/building" />
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

          <Button text="Check In" linkTo="/TimeMomentLastMood" />
        </div>
      </div>

      <Navigation />
    </>
  );
}

export default HomeTimeMoment;
