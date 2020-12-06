import React, { useState } from 'react';
import ActivitySelection from '../components/ActivitySelection';
import BackButton from '../components/BackButton';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Modal from '../components/Modal';
import useModal from '../useModal';

function TimeMomentActivitySelect() {
  const {
    isVisible, toggleModal, modalText, setModalText,
  } = useModal();
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  function handleActivitySelection(e) {
    setCategory(e.currentTarget.dataset.category);
  }

  function handleDescriptionInput(e) {
    setDescription(e.currentTarget.value);
  }

  function validCategory() {
    return category !== '';
  }

  function handleSubmission(e) {
    if (!validCategory()) {
      e.preventDefault();
      setModalText('Please select a category');
      toggleModal();
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-yellow-50">

      <BackButton />

      <div className="flex flex-col max-w-md w-full flex-grow justify-center px-4 py-8">
        <Card>

          <h1 className="text-center text-3xl">Select an Activity</h1>
          <ActivitySelection
            onClick={(e) => handleActivitySelection(e)}
            selected={category}
          />
          <div className="">
            <Input
              name="Description"
              type="text"
              required="false"
              position="singular"
              onChange={(e) => handleDescriptionInput(e)}
            />
          </div>
        </Card>

        <Button
          text="Next"
          variant="secondary"
          linkTo={{
            pathname: '/moment/new/select_mood',
            state: {
              category,
              description,
            },
          }}
          onClick={(e) => handleSubmission(e)}
        />
      </div>

      <Modal
        isVisible={isVisible}
        hideModal={toggleModal}
        text={modalText}
      />
    </div>
  );
}

export default TimeMomentActivitySelect;
