

import React from 'react';
import { Router, Route, withRouter, Switch, } from 'react-router-dom';
import content from '../data/data.json';
import values from '../data/services.json';
import Home from '../components/Home.js';
import Login from '../components/Login/Login.js';
import Taskone from '../components/Taskone/Taskone.js';
import Knowoffice from '../components/Knowoffice/Knowoffice.js';
import Questionslider from '../components/Questionslider/Questionslider.js';
import Cafeteria from '../components/Cafeteria/Cafeteria.js';
import Congratulations from '../components/Congratulations/Congratulations.js';
import Coffeeroom from '../components/Coffeeroom/Coffeeroom.js';
import Photograph from '../components/Photograph/Photograph.js';
import Daylog from '../components/Daylog/Daylog.js';
import Final from '../components/Final/Final.js';


import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();


window.React = React;

/* loading api */
/* 
fetch('https://reqres.in/api/unknown/2')
	.then(response => response.json())
	.then(json => console.log(json));
 */
//console.log(json);


const Root = (props) => {

	let maincontent, home, login = "";

	let levels = content.posts.map((i) => {

		let currentId = i.content;

		switch (currentId.id) {
			case 1:
				maincontent = currentId;
				home = maincontent;
				break;
			case 2:
				maincontent = currentId;
				home = maincontent;
				break;
			case 3:
				maincontent = currentId;
				login = maincontent;
				break;
		}

		return maincontent;
	});



	return (
		<Router history={history}>
			<div>
				<Route path="/" component={() => <Home contents={home} />} exact />
				<Route path="/Login" component={() => <Login contents={login} />} />
				<Route path="/Taskone" component={Taskone} />
				<Route path="/Knowoffice" component={Knowoffice} />
				<Route path="/Questionslider" component={Questionslider} />
				<Route path="/Cafeteria" component={Cafeteria} />
				<Route path="/Congratulations" component={Congratulations} />
				<Route path="/Coffeeroom" component={Coffeeroom} />
				<Route path="/Photograph" component={Photograph} />
				<Route path="/Daylog" component={Daylog} />
				<Route path="/Final" component={Final} />
			</div>
		</Router>
	);
};


export default Root;

