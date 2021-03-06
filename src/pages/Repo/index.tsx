import React from 'react';

import { Container } from './styles';

import RepoHeader from '../../components/RepoHeader';
import RepoBody from '../../components/RepoBody';

const Repo: React.FC = () => {
    return (
        <Container>
            <RepoHeader />
            <RepoBody />
        </Container>
    );
}

export default Repo;