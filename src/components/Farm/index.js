import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from '../Navigation';
import Popup from "reactjs-popup";

var growth_stage = 0;
var money = 0;
var plots = Array(25).fill(0);
var resources = Array(6).fill(0);

function updateLabel(label, value) {
  document.getElementById(label).innerHTML = value;
}

function makeMoney() {
  money++;
  updateLabel('money', money);
}

function harvestCrop(plotIndex) {
  if (plots[plotIndex] !=0) {
    plots[plotIndex] = 0;
    resources[plots[plotIndex]]++;
  }
}

function plantCrops(cropType, num) {
  var cnt = 0;
  for (const plot in plots) {
    if (cnt == num) {
      break;
    }
    if (plots[plot] != 0) {
      plots[plot] = cropType;
      cnt++;
    }
  }
}

function updateResources() {
  for (const plot in plots) {
    resources[plots[plot]]++;
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
    {/*background*/}
    <div class='backpic' style={{'width': '100vw', 'height': '100vh', 'position': 'absolute'}}>
      <div style={{'display':'flex','justify-content':'center','align-items':'center','height':'100%'}}>
        <div class='grid-container'>
          <div class='grid-item' onClick={harvestCrop(0)}>
            <img id='plot-0' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(1)}>
            <img id='plot-1' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(2)}>
            <img id='plot-2' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(3)}>
            <img id='plot-3' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(4)}>
            <img id='plot-4' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(5)}>
            <img id='plot-5' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(6)}>
            <img id='plot-6' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(7)}>
            <img id='plot-7' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(8)}>
            <img id='plot-8' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(9)}>
            <img id='plot-9' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(10)}>
            <img id='plot-10' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(11)}>
            <img id='plot-11' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(12)}>
            <img id='plot-12' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(13)}>
            <img id='plot-13' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(14)}>
            <img id='plot-14' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(15)}>
            <img id='plot-15' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(16)}>
            <img id='plot-16' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(17)}>
            <img id='plot-17' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(18)}>
            <img id='plot-18' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(19)}>
            <img id='plot-19' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(20)}>
            <img id='plot-20' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(21)}>
            <img id='plot-21' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(22)}>
            <img id='plot-22' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(23)}>
            <img id='plot-23' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
          <div class='grid-item' onClick={harvestCrop(24)}>
            <img id='plot-24' src={'http://cssgridgarden.com/images/dirt.svg'} style={{'height': '100%', 'width': '100%'}}></img>
          </div>
        </div>
      </div>
    </div>
    {/*RIGHT BAR*/}
    <div class='row'>
      <div class='col-md-9'></div>
      <div class='col-md-3' style={{'background-color': 'green'}}>
        <div class='row'>
          <div class='badge'>Money: <span id='money'>0</span></div>
          <br></br>
          <div class='badge'>Engines: <span id='engines'>0</span></div>
          <br></br>
          <div class='badge'>Tires: <span id='tires'>0</span></div>
          <br></br>
          <div class='badge'>Steering Mechanisms: <span id='steering'>0</span></div>
          <br></br>
          <div class='badge'>Transmission Gears: <span id='gears'>0</span></div>
          <br></br>
          <div class='badge'>Hydraulic Systems: <span id='systems'>0</span></div>
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
          <Popup
            trigger={<button className="button"> Open Modal </button>}
            modal
            closeOnDocumentClick
          >
          <div>
            <div class="row">
              <div class="col-md-6">
                  <p>Health: 100</p>
                  <img src="https://www.ake.com/pub/media/mageplaza/blog/post/t/r/tractor_fire.jpg"></img>
                  <br/>
                  <br/>
                  <div class="row">
                    <div class="col-md-4">
                      <select>
                        <option value="default">Stick Attack</option>
                        <option value="fire">Fire Tractor</option>
                        <option value="water">Water Tractor</option>
                        <option value="ghost">Ghost Tractor</option>
                      </select>
                    </div>
                    <div class="col-md-4">
                      <p>Number of blank tractors: 40</p>
                    </div>
                    <div class="col-md-4">
                      <button class="btn btn-danger">Attack!</button>
                    </div>
                  </div>
                  <br/>
                  <button class="btn btn-warning">Run!</button>
              </div>
              <div class="col-md-6">
                <p>Health: 100</p>
                <img src="https://vignette.wikia.nocookie.net/cuphead/images/c/c3/Carrot.png/revision/latest?cb=20171028193841"></img>
              </div>
            </div>
          </div>
          </Popup>
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
  growth_stage++;
  if (growth_stage == 5) {
    growth_stage = 0;
    try {
      updateResources();
    } catch(err) {
      //console.log('Uh oh!')
    }
    //show plus 1
  } else {
    //remove plus 1
  }
}, 1000);

export default Farm;
