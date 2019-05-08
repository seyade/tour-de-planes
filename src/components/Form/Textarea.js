import React from 'react';

const Textarea = ({ label, name, onChange }) => {
  return (
    <div className="ui=textarea">
      <label htmlFor={name}>{label}</label>
      <textarea name={name} id={name} onChange={onChange} />
    </div>
  );
};

export default Textarea;
