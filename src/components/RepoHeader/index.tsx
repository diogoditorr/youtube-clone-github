import React from 'react';
import { Link } from 'react-router-dom';

import {
    Container,
    Up,
    Breadcrumb,
    RepoIcon,
    ListButtons,
    ButtonAction,
    Action,
    CountBox,
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
    GithubIcon,
    Desktop,
    Mobile
} from './styles';

import TabContent from '../TabContent';
import {
    OcticonBookIcon,
    OcticonCodeIcon,
    OcticonForkIcon,
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

            <Up>
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

                <Desktop>
                    <ListButtons>
                        <ButtonAction>
                            <Action>
                                <EyeIcon />
                                <span>Unwatch</span>
                                <ThreeBarIcon />
                            </Action>
                            
                            <CountBox>
                                1
                            </CountBox>
                        </ButtonAction>

                        <ButtonAction>
                            <Action>
                                <StarIcon />
                                <span>Star</span>
                            </Action>

                            <CountBox>
                                0
                            </CountBox>
                        </ButtonAction>

                        <ButtonAction>
                            <Action>
                                <OcticonForkIcon />
                                <span>Fork</span>
                            </Action>
                            
                            <CountBox>
                                2
                            </CountBox>
                        </ButtonAction>
                    </ListButtons>
                </Desktop>
            </Up>

            <Mobile>
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
            </Mobile>

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