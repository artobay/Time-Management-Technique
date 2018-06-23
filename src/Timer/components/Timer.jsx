import React, {Component} from 'react';
import moment from 'moment';
import TimerDisplay from './TimerDisplay.jsx';
import TimerButton from './TimerButton.jsx';
import TimerConfig from './TimerConfig.jsx';

// we need to the timing so we are going to refactor it to class component
class Timer extends Component  {
constructor() {
super();



  this.state = {
    currentTime: moment().hours(0).minutes(25).seconds(0),
    baseTime: moment().hours(0).minutes(0).seconds(0),
  };

  this.setBaseTime = this.setBaseTime.bind(this);
}

setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });

}


 render()
   {
   return  (
   <div className="card app-content d-block mx-auto" >
     <div className="card-body">
       <div className="container-fluid">
      <div className="row">
       <h3 className="d-block mx-auto"> Pomodoro Technique !!! </h3>
         </div>
       <TimerDisplay currentTime={this.state.currentTime}/>
       <TimerButton/>
       <TimerConfig
       baseTime={this.state.baseTime}
       setBaseTime={this.setBaseTime}
       />

      </div>
  </div>
</div>

          );
    }
 }
export default Timer;
