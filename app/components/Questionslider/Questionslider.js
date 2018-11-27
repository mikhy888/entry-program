
import React from 'react';
import { BrowserRouter as Router, PropTypes, Route, Link, Switch } from 'react-router-dom';
import Slider from "react-slick";
import Buddyslider from '../Buddyslider/Buddyslider.js';
import Back from '../Back/Back.js';


let size = "";

class Questionslider extends React.Component {

    constructor(props){
        super(props);
        let data =[1];
        let self = this
        this.state = {
            firstbutton: "Add Buddy",
            data: self.props.data || data
        };
    }


    addMore() {
        let data = this.state.data;
        size = data.length + 1;
        data.push(size);
        this.setState({data});
        this.slider.slickNext();

        if( size == 5 ) {
          this.setState({ firstbutton: "submit" });
        } else if( size == 6 ) { 
             this.props.history.push('/Cafeteria')
        }
    }


    render() {

        const data = this.state.data;

        var settings = {
          dots: true,
          arrows: false,
          infinite: false,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };


        return (
            <section className="profile">

              <div className="wrapper"> 

                <Back />

                <Slider ref={slider => (this.slider = slider)} {...settings} className="profile-slider">

                      {data.map(i => <li key={i}><Buddyslider key={i} /></li>)}

                </Slider>

                <button className="add-buddy-button" onClick={this.addMore.bind(this)}>
                  {this.state.firstbutton}
                </button>

              </div>

            </section>
        );

    }
}


export default Questionslider;