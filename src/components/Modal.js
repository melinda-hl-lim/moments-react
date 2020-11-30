import React from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

function Modal({ isVisible, hideModal }) {
  return isVisible
    ? createPortal(
      <>
        <div className="min-h-screen min-w-full fixed top-0 left-0 bg-black opacity-40" />

        <div className="min-h-screen min-w-full flex justify-center items-center fixed top-0 left-0 z-10">
          <div className="flex flex-col w-2/3  max-w-md justify-center items-center opacity-100 bg-white rounded-lg px-4 py-4">
            <span>
              Please select a category
            </span>
            <Button text="Okay" onClick={hideModal} />
          </div>
        </div>
      </>,
      document.getElementById('root'),
    )
    : null;
}

export default Modal;
