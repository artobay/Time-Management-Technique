import React from 'react';

const TimerConfig = () => (

  <div className="row control-row">


     <div className="form-group">
         <div className="col-md-9" >
         <label htmlFor="hours"> Hours  </label>
         </div>
         <div className="col-md-9">
         <input id="hours" className="form-control" type="number"/>
         </div>
     </div>
     <div className="form-group">
         <div className="col-md-9">
         <label htmlFor="hours"> Minutes  </label>
         </div>
         <div className="col-md-9">
         <input id="hours" className="form-control" type="number"/>
         </div>
     </div>


    </div>

);

export default TimerConfig;
