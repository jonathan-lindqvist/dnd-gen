import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import NotFound from './NotFound'
import { Pdf } from './Pdf';



const routing = (
  <Router>
    <div className="width100">
      <Switch>
        <Route exact path="/dnd-gen" component={App} />
        <Route exact path="/pdf" component={Pdf} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));
