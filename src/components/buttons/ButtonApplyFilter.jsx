import React from 'react';

const ButtonApplyFilter = ({ onClick }) => {
  return (
    <button className="btn btn-secondary p-4" onClick={onClick}>
      Apply Filters
    </button>
  );
};

export default ButtonApplyFilter;
