import React from 'react';

import { 
    Container,
    FileIcon,
    Name,
    LastCommit,
    LastCommitDate
 } from './styles';

import { OcticonFileDirectoryIcon, OcticonFileIcon } from '../../assets/icons/styled-icons/styles';

interface Props {
    folder?: boolean,
    name: string,
    lastCommit: string,
    lastCommitDate: string
}

const RepoFile: React.FC<Props> = ({ 
    folder,
    name,
    lastCommit,
    lastCommitDate
}) => {
    return (
        <Container>
            <FileIcon className={folder ? 'folder' : ''}>
                {
                    folder ? (
                        <OcticonFileDirectoryIcon />
                    ) : (
                        <OcticonFileIcon />
                    )
                }
            </FileIcon>
            <Name>{name}</Name>
            <LastCommit>{lastCommit}</LastCommit>
            <LastCommitDate>{lastCommitDate}</LastCommitDate>
        </Container>
    );
}

export default RepoFile;