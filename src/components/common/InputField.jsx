import React from 'react';

function InputField({ label, type }) {
  return (
    <>
      {
        // eslint-disable-next-line
        <label className="label">{label}</label>
      }
      <input className="input-field" type={type} placeholder="Enter your Text" />
    </>
  );
}

export default InputField;
