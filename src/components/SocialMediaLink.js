import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { styles } from '../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MediaQuery from 'react-responsive';

let buttonStyles = {
    fontFamily: styles.fontFamily,
    fontSize: 30,
    color: 'white',
    margin: 'auto 15px auto 15px'
}

export class SocialMediaLink extends Component {
    render () {
        let link = this.props.link; 
        let iconName = this.props.iconName; 
        let linkUsername= this.props.linkUsername;
        return (
            <a style={buttonStyles} href={link}>
                <FontAwesomeIcon icon={iconName} /> 
            </a>
        )
    }
}

SocialMediaLink.propTypes = {
    link: PropTypes.string.isRequired,
    iconName: PropTypes.object.isRequired
};