
import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';
import Modal from '../Modal/Modal.js';
import Spotpoint from '../Spotpoint/Spotpoint.js';
import Toast from '../Toast/Toast.js';
import cafImage from './images/instructions.jpg';

let sectioncontent = "Spot the cafeteria!";

let i = "";

const first = { left: '21%', top: '9%' };
const second = { left: '87%', top: '19%' };
const third = { left: '22%', top: '42%' };
const fourth = { left: '70%', top: '81%' };

let toastContent = "Oopzzz :( ";


class Cafeteria extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        isHidden: false
      };
      this.closeModal = this.closeModal.bind(this);
      this.spotpoint = this.spotpoint.bind(this);
  }

  getInitialState () {
      return { showResults: false };
  }
  
  closeModal () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }


  spotpoint (i) {
    if ( i == "true" ) {
      console.log('1');
      //this.props.history.push('./Congratulations')
      this.props.history.push({
        pathname: './Congratulations',
        state: { detail: "./Coffeeroom" }
      });
    } else {
      this.setState({ showResults: true });
      setTimeout(function() {
            this.setState({ showResults: false });
      }.bind(this),5000);
    }
  }

  
  render() {


    return (

      <section className="instructions">   

          <Spotpoint css={first}  activePoint={'true'} spot={this.spotpoint} />

          <Spotpoint css={second} activePoint={'false'} spot={this.spotpoint} />

          <Spotpoint css={third} activePoint={'false'} spot={this.spotpoint} />

          <Spotpoint css={fourth} activePoint={'false'} spot={this.spotpoint} />

          <img src={cafImage} className="mapImage" />

          {!this.state.isHidden && <Modal close={this.closeModal} />}

          { this.state.showResults ? <Toast toastContent={toastContent} /> : null }

          <div className="wrapper">

              <div className="bottom-text">{sectioncontent}</div>

          </div>

      </section>

    );

  }


}


export default Cafeteria;