import React, { useState } from 'react';

import { useGlobalStateContext } from '../GlobalState/GlobalState';
import FormCreated from '../FormCreated';
import InputText from '../FormsByInputs/InputText';
import InputNumber from '../FormsByInputs/InputNumber';
import InputPassword from '../FormsByInputs/InputPassword';
import InputEmail from '../FormsByInputs/InputEmail';
import InputDate from '../FormsByInputs/InputDate';
import InputURL from '../FormsByInputs/InputURL';
import InputTime from '../FormsByInputs/InputTime';

import './FormGenerator.scss';

//consts
const emptyFormGeneratorState = {
  type: '',
  id: '',
  placeholder: '',
  required: false,
};

const inputTypes = [
  'text',
  'number',
  'password',
  'email',
  'date',
  'url',
  'time',
  'checkbox',
  'radio',
  'dropdown',
];

export default function FormGenerator() {
  //state for form creation
  const { finalFormState, setFinalFormState } = useGlobalStateContext();

  //Own state
  const [formGeneratorState, setFormGeneratorState] = useState(
    emptyFormGeneratorState
  );

  //object of components + component identification
  const exactInputForm = {
    text: InputText,
    number: InputNumber,
    password: InputPassword,
    email: InputEmail,
    date: InputDate,
    url: InputURL,
    time: InputTime,
  };
  const InputComponent = exactInputForm[formGeneratorState.type];

  //submit
  function formSubmit(ev) {
    ev.preventDefault();

    requiredToBoolean();

    setFinalFormState([...finalFormState, formGeneratorState]);

    setFormGeneratorState(emptyFormGeneratorState);
  }

  //turn required field to boolean from str.
  function requiredToBoolean() {
    setFormGeneratorState(
      formGeneratorState.required === 'true'
        ? (formGeneratorState.required = true)
        : (formGeneratorState.required = false)
    );
  }

  //general input change
  function handleInputChange(ev) {
    const { name, value } = ev.target;

    setFormGeneratorState({
      ...formGeneratorState,
      [name]: value,
    });
  }

  //inputType btn to choose input type.
  function typeSelected(value) {
    setFormGeneratorState({ type: value });
    console.log(formGeneratorState);
  }

  return (
    <div className="FormGenerator__container">
      {inputTypes.map((el, idx) => (
        <button key={idx} onClick={() => typeSelected(el)}>
          {el}
        </button>
      ))}

      {!formGeneratorState.type ? (
        <div>Select your input type</div>
      ) : (
        <>
          <h3>input type: {formGeneratorState.type}</h3>
          <form onSubmit={formSubmit}>
            <InputComponent
              handleInputChange={handleInputChange}
              formGeneratorState={formGeneratorState}
            />

            <input type="submit" value="Add input!" />
          </form>
        </>
      )}

      <div>
        <p>
          <b>Form Preview:</b>
        </p>

        <FormCreated />
      </div>
    </div>
  );
}
