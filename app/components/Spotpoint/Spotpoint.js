
import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';


class Spotpoint extends React.Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }


  onClick(){
      this.props.spot(this.props.activePoint);
  }


  render() {
    return ( 
        <div style={this.props.css} className="pinpoint" onClick={this.onClick}>
            
        </div>
    );
  }

}



export default Spotpoint;