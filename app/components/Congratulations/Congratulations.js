
import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';
import medal from './images/medal.png';


let cong = "Congratulations!";
let mainText = "You found the cafeteria!";

class Congratulations extends React.Component {
  
  render() {

    return (

      <section className="medal-main">

            <div className="wrapper">

                <div className="medal-wrapper">

                    <img src={medal} className="img-responsive" alt="" />

                    <div className="cong-text">{cong}</div>

                    <div className="found-text">{mainText}</div>

                    <Link to={this.props.location.state.detail} className="continue">Continue</Link>

                </div>

            </div>

        </section>

    );

  }

}


export default Congratulations;