import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Navigation';
import Popup from "reactjs-popup";
import './oof.css'

var money = 100;
var plots = Array(25).fill(0);
var growing = Array(25).fill(0);
var resources = Array(6).fill(0);
var playerHealth = 100
var numFireTractors = 100
var numWaterTractors = 100
var numGhostTractors = 100
var numEnemiesDefeated = 0
var currentEnemyHealth = 100
var enemy0 = {health: 100, damage:1, weakness:"fire", resist:"water", photo: ""};  //carrot
var enemy1 = {health: 200, damage:7, weakness:"water", resist:"ghost", photo: ""}; //cactus
var enemy2 = {health: 300, damage:5, weakness:"ghost", resist:"fire", photo: ""};  //dead crop
var enemy3 = {health: 150, damage:15, weakness:"fire", resist:"water", photo: ""}; //corn
var johnDeere = {health: 250, damage:15, weakness:"none", resist:"all", photo: ""}; //johnDeere himself
var enemyArray = [enemy0, enemy1, enemy2, enemy3, johnDeere];


function updateLabel(label, value) {
  document.getElementById(label).innerHTML = value;
}

function startBattle(){
  console.log("here");
      playerHealth = 100
      //currentEnemyHealth = enemyArray[numEnemiesDefeated].health
      //document.getElementById("enemyHealth").innerHTML = "Health: " + currentEnemyHealth
}

function updateTractor(){
  var at = document.getElementById("attackType").value
  if (at === "default"){
    document.getElementById("attackType").innerHTML = ""
  }
  else if (at === "fire") {
    document.getElementById("attackType").innerHTML = "Number of Tractors " + numFireTractors
  }
  else if (at === "water") {
    document.getElementById("attackType").innerHTML = "Number of Tractors " + numWaterTractors
  }
  else if (at === "ghost") {
    document.getElementById("attackType").innerHTML = "Number of Tractors " + numGhostTractors
  }
}

function attack(attackType) {
    if (attackType === "default") {
      currentEnemyHealth -= 5
      document.getElementById("enemyHealth").innerHTML = "Health: " + currentEnemyHealth
    }
    else if (attackType === "fire") {

    }
    else if (attackType === "water") {

    }
    else if (attackType === "ghost") {

    }


    if (currentEnemyHealth <= 0){
      document.getElementById("Fight").hidden = true
      document.getElementById("win").hidden = false
      playerHealth = 100
      numEnemiesDefeated++
      currentEnemyHealth = enemyArray[numEnemiesDefeated].health
      document.getElementById("enemyHealth").innerHTML = "Health: " + currentEnemyHealth
      return
      //you win
      //reset
    }
    else {
      playerHealth -= enemyArray[numEnemiesDefeated].damage
      document.getElementById("playerHealth").innerHTML = playerHealth
    }

    if(playerHealth <= 0){
      document.getElementById("Fight").hidden = true
      document.getElementById("lose").hidden = false
      playerHealth = 100
      currentEnemyHealth = enemyArray[numEnemiesDefeated].health
      //you lose
    }
}

function emptyCropImg(plotNumber) {
  document.getElementById('plot-' + plotNumber).src = 'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
  document.getElementById('plot-' + plotNumber).classList.remove('spin');
}

function addGrowImg(plotNumber) {
  document.getElementById('plot-' + plotNumber).src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.bcncc.ca%2Fwp-content%2Fuploads%2F2013%2F09%2Fplant.png&f=1&nofb=1';
  document.getElementById('plot-' + plotNumber).classList.remove('spin');
}

function addCropImg(plotNumber, cropType) {
  console.log('crud');
  if (cropType == 1) {
    document.getElementById('plot-' + plotNumber).src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngmart.com%2Ffiles%2F5%2FEngine-Transparent-Background.png&f=1&nofb=1';
  } else if (cropType == 2) {
    document.getElementById('plot-' + plotNumber).src = 'https://www.michelinman.com/dw/image/v2/BCVN_PRD/on/demandware.static/-/Sites-michelin-master-catalog/default/dw70aee093/images/tires/defender-t-h/tire-defender-t-h.png?sw=618&sh=618';
  } else if (cropType == 3) {
    document.getElementById('plot-' + plotNumber).src = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Fsteering_wheel%2Fsteering_wheel_PNG16691.png&f=1&nofb=1';
  } else if (cropType == 4) {
    document.getElementById('plot-' + plotNumber).src = 'https://detroit.azureedge.net/media/1273/dd5_01-1000x1000-transparent.png';
  } else if (cropType == 5) {
    document.getElementById('plot-' + plotNumber).src = 'http://orsettindia.com/wp-content/uploads/2016/03/WH21-Series.png';
  }
  document.getElementById('plot-' + plotNumber).classList.add('spin');
}

