import React from 'react';

export default function InputEmail(props) {
  const { formGeneratorState, handleInputChange } = props;

  return (
    <>
      <label htmlFor="id">
        <input
          type="text"
          placeholder="input title"
          name="id"
          value={formGeneratorState.id}
          onChange={handleInputChange}
        />
      </label>

      <label htmlFor="placeholder">
        <input
          type="text"
          placeholder="input placeholder"
          name="placeholder"
          value={formGeneratorState.placeholder}
          onChange={handleInputChange}
        />
      </label>

      <input
        type="radio"
        id="required"
        name="required"
        value={true}
        onChange={handleInputChange}
      />
      <label htmlFor="required">Yes</label>

      <input
        type="radio"
        id="required"
        name="required"
        value={false}
        onChange={handleInputChange}
      />
      <label htmlFor="required">No</label>
    </>
  );
}
