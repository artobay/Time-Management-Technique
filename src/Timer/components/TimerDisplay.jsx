import React from 'react';

const TimerDisplay = (props) => (
   <div className="row">
   <h1 className="d-block mx-auto">
   { props.currentTime.format("HH:mm:ss") }  </h1>
   </div>
);

export default TimerDisplay;
