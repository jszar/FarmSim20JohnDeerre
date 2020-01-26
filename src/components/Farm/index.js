import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Navigation';

var money
var plots = Array(25).fill(0);
var resources = Array(6).fill(0);

function updateLabel(label, value) {
  document.getElementById(label).innerHTML = value;
}

function makeMoney() {
  money++;
  updateLabel('money', money);
}

function displayCrop(plotIndex) {

}

function updateResources() {
  for (const plot in plots) {
    resources[plot]++;
  }
}

// http://cssgridgarden.com/images/dirt.svg

const Farm = () => (
  <div>
    {/*LEFT BAR*/}
    <div class='row'>
      <div class='col-md-9' style={{'height': '100vh', 'background-color': 'red'}}>
        <div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100%'}}>
          <div class='grid-container'>
            <div class='grid-item' id='plot-0' onClick={displayCrop(0)}>
              <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
            </div>
          </div>
        </div>
      </div>
      {/*RIGHT BAR*/}
      <div class='col-md-3' style={{'height': '100vh', 'background-color': 'green'}}>
        <div class='row' class='round2'>
            <p>Money: <span id='money'>0</span></p>
            <p>Engines: <span id='engines'>0</span></p>
            <p>Tires: <span id='tires'>0</span></p>
            <p>Steering Mechanisms: <span id='steering'>0</span></p>
            <p>Transmission Gears: <span id='gears'>0</span></p>
            <p>Hydraulic Systems: <span id='systems'>0</span></p>
        </div>
        <div class='row'>
          <div class='col-md-5'>
            <div class='btn btn-primary'>Shop</div>
          </div>
          <div class='col-md-5'>
            <div class='btn btn-primary'>Battle</div>
          </div>
        </div>
        <div class='row'>
          <div class='col-md-5'>
            <div class='btn btn-primary'>Shop</div>
          </div>
          <div class='col-md-5'>
            <div class='btn btn-primary'>Battle</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/*
<div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100vh'}}>
</div>
<div>
  Money: <span id='money'></span>
  <a class='btn btn-primary' onClick={makeMoney}>Make Money</a>
</div>
*/

window.setInterval(function() {
  try {
    updateResources();
  } catch(err) {
    //console.log('Uh oh!')
  }
}, 1000);

export default Farm;
