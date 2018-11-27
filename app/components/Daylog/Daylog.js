
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Hyperlink from '../Hyperlink/Hyperlink.js';

let titletext = "Tell us about your day!";
let url = "./Final";
let linktext = "lessgooo";
let placeholder = "(What did you like? what made you go ‘um..ok!’. Tell us everything, so we can fix it for people who join after you.)";

class Daylog extends React.Component {

  constructor(props){
       super(props);

       this.state = {
           fields: {},
           errors: {}
       }
  }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Message
        if(!fields["message"]){
           formIsValid = false;
           errors["message"] = "Cannot be empty";
        }

       this.setState({errors: errors});
       return formIsValid;
    }


    formSubmit(e){
        e.preventDefault();
        if(this.handleValidation()){
            this.props.history.push('/Final')
        } else {
            // alert("form didnt submit") ;
        }
    }

    handleChange(field, e){     
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
    } 

  render() {
    return (
         <section className="day-log">
            <div className="wrapper">
                <div className="title">
                    <span>4</span> Day log
                </div>
                <div className="sub-title">{titletext}</div>
                <form onSubmit={this.formSubmit.bind(this)}>
                    <textarea name="" placeholder={placeholder} onChange={this.handleChange.bind(this, "message")}></textarea>
                    <span style={{color: "red"}}>{this.state.errors["message"]}</span>
                    <button className="get-started" id="submit" value="Submit">OK DONE</button>
                </form>
            </div>
         </section>
     );
  }
}

export default Daylog;