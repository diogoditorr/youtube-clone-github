import React from 'react';

import {
    Container,
    Section,
    Title,
    Line,
    Link
} from './styles';

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
            </Section>
        </Container>
    );
}

export default RepoDetails;