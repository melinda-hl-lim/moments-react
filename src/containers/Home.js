import React from 'react';
import Button from '../components/Button';

function Home() {
  return (
    <>
      <div className="flex flex-col w-full bg-white fixed top-0 justify-center items-center rounded-md shadow-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Last check in at:
        </h2>
        <h2 className="mt-6 text-center text-5xl leading-9 font-extrabold text-gray-900">
          4:15 pm
        </h2>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          You felt:
        </h2>
      </div>

      <div className="max-w-md w-full">
        <form className="mt-8" action="#">

          <div className="rounded-md shadow-sm">

            <input aria-label="Email address" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Email address" />

            <input aria-label="Password" name="password" type="password" required className="appearance-none rounded-none relative block w-full -mt-px px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" />

          </div>

          <div className="mt-6 text-center">
            <Button text="Sign Out" linkTo="/" />
          </div>

        </form>
      </div>
    </>
  );
}

export default Home;
