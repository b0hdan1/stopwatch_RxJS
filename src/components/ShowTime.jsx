import React from 'react';

function ShowTime({ time }) {
  return (
    <div>
      <span>{('0' + Math.floor((time / (1000 * 60 * 60)) % 24)).slice(-2)} : </span>
      <span>{('0' + Math.floor(time / 6000)).slice(-2)} : </span>
      <span>{('0' + Math.floor((time / 100) % 60)).slice(-2)}</span>
    </div>
  );
}

export default ShowTime;
