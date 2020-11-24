/* eslint-disable react/prop-types */
import React from 'react';
import {
  Link,
} from 'react-router-dom';

function Button({ text, linkTo }) {
  return (
    <div className="mt-6">
      <Link to={linkTo}>
        <button type="submit" className="group relative flex w-full justify-center py-4 px-4 text-xl font-medium rounded-md text-white bg-primary-dark hover:bg-primary-light focus:outline-none focus:border-primary-dark focus:shadow-outline-indigo transition duration-150 ease-in-out">
          {text}
        </button>
      </Link>
    </div>

  );
}

export default Button;
