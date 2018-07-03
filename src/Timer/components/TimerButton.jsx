import React, { Component } from 'react';
import moment from 'moment';

class TimerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
// Aliyar: why do we need this.state = { currentTime }
      currentTime: moment().hours(0).minutes(25).seconds(0),
    };
  }

  handleStart = () => {
    console.clear();
    this.state.number = 4;
 // Aliyar : ask and think about these following lines
    this.interval = setInterval(() => {
      this.setState({ currentTime: this.props.currentTime.subtract(1, "seconds") });
      if (this.state.currentTime.isBefore(moment({ hour: 0, minute: 0 }))) {
             this.state.number--;
             this.setState({ currentTime: this.props.currentTime.add(5, "minutes") });
             switch (this.state.number) {
               case 1:
                 this.setState({ currentTime: this.props.currentTime.add(3, "seconds") });
                 break;
              case 0:
                clearInterval(this.interval);
                 break;
            }
          }


    }, 1000);
  }

  handleStop = () => {
    clearInterval(this.interval)

  }
  render() {
    return (
      <div>
        <div>{this.state.number}</div>
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
