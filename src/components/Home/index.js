import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Home = () => (
  <div>
    Get redy to play
    <br/>
    <a href={ROUTES.FARM}>Star New Farm</a>
    <br/>
    <a href={ROUTES.FARM}>Load Save</a>
  </div>
);
export default Home;
