import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Navigation';

var money = 0;

function updateLabels() {
  document.getElementById('money').innerHTML = money;
}

function makeMoney() {
  money++;
  updateLabels();
}

// http://cssgridgarden.com/images/dirt.svg

const Farm = () => (

  <div>
    <div class="row">
      <div class="col-md-3" >
        <h1>Morio Cho Acres</h1>
      </div>
      <div class="col-md-1">
        <button class="btn btn-default">Shop</button>
      </div>
      <div class="col-md-1">
        <button class="btn btn-default">Battle</button>
      </div>
      <div class="col-md-7" align="right">
        <h1>this is a test</h1>
      </div>
  </div>

    <div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100vh'}}>
      <div>
        Money: <span id='money'></span>
        <a class='btn btn-primary' onClick={makeMoney}>Make Money</a>
      </div>
      <div class='grid-container'>
        <div class='grid-item' id='plot-0' onClick={makeMoney}>
          <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
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
