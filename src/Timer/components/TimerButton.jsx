import React, { Component } from 'react';
import moment from 'moment';

class TimerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {

      currentTime: moment().hours(0).minutes(25).seconds(0),
      countdown: 4,
    };
  }

  wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
     end = new Date().getTime();
   }
 }

 start() {
 this.interval = setInterval(() => {
   if (!(this.state.currentTime.isBefore(moment({ hour: 0, minute: 1 })))) {
     this.setState({ currentTime: this.props.currentTime.subtract(1, "seconds") });
   } else {
     this.state.countdown--;
     this.wait(5000);
     if (this.state.countdown > 1) {
       this.setState({ currentTime: this.props.currentTime.add(26, "minutes") });
     } else if (this.state.countdown == 1) {
       this.setState({ currentTime: this.props.currentTime.add(31, "minutes") });
     } else if (this.state.countdown <= 0) {
       clearInterval(this.interval);
       console.log("Finish");
     }
   }
 }, 1000);
}

  handleStart = () => {
    console.clear();
    this.start();
  }

  handleStop = () => {
    clearInterval(this.interval)

  }  

  render() {
    return (
      <div>
        <div>{this.state.countdown}</div>
        <div className="row">
          <h1 className="d-block mx-auto">
            {this.state.currentTime.format("HH:mm:ss")}  </h1>
        </div>
        <div className="button">
          <button className="btn btn-danger d-block mx-auto" onClick={this.handleStart}>Start</button>
          <br/>
          <button className="btn btn-danger d-block mx-auto" onClick={this.handleStop}>Stop</button>
        </div>
      </div>
    );
  }
}
export default TimerButton;
