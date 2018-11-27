import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';
import closeicon from './images/close.png';

let modaltitle = "Instructions";
let modalcontent = "Correctly locate the given spaces by tapping the blue dot.";

class Modal extends React.Component {

    render() {
        return (
            <section className="modal-wrapper">

                <div className="modal-pp">

                    <span className="close" onClick={this.props.close}>
                        <img src={closeicon} className="" alt="" />
                    </span>

                    <div className="title">{modaltitle}</div>

                    <div className="content">
                        {modalcontent}
                    </div>

                </div>
                
            </section>
        );
    }
}

export default Modal;