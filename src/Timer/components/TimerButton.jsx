import React, { Component } from 'react';
import moment from 'moment';

class TimerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().hours(0).minutes(5).seconds(0),
      number: 2
    };
  }

  handleStart = () => {
    console.clear();
    this.state.number = 2;
    this.interval = setInterval(() => {
      this.setState({ currentTime: this.props.currentTime.subtract(1, "minutes") });
      if (this.state.currentTime.isBefore(moment({ hour: 0, minute: 0 }))) {
        this.state.number--;
        this.setState({ currentTime: this.props.currentTime.add(6, "minutes") });
        switch (this.state.number) {
          case 1:
            this.setState({ currentTime: this.props.currentTime.add(3, "minutes") });
            break;
          case 0:
            clearInterval(this.interval);
            break;
        }
      }
    }, 1000);
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
        </div>
      </div>
    );
  }
}
export default TimerButton;

