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

    <div className="min-h-custom flex flex-col items-center bg-orange-100 mb-16">
      {/* Card that shows last check in time and mood */}
      {/*  fixed top-0 justify-center items-center */}
      <div className="flex flex-col w-full px-4 py-8 bg-white rounded-lg shadow-md ">
        <h2 className="mt-12 text-center text-4xl leading-9 font-extrabold text-gray-900">
          Last check in at:
        </h2>
        <h2 className="mt-6 text-center text-5xl leading-9 font-extrabold text-gray-900">
          4:15 pm
        </h2>
        <h2 className="mt-6 text-center text-4xl leading-9 font-extrabold text-gray-900">
          You felt:
        </h2>
        <span className="text-center text-6xl"><RiEmotionNormalLine /></span>
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
