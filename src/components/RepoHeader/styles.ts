import styled, { css } from 'styled-components';
import { RiGitRepositoryLine, RiStarLine, RiArrowDropDownFill } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import { ReactComponent as OcticonLaw } from '../../assets/icons/OcticonLaw.svg';
import { ReactComponent as OcticonEye } from '../../assets/icons/OcticonEye.svg';

export const Container = styled.div.attrs({
    className: 'RepoHeader'
})`
    display: flex;
    flex-direction: column;
    padding: 16px;
    padding-bottom: 0;
    margin-bottom: 32px;

    background-color: #fafbfc;

    > p {
        margin-bottom: 24px;
        font-size: 16px;
    }

    @media (min-width: 768px) {
        padding: 16px 32px 0 32px;
    }
`;

export const Up = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;
`;

export const Desktop = styled.div`
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`;

export const Mobile = styled.div`
    > p {
        margin-bottom: 16px;
    }

    @media (min-width: 768px) {
        display: none;
    }
`;

export const Breadcrumb = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    white-space: nowrap;

    font-size: 18px;

    > a {
        color: var(--link);
        text-decoration: none;

        &:hover,
        &:focus {
            text-decoration: underline;   
        }

        &.username {
            margin-left: 8px;
        }

        &.reponame {
            font-weight: 600;
        }
    }

    > span {
        padding: 0 5px;
    }

    @media (min-width: 768px) {
        font-size: 20px;
    }
`;

const iconCSS = css`
    width: 16px;
    height: 16px;
    fill: var(--icon);
    /* fill: currentColor; */
    flex-shrink: 0;
`;

export const RepoIcon = styled(RiGitRepositoryLine)`${iconCSS}`;

export const ListButtons = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonAction = styled.div`
    display: flex;
    align-items: center;

    margin-left: 10px;

    box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
                inset 0 1px hsla(0, 0%, 100%, 0.25);
    border-radius: 4px;

    font-size: 12px;
`;

export const Action = styled.div`
    display: flex;
    align-items: center;

    border: 1px solid rgb(27 31 35 / 15%);
    border-radius: 6px 0 0 6px;
    
    padding: 5px 12px;

    font-weight: 500;

    cursor: pointer;

    > svg:not(:last-child) {
        width: 16px;
        height: 16px;

        margin-right: 4px;
    }

    > svg:last-child {
        margin: -4px;

        margin-left: 4px;
    }

    &:hover {
        background-color: #f3f4f6;
        border-color: rgb(25 31 35 / 15%);
    }
`;

export const CountBox = styled.div`
    display: flex;
    align-items: center;

    padding: 5px 12px;

    border: 1px solid rgb(27 31 35 / 15%);
    border-radius: 0 6px 6px 0;
    border-left-width: 0;

    background-color: white;

    font-weight: 600;

    cursor: pointer;

    &:hover {
        color: #0366d6;
    }
`;

export const Stats = styled.div`

`;

export const RepoStats = styled.div`
    margin-bottom: 8px;
    display: flex;
    align-items: center;

    > li {
        display: flex;
        align-items: center;
        margin-right: 16px;

        > b {
            margin-right: 4px;
            font-weight: 600;
        }

        > svg {
            margin-right: 7px;
        }

        > * {
            font-size: 14px;
            color: var(--gray);
        }

        cursor: pointer;

        &:hover {
            * {
                color: var(--link);
            }

            > svg {
                fill: var(--link);
            }
        }
    }

    &.together {
        margin-bottom: 16px;
    }
`;

export const OcticonLawIcon = styled(OcticonLaw)`${iconCSS}`;

export const StarIcon = styled(RiStarLine)`${iconCSS}
    width: 18px;
    height: 18px;
`;

export const ForkIcon = styled(AiOutlineFork)`${iconCSS}
    width: 18px;
    height: 18px;
`;

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        cursor: pointer;
        
        border: 1px solid #1b1f2326;
        border-radius: 6px;
        box-shadow: 0 1px 0 rgba(27,31,35,0.04);
        /* inset 0 0.15em 0.3em rgba(27,31,35,0.15); */
        padding: 3px 12px;

        > span {
            font-weight: 500;
            font-size: 12px;
        }

        &:hover {
            background-color: #f3f4f6;
        }
    }
`;

export const StarButton = styled.button`
    margin-right: 8px;

    > span {
        margin-left: 7px;
    }
`;

export const WatchButton = styled.button`
    > span {
        margin-left: 4px;
    }
`;

export const EyeIcon = styled(OcticonEye)`${iconCSS}`;

export const ThreeBarIcon = styled(RiArrowDropDownFill)`${iconCSS}
    position: relative;
    top: 2px;

    fill: black;
    width: 20px;
    height: 20px;
`;

export const LinkButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 24px 0 10px 0;
`;

export const LinkButton = styled.a`
    text-decoration: none;

    background: var(--gray-dark);
    padding: 12px 17px;
    border-radius: 24px;
    width: max-content;

    display: flex;
    align-items: center;

    > span {
        color: var(--primary);
    }

    > svg {
        fill: var(--primary);
        margin-right: 10px;
    }
`;

export const GithubIcon = styled(FaGithub)`${iconCSS}`;

