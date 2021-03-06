import React from 'react';

import { Container, Left, Right, Button } from './styles';
import { OcticonGitBranchIcon, OcticonDownloadIcon } from '../../assets/icons/styled-icons/styles';
import { CaretDownIcon } from '../../assets/icons/styled-icons/styles';

const RepoOptions: React.FC = () => {
    return (
        <Container>
            <Left>
                <Button>
                    <OcticonGitBranchIcon />
                    <span>master</span>
                    <CaretDownIcon />
                </Button>
            </Left>

            <Right>
                <Button>
                    <span>Go to file</span>
                </Button>

                <Button>
                    <span>Add file</span>
                    <CaretDownIcon />
                </Button>

                <Button className="green">
                    <OcticonDownloadIcon />
                    <span>Code</span>
                    <CaretDownIcon />
                </Button>
            </Right>
        </Container>
    );
}

export default RepoOptions;