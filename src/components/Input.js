/* eslint-disable react/prop-types */
import React from 'react';

function Input({
  name,
  type,
  required,
  position, // For customizing input box borders
}) {
  const customizeBorder = (inputPosition) => {
    switch (inputPosition) {
      case 'first':
        return 'rounded-t-md';
      case 'last':
        return 'rounded-b-md';
      case 'singular':
        return 'rounded-md';
      default:
        return '';
    }
  };

  return (
    <div className={position === 'last' ? '-mt-px' : ''}>
      <input
        aria-label={name}
        name={name}
        type={type}
        required={Boolean(required)}
        placeholder={name}
        className={`appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 ${customizeBorder(position)}`}
      />
    </div>

  );
}

export default Input;
