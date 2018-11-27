
import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';

class Toast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: false
    };
  }

  render(props) {

    return (
      <section className="toast">   
          {this.props.toastContent}
      </section>

    );

  }


}


export default Toast;