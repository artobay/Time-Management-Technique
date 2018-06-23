import React, {Component} from 'react';
import moment from 'moment';
class TimerConfig extends Component {

constructor() {
super();

this.handleChange = this.handleChange.bind(this);

}

handleChange(ev){
  const newBaseTime = this.props.baseTime;

  if (ev.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(ev.target.value, 'hours');
  if (ev.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(ev.target.value), 'minutes');
  if (ev.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(ev.target.value, 'seconds');


}

  render() {
    return (

      <div className="row control-row">


         <div className="form-group">
             <div className="col-md-9" >
             <label htmlFor="hours"> Hours  </label>
             </div>
             <div className="col-md-9">
             <input id="hours" className="form-control" type="number" defaultValue={this.props.baseTime.get('minutes')} onChange={this.handleChange}/>
             </div>
         </div>
         <div className="form-group">
             <div className="col-md-9">
             <label htmlFor="hours"> Minutes  </label>
             </div>
             <div className="col-md-9">
             <input id="minutes" className="form-control" type="number" defaultValue={this.props.baseTime.get('minutes')} onChange={this.handleChange}/>
             </div>
         </div>


        </div>

    );

  }

}

export default TimerConfig;
