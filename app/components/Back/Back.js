import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import backbutton from './images/back-button.png';


class Back extends React.Component{
  render(){
    return (

      <div className="back" onClick={() => history.goBack()}>
          <span><img src={backbutton} alt="" /></span>
          Back
      </div>

    );
  }
}


export default Back;