
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import profilepic from './images/profilepic.png';
import dotsimg from './images/dotsimg.png';

let namelabel = "Full Name";
let messagelabel = "Describe them (eg. Laughs like hyena)";
let buttonlabel = "Add buddy";

class Buddyslider extends React.Component {
  render() {
    return (

    	<div className="pslider-item">

	        <div className="text-center profile-pic">
	            <img src={profilepic} className="img-responsive" alt="" />
	            <img src={dotsimg} className="dotted-img" alt="" />
	        </div>

	        <form action="" className="pr-form">
	            <div className="form-field">
	                <input type="text" placeholder={namelabel} />
	            </div>
	            <div className="form-field">
	                <textarea name="" id="" placeholder={messagelabel}></textarea>
	            </div>
	        </form>
	        
	    </div>

    );
  }
}


export default Buddyslider;
