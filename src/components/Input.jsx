import React from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Input = ({ id, type, placeholder, value, onChange }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        required
        onChange={onChange}
      ></input>
    </>
  );
};

export const PasswordInput = ({
  id,
  value,
  onChange,
  placeholder,
  isVisible,
  toggleVisibility,
}) => (
  <div className="inputField-eyeIcon">
    <Input
      type={isVisible ? "text" : "password"}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
    <span className="eyeicon" onClick={toggleVisibility}>
      {isVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
    </span>
  </div>
);

export default Input;
