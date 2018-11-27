import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class Hyperlink extends React.Component {
  render() {
    return (
     <div className="text-center">
    	 <Link className="get-started" to={this.props.url}>{this.props.linktext}</Link>
     </div>
     );
  }
}

export default Hyperlink;