import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import content from '../../data/data.json';


let url = "/Login";
let linktext = "LET’S GET STARTED";
let heading = "you're here!";
let indextext = "Now that the obvious is out of the way, let’s help you get to know your new  home here at 22feet We’ve designed a few tasks for you that’ll get you clued in.";


const jasonContent = content.posts.map((post) =>
    <div key={post.id}>
        <h3>{post.linktext}</h3>
        <p>{post.indextext}</p>
    </div>
);


class Index extends React.Component {
    render() {
        return (
            <section className="intro">
                <div className="wrapper">
                    <div className="heading">{heading}</div>
                    <div className="text">{indextext}</div>
                    <Link className="get-started" to={url}>{linktext}</Link>
                </div>
            </section>
        );
    }
}

export default Index;