import React from 'react';

import { useGlobalStateContext } from '../GlobalState/GlobalState';

export default function FormInfo() {
  const { formInfoState } = useGlobalStateContext();

  console.log(formInfoState);
  return (
    <div className="FormInfo__container">
      <p>FormInfo</p>

      {formInfoState.map((values, idx) => (
        <div key={idx}>
          <h2>Form nº{idx+1}</h2>
          {Object.keys(values).map((elementKey, jdx) => (
            <p key={jdx}>
              <b>{elementKey}</b>: {values[elementKey]}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
