import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';

var money = 0;

function updateLabels() {
  document.getElementById("money").innerHTML = money;
}

function makeMoney() {
  money++;
  updateLabels();
}

const Farm = () => (
  <div>
    Money: <span id="money"></span>
    <button onclick="makeMoney()">Make Money</button>
  </div>
);
export default Farm;