function harvestCrop(plotIndex) {
  if (plots[plotIndex] !=0 && growing[plotIndex] == 0) {
    emptyCropImg(plotIndex);
    resources[plots[plotIndex]]++;
    plots[plotIndex] = 0;
    updateResources();
  }
}

function plantCrops(cropType, num) {
  var cnt = 0;
  for (var i = 0; i < 25; i++) {
    if (cnt == num) {
      break;
    }
    if (plots[i] == 0 && money > 0) {
      addGrowImg(i);
      plots[i] = cropType;
      growing[i] = 1;
      money--;
      updateLabel('money', money);
      cnt++;
    }
  }
}

function updateResources() {
  updateLabel('engines', resources[1]);
  updateLabel('tires', resources[2]);
  updateLabel('steering', resources[3]);
  updateLabel('gears', resources[4]);
  updateLabel('systems', resources[5]);
}

function sellResource(cropType) {
  console.log(money);
  money += 2 * resources[cropType];
  updateLabel('money', money);
  resources[cropType] = 0;
  updateResources();
}

function buildTractor(tractorType) {
  if (resources[1] > 0 && resources[2] > 3 && resources[3] > 0 && resources[4] > 0 && resources[5] > 0) {
    resources[1]--;
    resources[2] -= 4;
    resources[3]--;
    resources[4]--;
    resources[5]--;
    if (tractorType == 0) {
      numFireTractors++;
    } else if (tractorType == 1) {
      numWaterTractors++;
    } else if (tractorType == 2) {
      numGhostTractors++;
    }
    updateTractors();
    updateResources();
  }
}

function updateTractors() {
  updateLabel('fireDisp', numFireTractors);
  updateLabel('waterDisp', numWaterTractors);
  updateLabel('ghostDisp', numGhostTractors);
}

// http://cssgridgarden.com/images/dirt.svg

