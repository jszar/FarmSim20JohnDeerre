import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from '../Navigation';
import HomePage from '../Home';
import FarmPage from '../Farm';
import * as ROUTES from '../../constants/routes';
const App = () => (
  <Router>
    <div>
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route  exact path={ROUTES.FARM} component={FarmPage} />
    </div>
  </Router>
);
export default App;
