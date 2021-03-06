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
    const [menu, setMenu] = useState('');
    const navigate = useNavigate();

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        navigate('/' + search.toLowerCase().trim())
    }

    function toggleTheme() {
        setThemeName(themeName === 'light' ? 'dark' : 'light');
    }

    function toggleNavigation() {
        setMenu(menu === '' ? 'active' : '');
    }

    return (
        <Container>
            <GithubLogoDesktop onClick={toggleTheme}/>
            <MenuIcon onClick={toggleNavigation}/>
            <Navigation className={menu}>
                <SearchForm onSubmit={handleSubmit}>
                    <input 
                        placeholder="Enter Username or Repo..." 
                        value={search}
                        onChange={e => setSearch(e.currentTarget.value)}
                    />
                </SearchForm>
                
                <nav>
                    <div className="mobile">
                        <a href="/#"><span>Dashboard</span></a>
                    </div>

                    <a className="wrap" href="/#"><span>Pull requests</span></a> 
                    <a href="/#"><span>Issues</span></a> 
                    <a href="/#"><span>Marketplace</span></a> 
                    <a href="/#"><span>Explore</span></a> 
                    
                    <div className="mobile">
                        <a href="/#"><span>Settings</span></a>
                        <a href="/#">
                            <AvatarLogged src="https://avatars3.githubusercontent.com/u/35296262?v=4"/>
                            <span>diogoditorr</span>
                        </a> 
                        <a href="/#">
                            <SingOutIcon />
                            <span>Sign Out</span>
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