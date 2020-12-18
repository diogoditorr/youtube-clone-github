import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { 
    Container, 
    GithubLogoDesktop,
    MenuIcon, 
    Navigation,
    SearchForm,
    AvatarLogged,
    SingOutIcon,
    GithubLogoMobile,
    NotificationIcon,
    QuickOptionsDesktop,
    PlusIcon,
    ArrowDropDownIcon,
    ProfileOptionsDesktop
} from './styles';

import { ThemeName } from '../../styles/themes';
interface Props {
    themeName: ThemeName;
    setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate('/' + search.toLowerCase().trim())
    }

    function toggleTheme() {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }

    function toggleNavigation() {
        const nav = document.getElementById('navigation');
    }

    return (
        <Container>
            <GithubLogoDesktop onClick={toggleTheme}/>
            <MenuIcon onClick={toggleNavigation}/>
            <Navigation id="navigation">
                <SearchForm onSubmit={handleSubmit}>
                    <input 
                        placeholder="Enter Username or Repo..." 
                        value={search}
                        onChange={e => setSearch(e.currentTarget.value)}
                    />
                </SearchForm>
                
                <nav>
                    <div className="mobile">
                        <a href="/#">Dashboard</a>
                    </div>

                    <a className="wrap" href="/#">Pull requests</a> 
                    <a href="/#">Issues</a> 
                    <a href="/#">Marketplace</a> 
                    <a href="/#">Explore</a> 
                    
                    <div className="mobile">
                        <a href="/#">Settings</a>
                        <a href="/#">
                            <AvatarLogged src="https://avatars3.githubusercontent.com/u/35296262?v=4"/>
                            diogoditorr
                        </a> 
                        <a href="/#">
                            <SingOutIcon />
                            Sign Out
                        </a> 
                    </div>
                        
                </nav>
            </Navigation>
            <div className="mobile">
                <GithubLogoMobile onClick={toggleTheme}/>
            </div>
            <NotificationIcon />
            <QuickOptionsDesktop>
                <PlusIcon />
                <ArrowDropDownIcon />
            </QuickOptionsDesktop>
            <ProfileOptionsDesktop>
                <AvatarLogged src="https://avatars3.githubusercontent.com/u/35296262?v=4"/>
                <ArrowDropDownIcon />
            </ProfileOptionsDesktop>

        </Container>
    );
}

export default Header;