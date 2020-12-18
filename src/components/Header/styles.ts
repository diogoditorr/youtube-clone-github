import styled, { css } from 'styled-components';
import { FaGithub, FaRegBell } from 'react-icons/fa';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { ReactComponent as ThreeBar } from '../../assets/icons/ThreeBar.svg';
import { SignOut } from '@styled-icons/octicons';
// import { ThreeBars } from '@styled-icons/octicons';

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    background: var(--header);
    padding: 16px;

    > .mobile {
        display: flex;
        flex: auto;

    }
    @media (min-width: 768px) {
        flex-wrap: nowrap;
        padding: 16px 24px;

        > .mobile {
            display: none;
        }
    }

    @media (min-width: 1012px) {
        padding: 16px 32px;
    }
`;

const iconCSS = css`
    fill: var(--logo);
    // Não amassa a logo
    flex-shrink: 0;
`;

const GithubLogo = css`
    ${iconCSS}
    width: 32px;
    height: 32px;

    cursor: pointer;
    &:hover {
        opacity: 0.8;
    }
`;

export const GithubLogoDesktop = styled(FaGithub)`${GithubLogo}
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

export const MenuIcon = styled(ThreeBar)`
    ${iconCSS}
    width: 24px;
    height: 24px;

    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Navigation = styled.div`
    display: flex;
    flex-direction: column;

    order: 2;
    width: 100%;

    > nav { 
        display: flex;
        flex-direction: column;

        > a, .mobile a {
            display: flex;
            align-items: center;

            font-size: 14px;
            font-weight: 600;

            color: #fff;
            text-decoration: none;

            padding: 9px 0;
            border-top: 1px solid #ffffff26;

            transition: color, fill 0s;

            > img, svg {
                margin-right: 4px;
            }

            &:hover {
                color: #b6bfbd;

                > svg {
                    fill: #b6bfbd;
                }
            }
        }
    }

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: center;
        order: inherit;

        > nav {
            flex-direction: row;

            > a {
                padding: 16px 0;
                margin: -16px 0;
                margin-right: 16px;
                border: none;
            }

            > a.wrap {
                overflow-x: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .mobile {
                display: none;
            }
        }
    }
`;

export const SearchForm = styled.form`
    width: 100%;

    input {
        width: 100%;
        margin: 16px 0;
        padding: 7px 12px;
        
        outline: 0;
        border: 1px solid var(--search);
        border-radius: 6px;
        background: var(--header);
        color: #fff;

        ::placeholder {
            color: var(--placeholder);
        }
    }

    @media (min-width: 768px) {
        max-width: 272px;
        margin: 0 16px;

        input {
            height: 30px;
            margin: 0;
        }
    }
`;

export const AvatarLogged = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 50%;
`;

export const SingOutIcon = styled(SignOut)`
    ${iconCSS}
    width: 16px;
    height: 16px;
`;


export const GithubLogoMobile = styled(FaGithub)`${GithubLogo}
    margin: auto;
`;

export const NotificationIcon = styled(FaRegBell)`
    ${iconCSS}
    width: 16px;
    height: 16px;

    margin-right: 16px;

    cursor: pointer;

    &:hover {
        fill: #b6bfbd;
    }
`;

export const PlusIcon = styled(AiOutlinePlus)`${iconCSS}
    width: 16px;
    height: 16px;
`;

export const ArrowDropDownIcon = styled(RiArrowDropDownFill)`${iconCSS}
    width: 28px;
    height: 24px;
    margin: -5px -8px -8px -8px;
`;

export const QuickOptionsDesktop = styled.div`
    display: flex;
    align-items: center;
    margin-right: 16px;

    > svg:first-child {
        margin-right: 2px;
    }

    cursor: pointer;
    transition: color, fill, 0s;

    &:hover {
        > svg {
            fill: #b6bfbd;
        }
    }
`;

export const ProfileOptionsDesktop = styled.div`
    display: flex;
    align-items: center;

    > img { 
        margin-right: 2px;
    } 

    cursor: pointer;
    transition: color, fill, 0s;

    &:hover {
        > svg {
            fill: #b6bfbd;
        }
    }
`;

