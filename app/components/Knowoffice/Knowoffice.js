import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

let url = "/Questionslider";
let kotitle = "2 Know your office";
let knowofficecontent = "List down five of your co-workers in your immediate surrounding and write one feature of theirs that you identify them with (Don’t worry, we won’t tell anyone).";
let linktext = "I'M READY";


class Knowoffice extends React.Component {
	render() {
		return (
			<section className="task-two">


            <div className="wrapper">
                <div className="inner">
                    <div className="heading">
                        {kotitle}
                    </div>
                    <div className="content">
                        {knowofficecontent}
                    </div>
                    <Link className="common-button" to={url}>{linktext}</Link>
                </div>
            </div>
        </section>
			);
	}
}

export default Knowoffice;