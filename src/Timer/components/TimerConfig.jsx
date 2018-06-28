import React, {Component} from 'react';



class TimerConfig extends Component {

constructor(props) {
super(props);

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
             <input id="minutes" className="form-control" type="number"
               defaultValue={this.props.baseTime.get('minutes')}
               onChange={this.handleChange} />
             </div>
         </div>


        </div>

    );

  }

}

export default TimerConfig;
