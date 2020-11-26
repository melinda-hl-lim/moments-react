import React from 'react';
import ActivityIconLabel from './ActivityIconLabel';

function ActivitySelection({ onClick, selected }) {
  return (
    <div className="flex justify-around items-center mt-4 py-4 px-4 max-w-md w-full bg-white">

      <div className="flex flex-col items-center">
        <ActivityIconLabel
          label="Family"
          onClick={onClick}
          selected={selected}
        />
        <ActivityIconLabel
          label="Work"
          onClick={onClick}
          selected={selected}
        />
        <ActivityIconLabel
          label="Exercise"
          onClick={onClick}
          selected={selected}
        />
      </div>

      <div className="flex flex-col items-center">
        <ActivityIconLabel
          label="Friends"
          onClick={onClick}
          selected={selected}
        />
        <ActivityIconLabel
          label="School"
          onClick={onClick}
          selected={selected}
        />
        <ActivityIconLabel
          label="Self Care"
          onClick={onClick}
          selected={selected}
        />
      </div>

      <div className="flex flex-col items-center">
        <ActivityIconLabel
          label="Date"
          onClick={onClick}
          selected={selected}
        />
        <ActivityIconLabel
          label="Errands"
          onClick={onClick}
          selected={selected}
        />
        <ActivityIconLabel
          label="Relax"
          onClick={onClick}
          selected={selected}
        />
      </div>

    </div>

  );
}

export default ActivitySelection;
