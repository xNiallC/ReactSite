import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import { styles } from '../styles/styles';

let buttonStyles = {
    fontFamily: styles.fontFamily,
    fontSize: styles.fontSize,
    color: 'white',
    padding: 15,
    top: '50%',
    position: 'relative',
    transform: 'translate(-50%, -50%)',
    float: 'right',
}

export class SiteLink extends Component {
    render () {
        let link = this.props.link;  
        let linkText = link.replace("#", "");
        return (
            <a style={buttonStyles} href={link}>
                {linkText}
            </a>
        )
    }
}

SiteLink.propTypes = {
    link: PropTypes.string
};