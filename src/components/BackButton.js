import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

function BackButton() {
  return (
    <div className="absolute self-start left-1 text-4xl">
      <IoIosArrowBack />
    </div>
  );
}

export default BackButton;
