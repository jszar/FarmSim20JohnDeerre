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

const Farm = () => (
  <div>
    Money: <span id='money'></span>
    <a class='btn btn-primary' onClick={makeMoney}>Make Money</a>
  </div>
);

window.setInterval(function() {
  try {
    makeMoney();
  } catch(err) {
    //console.log('Uh oh!')
  }
}, 1000);

export default Farm;
