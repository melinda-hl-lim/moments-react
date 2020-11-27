import React from 'react';

function CardFullWidth({ children }) {
  return (
    <div className="flex flex-col items-center w-full bg-white rounded-lg shadow-md px-4 py-6">
      {children}
    </div>
  );
}

export default CardFullWidth;
