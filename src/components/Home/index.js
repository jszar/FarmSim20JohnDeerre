import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Home = () => (
  <div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
    <div class="row">
      <div class="col-md-12" align="center">
        <h1>Oh! That's a Farm Simulator!!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12" align="center">
        <a class="btn btn-primary" href={ROUTES.FARM}>Star New Farm</a>
      </div>
    <br/>
    <br/>
    </div>
    <div class="row">
      <div class="col-md-12" align="center">
        <a  class="btn btn-primary" href={ROUTES.FARM}>Load Save</a>
      </div>
    </div>


  </div>
);
export default Home;
