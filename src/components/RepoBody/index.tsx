import React from 'react';

import { 
    Container,
    Left,
    Right
} from './styles';

import RepoOptions from '../RepoOptions';
import RepoFiles from '../RepoFiles';
import RepoDetails from '../RepoDetails';

const RepoBody: React.FC = () => {
    return (
        <Container>
            <Left>
                <RepoOptions />
                <RepoFiles />
            </Left>
            
            <Right>
                <RepoDetails />
            </Right>
        </Container>
    );
}

export default RepoBody;