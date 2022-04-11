import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import PropTypes from 'prop-types';
import Routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard/Dashboard';

import './App.css';

function App({ history }) {
  return (
    // <div className="App">
    //   <ConnectedRouter history={history}>
    //       <Routes />
    //   </ConnectedRouter> 
    // </div>
    <Dashboard />
  );
}

App.propTypes = { history: PropTypes.object };

export default App;