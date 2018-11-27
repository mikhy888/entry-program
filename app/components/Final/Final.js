
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

let finaltext = "You’ve made it! As a reward, claim your BookMyShow tickets from HR and enjoy the rest of the day off.";

class Daylog extends React.Component {
  render() {
    return (
         <section className="done">
            <div className="wrapper">
                <div className="title">
                    <span>5</span> Yer done!
                </div>
                <div className="content">
                    {finaltext}
                </div>
            </div>
        </section>
     );
  }
}

export default Daylog;