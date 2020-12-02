import React from 'react';
import { Link } from 'react-router-dom';

function Button({
  text, variant, size, linkTo, onClick,
}) {
  let classes = 'group relative flex w-full justify-center px-4 font-medium rounded-md hover:bg-primary-light focus:outline-none focus:border-primary-dark transition duration-150 ease-in-out';

  switch (variant) {
    case 'secondary':
      classes += ' text-primary-dark bg-white border border-primary-light shadow-sm';
      break;
    default: // primary
      classes += ' text-white bg-primary-dark shadow-md';
  }

  switch (size) {
    case 'small':
      classes += ' py-2 text-base';
      break;
    default: // large
      classes += ' py-4 text-xl';
  }

  const button = (
    <button
      type="submit"
      className={classes}
      onClick={onClick}
    >
      {text}
    </button>
  );

  return (
    <div className="mt-6">
      {linkTo
        ? (
          <Link to={linkTo}>
            {button}
          </Link>
        )
        : button}
    </div>
  );
}

export default Button;
