import React from 'react';

export const ButtonsBox = ({ changeCounter, isBoxVisible = true }) => {
  if (!isBoxVisible) {
    return null;
  }
  return (
    <React.Fragment>
      <button onClick={() => changeCounter(1)}>+</button>
      <button onClick={() => changeCounter(-1)}>-</button>
    </React.Fragment>
  )
}
