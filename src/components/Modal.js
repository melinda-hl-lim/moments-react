import React from 'react';
import { createPortal } from 'react-dom';

function Modal({ isVisible, hideModal }) {
  return isVisible
    ? createPortal(
      <div>
        <div>
          <h5>Modal</h5>
          <span>
            Please select a category
          </span>
        </div>
        <button onClick={hideModal}>
          Close
        </button>
      </div>,
      document.getElementById('root'),
    )
    : null;
}

export default Modal;
