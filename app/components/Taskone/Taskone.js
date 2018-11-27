
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import arrowImage from './images/down-arrow.png';


let url = "/Knowoffice";
let title = "The Usual suspects";
let content  = "The building is a wonderful space that surprises you at every turn (think Hogwarts). Get to know your essentials and discover bonus areas.";


class Taskone extends React.Component {
    render() {
        return (
            <section className="task-one">
                <div className="wrapper">
                    <div className="inner">
                        <div className="heading">
                            {title}
                        </div>
                        <div className="content">
                            {content}
                        </div>
                    </div>
                    <div className="go-to">
                        <Link to={url}>
                            <img src={arrowImage} className="bounce" />
                        </Link>
                    </div>
                </div>
            </section>
           );
    }
}


export default Taskone;

