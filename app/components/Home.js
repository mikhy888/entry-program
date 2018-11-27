import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Index from "../components/Index/Index";


let url = "/Login";
let linktext = "LET’S GET STARTED";
let heading = "you're here!";
let indextext = "Now that the obvious is out of the way, let’s help you get to know your new  home here at 22feet We’ve designed a few tasks for you that’ll get you clued in.";


class Home extends React.Component {
	render(props) {

		//let allValues = { this.props.contents };
		return (
			<section className="home_main">
				<section className="intro">
					<div className="wrapper">
						<h2> {this.props.contents.title}</h2>
						<h2> {this.props.contents.description}</h2>
						<div className="heading">{heading}</div>
						<div className="text">{indextext}</div>
						<Link className="get-started" to={url}>{linktext}</Link>
					</div>
				</section>
			</section>
		);
	}
}


export default Home;


