import React from 'react';

const Input = ({ label, name, onChange }) => {
  return (
    <div className="ui-input">
      <label htmlFor={name}>{label}</label>
      <input name={name} id={name} onChange={onChange} />
    </div>
  );
};

export default Input;
