import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { withRouter } from 'react-router-dom';

function BackButton({ history }) {
  function handleClick() {
    // TODO: is there a way to make the back button pass the current state?
    history.goBack();
  }
  return (
    <div
      className="absolute self-start left-1 text-4xl"
      onClick={handleClick}
    >
      <IoIosArrowBack />
    </div>
  );
}

export default withRouter(BackButton);
