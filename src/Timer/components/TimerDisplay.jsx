import React from 'react';

const TimerDisplay = (props) => (
   <div className="row">
   <h1 className="d-block mx-auto"> { `${props.currentTime.get('hours')}:${props.currentTime.get('minutes')}:${props.currentTime.get('seconds')}` } </h1>
   </div>
);

export default TimerDisplay;
