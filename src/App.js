import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (

        <div className="card app-content d-block mx-auto" >
        <div className="card-body">
          <div className="container-fluid">
              <div className="row">
               <h3 className="d-block mx-auto"> Pomodoro Technique !!! </h3>
              </div>
              <div className="row">
               <h3 className="d-block mx-auto"> 00:00:00 </h3>
              </div>
              <div className="button">
<button className= "btn btn-danger d-block mx-auto">Start</button>
              </div>
            </div>

               <div className="row control-row">


                  <div className="form-group">
                      <div className="col-md-9">
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
          </div>
       </div>


    );
  }
}

export default App;
