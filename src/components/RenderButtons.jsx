import React from 'react';

function RenderButtons({ start, stop, reset, status, isClicked }) {
  return (
      <>
          {(status === 0) ? <button className="button" onClick={start}>Start</button> : ""}
          {(status === 1) ?
          <>
            <button className="button" onClick={stop}>Stop</button>
            <button className="button" onClick={isClicked}>Wait</button>
            <button className="button" onClick={reset}>Reset</button>
          </> : ""
          }
          {(status === 2) ?
          <>
          <button className="button" onClick={start}>Start</button>
           <button className="button" onClick={stop}>Stop</button>
           <button className="button" onClick={reset}>Reset</button>
         </> : ""}

      </>
  );
}

export default RenderButtons;
