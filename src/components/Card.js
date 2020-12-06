import React from 'react';

function Card({ children }) {
  return (
    <div className="max-w-md w-full bg-white rounded-lg shadow-md px-4 py-6">
      {children}
    </div>
  );
}

export default Card;
