import React from 'react';

import { 
    Container, 
    Header,
    Profile,
    Avatar,
    LastCommit,
    LastCommitDate,
    Commits,
    Body, 
} from './styles';

import { OcticonHistoryIcon } from '../../assets/icons/styled-icons/styles';
import RepoFile from '../RepoFile';

const RepoFiles: React.FC = () => {
    return (
        <Container>
            <Header>
                <Profile>
                    <Avatar src="https://avatars.githubusercontent.com/u/35296262?s=120&v=4" alt="diogoditorr" />
                    <span>diogoditorr</span>
                </Profile>

                <LastCommit>Merge pull request #7 from diogoditorr/dependabot/pip/httplib2-0.19.0</LastCommit>

                <LastCommitDate>19 days ago</LastCommitDate>

                <Commits>
                    <OcticonHistoryIcon />
                    <span>33 <small>commits</small></span>
                </Commits>
            </Header>
            
            <Body>
                <RepoFile 
                    folder
                    name="docs"
                    lastCommit="Initial Commit"
                    lastCommitDate="6 months ago"
                />
                <RepoFile 
                    folder
                    name="main_bot"
                    lastCommit="Initial CommitInitial CommitInitial CommitInitial CommitInitial CommitInitial CommitInitial CommitInitial Commit"
                    lastCommitDate="6 months ago"
                />
                <RepoFile 
                    folder
                    name="test_bot"
                    lastCommit="Initial Commit"
                    lastCommitDate="6 months ago"
                />
                <RepoFile 
                    name="bot.py"
                    lastCommit="Initial Commit"
                    lastCommitDate="6 months ago"
                />
                {/* {data.repos.map(item => (
                    <RepoCard 
                        key={item.name}
                        username={item.owner.login}
                        reponame={item.name}
                        description={item.description}
                        language={item.language}
                        stars={item.stargazers_count}
                        forks={item.forks}
                    />
                ))} */}
            </Body>
        </Container>
    );
}

export default RepoFiles;