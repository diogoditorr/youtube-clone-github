import styled, { css } from 'styled-components';
import { PackageIcon } from '@styled-icons/feather'
import { RiGitRepositoryLine } from 'react-icons/ri';
// import { FiBookOpen } from 'react-icons/fi';
import { HiOutlineBookOpen } from 'react-icons/hi'
import { AiOutlineProject } from 'react-icons/ai';


export const Container = styled.div`
    --horizontalPadding: 16px;
    --verticalPadding: 24px;

    padding: var(--verticalPadding) var(--horizontalPadding);
    overflow: hidden;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;

    margin: 0 auto;
    max-width: 1280px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

export const LeftSide = styled.div`
    padding: 0 var(--horizontalPadding);

    @media (min-width: 768px) {
        width: 25%;
    }
`;

export const RightSide = styled.div`
    padding: 0 var(--horizontalPadding);

    @media (min-width: 768px) {
        width: 75%;
    }
`;

export const Repos = styled.div`
    margin-top: var(--verticalPadding);

    > h2 {
        font-size: 16px;
        font-weight: normal;
    }

    > div {
        margin-top: 8px;

        display: grid;
        grid-gap: 16px;

        grid-template-columns: 1fr;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: minmax(min-content, max-content);
        }
    }
`;

export const CalendarHeading = styled.span`
    font-size: 16px;
    margin: 36px 0 9px;
    display: inline-flex;
`;

const iconCSS = css`
    width: 18px;
    height: 18px;
    margin-right: 2px;
`;

export const OverviewIcon = styled(HiOutlineBookOpen)`${iconCSS}`;

export const RepoIcon = styled(RiGitRepositoryLine)`${iconCSS}`;

export const ProjectsIcon = styled(AiOutlineProject)`${iconCSS}`;

export const PackagesIcon = styled(PackageIcon)`${iconCSS}
    width: 20px;
    height: 20px;
`;

export const Tab = styled.div`
    background: var(--primary);

    .content {
        display: flex;
        align-items: center;
        width: min-content;

        padding: 14px 16px;

        border-bottom: 2px solid transparent;
        
        cursor: pointer;

        .label {
            font-size: 14px;
            padding-left: 7px;
        }

        .number {
            font-size: 12px;
            font-weight: 500;
            background: var(--ticker);
            margin-left: 7px;
            padding: 2px 8px;
            border-radius: 24px;
        }

        > svg {
            opacity: 0.5;
        }

        &.active {
            border-bottom: 2px solid var(--orange);

            .label {
                font-weight: 600;
            }

            > svg {
                opacity: 1;
            }
        }

        &:not(.active):hover, &:not(.active):focus {
            border-bottom: 2px solid var(--border);
        }

        transition: border-bottom-color 0.2s ease-in;
    }

    .line {
        display: flex;
        width: 200vw;
        border-bottom: 1px solid var(--border);
        margin-left: -50vw;
    }

    &.mobile {
        display: flex;

        margin: var(--verticalPadding) -32px 0 -32px;
        padding: 0 32px;

        border-bottom: 1px solid var(--border);
        
        overflow-x: auto;
        
        .line {
            display: none;
        }

        @media (min-width: 768px) {
            display: none;
        }
    }

    &.desktop {
        display: none;

        @media (min-width: 768px) {
            display: unset;

            .wrapper {
                display: flex;
                margin: 0 auto;
                max-width: 1280px;
            }

            .offset {
                width: 25%;
                margin-right: var(--horizontalPadding);
            }
        }
    }
`;
