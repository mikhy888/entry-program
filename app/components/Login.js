import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from "../components/Login/Login";

class Home extends React.Component {
	render() {
		return (
			<section className="login-landing">	

			<Login />

			</section >
			);
		}

	}


	export default Home;

