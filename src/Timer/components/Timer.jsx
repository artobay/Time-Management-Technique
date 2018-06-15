import React from 'react';
import TimerDisplay from './TimerDisplay.jsx';
import TimerButton from './TimerButton.jsx';
import TimerConfig from './TimerConfig.jsx';


const Timer = () => (
<div className="card app-content d-block mx-auto" >
<div className="card-body">
  <div className="container-fluid">
      <div className="row">
       <h3 className="d-block mx-auto"> Pomodoro Technique !!! </h3>
      </div>
       <TimerDisplay/>
       <TimerButton/>
       <TimerConfig/>
      </div>
  </div>
</div>
);

export default Timer;
