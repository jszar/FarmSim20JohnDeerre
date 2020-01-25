import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Navigation';

var money = 0;

function updateLabel(label, value) {
  document.getElementById(label).innerHTML = value;
}

function makeMoney() {
  money++;
  updateLabel('money', money);
}

function updateCrop() {

}

// http://cssgridgarden.com/images/dirt.svg

const Farm = () => (
  <div>
    {/*LEFT BAR*/}
    <div class='row'>
      <div class='col-md-9' style={{'height': '100vh', 'background-color': 'red'}}>
        <div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100%'}}>
          <div class='grid-container'>
            <div class='grid-item' id='plot-0' onClick={updateCrop}>
              <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
            </div>
          </div>
        </div>
      </div>
      {/*RIGHT BAR*/}
      <div class='col-md-3' style={{'height': '100vh', 'background-color': 'green'}}>
        <div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100%'}}>
          <div class='row'>
            <div class='btn btn-primary'>asdf</div>
            <div class='btn btn-primary'>asdf</div>
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
    makeMoney();
  } catch(err) {
    //console.log('Uh oh!')
  }
}, 1000);

export default Farm;
