import React, { Component } from 'react';
import moment from 'moment';
import TimerDisplay from './TimerDisplay.jsx';
import TimerButton from './TimerButton.jsx';
import TimerConfig from './TimerConfig.jsx';

// we need to the timing so we are going to refactor it to class component
class Timer extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: moment().hours(0).minutes(25).seconds(0),
      baseTime: moment().hours(0).minutes(0).seconds(0),
    };
    // this.setBaseTime = this.setBaseTime.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    switch (event.target.getAttribute("id")) {
      case "hour": {
        this.setState({ currentTime: this.state.currentTime.hour(parseInt(event.target.value)) });
        break;
      }
      case "minute": {
        this.setState({ currentTime: this.state.currentTime.minute(parseInt(event.target.value)) });
        break;
      }
    }
  }
  // handleChange(ev) {
  //   const newBaseTime = this.props.baseTime;
  //   console.log(newBaseTime);

  //   if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(ev.target.value, 'hours');
  //   if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value), 'minutes');
  //   if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(ev.target.value, 'seconds');

  // }



  setBaseTime(newBaseTime) {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime,
    });

    // this.handleChange = this.handleChange.bind(this);
  }


  render() {
    const { currentTime, baseTime } = this.state;
    console.log(currentTime);
    return (
      <div className="card app-content d-block mx-auto" >
        <div className="card-body">
          <div className="container-fluid">
            <div className="row">
              <h3 className="d-block mx-auto"> Pomodoro Technique !!! </h3>
            </div>
            <TimerDisplay currentTime={this.state.currentTime} />
            <TimerButton />
            {/* <TimerConfig
                baseTime={this.state.baseTime}
                setBaseTime={this.setBaseTime}
              /> */}
            <div className="row control-row">
              <div className="form-group">
                <div className="col-md-9" >
                  <label htmlFor="hours"> Hours  </label>
                </div>
                <div className="col-md-9">
                  <input id="hour" className="form-control" type="number" defaultValue={parseInt(currentTime.format('HH'))} onChange={this.handleChange} />
                </div>
              </div>
              <div className="form-group">
                <div className="col-md-9">
                  <label htmlFor="hours"> Minutes  </label>
                </div>
                <div className="col-md-9">
                  <input id="minute" className="form-control" type="number" defaultValue={parseInt(currentTime.format('mm'))} onChange={this.handleChange} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default Timer;
