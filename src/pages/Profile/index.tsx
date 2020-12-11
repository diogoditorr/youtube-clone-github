import React from 'react';

import { 
    Container,
    Main,
    LeftSide,
    RightSide,
    Repos,
    CalendarHeading,
    RepoIcon,
    Tab,
} from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
    const TabContent = () => (
        <div className="content">
            <RepoIcon />
            <span className="label">Repositories</span>
            <span className="number">26</span>
        </div>
    );

    return (
        <Container>
            <Tab className="desktop">
                <div className="wrapper">
                    <span className="offset" />
                    <TabContent />
                </div>

                <span className="line" />
            </Tab>

            <Main>
                <LeftSide>
                    <ProfileData 
                        username={'diogoditorr'}
                        name={'Diego Oliveira'}
                        avatarUrl={'https://avatars3.githubusercontent.com/u/35296262?v=4'}
                        followers={884}
                        following={123}
                        company={'Rocketseat'}
                        location={'São Paulo, Brazil'}
                        email={'diogoditorr@gmail.com'}
                        blog={undefined}

                    />
                </LeftSide>

                <RightSide>
                    <Tab className="mobile">
                        <TabContent />
                        <span className="line"/>
                    </Tab>

                    <Repos>
                        <h2>Random repos</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard 
                                    key={n}
                                    username={'diogoditorr'}
                                    reponame={'discord-bot-py'}
                                    description={'Bot focused on music using the Discord.py library'}
                                    language={n % 3 === 0 ? 'Python' : 'JavaScript'}
                                    stars={52}
                                    forks={9}
                                />
                            ))}
                        </div> 
                    </Repos>

                    <CalendarHeading>
                        Random calendar (do not represent actual data)
                    </CalendarHeading>

                    <RandomCalendar />
                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile;