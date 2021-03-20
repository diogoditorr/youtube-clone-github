import React from 'react';

import {
    Container,
    Section,
    Title,
    Line,
    Link
} from './styles';

import RepoLanguages from '../RepoLanguages';

const RepoDetails: React.FC = () => {
    return (
        <Container>
            <Section>
                <Title>About</Title>
                <p>Happy - Take happines to the world!</p>
            </Section>
            <Line />

            <Section>
                <Title>Releases</Title>
                <span>
                    No releases published<br/>
                    <Link href="#">Create a new release</Link>
                </span>
            </Section>
            <Line />

            <Section>
                <Title>Packages</Title>
                <span>
                    No packages published<br/>
                    <Link href="#">Publish your first package</Link>
                </span>
            </Section>
            <Line />

            <Section>
                <Title>Languages</Title>
                <RepoLanguages languages={[
                    {
                        name: 'php',
                        realName: 'PHP',
                        porcentage: '61.4%'
                    },
                    {
                        name: 'css',
                        realName: 'CSS',
                        porcentage: '20.8%'
                    },
                    {
                        name: 'javascript',
                        realName: 'JavaScript',
                        porcentage: '17.8%'
                    }
                ]}/>
            </Section>
        </Container>
    );
}

export default RepoDetails;