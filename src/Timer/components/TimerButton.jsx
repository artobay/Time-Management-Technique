import React, { Component } from 'react';
import moment from 'moment';

class TimerButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: moment().hours(0).minutes(25).seconds(0),
    };
  }

  handleStart = () => {
    this.interval = setInterval(() => {
      this.setState({ currentTime: this.props.currentTime.subtract(1, "minutes") });
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
