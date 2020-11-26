import React, { createContext, useContext, useState } from 'react';

export const GlobalStateContext = createContext(null);

export function useGlobalStateContext() {
  return useContext(GlobalStateContext);
}

const mockForm = [
  {
    type: 'text',
    id: 'name',
    placeholder: 'Put your name here',
    required: true,
  },
  {
    type: 'text',
    id: 'surname',
    placeholder: 'Put your surname here',
    required: true,
  },
  {
    type: 'email',
    id: 'email',
    placeholder: 'Put your email here',
    required: false,
  },
];

export default function GlobalState({ children }) {
  //from form generator to form to fill
  const [finalFormState, setFinalFormState] = useState(mockForm);

  //form to fill to form info
  const [formInfoState, setFormInfoState] = useState([]);

  const value = {
    finalFormState,
    setFinalFormState,

    formInfoState,
    setFormInfoState,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}
