import React from 'react';
import {
  RiEmotionNormalLine,
  RiEmotionHappyLine,
  RiEmotionSadLine,
} from 'react-icons/ri';
import Button from '../components/Button';
import Input from '../components/Input';

function BuildingArea() {
  return (

    <div className="min-h-screen flex flex-col items-center justify-center bg-orange-100">

      <div className="max-w-md px-4 py-8 w-full bg-white rounded-lg shadow-md">
        <h2 className="text-4xl">Family</h2>
        <p>3:15 PM to 9:15 PM</p>
        <p>Spend some time with the fam bam for the holidays</p>

        <div className="flex justify-center items-center my-4 mx-4 max-w-md bg-white rounded-lg">
          <h1 className="text-5xl">BUILDING AREA</h1>
        </div>

      </div>

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md mt-8">
          <h1 className="text-center text-4xl mt-8 mx-4">You felt:</h1>

          <ul className="my-8 mx-4 max-w-md bg-white rounded-lg">

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

          <div className="mx-4 mb-8">
            <Input
              name="Description"
              type="text"
              required="false"
              position="singular"
            />
          </div>
        </div>

        <Button text="Finish" linkTo="/home" />
      </div>
    </div>

  );
}

export default BuildingArea;
