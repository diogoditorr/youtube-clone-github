import React from 'react';

import { Container, Line, GithubLogo } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <Line />
            <ul>
                <div className="field-group">
                    <li className="copyright">© 2021 Github, Inc.</li>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Status</li>
                    <li>Docs</li>
                </div>
                
                <li className="logo">
                    <GithubLogo />
                </li>

                <div className="field-group">
                    <li>Contact Github</li>
                    <li>Pricing</li>
                    <li>API</li>
                    <li>Training</li>
                    <li>Blog</li>
                    <li>About</li>
                </div>
            </ul>
        </Container>
    );
}

export default Footer;