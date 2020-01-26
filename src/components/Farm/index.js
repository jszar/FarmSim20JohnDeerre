import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Navigation';
import './border.css'

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
  updateLabel('engines', resources[1])
  updateLabel('tires', resources[2])
  updateLabel('steering', resources[3])
  updateLabel('gears', resources[4])
  updateLabel('systems', resources[5])
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
        <div class='row' class="round2">
            <p id="gold">Gold:</p>
            <p id="engine">Engines:</p>
            <p id="tire">Tires:</p>
            <p id="steearing">Steering mechanism:</p>
            <p id="gears">Transmission gears:</p>
            <p id="hchs">Hyrdraulic control and hitch system:</p>
            <p id="fire">Fire:</p>
            <p id="water">Water:</p>
            <p id="grass">Grass:</p>
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
