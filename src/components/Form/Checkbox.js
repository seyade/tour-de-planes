import React from 'react';

const Checkbox = ({ name, title, onChange, checked, options }) => {
  return (
    <div className="ui-checkbox-group">
      <h4>{title}</h4>

      {options.map((option, index) => (
        <div className="ui-checkbox" key={option}>
          <label htmlFor={name}>
            <input
              type="checkbox"
              name={name}
              id={`${name}-${index}`}
              onChange={onChange}
              checked={checked}
            />
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Checkbox;
