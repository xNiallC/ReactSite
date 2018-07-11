import React,{ Component } from 'react';
import { styles } from '../styles/styles';
import { SiteLink } from './SiteLink';
import { SocialMediaLink } from './SocialMediaLink';
import {faTwitter, faLinkedin, faGithub} from '@fortawesome/fontawesome-free-brands'
import MediaQuery from 'react-responsive';

const navStyle = {
    backgroundColor: '#555555',
    color: 'white',
    height: '8vh'
}

export class Navbar extends Component {
    render() {
        return (
            <div style={navStyle}>
                <SocialMediaLink link="http://twitter.com/therealxniall" iconName={faTwitter} />
                <SocialMediaLink link="http://linkedin.com/in/niallcurtis" iconName={faLinkedin} />
                <SocialMediaLink link="https://github.com/xNiallC" iconName={faGithub} />
                <MediaQuery minDeviceWidth={1224}>
                    <SiteLink link="#Home"/>
                    <SiteLink link="#About"/>
                </MediaQuery>
            </div>
        );
    }
}