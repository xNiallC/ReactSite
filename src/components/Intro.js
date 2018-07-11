import React,{ Component } from 'react';
import '../App.css';
import { introStyles } from '../styles/introStyles';
import MediaQuery from 'react-responsive';
import picOfMe from '../img/me.jpg'

export class Intro extends Component {
    render () {
        return (
            <div style={introStyles.introStyle}>
                <div style={introStyles.imageDiv}>
                    <img style={introStyles.imgStyle} src={picOfMe} alt="Niall" />
                </div>    
                <div style={introStyles.pStyle}>
                    <a style={{fontSize: '3em', fontWeight: 'bold'}}>Niall Curtis</a>
                    <hr />
                    Computer Science Student @ Cardiff University
                    <hr />
                    Software Developer @ <a href="http://simplydo.io" style={introStyles.externalLinks}>SimplyDoIdeas</a>
                    <hr />
                </div>
            </div>
        );
    }
}