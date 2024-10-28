import React from "react";

export const Button = ({ className, type, value, btnName, onClick }) => {
  return (
    <>
      <button
        className={className}
        type={type}
        name={btnName}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  );
};
