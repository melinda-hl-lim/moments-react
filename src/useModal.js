import { useState } from 'react';

function useModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [modalText, setModalText] = useState('');

  function toggleModal() {
    setIsVisible(() => !isVisible);
  }

  return {
    isVisible,
    toggleModal,
    modalText,
    setModalText,
  };
}

export default useModal;
