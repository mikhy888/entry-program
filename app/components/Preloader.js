import React from 'react';
import img from '../assets/images/react_logo_512x512.png';
import { Link, Switch } from 'react-router-dom';
import PreloaderIcon from 'react-preloader-icon';
import Oval from 'react-preloader-icon/loaders/Oval';


const Preloader = () => (
	<div>
	<PreloaderIcon
	loader={Oval}
	size={32}
            strokeWidth={8} // min: 1, max: 50
            strokeColor="#F0AD4E"
            duration={800}
            />
            </div>
            );
            export default Preloader;
