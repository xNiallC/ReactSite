import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { styles } from '../styles/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

let buttonStyles = {
    fontFamily: styles.fontFamily,
    fontSize: 30,
    color: 'white',
    padding: 15,
    top: '20%',
    position: 'relative',
    transform: 'translate(-50%, -50%)',
}

export class SocialMediaLink extends Component {
    render () {
        let link = this.props.link; 
        let iconName = this.props.iconName; 
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