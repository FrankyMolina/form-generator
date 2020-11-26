import React, { useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

import { useGlobalStateContext } from '../GlobalState/GlobalState';

import './FormCreated.scss';

export default function FormCreated() {
  //match with URL to show btn or icon
  const match = useRouteMatch('/form-to-fill');

  //global state
  const {
    finalFormState,
    formInfoState,
    setFormInfoState,
  } = useGlobalStateContext();

  //Form-to-Fill State from finalFormState guidelines.
  const values = finalFormState.map((formInfoData) => formInfoData.id);
  const stateFromGlobalValues = values.reduce((result, index, item) => {
    result[index] = item = '';
    return result;
  }, {});

  //own state 
  const [formToFillState, setFormToFillState] = useState(stateFromGlobalValues);

  //changes and submit
  function handleFinalInputChange(ev) {
    const { name, value } = ev.target;

    setFormToFillState({
      ...formToFillState,
      [name]: value,
    });
  }

  function handleFinalSubmit(ev) {
    ev.preventDefault();

    //form-info state
    setFormInfoState([...formInfoState, formToFillState]);

    setFormToFillState(stateFromGlobalValues);
  }

  return (
    <div className="FormCreated__container">
      <form onSubmit={handleFinalSubmit}>
        {finalFormState.map((input, idx) => (
          <label htmlFor={input.type} key={idx}>
            <input
              type={input.type}
              name={input.id}
              id={input.id}
              placeholder={input.placeholder}
              required={input.required}
              value={formToFillState[input.id]}
              onChange={handleFinalInputChange}
            />
          </label>
        ))}
        {match ? <input type="submit" value="Done :)" /> : <div>😊</div>}
      </form>
    </div>
  );
}
