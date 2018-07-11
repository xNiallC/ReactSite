import React,{ Component } from 'react';
import { styles } from '../styles/styles';
import { SiteLink } from './SiteLink';
import { SocialMediaLink } from './SocialMediaLink';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import MediaQuery from 'react-responsive';

const navStyle = {
    display: 'flex',
    backgroundColor: '#555555',
    color: 'white',
    height: '8vh',
    justifyContent: 'flex-start'
}

export class Navbar extends Component {
    render() {
        return (
            <div style={navStyle}>
                <SocialMediaLink link="http://twitter.com/therealxniall" iconName={faTwitter} linkUsername="therealxniall" />
                <SocialMediaLink link="http://linkedin.com/in/niallcurtis" iconName={faLinkedin} linkUsername="niallcurtis" />
                <SocialMediaLink link="https://github.com/xNiallC" iconName={faGithub}  linkUsername="xNiallC" />
            </div>
        );
    }
}