
import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';
import plusicon from './images/plus-icon.png';
import Hyperlink from '../Hyperlink/Hyperlink.js';

let phcontent = "Wow, you’re here already! We hope you like your new office so far. Time to prove your bond with your buddy. Click a selfie with them while having lunch.";
let sectionCount = "3";
let sectiontitle = "Take a self photograph";
let url = './Daylog';
let linktext = "Continue";
let validationtext = "Please upload Image";


class Photograph extends React.Component {


    constructor(props) {
        super(props);
        this.state = { file: '' };
        this.state = {
            fields: {}
        }

        this.handleValidationfile = this.handleValidationfile.bind(this);
    }


    handleValidationfile(event) {
        this.setState({ value: event.target.files[0].name });
        this.setState({ result: "" });
    }


    fileuploadSubmit(e) {
        e.preventDefault();
        let fields = this.state.fields;

        if (this.state.value) {
            this.props.history.push('/Final')
        } else {
            this.setState({ result: validationtext });
        }

    }







    render() {
        return (
            <section className="task3">
                <div className="wrapper">
                    <div className="title">
                        <span>{sectionCount}</span>  {sectiontitle}
                    </div>
                    <div className="task-three-content">

                        <form onSubmit={this.fileuploadSubmit.bind(this)}>
                            <div className="fileupload">
                                <img src={plusicon} className="plus-icon" alt="" />
                                <input type="file" onChange={this.handleValidationfile.bind(this)}
                                />
                            </div>

                            <div className="file-name">
                                {this.state.value}
                                {this.state.result}
                            </div>

                            <div className="text">
                                {phcontent}
                            </div>

                            <button className="get-started" id="submit" value="Submit">Continue</button>
                        </form>

                    </div>
                </div>
            </section>
        );
    }

}



export default Photograph;