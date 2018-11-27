import React from 'react';
import { BrowserRouter as Router, Route, withRouter, Switch, Redirect } from 'react-router-dom';

let url = "";
let linktext = "OK DONE";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            fields: {},
            errors: {}
        }
    }
    
    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }

        if (typeof fields["name"] !== "undefined") {
            if (!fields["name"].match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["name"] = "Only letters";
            }
        }

        //Emp ID
        if (!fields["empid"]) {
            formIsValid = false;
            errors["empid"] = "Cannot be empty";
        }

        if (typeof fields["empid"] !== "undefined") {

            if (!fields["empid"].match(/^\d+$/)) {
                formIsValid = false;
                errors["empid"] = "Only Numbers";
            }
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.history.push('/Taskone');
        } else {
            // alert("form didnt submit") ;
        }
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }


    render() {
        return (
            <section className="form-main">
                <div className="wrapper">
                    <h2> {this.props.contents.title}</h2>
                    <h2> {this.props.contents.address.country}</h2>
                    <form onSubmit={this.contactSubmit.bind(this)}>
                        <div className="heading">Before we begin...</div>
                        <div className="form-field">
                            <div className="f-name">who dis? (your name)</div>
                            <div>
                                <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]} />
                                <span style={{ color: "red" }}>{this.state.errors["name"]}</span>
                            </div>
                        </div>
                        <div className="form-field">
                            <div className="f-name">Employee Id</div>
                            <div>
                                <input ref="empid" type="text" size="30" placeholder="XXXXX" onChange={this.handleChange.bind(this, "empid")} value={this.state.fields["empid"]} />
                                <span style={{ color: "red" }}>{this.state.errors["empid"]}</span>
                            </div>
                        </div>
                        <div className="form-field">
                            <button className="get-started" id="submit" value="Submit">OK DONE</button>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default withRouter(Login);
