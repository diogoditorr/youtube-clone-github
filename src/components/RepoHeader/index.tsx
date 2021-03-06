import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container, 
    Breadcrumb, 
    RepoIcon, 
    Stats,
    RepoStats,
    OcticonLawIcon,
    StarIcon, 
    ForkIcon, 
    Buttons,
    StarButton,
    WatchButton,
    EyeIcon,
    ThreeBarIcon,
    LinkButtonContainer,
    LinkButton, 
    GithubIcon
} from './styles';

import TabContent from '../TabContent';
import {
    OcticonBookIcon,
    OcticonCodeIcon,
    OcticonGearIcon,
    OcticonGitPullRequestIcon,
    OcticonGraphIcon,
    OcticonIssueOpenedIcon,
    OcticonPlayIcon,
    OcticonProjectIcon,
    OcticonShieldIcon,
} from '../../assets/icons/styled-icons/styles';

const RepoHeader: React.FC = () => {

    return (
        <Container>
            <Breadcrumb>
                <RepoIcon />
                
                <Link className={'username'} to={'/diogoditorr'}>
                    diogoditorr
                </Link>

                <span>/</span>

                <Link className={'reponame'} to={'/diogoditorr/discord-bot-py'}>
                    discord-bot-py
                </Link>
            </Breadcrumb>

            <p>Bot focused on music using the Discord.py library</p>

            <Stats>
                <RepoStats>
                    <li>
                        <OcticonLawIcon />
                        <span>MIT License</span>
                    </li>
                </RepoStats>
                <RepoStats className="together"> 
                    <li>
                        <StarIcon />
                        <b>9</b>
                        <span>stars</span>
                    </li>
                    <li>
                        <ForkIcon />
                        <b>0</b>
                        <span>forks</span>
                    </li>
                </RepoStats>
            </Stats>

            <Buttons>
                <StarButton>
                    <StarIcon />
                    <span>Star</span>
                </StarButton>

                <WatchButton>
                    <EyeIcon />
                    <span>Watch</span>
                    <ThreeBarIcon />
                </WatchButton>
            </Buttons>

            <LinkButtonContainer>
                <LinkButton href={'https://github.com/diogoditorr/discord-bot-py'}>
                    <GithubIcon />
                    <span>View on Github</span>
                </LinkButton>
            </LinkButtonContainer>

            <TabContent
                icons={[
                    <OcticonCodeIcon />,
                    <OcticonIssueOpenedIcon />,
                    <OcticonGitPullRequestIcon />,
                    <OcticonPlayIcon />,
                    <OcticonProjectIcon />,
                    <OcticonBookIcon />,
                    <OcticonShieldIcon />,
                    <OcticonGraphIcon />,
                    <OcticonGearIcon />
                ]}
                labels={[
                    'Code',
                    'Issues',
                    'Pull requests',
                    'Actions',
                    'Projects',
                    'Wiki',
                    'Security',
                    'Insights',
                    'Settings'
                ]}
            />
            
        </Container>
    );
}

export default RepoHeader;