const Farm = () => (
  <div>
    {/*background*/}
    <img src={'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi0.wp.com%2Ffreepngimages.com%2Fwp-content%2Fuploads%2F2015%2F10%2Fdavid-brown-50d-tractor.png%3Ffit%3D619%252C413&f=1&nofb=1'} style={{'position': 'absolute', 'left': '-150px', 'top': '70vh', 'z-index': '2', 'transform': 'rotate(-30deg)'}}></img>
    <div class='backpic' style={{'width': '100vw', 'height': '100vh', 'position': 'absolute'}}>
      <div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100%'}}>
        <div class='grid-container'>
          <div class='grid-item' onClick={() => harvestCrop(0)}>
            <img id='plot-0' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(1)}>
            <img id='plot-1' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(2)}>
            <img id='plot-2' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(3)}>
            <img id='plot-3' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(4)}>
            <img id='plot-4' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(5)}>
            <img id='plot-5' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(6)}>
            <img id='plot-6' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(7)}>
            <img id='plot-7' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(8)}>
            <img id='plot-8' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(9)}>
            <img id='plot-9' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(10)}>
            <img id='plot-10' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(11)}>
            <img id='plot-11' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(12)}>
            <img id='plot-12' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(13)}>
            <img id='plot-13' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(14)}>
            <img id='plot-14' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(15)}>
            <img id='plot-15' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(16)}>
            <img id='plot-16' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(17)}>
            <img id='plot-17' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(18)}>
            <img id='plot-18' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(19)}>
            <img id='plot-19' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(20)}>
            <img id='plot-20' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(21)}>
            <img id='plot-21' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(22)}>
            <img id='plot-22' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(23)}>
            <img id='plot-23' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={() => harvestCrop(24)}>
            <img id='plot-24' src={'data:image/gif;base64,R0lGODlhAQABAPAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='} style={{'height':'90px', 'width':'90px', 'position':'absolute'}}></img>
            <img src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
        </div>
      </div>
    </div>
    {/*RIGHT BAR*/}
    <div class='row'>
      <div class='col-md-3' style={{'padding': '10px'}}>
        <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'firebrick', 'width': '90%', 'left': '30px', 'border-radius': '8px', 'position': 'relative'}}>
          <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'crimson', 'width': '100%', 'border-radius': '8px', 'text-align': 'center', 'margin': 'auto'}}>
            Build Tractors
          </div>
          <br></br>
          <span style={{'font-size': '20px'}}>Requires: </span>
          <br></br>
          <span>Engine: </span><span>1</span>
          <br></br>
          <span>Tires: </span><span>4</span>
          <br></br>
          <span>Steering Mechanism: </span><span>1</span>
          <br></br>
          <span>Transmission: </span><span>1</span>
          <br></br>
          <span>Hydraulic System: </span><span>1</span>
          <br></br>
          <span style={{'font-size': '20px'}}>Current stock: </span>
          <br></br>
          <span>Flaming Tractor: </span><span id='fireDisp'>0</span>
          <br></br>
          <span>Wet Tractor: </span><span id='waterDisp'>0</span>
          <br></br>
          <span>Deadly Tractor: </span><span id='ghostDisp'>0</span>
          <br></br>
          <span style={{'font-size': '20px'}}>Choose your type: </span>
          <br></br>
          <div style={{'width': '100%', 'text-align': 'center', 'margin': 'auto'}}>
            <div class='btn btn-primary' onClick={() => buildTractor(0)}>
              Flaming
            </div>
            &nbsp;
            <div class='btn btn-primary' onClick={() => buildTractor(1)}>
              Wet
            </div>
            &nbsp;
            <div class='btn btn-primary' onClick={() => buildTractor(2)}>
              Deadly
            </div>
          </div>
        </div>
      </div>
      <div class='col-md-6'></div>
      <div class='col-md-3' style={{'padding': '10px'}}>
        <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'green', 'width': '90%', 'border-radius': '8px'}}>
          <span>Money: </span><span id='money'>100</span>
        </div>
        <br></br>
        <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'grey', 'width': '90%', 'border-radius': '8px'}}>
          <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'darkgrey', 'width': '100%', 'border-radius': '8px', 'text-align': 'center', 'margin': 'auto'}}>
            Parts
          </div>
          <br></br>
          <div style={{'padding-bottom': '5px'}}>
            <span>Engines: </span><span id='engines'>0</span><span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => sellResource(1)}>Sell</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Tires: </span><span id='tires'>0</span><span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => sellResource(2)}>Sell</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Steering Mechanisms: </span><span id='steering'>0</span><span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => sellResource(3)}>Sell</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Transmissions: </span><span id='gears'>0</span><span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => sellResource(4)}>Sell</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Hydraulic Systems: </span><span id='systems'>0</span><span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => sellResource(5)}>Sell</span>
          </div>
        </div>
        <br></br>
        <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'saddlebrown', 'width': '90%', 'border-radius': '8px'}}>
          <div style={{'padding': '10px', 'box-shadow': '0 0 5px black', 'background-color': 'sienna', 'width': '100%', 'border-radius': '8px', 'text-align': 'center', 'margin': 'auto'}}>
            Seeds
          </div>
          <br></br>
          <div style={{'padding-bottom': '5px'}}>
            <span>Engine</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(1, 10)}>x10</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(1, 5)}>x5</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(1, 1)}>Buy x1</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Tire</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(2, 10)}>x10</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(2, 5)}>x5</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(2, 1)}>Buy x1</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Steering Mechanism</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(3, 10)}>x10</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(3, 5)}>x5</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(3, 1)}>Buy x1</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Transmission</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(4, 10)}>x10</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(4, 5)}>x5</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(4, 1)}>Buy x1</span>
          </div>
          <div style={{'padding-bottom': '5px'}}>
            <span>Hydraulic System</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(5, 10)}>x10</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(5, 5)}>x5</span>
            <span class='btn btn-primary btn-sm' style={{'float':'right'}} onClick={() => plantCrops(5, 1)}>Buy x1</span>
          </div>
        </div>
          <Popup
            trigger={<button id="battleSim" class="btn btn-primary">Battle!</button>}
            modal
          >
          <div>
            <div id="Fight">
              <div class="row">
                <div class="col-md-6">
                    <p id="playerHealth">Health: 100</p>
                    <img src="https://www.ake.com/pub/media/mageplaza/blog/post/t/r/tractor_fire.jpg"></img>
                    <br/>
                    <br/>
                    <div class="row">
                      <div class="col-md-4">
                        <select id="attackType" onChange="updateTractor">
                          <option value="default">Stick Attack</option>
                          <option value="fire">Fire Tractor</option>
                          <option value="water">Water Tractor</option>
                          <option value="ghost">Ghost Tractor</option>
                        </select>
                      </div>
                      <div class="col-md-4">
                        <p id="numTractors"></p>
                      </div>
                      <div class="col-md-4" onClick={() => attack(document.getElementById("attackType").value)}>
                        <button class="btn btn-danger">Attack!</button>
                      </div>
                    </div>
                </div>
                <div class="col-md-6">
                  <p id="enemyHealth">Health: {(() => {

                    return(
                    enemyArray[numEnemiesDefeated].health
                  )})()}</p>
                  <img id = "enemyPicture" src="https://vignette.wikia.nocookie.net/cuphead/images/c/c3/Carrot.png/revision/latest?cb=20171028193841"></img>
                </div>
              </div>
            </div>
            <div id="win" hidden="true" align="center">
              <h1 >You Win :)</h1>
            </div>
            <div hidden="true" id="lose" align="center">
              <h1>You Lose :(</h1>
            </div>
            {(() => {
              return("")})()}
          </div>
          </Popup>
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

//.classList.add('spin');

window.setInterval(function() {
  var i = Math.floor((Math.random() * 25));
  addCropImg(i, plots[i]);
  growing[i] = 0;
}, 1000);

export default Farm;
